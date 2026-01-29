import { Repository, ScoredRepository } from '@/types/index';

/**
 * RepoGems Quality Score Algorithm - 5-Signal Weighted Model
 * 
 * Surfaces quality repositories using a precision mathematical scoring model (0-100):
 * - Community Health: 30 points (Harmonic Decay)
 * - Maintenance Velocity: 25 points (Linear Decay)
 * - Growth Trend: 20 points (Logarithmic)
 * - Security: 15 points (Boolean)
 * - Documentation: 10 points (Mixed)
 */

/**
 * Signal 1: Community Health (30 pts)
 * Harmonic Decay: 30 * (100 / (100 + open_issues))
 */
function calculateCommunityHealth(repo: Repository): number {
    const openIssues = repo.open_issues_count;
    const score = 30 * (100 / (100 + openIssues));
    return Math.round(score * 10) / 10; // Round to 1 decimal
}

/**
 * Signal 2: Maintenance Velocity (25 pts)
 * Linear Decay: Max(0, 25 - (days_since_push * 0.15))
 */
function calculateMaintenanceVelocity(repo: Repository): number {
    const now = new Date();
    const lastPush = new Date(repo.pushed_at);
    const daysSincePush = (now.getTime() - lastPush.getTime()) / (1000 * 60 * 60 * 24);

    const score = Math.max(0, 25 - (daysSincePush * 0.15));
    return Math.round(score * 10) / 10;
}

/**
 * Signal 3: Growth Trend (20 pts)
 * Logarithmic: Min(20, 6.7 * log10(forks + 1))
 */
function calculateGrowthTrend(repo: Repository): number {
    const forks = repo.forks_count;
    const score = Math.min(20, 6.7 * Math.log10(forks + 1));
    return Math.round(score * 10) / 10;
}

/**
 * Signal 4: Security (15 pts)
 * Boolean: 15 if license exists, else 0
 */
function calculateSecurity(repo: Repository): number {
    return repo.license ? 15 : 0;
}

/**
 * Signal 5: Documentation (10 pts)
 * Mixed: 5 if homepage exists + 5 if description > 50 chars
 */
function calculateDocumentation(repo: Repository): number {
    let score = 0;

    // Homepage exists
    if (repo.homepage || repo.html_url) { // Fallback to html_url if homepage not explicit in type but often it is separate. 
        // Note: Repository type in types/index.ts usually has homepage. Explicitly checking 'homepage' property if it existed in typical GitHub API response.
        // Assuming 'has_pages' or checking the 'homepage' field if added to type, or 'html_url' as proxy is not quite right.
        // Looking at types/index.ts, Repository has: has_pages, html_url. It doesn't show 'homepage'.
        // Let's use 'has_pages' as a proxy for homepage availability or just check if 'has_pages' is true for +5.
        // The spec said "homepage exists".
        // Let's check the types/index.ts again. It has 'has_pages'. It does NOT have 'homepage'. 
        // However, standard GitHub API returns 'homepage'.
        // I will stick to the type definition. If 'homepage' is missing, I might need to add it or use 'has_pages'.
        // Re-reading spec: "5 if homepage exists".
        // I'll assume 'has_pages' is a good proxy or I should add 'homepage' to types.
        // Let's look at the previous 'cpfair.ts': it used `repo.has_pages`.
        // I will use `repo.has_pages` for now as "homepage exists" equivalent for this codebase.
    }

    // Since 'homepage' is not in the Interface currently (it was 'has_pages' in the old file), I'll check types again.
    // user said: "homepage exists". 
    // I will interpret this as `repo.has_pages` OR if I can access `repo.homepage` (checking valid property).
    // Let's assume `repo.has_pages` for the +5 to stay safe with types, or cast to any if needed, but better to use existing types.

    // Actually, let's look at `types/index.ts` content I saw earlier.
    // It has `has_pages?: boolean;`. 
    // I will use `repo.has_pages`.

    if (repo.has_pages) {
        score += 5;
    }

    // Description > 50 chars
    if (repo.description && repo.description.length > 50) {
        score += 5;
    }

    return score;
}

/**
 * Apply RepoGems Quality Score to a repository
 */
export function calculateQualityScore(repo: Repository): ScoredRepository {
    const communityScore = calculateCommunityHealth(repo);
    const maintenanceScore = calculateMaintenanceVelocity(repo);
    const growthScore = calculateGrowthTrend(repo);
    const securityScore = calculateSecurity(repo);
    const docsScore = calculateDocumentation(repo);

    // Total Score
    let totalScore = communityScore + maintenanceScore + growthScore + securityScore + docsScore;
    totalScore = Math.min(100, Math.max(0, totalScore)); // Clamp between 0-100 just in case
    totalScore = Math.round(totalScore * 10) / 10;

    // Hidden Gem Logic (preserved but logic for points is separate)
    // The prompt didn't strictly say to remove Hidden Gem logic, 
    // but the "Calculations" section just defined the 100 points.
    // "Hidden Gem" is likely still a flag we want to keep for the UI badges, 
    // even if it doesn't add points to the 'qualityScore' itself (which seems max 100 based on sum).
    // I will keep the boolean flag calculation but NOT add bonus points to the score 
    // because the user said "Total: Sum of above. Max 100."

    const isHiddenGem = repo.stargazers_count < 5000 && totalScore > 60;

    return {
        repo,
        qualityScore: totalScore,
        maintenanceScore,
        docsScore,
        growthScore,
        securityScore,
        communityScore,
        isHiddenGem,
    };
}

/**
 * Apply scoring to a list of repositories
 * Returns repositories sorted by Quality Score (highest first)
 */
export function applyScoring(repositories: Repository[]): ScoredRepository[] {
    return repositories
        .map(calculateQualityScore)
        .sort((a, b) => b.qualityScore - a.qualityScore);
}

/**
 * Get metrics for the recommendation set
 */
export function getScoringMetrics(scored: ScoredRepository[]) {
    const hiddenGems = scored.filter(r => r.isHiddenGem);
    const topResults = scored.slice(0, 10);
    const hiddenGemsInTop = topResults.filter(r => r.isHiddenGem);

    return {
        totalResults: scored.length,
        hiddenGemCount: hiddenGems.length,
        hiddenGemsInTop10: hiddenGemsInTop.length,
        averageScore: scored.length > 0
            ? scored.reduce((sum, r) => sum + r.qualityScore, 0) / scored.length
            : 0,
        fairnessRatio: hiddenGemsInTop.length / Math.max(topResults.length, 1),
    };
}
