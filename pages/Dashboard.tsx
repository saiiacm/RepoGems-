
import React, { useState, useEffect } from 'react';
import { processRecommendations } from '../services/recommender';
import { RecommendationResponse } from '../types';
import FairnessControls from '../components/FairnessControls';
import MetricsDisplay from '../components/MetricsDisplay';
import ComparisonView from '../components/ComparisonView';

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState('hobbyist_coder');
  const [alpha, setAlpha] = useState(0.5);
  const [beta, setBeta] = useState(0.5);
  const [data, setData] = useState<RecommendationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const results = processRecommendations(username, alpha, beta);
      setData(results);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    fetchRecommendations();
  }, [alpha, beta]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-2xl mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">RepoGems</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Discover quality hidden gems. Give small maintainers the fair visibility they deserve using CPFair re-ranking.
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex-1 w-full">
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">GitHub Username</label>
          <div className="relative">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full pl-4 pr-32 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <button 
              onClick={fetchRecommendations}
              className="absolute right-2 top-2 bottom-2 px-4 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
            >
              Discover
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => { setUsername('active_dev_2024'); fetchRecommendations(); }}
            className="px-3 py-2 text-xs font-semibold text-gray-500 hover:text-blue-600 border border-transparent hover:border-blue-200 rounded-lg transition-all"
          >
            Demo: Active User
          </button>
          <button 
            onClick={() => { setUsername('hobbyist_coder'); fetchRecommendations(); }}
            className="px-3 py-2 text-xs font-semibold text-gray-500 hover:text-blue-600 border border-transparent hover:border-blue-200 rounded-lg transition-all"
          >
            Demo: Beginner
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1 space-y-8">
          <FairnessControls 
            alpha={alpha} 
            beta={beta} 
            onAlphaChange={setAlpha} 
            onBetaChange={setBeta} 
          />
          {data && <div className="hidden xl:block"><MetricsDisplay metrics={data.metrics} /></div>}
        </div>

        <div className="xl:col-span-2 relative">
          {loading && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-2xl">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="font-bold text-gray-900">Re-ranking for Fairness...</p>
              </div>
            </div>
          )}

          <div className="xl:hidden mb-8">
            {data && <MetricsDisplay metrics={data.metrics} />}
          </div>

          {data ? (
            <ComparisonView baseline={data.baseline} fair={data.fair} />
          ) : (
            <div className="h-96 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center">
              <p className="text-gray-400 font-medium">No recommendations loaded.</p>
            </div>
          )}
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t text-center space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">What is fairness?</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Standard recommenders favor popular items (Popularity Bias). Fairness re-ranking ensures high-quality "hidden gems" get equal exposure.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">CPFair Algorithm</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              A two-sided re-ranking method that optimizes for both consumers (active vs inactive users) and producers (popular vs long-tail repos).
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Research Backed</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Based on the paper "CPFair: Personalized Consumer-Producer Fairness Re-ranking" with over 90 citations in recommender systems research.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 pb-10">
          © 2024 RepoGems Project. Helping developers find the best code, not just the most famous code.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
