export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: string;
  volume24h: number;
  change24h: string;
  launchTime: number;
  isAI: boolean;
  isBankr: boolean;
  holders: number;
  marketCap: number;
}

export type FilterType = 'all' | 'ai' | 'bankr';
