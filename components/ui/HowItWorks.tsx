import React from 'react';
import { Brain, ShieldCheck, Scale, BarChart3, Zap } from 'lucide-react';

export function HowItWorks() {
    return (
        <section className="py-20 border-t border-zinc-800 bg-zinc-950/50">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-4">
                        Powered by Intelligence
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We don't just count stars. We analyze the heartbeat of the code.
                    </p>
                </div>

                {/* 3 Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                        <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                            <Scale className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">RepoGems Quality Score</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Our custom quality engine evaluates repositories based on growth trajectory and community health, not just raw popularity.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors">
                        <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                            <Brain className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">AI Analysis</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Gemini 3 Pro scans the codebase to generate human-readable summaries, saving you hours of reading documentation.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-colors">
                        <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Validated Accuracy</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Tested against 10,000+ repositories to ensure high-quality "Hidden Gems" surface to the top of your search.
                        </p>
                    </div>
                </div>

                {/* The Calculation Breakdown */}
                <div className="bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] -z-10" />

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <BarChart3 className="text-emerald-500" />
                                The Quality Formula
                            </h3>
                            <p className="text-zinc-400 mb-6">
                                How do we calculate the <strong>Quality Score (0-100)</strong>? We aggregate 5 distinct signals from the GitHub API to create a holistic view of project health.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    { label: "Community Health", weight: "30%", desc: "Issues closed vs opened, active discussions" },
                                    { label: "Maintenance Velocity", weight: "25%", desc: "Recent commit frequency and code updates" },
                                    { label: "Growth Trend", weight: "20%", desc: "Star velocity over the last 30 days" },
                                    { label: "Security & License", weight: "15%", desc: "Vulnerability checks and open-source compliance" },
                                    { label: "Documentation", weight: "10%", desc: "Readme quality and example coverage" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <span className="bg-zinc-800 px-2 py-0.5 rounded text-emerald-400 font-mono text-xs">{item.weight}</span>
                                        <span><strong className="text-white">{item.label}:</strong> {item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visual Graph/Representation */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 rounded-full border-4 border-zinc-800 border-t-emerald-500 border-r-emerald-500/50 rotate-45"></div>
                                <div className="absolute inset-4 rounded-full border-4 border-zinc-800 border-b-purple-500/50 border-l-purple-500 rotate-12"></div>
                                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                                    <span className="text-5xl font-black text-white tracking-tighter">100</span>
                                    <span className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Max Score</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}