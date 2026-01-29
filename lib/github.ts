import { Repository } from '@/types/index';

// 15 Mock Repositories - Hidden Gems with diverse quality signals
export const MOCK_REPOSITORIES: Repository[] = [
    {
        id: 1,
        name: 'tiny-state-machine',
        full_name: 'dev-gems/tiny-state-machine',
        owner: { login: 'dev-gems', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4' },
        html_url: 'https://github.com/dev-gems/tiny-state-machine',
        description: 'A 2KB finite state machine with zero dependencies, perfect TypeScript support, and 100% test coverage',
        stargazers_count: 1250,
        forks_count: 89,
        open_issues_count: 3,
        language: 'TypeScript',
        topics: ['state-machine', 'typescript', 'minimal', 'finite-automaton'],
        created_at: '2023-06-15T10:00:00Z',
        updated_at: '2024-01-20T15:30:00Z',
        pushed_at: '2024-01-20T15:30:00Z',
        watchers_count: 1250,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 2,
        name: 'fast-fuzzy-search',
        full_name: 'search-tools/fast-fuzzy-search',
        owner: { login: 'search-tools', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4' },
        html_url: 'https://github.com/search-tools/fast-fuzzy-search',
        description: 'Lightning-fast fuzzy search library using advanced string matching algorithms. 10x faster than alternatives.',
        stargazers_count: 2340,
        forks_count: 156,
        open_issues_count: 5,
        language: 'Rust',
        topics: ['fuzzy-search', 'rust', 'performance', 'wasm', 'test'],
        created_at: '2023-03-20T08:15:00Z',
        updated_at: '2024-01-18T12:00:00Z',
        pushed_at: '2024-01-18T12:00:00Z',
        watchers_count: 2340,
        license: { name: 'Apache License 2.0' },
        has_pages: false,
        has_issues: true
    },
    {
        id: 3,
        name: 'clean-architecture-go',
        full_name: 'patterns/clean-architecture-go',
        owner: { login: 'patterns', avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4' },
        html_url: 'https://github.com/patterns/clean-architecture-go',
        description: 'Production-ready Clean Architecture template for Go with DDD, CQRS, and comprehensive testing patterns',
        stargazers_count: 890,
        forks_count: 234,
        open_issues_count: 2,
        language: 'Go',
        topics: ['clean-architecture', 'golang', 'ddd', 'cqrs', 'hexagonal', 'testing'],
        created_at: '2023-01-10T14:30:00Z',
        updated_at: '2024-01-19T09:45:00Z',
        pushed_at: '2024-01-19T09:45:00Z',
        watchers_count: 890,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 4,
        name: 'minimal-ml-pipeline',
        full_name: 'ai-utils/minimal-ml-pipeline',
        owner: { login: 'ai-utils', avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4' },
        html_url: 'https://github.com/ai-utils/minimal-ml-pipeline',
        description: 'Lightweight ML pipeline framework. Train, evaluate, and deploy models with minimal boilerplate.',
        stargazers_count: 3100,
        forks_count: 445,
        open_issues_count: 12,
        language: 'Python',
        topics: ['machine-learning', 'mlops', 'pipeline', 'python'],
        created_at: '2022-11-05T16:20:00Z',
        updated_at: '2024-01-21T08:00:00Z',
        pushed_at: '2024-01-21T08:00:00Z',
        watchers_count: 3100,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 5,
        name: 'sql-query-builder',
        full_name: 'db-helpers/sql-query-builder',
        owner: { login: 'db-helpers', avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4' },
        html_url: 'https://github.com/db-helpers/sql-query-builder',
        description: 'Type-safe SQL query builder that prevents injection attacks at compile time. Zero runtime overhead.',
        stargazers_count: 1780,
        forks_count: 123,
        open_issues_count: 4,
        language: 'TypeScript',
        topics: ['sql', 'database', 'typescript', 'type-safe', 'query-builder', 'test'],
        created_at: '2023-04-12T11:00:00Z',
        updated_at: '2024-01-17T16:30:00Z',
        pushed_at: '2024-01-17T16:30:00Z',
        watchers_count: 1780,
        license: { name: 'MIT License' },
        has_pages: false,
        has_issues: true
    },
    {
        id: 6,
        name: 'react-form-hooks',
        full_name: 'ui-patterns/react-form-hooks',
        owner: { login: 'ui-patterns', avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4' },
        html_url: 'https://github.com/ui-patterns/react-form-hooks',
        description: 'Composable form hooks with built-in validation, async submission, and accessibility features',
        stargazers_count: 4200,
        forks_count: 312,
        open_issues_count: 8,
        language: 'TypeScript',
        topics: ['react', 'forms', 'hooks', 'validation', 'accessibility'],
        created_at: '2023-02-28T09:30:00Z',
        updated_at: '2024-01-22T10:15:00Z',
        pushed_at: '2024-01-22T10:15:00Z',
        watchers_count: 4200,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 7,
        name: 'micro-auth',
        full_name: 'security-libs/micro-auth',
        owner: { login: 'security-libs', avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4' },
        html_url: 'https://github.com/security-libs/micro-auth',
        description: 'Minimal authentication library supporting JWT, OAuth2, and passkeys. Framework agnostic.',
        stargazers_count: 567,
        forks_count: 78,
        open_issues_count: 1,
        language: 'TypeScript',
        topics: ['authentication', 'jwt', 'oauth2', 'passkeys', 'security'],
        created_at: '2023-08-20T13:45:00Z',
        updated_at: '2024-01-20T11:00:00Z',
        pushed_at: '2024-01-20T11:00:00Z',
        watchers_count: 567,
        license: { name: 'MIT License' },
        has_pages: false,
        has_issues: true
    },
    {
        id: 8,
        name: 'cli-progress-bars',
        full_name: 'terminal-utils/cli-progress-bars',
        owner: { login: 'terminal-utils', avatar_url: 'https://avatars.githubusercontent.com/u/8?v=4' },
        html_url: 'https://github.com/terminal-utils/cli-progress-bars',
        description: 'Beautiful, customizable progress bars for CLI applications. Supports concurrent progress tracking.',
        stargazers_count: 2890,
        forks_count: 167,
        open_issues_count: 6,
        language: 'Python',
        topics: ['cli', 'progress-bar', 'terminal', 'python'],
        created_at: '2022-12-01T10:00:00Z',
        updated_at: '2024-01-15T14:20:00Z',
        pushed_at: '2024-01-15T14:20:00Z',
        watchers_count: 2890,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 9,
        name: 'vector-db-lite',
        full_name: 'embeddings/vector-db-lite',
        owner: { login: 'embeddings', avatar_url: 'https://avatars.githubusercontent.com/u/9?v=4' },
        html_url: 'https://github.com/embeddings/vector-db-lite',
        description: 'Embedded vector database for semantic search. No external dependencies, runs entirely in-process.',
        stargazers_count: 1450,
        forks_count: 89,
        open_issues_count: 3,
        language: 'Rust',
        topics: ['vector-database', 'embeddings', 'semantic-search', 'rust'],
        created_at: '2023-09-10T08:30:00Z',
        updated_at: '2024-01-21T17:00:00Z',
        pushed_at: '2024-01-21T17:00:00Z',
        watchers_count: 1450,
        license: { name: 'Apache License 2.0' },
        has_pages: false,
        has_issues: true
    },
    {
        id: 10,
        name: 'api-rate-limiter',
        full_name: 'infra-tools/api-rate-limiter',
        owner: { login: 'infra-tools', avatar_url: 'https://avatars.githubusercontent.com/u/10?v=4' },
        html_url: 'https://github.com/infra-tools/api-rate-limiter',
        description: 'Distributed rate limiting with Redis/memory backends. Sliding window algorithm with burst support.',
        stargazers_count: 890,
        forks_count: 56,
        open_issues_count: 2,
        language: 'Go',
        topics: ['rate-limiting', 'api', 'redis', 'distributed-systems'],
        created_at: '2023-05-25T12:00:00Z',
        updated_at: '2024-01-18T10:30:00Z',
        pushed_at: '2024-01-18T10:30:00Z',
        watchers_count: 890,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 11,
        name: 'css-grid-generator',
        full_name: 'frontend-tools/css-grid-generator',
        owner: { login: 'frontend-tools', avatar_url: 'https://avatars.githubusercontent.com/u/11?v=4' },
        html_url: 'https://github.com/frontend-tools/css-grid-generator',
        description: 'Visual CSS Grid layout generator with responsive breakpoints and production-ready code export',
        stargazers_count: 3450,
        forks_count: 234,
        open_issues_count: 7,
        language: 'JavaScript',
        topics: ['css', 'grid', 'layout', 'responsive', 'generator'],
        created_at: '2023-01-15T09:00:00Z',
        updated_at: '2024-01-19T15:45:00Z',
        pushed_at: '2024-01-19T15:45:00Z',
        watchers_count: 3450,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 12,
        name: 'event-sourcing-kit',
        full_name: 'cqrs-patterns/event-sourcing-kit',
        owner: { login: 'cqrs-patterns', avatar_url: 'https://avatars.githubusercontent.com/u/12?v=4' },
        html_url: 'https://github.com/cqrs-patterns/event-sourcing-kit',
        description: 'Event sourcing toolkit with snapshotting, projections, and saga orchestration. Battle-tested in production.',
        stargazers_count: 780,
        forks_count: 123,
        open_issues_count: 4,
        language: 'TypeScript',
        topics: ['event-sourcing', 'cqrs', 'ddd', 'typescript'],
        created_at: '2023-07-08T14:00:00Z',
        updated_at: '2024-01-16T11:20:00Z',
        pushed_at: '2024-01-16T11:20:00Z',
        watchers_count: 780,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 13,
        name: 'test-data-factory',
        full_name: 'testing-utils/test-data-factory',
        owner: { login: 'testing-utils', avatar_url: 'https://avatars.githubusercontent.com/u/13?v=4' },
        html_url: 'https://github.com/testing-utils/test-data-factory',
        description: 'Generate realistic test data with type-safe factories. Supports relations and custom generators.',
        stargazers_count: 2100,
        forks_count: 145,
        open_issues_count: 5,
        language: 'TypeScript',
        topics: ['testing', 'fixtures', 'factory', 'mock-data'],
        created_at: '2023-03-01T10:30:00Z',
        updated_at: '2024-01-20T09:00:00Z',
        pushed_at: '2024-01-20T09:00:00Z',
        watchers_count: 2100,
        license: { name: 'MIT License' },
        has_pages: false,
        has_issues: true
    },
    {
        id: 14,
        name: 'log-aggregator',
        full_name: 'observability/log-aggregator',
        owner: { login: 'observability', avatar_url: 'https://avatars.githubusercontent.com/u/14?v=4' },
        html_url: 'https://github.com/observability/log-aggregator',
        description: 'Lightweight log aggregation for microservices. Supports structured logging and trace correlation.',
        stargazers_count: 1670,
        forks_count: 98,
        open_issues_count: 3,
        language: 'Go',
        topics: ['logging', 'observability', 'microservices', 'tracing'],
        created_at: '2023-04-20T11:15:00Z',
        updated_at: '2024-01-17T13:30:00Z',
        pushed_at: '2024-01-17T13:30:00Z',
        watchers_count: 1670,
        license: { name: 'Apache License 2.0' },
        has_pages: true,
        has_issues: true
    },
    {
        id: 15,
        name: 'schema-validator',
        full_name: 'validation-libs/schema-validator',
        owner: { login: 'validation-libs', avatar_url: 'https://avatars.githubusercontent.com/u/15?v=4' },
        html_url: 'https://github.com/validation-libs/schema-validator',
        description: 'Lightning-fast JSON schema validation with detailed error messages and custom validator support.',
        stargazers_count: 4800,
        forks_count: 267,
        open_issues_count: 9,
        language: 'TypeScript',
        topics: ['json-schema', 'validation', 'typescript', 'schema'],
        created_at: '2022-10-15T08:45:00Z',
        updated_at: '2024-01-22T08:00:00Z',
        pushed_at: '2024-01-22T08:00:00Z',
        watchers_count: 4800,
        license: { name: 'MIT License' },
        has_pages: true,
        has_issues: true
    },
];

/**
 * Fetch repositories from GitHub API using Safe Mode logic
 * Returns real data if available, otherwise mock data without crashing
 */
export async function fetchRepositories(query: string): Promise<{
    repos: Repository[];
    isLive: boolean;
}> {
    const token = process.env.GITHUB_TOKEN;

    // 1. Check for token - if missing, immediate fallback
    if (!token) {
        console.log('⚠️ [SafeMode] No GITHUB_TOKEN found. Using mock data.');
        return {
            repos: filterMockRepos(query),
            isLive: false,
        };
    }

    try {
        console.log(`🔌 [SafeMode] Attempting GitHub API fetch for: "${query}"`);

        const response = await fetch(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github.v3+json',
                    'X-GitHub-Api-Version': '2022-11-28',
                },
                next: { revalidate: 300 }, // Cache for 5 minutes
            }
        );

        // 2. Handle API Errors (Rate limit, Auth fail, Server error)
        if (!response.ok) {
            console.warn(`🛑 [SafeMode] GitHub API Error: ${response.status} ${response.statusText}`);
            console.warn('Falling back to mock data...');

            // Return mock data instead of throwing
            return {
                repos: filterMockRepos(query),
                isLive: false,
            };
        }

        const data = await response.json();

        // 3. Success - Return real data
        console.log(`✅ [SafeMode] Successfully fetched ${data.items?.length || 0} repositories.`);

        return {
            repos: (data.items as Repository[]) || [],
            isLive: true,
        };

    } catch (error) {
        // 4. Catch Network Errors / Timeouts
        console.error('🔥 [SafeMode] Critical failure during fetch:', error);
        return {
            repos: filterMockRepos(query),
            isLive: false,
        };
    }
}

/**
 * Filter mock repositories based on query
 */
function filterMockRepos(query: string): Repository[] {
    if (!query) return MOCK_REPOSITORIES;

    const lowerQuery = query.toLowerCase();

    // Filter by name, description, language, or topics
    const filtered = MOCK_REPOSITORIES.filter(repo => {
        return (
            repo.name.toLowerCase().includes(lowerQuery) ||
            (repo.description && repo.description.toLowerCase().includes(lowerQuery)) ||
            (repo.language && repo.language.toLowerCase().includes(lowerQuery)) ||
            repo.topics.some(t => t.toLowerCase().includes(lowerQuery))
        );
    });

    // If no matches, return all mock repos
    return filtered.length > 0 ? filtered : MOCK_REPOSITORIES;
}
