export interface TokenInfo {
  symbol: string;
  logo: string;
  amount: number;
}

// Single transaction item
export interface Transaction {
  pair: {
    from: TokenInfo;
    to: TokenInfo;
  };
  date: string;
  status: "Completed" | "Pending" | "Failed";
}
export interface TransactionType {
  title: string;
  duration: string;
}
