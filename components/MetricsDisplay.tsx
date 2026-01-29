
import React from 'react';
import { RecommendationResponse } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
  metrics: RecommendationResponse['metrics'];
}

const MetricsDisplay: React.FC<Props> = ({ metrics }) => {
  const data = [
    { name: 'Consumer Bias (DCF)', baseline: metrics.baseline.dcf, fair: metrics.fair.dcf },
    { name: 'Producer Bias (DPF)', baseline: metrics.baseline.dpf, fair: metrics.fair.dpf },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Fairness Performance</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
            <span className="text-xs text-gray-500">Baseline</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            <span className="text-xs text-gray-500">RepoGems</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{ fill: '#f3f4f6' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="baseline" fill="#d1d5db" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar dataKey="fair" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <p className="text-xs font-semibold text-green-700 uppercase mb-1">Total Fairness Gain</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-green-600">
                {metrics.improvement.fairness.toFixed(0)}%
              </span>
              <span className="text-sm text-green-500 font-bold">Improvement</span>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Accuracy Maintenance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-blue-600">
                +{metrics.improvement.accuracy.toFixed(1)}%
              </span>
              <span className="text-sm text-blue-500 font-bold">NDCG Change</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Baseline mCPF</p>
          <p className="text-lg font-bold text-gray-400">{metrics.baseline.mcpf.toFixed(3)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Fair mCPF</p>
          <p className="text-lg font-bold text-green-600">{metrics.fair.mcpf.toFixed(3)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Baseline NDCG</p>
          <p className="text-lg font-bold text-gray-400">{metrics.baseline.ndcg.toFixed(3)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Fair NDCG</p>
          <p className="text-lg font-bold text-blue-600">{metrics.fair.ndcg.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
