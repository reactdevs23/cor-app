export interface Token {
  logo: string; // URL or imported image
  symbol: string;
  name: string;
  address: string;
  source: string;
  decimals: number;
  featured?: boolean;
  balance?: number;
  usdBalance?: number;
  volume24h?: boolean;
}
