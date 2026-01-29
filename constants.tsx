
import { Repository, User } from './types';

export const REPOS: Repository[] = [
  {
    id: '1',
    name: 'tensorflow',
    owner: 'tensorflow',
    stars: 182000,
    forks: 89000,
    language: 'C++',
    description: 'An Open Source Machine Learning Framework for Everyone',
    topics: ['machine-learning', 'deep-learning', 'python'],
    quality: { total: 9.5, documentation: 3.0, tests: 2.0, maintenance: 2.0, community: 2.5 }
  },
  {
    id: '2',
    name: 'react',
    owner: 'facebook',
    stars: 221000,
    forks: 45000,
    language: 'JavaScript',
    description: 'The library for web and native user interfaces',
    topics: ['web-development', 'frontend', 'ui'],
    quality: { total: 9.8, documentation: 3.0, tests: 2.0, maintenance: 2.0, community: 2.8 }
  },
  {
    id: '3',
    name: 'hidden-ml-gem',
    owner: 'dev-fairness',
    stars: 450,
    forks: 45,
    language: 'Python',
    description: 'Efficient implementation of CPFair re-ranking with 95% test coverage',
    topics: ['machine-learning', 'fairness', 'research'],
    quality: { total: 8.9, documentation: 2.8, tests: 2.0, maintenance: 1.8, community: 2.3 }
  },
  {
    id: '4',
    name: 'tiny-react-router',
    owner: 'speedy-coder',
    stars: 1200,
    forks: 80,
    language: 'TypeScript',
    description: 'A lightning-fast router with zero dependencies and perfect API docs',
    topics: ['web-development', 'routing', 'performance'],
    quality: { total: 8.5, documentation: 2.9, tests: 1.9, maintenance: 2.0, community: 1.7 }
  },
  {
    id: '5',
    name: 'pytorch',
    owner: 'pytorch',
    stars: 76000,
    forks: 21000,
    language: 'Python',
    description: 'Tensors and Dynamic neural networks in Python with strong GPU acceleration',
    topics: ['machine-learning', 'ai', 'research'],
    quality: { total: 9.4, documentation: 2.7, tests: 2.0, maintenance: 2.0, community: 2.7 }
  },
  {
    id: '6',
    name: 'clean-data-tools',
    owner: 'data-wizard',
    stars: 890,
    forks: 120,
    language: 'Python',
    description: 'Advanced data cleaning pipelines for messy real-world CSV files',
    topics: ['data-science', 'python', 'tools'],
    quality: { total: 7.8, documentation: 2.5, tests: 1.8, maintenance: 1.5, community: 2.0 }
  },
  {
    id: '7',
    name: 'fair-metrics-lib',
    owner: 'recommender-systems',
    stars: 320,
    forks: 40,
    language: 'JavaScript',
    description: 'Library to calculate DCF, DPF and mCPF in the browser',
    topics: ['research', 'fairness', 'metrics'],
    quality: { total: 9.1, documentation: 3.0, tests: 2.0, maintenance: 1.6, community: 2.5 }
  },
  {
    id: '8',
    name: 'vue-next-gen',
    owner: 'progressive-web',
    stars: 2500,
    forks: 300,
    language: 'TypeScript',
    description: 'Experimental composition API wrappers for better reactive states',
    topics: ['web-development', 'vue', 'frontend'],
    quality: { total: 8.2, documentation: 2.4, tests: 1.7, maintenance: 1.9, community: 2.2 }
  },
  {
    id: '9',
    name: 'simple-transformers',
    owner: 'easy-nlp',
    stars: 5400,
    forks: 1100,
    language: 'Python',
    description: 'Simplifying the use of transformer models for common NLP tasks',
    topics: ['machine-learning', 'nlp', 'transformers'],
    quality: { total: 8.0, documentation: 2.6, tests: 1.5, maintenance: 1.4, community: 2.5 }
  },
  {
    id: '10',
    name: 'micro-web-framework',
    owner: 'minimalist-dev',
    stars: 150,
    forks: 12,
    language: 'Rust',
    description: 'Extremely lightweight web framework written in pure Rust with zero unsafe blocks',
    topics: ['web-development', 'rust', 'performance'],
    quality: { total: 9.2, documentation: 3.0, tests: 2.0, maintenance: 2.0, community: 2.2 }
  }
];

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    username: 'active_dev_2024',
    activityLevel: 'active',
    interests: ['machine-learning', 'python'],
    starredRepoIds: ['1', '5', '9']
  },
  {
    id: 'u2',
    username: 'hobbyist_coder',
    activityLevel: 'inactive',
    interests: ['web-development', 'ui'],
    starredRepoIds: ['2']
  }
];
