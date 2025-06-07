import { Token } from "@/types/token";
import { bitCoinLogo, ethereumLogo, solanaLogo, usdtLogo } from "@/images";
import { Transaction, TransactionType } from "@/types/transactonData";

const tokenList: Token[] = [
  {
    logo: solanaLogo,
    symbol: "SOL",
    name: "Solana",
    address: "So11111111111111111111111111111111111111112",
    source: "pumpfun",
    decimals: 9,
    featured: true,
    balance: 4.27,
    usdBalance: 642.83,
    volume24h: false,
  },
  {
    logo: "https://img-v1.raydium.io/icon/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo.png",
    symbol: "PYUSD",
    name: "PayPal USD",
    address: "2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo",
    source: "pumpfun",
    decimals: 6,
    featured: true,
    balance: 1500,
    usdBalance: 1500,
  },
  {
    logo: "https://staking.buzzswap.io/assets/logo-CCgVqIyy.png",
    symbol: "XBUZZ",
    name: "XBuzz",
    address: "Bg1MwHzZusomQqqFsGKkhjqj3tiefjXu4YFemPmWM4dg",
    source: "pumpfun",
    decimals: 6,
    featured: true,
    balance: 12500,
    usdBalance: 87.5,
  },
  {
    logo: "https://img-v1.raydium.io/icon/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk.png",
    symbol: "ETH",
    name: "Wrapped Ethereum (Sollet)",
    address: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
    source: "pumpfun",
    decimals: 6,
    featured: true,
    balance: 0.42,
    usdBalance: 1260.0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg.png",
    symbol: "EUROe",
    name: "EUROe Stablecoin",
    address: "2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg",
    source: "pumpfun",
    decimals: 6,
    balance: 0,
    usdBalance: 0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv.png",
    symbol: "PENGU",
    name: "Pudgy Penguins",
    address: "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
    source: "pumpfun",
    decimals: 6,
    balance: 350,
    usdBalance: 52.5,
  },
  {
    logo: "https://img-v1.raydium.io/icon/333iHoRM2Awhf9uVZtSyTfU8AekdGrgQePZsKMFPgKmS.png",
    symbol: "ISOLA",
    name: "Intersola",
    address: "333iHoRM2Awhf9uVZtSyTfU8AekdGrgQePZsKMFPgKmS",
    source: "pumpfun",
    decimals: 6,
    balance: 0,
    usdBalance: 0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR.png",
    symbol: "LIKE",
    name: "LIKE",
    address: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
    source: "pumpfun",
    decimals: 9,
    balance: 1200,
    usdBalance: 24.0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3eamaYJ7yicyRd3mYz4YeNyNPGVo6zMmKUp5UP25AxRM.png",
    symbol: "NIRV",
    name: "Nirvana NIRV",
    address: "3eamaYJ7yicyRd3mYz4YeNyNPGVo6zMmKUp5UP25AxRM",
    source: "pumpfun",
    decimals: 6,
    balance: 0,
    usdBalance: 0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc.png",
    symbol: "CHEEMS",
    name: "Cheems",
    address: "3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc",
    source: "pumpfun",
    decimals: 4,
    balance: 500000,
    usdBalance: 75.0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3HCp6NoJnUaG6JtEDmRkxTM3uA8YB6JiM9C3HcUSEHe8.png",
    symbol: "SolBTC",
    name: "Solana BTC",
    address: "3HCp6NoJnUaG6JtEDmRkxTM3uA8YB6JiM9C3HcUSEHe8",
    source: "pumpfun",
    decimals: 10,
    balance: 0.005,
    usdBalance: 300.0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3joMReCCSESngJEpFLoKR2dNcChjSRCDtybQet5uSpse.png",
    symbol: "CAT",
    name: "Simon's Cat",
    address: "3joMReCCSESngJEpFLoKR2dNcChjSRCDtybQet5uSpse",
    source: "pumpfun",
    decimals: 6,
    balance: 0,
    usdBalance: 0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB.png",
    symbol: "YFI",
    name: "Wrapped YFI (Sollet)",
    address: "3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB",
    source: "pumpfun",
    decimals: 6,
    balance: 0.002,
    usdBalance: 120.0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE.png",
    symbol: "XCOPE",
    name: "XCOPE",
    address: "3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE",
    source: "pumpfun",
    decimals: 0,
    balance: 150,
    usdBalance: 22.5,
  },
  {
    logo: "https://img-v1.raydium.io/icon/49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt.png",
    symbol: "SAND",
    name: "SAND (Wormhole)",
    address: "49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt",
    source: "pumpfun",
    decimals: 8,
    balance: 85,
    usdBalance: 42.5,
  },
  {
    logo: "https://img-v1.raydium.io/icon/4BVrtjWqPsn4oyWDsB8oCLiS5DJN8Wwhmy4RKEzpys4u.png",
    symbol: "1000X",
    name: "1000x by Virtuals (Wormhole)",
    address: "4BVrtjWqPsn4oyWDsB8oCLiS5DJN8Wwhmy4RKEzpys4u",
    source: "pumpfun",
    decimals: 8,
    balance: 0,
    usdBalance: 0,
  },
  {
    logo: "https://img-v1.raydium.io/icon/4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y.png",
    symbol: "SNY",
    name: "Synthetify",
    address: "4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y",
    source: "pumpfun",
    decimals: 6,
    balance: 0,
    usdBalance: 0,
  },
];
const transactionTypes: TransactionType[] = [
  { title: "Slow", duration: "5-10 min" },
  { title: "Normal", duration: "1-3 min" },
  { title: "Fast", duration: "10-30 sec" },
];
const transactionsData: Transaction[] = [
  {
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo, amount: 1.25 },
      to: { symbol: "USDT", logo: usdtLogo, amount: 3450.75 },
    },

    date: "May 6, 2025 - 3:24 PM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "BTC", logo: bitCoinLogo, amount: 0.05 },
      to: { symbol: "ETH", logo: ethereumLogo, amount: 1.52 },
    },

    date: "June 6, 2025 - 9:14 AM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "USDT", logo: usdtLogo, amount: 500 },
      to: { symbol: "SOL", logo: solanaLogo, amount: 0.05 },
    },

    date: "June 6, 2025 - 4:51 PM",
    status: "Pending",
  },
  {
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo, amount: 1.25 },
      to: { symbol: "USDT", logo: usdtLogo, amount: 3450.75 },
    },

    date: "June 6, 2025 - 3:24 PM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "BTC", logo: bitCoinLogo, amount: 0.05 },
      to: { symbol: "ETH", logo: ethereumLogo, amount: 1.52 },
    },

    date: "June 6, 2025 - 9:14 AM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "USDT", logo: usdtLogo, amount: 500 },
      to: { symbol: "SOL", logo: solanaLogo, amount: 0.05 },
    },

    date: "June 6, 2025 - 4:51 PM",
    status: "Pending",
  },
  {
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo, amount: 1.25 },
      to: { symbol: "USDT", logo: usdtLogo, amount: 3450.75 },
    },

    date: "June 6, 2025 - 3:24 PM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "BTC", logo: bitCoinLogo, amount: 0.05 },
      to: { symbol: "ETH", logo: ethereumLogo, amount: 1.52 },
    },

    date: "June 6, 2025 - 9:14 AM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "USDT", logo: usdtLogo, amount: 500 },
      to: { symbol: "SOL", logo: solanaLogo, amount: 0.05 },
    },

    date: "June 6, 2025 - 4:51 PM",
    status: "Pending",
  },
  {
    pair: {
      from: { symbol: "ETH", logo: ethereumLogo, amount: 1.25 },
      to: { symbol: "USDT", logo: usdtLogo, amount: 3450.75 },
    },

    date: "June 6, 2025 - 3:24 PM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "BTC", logo: bitCoinLogo, amount: 0.05 },
      to: { symbol: "ETH", logo: ethereumLogo, amount: 1.52 },
    },

    date: "June 6, 2025 - 9:14 AM",
    status: "Completed",
  },
  {
    pair: {
      from: { symbol: "USDT", logo: usdtLogo, amount: 500 },
      to: { symbol: "SOL", logo: solanaLogo, amount: 0.05 },
    },

    date: "June 6, 2025 - 4:51 PM",
    status: "Failed",
  },
];

export { transactionTypes, tokenList, transactionsData };
