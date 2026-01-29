# RepoGems 💎

Discover GitHub's hidden gems using fairness-aware recommendations.

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

## ✨ Features

- **CPFair Algorithm**: Score = (Maintenance × 0.4) + (Velocity × 0.3) + (Uniqueness × 0.3)
- **Hidden Gem Detection**: Repos with <5k stars + high activity get 15% score boost
- **AI Insights**: Gemini-powered explanations for why repos are special
- **Fault Tolerant**: Falls back to curated mock data if APIs fail

## 📁 Project Structure

```
├── app/                  # Next.js 14 App Router
│   ├── page.tsx          # Home page
│   ├── search/page.tsx   # Search results
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── RepoCard.tsx      # Repository card with fairness badge
│   ├── SearchBar.tsx     # Search input
│   └── ui/               # Header, Footer
├── lib/                  # Core logic
│   ├── github.ts         # GitHub API + mock fallback
│   ├── cpfair.ts         # CPFair algorithm
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
