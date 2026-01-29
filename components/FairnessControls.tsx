
import React from 'react';

interface Props {
  alpha: number;
  beta: number;
  onAlphaChange: (val: number) => void;
  onBetaChange: (val: number) => void;
}

const FairnessControls: React.FC<Props> = ({ alpha, beta, onAlphaChange, onBetaChange }) => {
  const presets = [
    { name: 'Balanced', a: 0.5, b: 0.5 },
    { name: 'Hidden Gems', a: 0.2, b: 0.8 },
    { name: 'Beginner Focus', a: 0.8, b: 0.2 },
    { name: 'Max Fairness', a: 0.9, b: 0.9 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Fairness Configuration
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-700">Consumer Fairness (α)</label>
            <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded">Value: {alpha.toFixed(1)}</span>
          </div>
          <input
            type="range" min="0" max="1" step="0.1" value={alpha}
            onChange={(e) => onAlphaChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <p className="text-[11px] text-gray-500 italic">Boosts quality standards for inactive users to ensure better discovery experiences.</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-700">Producer Fairness (β)</label>
            <span className="text-xs font-mono bg-green-50 text-green-700 px-2 py-1 rounded">Value: {beta.toFixed(1)}</span>
          </div>
          <input
            type="range" min="0" max="1" step="0.1" value={beta}
            onChange={(e) => onBetaChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <p className="text-[11px] text-gray-500 italic">Increases visibility for high-quality "long-tail" repositories with lower star counts.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t">
        <span className="text-xs font-bold text-gray-400 uppercase mr-2 self-center">Quick Presets:</span>
        {presets.map(p => (
          <button
            key={p.name}
            onClick={() => { onAlphaChange(p.a); onBetaChange(p.b); }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${alpha === p.a && beta === p.b
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FairnessControls;
