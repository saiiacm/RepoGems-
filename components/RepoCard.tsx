'use client';

import { ExternalLink, Gem, GitFork, Star, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { ScoredRepository } from '@/types/index';

interface RepoCardProps {
    scoredRepo: ScoredRepository;
    rank: number;
}

export default function RepoCard({ scoredRepo, rank }: RepoCardProps) {
    const { repo, qualityScore, maintenanceScore, docsScore, growthScore, securityScore, communityScore, isHiddenGem, aiInsight } = scoredRepo;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className={`relative glass rounded-xl overflow-hidden card-hover ${isHiddenGem ? 'gem-glow' : ''}`}>
            {/* Hidden Gem Badge */}
            {isHiddenGem && (
                <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
                        <Gem className="w-3.5 h-3.5" />
                        <span>Hidden Gem</span>
                    </div>
                </div>
            )}

            {/* Rank Badge */}
            <div className="absolute top-3 left-3 z-10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                    #{rank}
                </div>
            </div>

            <div className="p-6 pt-14">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 group"
                        >
                            <h3 className="text-lg font-bold text-white truncate group-hover:text-green-400 transition-colors">
                                {repo.name}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </a>
                        <p className="text-sm text-gray-400">
                            by {repo.owner.login}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{repo.stargazers_count.toLocaleString('en-US')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <GitFork className="w-4 h-4 text-blue-400" />
                        <span>{repo.forks_count.toLocaleString('en-US')}</span>
                    </div>
                    {repo.language && (
                        <div className="flex items-center gap-1.5 text-sm">
                            <span className="w-3 h-3 rounded-full bg-purple-400" />
                            <span className="text-gray-400">{repo.language}</span>
                        </div>
                    )}
                </div>

                {/* Topics */}
                {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 4).map((topic) => (
                            <span
                                key={topic}
                                className="px-2 py-1 rounded-md text-xs bg-white/5 text-gray-300 border border-white/10"
                            >
                                {topic}
                            </span>
                        ))}
                        {repo.topics.length > 4 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                                +{repo.topics.length - 4} more
                            </span>
                        )}
                    </div>
                )}

                {/* Quality Score Bar */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            Quality Score
                        </span>
                        <span className={`text-sm font-bold ${qualityScore >= 70 ? 'text-green-400' : qualityScore >= 50 ? 'text-yellow-400' : 'text-gray-400'}`}>
                            {qualityScore}/100
                        </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${qualityScore >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                                qualityScore >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' :
                                    'bg-gradient-to-r from-gray-500 to-gray-400'
                                }`}
                            style={{ width: `${qualityScore}%` }}
                        />
                    </div>
                </div>

                {/* AI Insight */}
                {aiInsight && (
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {aiInsight}
                            </p>
                        </div>
                    </div>
                )}

                {/* Expand/Collapse Details */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                    {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    <span>{showDetails ? 'Hide' : 'Show'} Score Breakdown</span>
                </button>

                {/* Score Breakdown - 5 Signals */}
                {showDetails && (
                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-5 gap-2">
                        <div className="text-center">
                            <div className="text-[10px] text-gray-500 mb-1">Community</div>
                            <div className="text-xs font-bold text-pink-400">{communityScore}/30</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-gray-500 mb-1">Maint.</div>
                            <div className="text-xs font-bold text-green-400">{maintenanceScore}/25</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-gray-500 mb-1">Growth</div>
                            <div className="text-xs font-bold text-yellow-400">{growthScore}/20</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-gray-500 mb-1">Security</div>
                            <div className="text-xs font-bold text-orange-400">{securityScore}/15</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] text-gray-500 mb-1">Docs</div>
                            <div className="text-xs font-bold text-blue-400">{docsScore}/10</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
