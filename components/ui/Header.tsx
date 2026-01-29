import { Gem, Github } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="glass sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Gem className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
                            <div className="absolute inset-0 bg-green-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold text-white">
                            Repo<span className="gradient-text">Gems</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            Discover
                        </Link>
                        <a
                            href="https://github.com/saiiacm/RepoGems-.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium text-white"
                        >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
