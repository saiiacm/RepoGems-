import { Suspense } from 'react';
import { fetchRepositories } from '@/lib/github';
import { applyScoring, getScoringMetrics } from '@/lib/scoring';
import { generateRepoInsight } from '@/lib/gemini';
import SearchBar from '@/components/ui/SearchBar';
import RepoCard from '@/components/RepoCard';
import { Activity, BarChart3, Gem, Loader2 } from 'lucide-react';

interface SearchPageProps {
    searchParams: { q?: string };
}

async function SearchResults({ query }: { query: string }) {
    // Fetch repositories
    const { repos: repositories, isLive: isRealTimeData } = await fetchRepositories(query);

    // Apply RepoGems Quality Score
    const scoredRepos = applyScoring(repositories);

    // Generate AI insights for top 6 hidden gems
    const topHiddenGems = scoredRepos.filter(r => r.isHiddenGem).slice(0, 6);
    const insightPromises = topHiddenGems.map(async (scored) => {
        const insight = await generateRepoInsight(scored.repo);
        return { id: scored.repo.id, insight };
    });

    const insights = await Promise.all(insightPromises);
    const insightMap = new Map(insights.map(i => [i.id, i.insight]));

    // Add insights to scored repos
    const reposWithInsights = scoredRepos.map(scored => ({
        ...scored,
        aiInsight: insightMap.get(scored.repo.id),
    }));

    // Calculate quality metrics
    const metrics = getScoringMetrics(scoredRepos);

    return (
        <div>
            {/* Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 glass rounded-xl">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Activity className={`w-4 h-4 ${isRealTimeData ? 'text-green-400' : 'text-yellow-400'} status-pulse`} />
                        <span className="text-sm text-gray-300">
                            {isRealTimeData ? 'Real-Time Data Active' : 'Demo Mode (Mock Data)'}
                        </span>
                    </div>
                    <div className="h-4 w-px bg-white/20" />
                    <span className="text-sm text-gray-400">
                        {metrics.totalResults} repositories found
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Gem className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                            {metrics.hiddenGemCount} Hidden Gems
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">
                            Avg Score: {metrics.averageScore.toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reposWithInsights.map((scored, index) => (
                    <RepoCard key={scored.repo.id} scoredRepo={scored} rank={index + 1} />
                ))}
            </div>

            {/* No Results */}
            {reposWithInsights.length === 0 && (
                <div className="text-center py-20">
                    <Gem className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No gems found</h3>
                    <p className="text-gray-400">Try a different search term</p>
                </div>
            )}
        </div>
    );
}

function LoadingState() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-green-400 animate-spin mb-4" />
            <p className="text-gray-400">Discovering hidden gems...</p>
        </div>
    );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
    const query = searchParams.q || '';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Search Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-4">
                    {query ? (
                        <>
                            Results for "<span className="gradient-text">{query}</span>"
                        </>
                    ) : (
                        'Discover Hidden Gems'
                    )}
                </h1>
                <SearchBar initialQuery={query} />
            </div>

            {/* Results */}
            {query ? (
                <Suspense fallback={<LoadingState />}>
                    <SearchResults query={query} />
                </Suspense>
            ) : (
                <div className="text-center py-20">
                    <Gem className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Enter a search term</h3>
                    <p className="text-gray-400">Search for topics, languages, or keywords</p>
                </div>
            )}
        </div>
    );
}
