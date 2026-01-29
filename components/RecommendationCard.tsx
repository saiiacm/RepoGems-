
import React, { useState } from 'react';
import { Recommendation } from '../types';
import { getGemAnalysis } from '../services/geminiService';

interface Props {
  recommendation: Recommendation;
  isFair: boolean;
}

const RecommendationCard: React.FC<Props> = ({ recommendation, isFair }) => {
  const { repo, originalRank, fairRank, consumerBonus, producerBonus } = recommendation;
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  const getQualityColor = (score: number) => {
    if (score >= 8) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const handleAnalysis = async () => {
    if (analysis) return;
    setLoadingAnalysis(true);
    const result = await getGemAnalysis(repo);
    setAnalysis(result);
    setLoadingAnalysis(false);
  };

  const rankDiff = originalRank - fairRank;
  const isHiddenGem = repo.stars < 5000;

  return (
    <div className={`relative p-4 mb-4 rounded-xl border transition-all duration-300 hover:shadow-md bg-white ${isHiddenGem && isFair ? 'ring-2 ring-yellow-400/50 border-yellow-200' : 'border-gray-200'}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 truncate max-w-[200px]">
              <a href={`https://github.com/${repo.owner}/${repo.name}`} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            {isHiddenGem && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-yellow-100 text-yellow-700 rounded-full">
                Hidden Gem
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">by {repo.owner}</p>
        </div>
        
        <div className={`flex flex-col items-end`}>
          <span className={`px-2 py-1 rounded-lg text-xs font-bold border ${getQualityColor(repo.quality.total)}`}>
            Quality: {repo.quality.total.toFixed(1)}
          </span>
          <span className="text-[10px] text-gray-400 mt-1">⭐ {repo.stars.toLocaleString()}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3 h-10">
        {repo.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {repo.topics.slice(0, 3).map(topic => (
          <span key={topic} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium">
            {topic}
          </span>
        ))}
      </div>

      <div className="border-t pt-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {repo.language}
          </div>
          {isFair && rankDiff !== 0 && (
            <div className={`flex items-center gap-1 text-xs font-bold ${rankDiff > 0 ? 'text-green-600' : 'text-gray-400'}`}>
              {rankDiff > 0 ? (
                <>↑ Rank {originalRank} → {fairRank}</>
              ) : (
                <>↓ Rank {originalRank} → {fairRank}</>
              )}
            </div>
          )}
        </div>

        <button 
          onClick={handleAnalysis}
          disabled={loadingAnalysis}
          className="text-[11px] font-semibold text-blue-600 hover:underline disabled:text-gray-400"
        >
          {loadingAnalysis ? 'Analyzing...' : analysis ? 'View Analysis' : 'Ask Gemini Why?'}
        </button>
      </div>

      {analysis && (
        <div className="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-800 leading-relaxed border border-blue-100 animate-fadeIn">
          <strong>Gemini Insight:</strong> {analysis}
        </div>
      )}
    </div>
  );
};

export default RecommendationCard;
