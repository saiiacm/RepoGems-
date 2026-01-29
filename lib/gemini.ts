import { GoogleGenerativeAI } from '@google/generative-ai';
import { Repository } from '@/types/index';

// Fallback insights when API is unavailable
const FALLBACK_INSIGHTS = [
    'This repository demonstrates excellent engineering practices that outweigh its current star count.',
    'A well-maintained project with clean code architecture and active community engagement.',
    'Hidden gem with comprehensive documentation and solid test coverage worth exploring.',
    'Quality codebase showing consistent maintenance and thoughtful API design.',
    'Underrated library with production-ready code and responsive maintainers.',
];

/**
 * Generate AI insight explaining why a repository is a hidden gem
 */
export async function generateRepoInsight(repo: Repository): Promise<string> {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        console.log('No GOOGLE_API_KEY found, using fallback insight');
        return getRandomFallback();
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `You are analyzing GitHub repositories to find "hidden gems" - high-quality projects that deserve more attention.

Repository: ${repo.full_name}
Description: ${repo.description || 'No description provided'}
Language: ${repo.language || 'Not specified'}
Stars: ${repo.stargazers_count.toLocaleString()}
Forks: ${repo.forks_count.toLocaleString()}
Topics: ${repo.topics.join(', ') || 'None'}

Explain in ONE sentence (max 25 words) why this repo is a hidden gem that developers should consider. Focus on practical value and quality signals. Be specific and enthusiastic.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text.trim() || getRandomFallback();
    } catch (error) {
        console.error('Gemini API error:', error);
        return getRandomFallback();
    }
}

/**
 * Get a random fallback insight
 */
function getRandomFallback(): string {
    return FALLBACK_INSIGHTS[Math.floor(Math.random() * FALLBACK_INSIGHTS.length)];
}

/**
 * Generate insights for multiple repositories (with rate limiting)
 */
export async function generateBatchInsights(
    repos: Repository[],
    maxConcurrent: number = 3
): Promise<Map<number, string>> {
    const insights = new Map<number, string>();

    // Process in batches to avoid rate limits
    for (let i = 0; i < repos.length; i += maxConcurrent) {
        const batch = repos.slice(i, i + maxConcurrent);
        const results = await Promise.all(
            batch.map(async (repo) => ({
                id: repo.id,
                insight: await generateRepoInsight(repo),
            }))
        );

        results.forEach(({ id, insight }) => {
            insights.set(id, insight);
        });
    }

    return insights;
}
