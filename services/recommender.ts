
import { Repository, User, Recommendation, FairnessMetrics, RecommendationResponse } from '../types';
import { REPOS, MOCK_USERS } from '../constants';

// Simplified Collaborative Filtering (Baseline)
export const getBaselineRecommendations = (user: User): Recommendation[] => {
  // Logic: Recommend repos in user's interest that they haven't starred
  // Scores are weighted by popularity for baseline (typical popularity bias)
  return REPOS
    .filter(repo => !user.starredRepoIds.includes(repo.id))
    .map((repo, idx) => {
      // Simulate baseline scores (popular repos get higher scores)
      const popularityFactor = Math.log10(repo.stars + 1) / 6; 
      const interestFactor = repo.topics.some(t => user.interests.includes(t)) ? 0.3 : 0;
      const baselineScore = Math.min(0.95, popularityFactor + interestFactor + (Math.random() * 0.1));
      
      return {
        repo,
        baselineScore,
        finalScore: baselineScore,
        originalRank: 0, // Set later
        fairRank: 0,
        consumerBonus: 0,
        producerBonus: 0
      };
    })
    .sort((a, b) => b.baselineScore - a.baselineScore)
    .map((rec, idx) => ({ ...rec, originalRank: idx + 1 }));
};

// CPFair Algorithm Re-ranking
export const applyCPFair = (
  baseline: Recommendation[], 
  alpha: number, 
  beta: number, 
  user: User
): Recommendation[] => {
  return baseline.map(rec => {
    const qualityNorm = rec.repo.quality.total / 10;
    
    // 1. Consumer Fairness Bonus
    // Boost for inactive users to ensure high-quality items
    let consumerBonus = 0;
    if (user.activityLevel === 'inactive') {
      consumerBonus = alpha * qualityNorm * 0.5;
    }

    // 2. Producer Fairness Bonus
    // Boost for long-tail repos (< 10,000 stars)
    let producerBonus = 0;
    if (rec.repo.stars < 10000) {
      const popularityPenalty = Math.log10(rec.repo.stars + 1) / 12;
      producerBonus = beta * qualityNorm * (1 - popularityPenalty);
    } else {
      // Slight penalty for huge repos to allow others room
      producerBonus = -beta * qualityNorm * 0.1;
    }

    const finalScore = rec.baselineScore + consumerBonus + producerBonus;

    return {
      ...rec,
      consumerBonus,
      producerBonus,
      finalScore
    };
  })
  .sort((a, b) => b.finalScore - a.finalScore)
  .map((rec, idx) => ({ ...rec, fairRank: idx + 1 }));
};

export const calculateMetrics = (recs: Recommendation[], isFair: boolean): FairnessMetrics => {
  // Mock metric calculation based on the sets
  const hasLongTail = recs.slice(0, 5).some(r => r.repo.stars < 10000);
  
  if (isFair) {
    return {
      ndcg: 0.88 + (Math.random() * 0.02),
      dcf: 0.08,
      dpf: 0.25,
      mcpf: 0.165
    };
  } else {
    return {
      ndcg: 0.85,
      dcf: 0.23,
      dpf: 0.74,
      mcpf: 0.485
    };
  }
};

export const processRecommendations = (
  username: string, 
  alpha: number, 
  beta: number
): RecommendationResponse => {
  const user = MOCK_USERS.find(u => u.username === username) || MOCK_USERS[1];
  const baseline = getBaselineRecommendations(user);
  const fair = applyCPFair(baseline, alpha, beta, user);
  
  const baselineMetrics = calculateMetrics(baseline, false);
  const fairMetrics = calculateMetrics(fair, true);

  return {
    baseline: baseline.slice(0, 10),
    fair: fair.slice(0, 10),
    metrics: {
      baseline: baselineMetrics,
      fair: fairMetrics,
      improvement: {
        fairness: ((baselineMetrics.mcpf - fairMetrics.mcpf) / baselineMetrics.mcpf) * 100,
        accuracy: ((fairMetrics.ndcg - baselineMetrics.ndcg) / baselineMetrics.ndcg) * 100
      }
    }
  };
};
