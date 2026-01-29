import { Gem, Sparkles, TrendingUp, Zap } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

export default function Home() {
    return (
        <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-8">
                        <Gem className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">
                            Fairness-Aware Discovery
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        Find GitHub's <br />
                        <span className="gradient-text">Hidden Gems</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Discover underrated repositories that deserve more attention.
                        Our CPFair algorithm surfaces quality projects beyond just star counts.
                    </p>

                    {/* Search Bar */}
                    <div className="flex justify-center mb-16">
                        <SearchBar size="large" />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <FeatureCard
                        icon={<TrendingUp className="w-6 h-6 text-green-400" />}
                        title="CPFair Algorithm"
                        description="Our scoring weights maintenance, community velocity, and inverse popularity equally."
                    />
                    <FeatureCard
                        icon={<Sparkles className="w-6 h-6 text-purple-400" />}
                        title="AI-Powered Insights"
                        description="Gemini AI explains why each repository is special and worth your attention."
                    />
                    <FeatureCard
                        icon={<Zap className="w-6 h-6 text-yellow-400" />}
                        title="Real-Time Data"
                        description="Live GitHub API integration with intelligent fallback for reliability."
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StatCard value="40%" label="Maintenance Weight" />
                        <StatCard value="30%" label="Community Velocity" />
                        <StatCard value="30%" label="Inverse Popularity" />
                        <StatCard value="15%" label="Hidden Gem Boost" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="glass rounded-xl p-6 card-hover">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{value}</div>
            <div className="text-sm text-gray-400">{label}</div>
        </div>
    );
}
