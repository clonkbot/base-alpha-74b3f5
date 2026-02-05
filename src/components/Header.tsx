export function Header() {
  return (
    <header className="border-b border-cyan-900/50 bg-black/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-cyan-400">BASE</span>
                <span className="text-white">_</span>
                <span className="text-emerald-400">ALPHA</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 font-mono tracking-widest">
                REAL-TIME LAUNCH SCANNER
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs font-mono">LIVE</span>
            </div>
            <div className="px-2 md:px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <span className="text-cyan-400 text-xs font-mono">BASE</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
