import { Token } from '../types';

interface LaunchListProps {
  tokens: Token[];
}

export function LaunchList({ tokens }: LaunchListProps) {
  const formatVolume = (vol: number) => {
    if (vol >= 1000000) return `$${(vol / 1000000).toFixed(2)}M`;
    if (vol >= 1000) return `$${(vol / 1000).toFixed(1)}K`;
    return `$${vol}`;
  };

  const formatMarketCap = (mc: number) => {
    if (mc >= 1000000) return `$${(mc / 1000000).toFixed(2)}M`;
    if (mc >= 1000) return `$${(mc / 1000).toFixed(0)}K`;
    return `$${mc}`;
  };

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return `${Math.floor(diff / 60000)}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
          NEW <span className="text-cyan-400">LAUNCHES</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
        <span className="text-[10px] md:text-xs text-gray-500 font-mono">{tokens.length} FOUND</span>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        {tokens.map((token, index) => (
          <div
            key={token.id}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                  token.isAI
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-cyan-500/20 text-cyan-400'
                }`}>
                  {token.symbol.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white">{token.name}</h3>
                  <p className="text-xs text-gray-500 font-mono">${token.symbol}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                {token.isAI && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono bg-purple-500/20 text-purple-400 rounded">
                    AI
                  </span>
                )}
                {token.isBankr && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono bg-cyan-500/20 text-cyan-400 rounded">
                    BANKR
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[10px] text-gray-500 mb-1">PRICE</p>
                <p className="font-mono text-white">${token.price}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-1">24H VOL</p>
                <p className="font-mono text-cyan-400">{formatVolume(token.volume24h)}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-1">MCAP</p>
                <p className="font-mono text-white">{formatMarketCap(token.marketCap)}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-1">24H</p>
                <p className={`font-mono font-bold ${parseFloat(token.change24h) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {parseFloat(token.change24h) >= 0 ? '+' : ''}{token.change24h}%
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800">
              <span className="text-xs text-gray-500">{token.holders} holders</span>
              <span className="text-xs text-gray-500">{formatTime(token.launchTime)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">Token</th>
              <th className="text-right py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">Price</th>
              <th className="text-right py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">24h Vol</th>
              <th className="text-right py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">24h</th>
              <th className="text-right py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">MCap</th>
              <th className="text-right py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">Holders</th>
              <th className="text-right py-3 px-4 text-xs font-mono text-gray-500 uppercase tracking-wider">Launched</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => (
              <tr
                key={token.id}
                className="border-b border-gray-800/50 hover:bg-white/5 transition-colors cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                      token.isAI
                        ? 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30'
                        : 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30'
                    } transition-colors`}>
                      {token.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{token.name}</span>
                        {token.isAI && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono bg-purple-500/20 text-purple-400 rounded">
                            AI
                          </span>
                        )}
                        {token.isBankr && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono bg-cyan-500/20 text-cyan-400 rounded">
                            BANKR
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 font-mono">${token.symbol}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-mono text-white">
                  ${token.price}
                </td>
                <td className="py-4 px-4 text-right font-mono text-cyan-400 font-bold">
                  {formatVolume(token.volume24h)}
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`font-mono font-bold ${parseFloat(token.change24h) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {parseFloat(token.change24h) >= 0 ? '+' : ''}{token.change24h}%
                  </span>
                </td>
                <td className="py-4 px-4 text-right font-mono text-gray-300">
                  {formatMarketCap(token.marketCap)}
                </td>
                <td className="py-4 px-4 text-right font-mono text-gray-400">
                  {token.holders.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-right text-sm text-gray-500">
                  {formatTime(token.launchTime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
