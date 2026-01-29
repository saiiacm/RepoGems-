import { Repository, ScoredRepository } from '@/types';

/**
 * CPFair Algorithm Implementation
 * 
 * Surfaces "Hidden Gems" by calculating a fairness-aware score:
 * Score (0-100) = (Maintenance_Health * 0.4) + (Community_Velocity * 0.3) + (Inverse_Popularity * 0.3)
 * 
 * Repositories with <5k stars get boosted if they have high activity.
 */

/**
 * Calculate maintenance health score (0-100)
 * Based on: recent updates, issue resolution, and activity patterns
 */
function calculateMaintenanceHealth(repo: Repository): number {
    const now = new Date();
    const lastPush = new Date(repo.pushed_at);
    const daysSinceLastPush = (now.getTime() - lastPush.getTime()) / (1000 * 60 * 60 * 24);

    // Score based on recency of updates
    let recencyScore = 100;
    if (daysSinceLastPush > 365) recencyScore = 20;
    else if (daysSinceLastPush > 180) recencyScore = 40;
    else if (daysSinceLastPush > 90) recencyScore = 60;
    else if (daysSinceLastPush > 30) recencyScore = 80;
    else if (daysSinceLastPush > 7) recencyScore = 90;

    // Penalize repos with too many open issues relative to stars
    const issueRatio = repo.open_issues_count / Math.max(repo.stargazers_count, 1);
    const issueScore = Math.max(0, 100 - (issueRatio * 1000));

    // Bonus for having a license (indicates project maturity)
    const licenseBonus = repo.license ? 10 : 0;

    return Math.min(100, (recencyScore * 0.6) + (issueScore * 0.3) + licenseBonus);
}

/**
 * Calculate community velocity score (0-100)
 * Based on: forks, watchers, and engagement relative to age
 */
function calculateCommunityVelocity(repo: Repository): number {
    const now = new Date();
    const created = new Date(repo.created_at);
    const ageInDays = Math.max(1, (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));

    // Stars per day (normalized)
    const starsPerDay = repo.stargazers_count / ageInDays;
    const starVelocity = Math.min(100, starsPerDay * 50);

    // Fork ratio (higher = more community engagement)
    const forkRatio = repo.forks_count / Math.max(repo.stargazers_count, 1);
    const forkScore = Math.min(100, forkRatio * 200);

    // Topic richness (more topics = better discoverability effort)
    const topicScore = Math.min(100, repo.topics.length * 15);

    return (starVelocity * 0.4) + (forkScore * 0.3) + (topicScore * 0.3);
}

/**
 * Calculate inverse popularity score (0-100)
 * Hidden gems with fewer stars get higher scores
 */
function calculateInversePopularity(repo: Repository): number {
    const stars = repo.stargazers_count;

    // Inverse logarithmic scale - fewer stars = higher score
    if (stars < 500) return 100;
    if (stars < 1000) return 90;
    if (stars < 2000) return 80;
    if (stars < 5000) return 70;
    if (stars < 10000) return 50;
    if (stars < 50000) return 30;
    if (stars < 100000) return 15;
    return 5; // Very popular repos get low inverse popularity
}

/**
 * Apply CPFair scoring to a repository
 */
export function calculateCPFairScore(repo: Repository): ScoredRepository {
    const maintenanceHealth = calculateMaintenanceHealth(repo);
    const communityVelocity = calculateCommunityVelocity(repo);
    const inversePopularity = calculateInversePopularity(repo);

    // CPFair Score formula
    let cpfairScore =
        (maintenanceHealth * 0.4) +
        (communityVelocity * 0.3) +
        (inversePopularity * 0.3);

    // Hidden Gem Boost: repos with <5k stars and high activity get a bonus
    const isHiddenGem = repo.stargazers_count < 5000;
    if (isHiddenGem && maintenanceHealth > 70 && communityVelocity > 40) {
        cpfairScore = Math.min(100, cpfairScore * 1.15); // 15% boost
    }

    return {
        repo,
        cpfairScore: Math.round(cpfairScore * 10) / 10,
        maintenanceHealth: Math.round(maintenanceHealth * 10) / 10,
        communityVelocity: Math.round(communityVelocity * 10) / 10,
        inversePopularity: Math.round(inversePopularity * 10) / 10,
        isHiddenGem,
    };
}

/**
 * Apply CPFair algorithm to a list of repositories
 * Returns repositories sorted by CPFair score (highest first)
 */
export function applyCPFair(repositories: Repository[]): ScoredRepository[] {
    return repositories
        .map(calculateCPFairScore)
        .sort((a, b) => b.cpfairScore - a.cpfairScore);
}

/**
 * Get fairness metrics for the recommendation set
 */
export function getFairnessMetrics(scored: ScoredRepository[]) {
    const hiddenGems = scored.filter(r => r.isHiddenGem);
    const topResults = scored.slice(0, 10);
    const hiddenGemsInTop = topResults.filter(r => r.isHiddenGem);

    return {
        totalResults: scored.length,
        hiddenGemCount: hiddenGems.length,
        hiddenGemsInTop10: hiddenGemsInTop.length,
        averageScore: scored.reduce((sum, r) => sum + r.cpfairScore, 0) / scored.length,
        fairnessRatio: hiddenGemsInTop.length / Math.max(topResults.length, 1),
    };
}
