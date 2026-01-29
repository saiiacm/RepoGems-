# RepoGems 💎

A developer-first tool to analyze GitHub repository health and quality.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Add your API keys to .env.local (optional)

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📊 RepoGems Quality Score

We surface high-quality repositories using a precision mathematical model that evaluates 5 distinct health signals. We don't just count stars; we analyze the heartbeat of the project.

**The 100-Point Scoring Model:**

| Signal | Weight | Logic |
|--------|--------|-------|
| **Community Health** | **30%** | Harmonic Decay: Higher score for fewer open issues relative to total interactions. |
| **Maintenance Velocity** | **25%** | Linear Decay: Rewards recent commits and active code updates. |
| **Growth Trend** | **20%** | Logarithmic Growth: Measures fork velocity and star trajectory. |
| **Security** | **15%** | Boolean Check: Verifies valid open-source licenses. |
| **Documentation** | **10%** | Quality Check: Ensures homepage and comprehensive description exist. |

## ✨ Features

- **RepoGems Quality Score**: A transparent, fair scoring engine for open-source discovery.
- **Hidden Gem Detection**: Automatically highlights underrated repositories with high quality scores but lower star counts.
- **AI Insights**: Powered by **Gemini 3 Pro** to generate human-readable summaries and explanations.
- **Fault Tolerant**: Safely falls back to curated mock data if API limits are reached.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS
- **UI Components**: Shadcn UI & Lucide Icons
- **AI**: Google Gemini API

## 📁 Project Structure

```
├── app/                  # Next.js 14 App Router
│   ├── demo/             # Demo page
│   ├── page.tsx          # Home page
│   ├── search/page.tsx   # Search results
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ui/               # Reusable UI components (Header, Footer, SearchBar)
│   └── RepoCard.tsx      # Repository card with score visualization
├── lib/                  # Core logic
│   ├── github.ts         # GitHub API + mock fallback
│   ├── scoring.ts        # RepoGems Quality Score algorithm
│   └── gemini.ts         # AI insights
└── types/                # TypeScript definitions
```

## 🔑 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | No | Enables real-time GitHub data |
| `GOOGLE_API_KEY` | No | Enables AI-powered insights |

## 📄 License

MIT
