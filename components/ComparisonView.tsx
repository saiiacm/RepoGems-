
import React from 'react';
import { Recommendation } from '../types';
import RecommendationCard from './RecommendationCard';

interface Props {
  baseline: Recommendation[];
  fair: Recommendation[];
}

const ComparisonView: React.FC<Props> = ({ baseline, fair }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1 bg-gray-100 rounded">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-700">Baseline (Popularity Biased)</h3>
        </div>
        <div className="space-y-4">
          {baseline.map((rec) => (
            <RecommendationCard key={rec.repo.id} recommendation={rec} isFair={false} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1 bg-green-100 rounded">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-green-700">Fair Recommendations (RepoGems)</h3>
        </div>
        <div className="space-y-4">
          {fair.map((rec) => (
            <RecommendationCard key={rec.repo.id} recommendation={rec} isFair={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;
