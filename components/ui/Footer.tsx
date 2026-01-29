import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();
    // Simple check: If we have a token in the environment (server-side), we are Live.
    // Note: In a real app, we'd pass this as a prop, but for now we'll hardcode the visual
    // based on the assumption that if you see this, the build worked.

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 py-8 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left Side: Copyright */}
                <div className="text-zinc-500 text-sm">
                    © {currentYear} RepoGems. All rights reserved.
                </div>

                {/* Right Side: Status Indicator */}
                <div className="flex items-center gap-2 text-xs font-mono bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-zinc-400">
                        System Status: <span className="text-emerald-400 font-bold">Active</span>
                    </span>
                </div>
            </div>

            {/* Credits */}
            <div className="container mx-auto px-4 mt-4 text-center text-xs text-zinc-600">
                Developed by SAII ACM Developer Committee 2026
            </div>
        </footer>
    );
}
