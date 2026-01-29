'use client';

import { ExternalLink, Gem, GitFork, Star, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { ScoredRepository } from '@/types';

interface RepoCardProps {
    scoredRepo: ScoredRepository;
    rank: number;
}

export default function RepoCard({ scoredRepo, rank }: RepoCardProps) {
    const { repo, cpfairScore, maintenanceHealth, communityVelocity, inversePopularity, isHiddenGem, aiInsight } = scoredRepo;
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

                {/* CPFair Score Bar */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            CPFair Score
                        </span>
                        <span className={`text-sm font-bold ${cpfairScore >= 70 ? 'text-green-400' : cpfairScore >= 50 ? 'text-yellow-400' : 'text-gray-400'}`}>
                            {cpfairScore}/100
                        </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${cpfairScore >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                                cpfairScore >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' :
                                    'bg-gradient-to-r from-gray-500 to-gray-400'
                                }`}
                            style={{ width: `${cpfairScore}%` }}
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

                {/* Score Breakdown */}
                {showDetails && (
                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">Maintenance</div>
                            <div className="text-sm font-bold text-green-400">{maintenanceHealth}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">Velocity</div>
                            <div className="text-sm font-bold text-blue-400">{communityVelocity}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">Uniqueness</div>
                            <div className="text-sm font-bold text-purple-400">{inversePopularity}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
