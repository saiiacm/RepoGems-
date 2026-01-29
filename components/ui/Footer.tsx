'use client';

import { Activity, Gem, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [isRealTime, setIsRealTime] = useState(false);

    // This would be set based on actual data source
    useEffect(() => {
        // Check if we have real-time data based on env
        setIsRealTime(false); // Default to false, will be true when API is working
    }, []);

    return (
        <footer className="glass border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Gem className="w-6 h-6 text-green-400" />
                            <span className="text-lg font-bold text-white">RepoGems</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover hidden gem repositories using our fairness-aware CPFair algorithm.
                            We surface quality projects that deserve more attention.
                        </p>
                    </div>

                    {/* Algorithm Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">CPFair Algorithm</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400" />
                                Maintenance Health (40%)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400" />
                                Community Velocity (30%)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-400" />
                                Inverse Popularity (30%)
                            </li>
                        </ul>
                    </div>

                    {/* Status */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">System Status</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-green-400 status-pulse" />
                                <span className="text-sm text-gray-300">
                                    Status: {isRealTime ? 'Real-Time Data Active' : 'Demo Mode Active'}
                                </span>
                            </div>
                            <div className="text-xs text-gray-500">
                                {isRealTime
                                    ? 'Connected to GitHub API'
                                    : 'Using curated mock data'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} RepoGems. Built with fairness in mind.
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>Made with</span>
                        <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                        <span>for open source</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
