import { Token } from '../types';

interface TrendingSectionProps {
  tokens: Token[];
}

export function TrendingSection({ tokens }: TrendingSectionProps) {
  const formatVolume = (vol: number) => {
    if (vol >= 1000000) return `$${(vol / 1000000).toFixed(2)}M`;
    if (vol >= 1000) return `$${(vol / 1000).toFixed(1)}K`;
    return `$${vol}`;
  };

  return (
    <section className="mb-8 md:mb-10">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
            TRENDING <span className="text-orange-400">NOW</span>
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
        <span className="text-[10px] md:text-xs text-gray-500 font-mono">TOP VOLUME</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
        {tokens.map((token, index) => (
          <div
            key={token.id}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Pulse ring for #1 */}
            {index === 0 && (
              <div className="absolute inset-0 rounded-xl border-2 border-orange-400/50 animate-pulse" />
            )}

            <div className="relative p-3 md:p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-orange-400/60">#{index + 1}</span>
                  {token.isAI && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-purple-500/20 text-purple-400 rounded">
                      AI
                    </span>
                  )}
                </div>
                <span className={`text-xs font-bold ${parseFloat(token.change24h) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {parseFloat(token.change24h) >= 0 ? '+' : ''}{token.change24h}%
                </span>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white mb-1 truncate">{token.name}</h3>
              <p className="text-xs text-gray-500 font-mono mb-3">${token.symbol}</p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                <span className="text-[10px] md:text-xs text-gray-500">24h Vol</span>
                <span className="text-sm md:text-base font-bold text-orange-400 font-mono">
                  {formatVolume(token.volume24h)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
