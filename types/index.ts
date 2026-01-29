// Repository data from GitHub API
export interface Repository {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    html_url: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    language: string | null;
    topics: string[];
    created_at: string;
    updated_at: string;
    pushed_at: string;
    watchers_count: number;
    license: {
        name: string;
    } | null;
}

// Scored repository with CPFair metrics
export interface ScoredRepository {
    repo: Repository;
    cpfairScore: number;
    maintenanceHealth: number;
    communityVelocity: number;
    inversePopularity: number;
    isHiddenGem: boolean;
    aiInsight?: string;
}

// API response structure
export interface SearchResult {
    repositories: ScoredRepository[];
    totalCount: number;
    isRealTimeData: boolean;
    query: string;
}

// Search parameters
export interface SearchParams {
    query: string;
    page?: number;
    perPage?: number;
}
