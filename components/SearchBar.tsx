'use client';

import { Search, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchBarProps {
    initialQuery?: string;
    size?: 'default' | 'large';
}

export default function SearchBar({ initialQuery = '', size = 'default' }: SearchBarProps) {
    const [query, setQuery] = useState(initialQuery);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const isLarge = size === 'large';

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Input container */}
                <div className={`relative flex items-center glass rounded-xl ${isLarge ? 'p-2' : 'p-1'}`}>
                    <Search className={`${isLarge ? 'w-6 h-6 ml-4' : 'w-5 h-5 ml-3'} text-gray-400`} />

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Discover Hidden Gems..."
                        className={`flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 ${isLarge ? 'px-4 py-4 text-lg' : 'px-3 py-3'
                            }`}
                    />

                    <button
                        type="submit"
                        className={`flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold rounded-lg transition-all ${isLarge ? 'px-6 py-3 mr-2' : 'px-4 py-2 mr-1'
                            }`}
                    >
                        <Sparkles className={isLarge ? 'w-5 h-5' : 'w-4 h-4'} />
                        <span>Search</span>
                    </button>
                </div>
            </div>

            {/* Suggestions */}
            {isLarge && (
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {['react', 'python', 'typescript', 'rust', 'machine learning'].map((suggestion) => (
                        <button
                            key={suggestion}
                            type="button"
                            onClick={() => {
                                setQuery(suggestion);
                                router.push(`/search?q=${encodeURIComponent(suggestion)}`);
                            }}
                            className="px-3 py-1.5 rounded-full text-sm text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}
        </form>
    );
}
