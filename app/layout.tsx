import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'RepoGems - Discover Hidden Gem Repositories',
    description: 'Find underrated GitHub repositories that deserve more attention using our fairness-aware CPFair algorithm.',
    keywords: ['GitHub', 'repositories', 'hidden gems', 'open source', 'discovery'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
