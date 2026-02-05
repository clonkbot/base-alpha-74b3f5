import { FilterType } from '../types';

interface FilterBarProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export function FilterBar({ filter, setFilter }: FilterBarProps) {
  const filters: { value: FilterType; label: string; icon: string }[] = [
    { value: 'all', label: 'ALL LAUNCHES', icon: '◉' },
    { value: 'ai', label: 'AI TOKENS', icon: '◈' },
    { value: 'bankr', label: 'VIA BANKR', icon: '◇' },
  ];

  return (
    <div className="mb-6 md:mb-8">
      <div className="flex flex-wrap gap-2 md:gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`
              flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-lg font-mono text-xs md:text-sm
              transition-all duration-300 min-h-[44px]
              ${filter === f.value
                ? f.value === 'ai'
                  ? 'bg-purple-500/20 border-2 border-purple-500 text-purple-300 shadow-lg shadow-purple-500/20'
                  : f.value === 'bankr'
                  ? 'bg-cyan-500/20 border-2 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/10 border-2 border-white/50 text-white'
                : 'bg-gray-900/50 border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300'
              }
            `}
          >
            <span className={filter === f.value ? 'opacity-100' : 'opacity-50'}>{f.icon}</span>
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
