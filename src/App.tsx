import { useState, useEffect } from 'react';
import { TrendingSection } from './components/TrendingSection';
import { LaunchList } from './components/LaunchList';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { Footer } from './components/Footer';
import { Token, FilterType } from './types';

// Mock data for demonstration
const generateMockTokens = (): Token[] => {
  const aiNames = ['NeuroBASE', 'AgentX', 'BrainDAO', 'SynapseAI', 'CortexNet', 'DeepMind3', 'AutoGPT_BASE', 'AIphaCoin'];
  const regularNames = ['BaseRocket', 'MoonBase', 'BlueChip', 'DeFiMax', 'YieldFarm', 'LiquidBase', 'SwapPro', 'StakeHouse'];

  const tokens: Token[] = [];

  // AI launches via Bankr
  aiNames.forEach((name, i) => {
    tokens.push({
      id: `ai-${i}`,
      name,
      symbol: name.substring(0, 4).toUpperCase(),
      price: (Math.random() * 0.1).toFixed(6),
      volume24h: Math.floor(Math.random() * 500000) + 50000,
      change24h: (Math.random() * 200 - 50).toFixed(2),
      launchTime: Date.now() - Math.floor(Math.random() * 86400000),
      isAI: true,
      isBankr: true,
      holders: Math.floor(Math.random() * 1000) + 100,
      marketCap: Math.floor(Math.random() * 2000000) + 100000,
    });
  });

  // Regular launches
  regularNames.forEach((name, i) => {
    tokens.push({
      id: `reg-${i}`,
      name,
      symbol: name.substring(0, 4).toUpperCase(),
      price: (Math.random() * 0.05).toFixed(6),
      volume24h: Math.floor(Math.random() * 200000) + 10000,
      change24h: (Math.random() * 150 - 30).toFixed(2),
      launchTime: Date.now() - Math.floor(Math.random() * 172800000),
      isAI: false,
      isBankr: Math.random() > 0.7,
      holders: Math.floor(Math.random() * 500) + 50,
      marketCap: Math.floor(Math.random() * 500000) + 50000,
    });
  });

  return tokens.sort((a, b) => b.volume24h - a.volume24h);
};

function App() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setTokens(generateMockTokens());
      setIsLoading(false);
    }, 1500);
  }, []);

  const filteredTokens = tokens.filter(token => {
    if (filter === 'ai') return token.isAI;
    if (filter === 'bankr') return token.isBankr;
    return true;
  });

  const trendingTokens = [...tokens]
    .sort((a, b) => b.volume24h - a.volume24h)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="scanlines pointer-events-none fixed inset-0 z-50" />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-20" />

      {/* Glow orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-6 md:py-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <div className="loading-cube" />
              <p className="text-cyan-400 font-mono text-sm animate-pulse">
                SCANNING BASE CHAIN...
              </p>
            </div>
          ) : (
            <>
              <TrendingSection tokens={trendingTokens} />
              <FilterBar filter={filter} setFilter={setFilter} />
              <LaunchList tokens={filteredTokens} />
            </>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
