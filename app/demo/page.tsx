import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-2xl w-full text-center space-y-8 relative z-10 glass p-12 rounded-2xl border border-white/10">
                <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800 shadow-xl">
                    <Play className="w-10 h-10 text-emerald-500 ml-1" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Product Demo Coming Soon
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        We are putting the finishing touches on our walkthrough video.
                        <br className="hidden md:block" />
                        Check back soon!
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Go Back Home</span>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 text-zinc-600 text-xs text-center">
                &copy; {new Date().getFullYear()} RepoGems. All rights reserved.
            </div>
        </main>
    );
}
