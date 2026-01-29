
export interface RepoQuality {
  total: number;
  documentation: number;
  tests: number;
  maintenance: number;
  community: number;
}

export interface Repository {
  id: string;
  name: string;
  owner: string;
  stars: number;
  forks: number;
  language: string;
  description: string;
  topics: string[];
  quality: RepoQuality;
}

export interface User {
  id: string;
  username: string;
  activityLevel: 'active' | 'inactive';
  interests: string[];
  starredRepoIds: string[];
}

export interface Recommendation {
  repo: Repository;
  baselineScore: number;
  finalScore: number;
  originalRank: number;
  fairRank: number;
  consumerBonus: number;
  producerBonus: number;
}

export interface FairnessMetrics {
  ndcg: number;
  dcf: number; // Consumer Fairness
  dpf: number; // Producer Fairness
  mcpf: number; // Combined Fairness
}

export interface RecommendationResponse {
  baseline: Recommendation[];
  fair: Recommendation[];
  metrics: {
    baseline: FairnessMetrics;
    fair: FairnessMetrics;
    improvement: {
      fairness: number;
      accuracy: number;
    };
  };
}
