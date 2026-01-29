import { Play } from 'lucide-react';
import Link from 'next/link';

// Using relative paths to fix import errors
import SearchBar from '../components/ui/SearchBar';
import RepoCard from '../components/RepoCard';
import { HowItWorks } from '../components/ui/HowItWorks';
import { fetchRepositories } from '../lib/github';
import { calculateQualityScore } from '../lib/scoring';

export default async function Home({ searchParams }: { searchParams: { q?: string } }) {
    const query = searchParams.q || '';

    // 1. Fetch Data (Safe Mode Enabled)
    const { repos, isLive } = await fetchRepositories(query);

    // 2. Apply RepoGems Quality Score
    const scoredRepos = repos.map(repo => calculateQualityScore(repo));

    // 3. Sort by Quality Score
    scoredRepos.sort((a, b) => b.qualityScore - a.qualityScore);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">

            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 text-center z-10 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-emerald-900/10 via-emerald-900/5 to-transparent blur-3xl -z-10" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-emerald-400 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    v2.0 Live System
                </div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
                    RepoGems
                </h1>
                <p className="text-zinc-400 max-w-2xl text-lg md:text-xl mb-10 leading-relaxed">
                    Uncover the open-source projects that matter.
                    Powered by <span className="text-emerald-400 font-semibold">RepoGems Quality Score™</span> to surface quality over hype.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-xl mb-8 relative z-20">
                    <SearchBar initialQuery={query} />
                </div>


                <Link href="/demo" target="_blank">
                    <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all text-zinc-300 hover:text-white text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                            <Play className="w-3 h-3 text-emerald-500 group-hover:text-black fill-current" />
                        </div>
                        Watch Demo
                    </button>
                </Link>
            </div>

            {/* Logic & Explainer Section (Only visible when NOT searching) */}
            {!query && <HowItWorks />}

            {/* Results Section */}
            {query && (
                <div className="container mx-auto px-4 pb-24 pt-10 border-t border-zinc-900">
                    <div className="mb-8 flex items-center justify-between text-sm text-zinc-500">
                        <span>Found {repos.length} repositories for "<span className="text-white">{query}</span>"</span>
                        <span className={`px-2 py-1 rounded text-xs border ${isLive ? "border-emerald-900 text-emerald-500 bg-emerald-900/10" : "border-amber-900 text-amber-500 bg-amber-900/10"}`}>
                            {isLive ? "● Live API Data" : "● Demo Data Mode"}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {scoredRepos.map((item, index) => (
                            <RepoCard key={item.repo.id} scoredRepo={item} rank={index + 1} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}