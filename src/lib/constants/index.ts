import {
  ChartData,
  Coin,
  CryptoAsset,
  MockChartData,
  QuickTransferType,
  Transaction,
} from "../types";

const chartData: ChartData = {
  BTC: {
    symbol: "BTC",
    price: 76296.6,
    change: "-0.01%",
    color: "#F7931A",
    data: [65, 59, 80, 81, 56, 55, 40, 56, 40],
    icon: "/assets/btc-icon.svg",
  },
  ETH: {
    symbol: "ETH",
    price: 76296.6,
    change: "-0.01%",
    color: "#637EEA",
    data: [45, 59, 30, 81, 56, 55, 40],
    icon: "/assets/eth-icon.svg",
  },
  TRX: {
    symbol: "TRX",
    price: 76296.6,
    change: "-0.01%",
    color: "#EC0A27",
    data: [65, 59, 80, 31, 56, 25, 40],
    icon: "/assets/tron-icon.svg",
  },
  SOL: {
    symbol: "SOL",
    price: 76296.6,
    change: "+0.01%",
    color: "#16BD9C",
    data: [65, 59, 40, 81, 56, 55, 80],
    icon: "/assets/sol-icon.svg",
  },
};

const assets: CryptoAsset[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 76296.6,
    change: -0.01,
    amount: 1.2,
    value: 80399.12,
    icon: "/assets/btc-icon.svg",
  },
  {
    id: 2,
    name: "Tron",
    symbol: "TRX",
    price: 225.85,
    change: 0.01,
    amount: 15,
    value: 3375.67,
    icon: "/assets/tron-icon.svg",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: 225.85,
    change: 0.01,
    amount: 15,
    value: 3375.67,
    icon: "/assets/sol-icon.svg",
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    price: 225.85,
    change: 0.01,
    amount: 15,
    value: 3375.67,
    icon: "/assets/polygon-icon.svg",
  },
  {
    id: 5,
    name: "Binance",
    symbol: "BNB",
    price: 225.85,
    change: 0.01,
    amount: 15,
    value: 3375.67,
    icon: "/assets/binance-icon.svg",
  },
];

const transactions: Transaction[] = [
  {
    type: "Receive",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/t-received.svg",
  },
  {
    type: "Withdraw",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/t-send.svg",
  },
  {
    type: "Swap",
    status: "Failed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/btc-swap.svg",
  },
  {
    type: "Buy",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/sol-buy.svg",
  },
  {
    type: "Withdraw",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/btc-swap.svg",
  },
  {
    type: "Withdraw",
    status: "Pending",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/btc-swap.svg",
  },
];

const quickTransfer: QuickTransferType[] = [
  {
    id: 1,
    icon: "/assets/user1.svg",
  },
  {
    id: 2,
    icon: "/assets/user2.svg",
  },
  {
    id: 3,
    icon: "/assets/user3.svg",
  },
  {
    id: 4,
    icon: "/assets/user4.svg",
  },
  {
    id: 5,
    icon: "/assets/user5.svg",
  },
  {
    id: 6,
    icon: "/assets/plus-circle-dotted.svg",
  },
];

const transactionsToday: Transaction[] = [
  {
    type: "Receive",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/t-received.svg",
  },
  {
    type: "Swap",
    status: "Failed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/btc-swap.svg",
  },
  {
    type: "Buy",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/sol-buy.svg",
  },
];

const transactionsYesterday: Transaction[] = [
  {
    type: "Withdraw",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/btc-swap.svg",
  },

  {
    type: "Withdraw",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/t-send.svg",
  },

  {
    type: "Buy",
    status: "Completed",
    amount: 500,
    currency: "500.00 USDT",
    wallet: "bvdw355509*********4gbnwou432m",
    date: "25 Sep 2024",
    icon: "/assets/sol-buy.svg",
  },
];

const mockChartData: MockChartData[] = [
  { date: "21/09", value: 60 },
  { date: "21/09", value: 65 },
  { date: "21/09", value: 45 },
  { date: "21/09", value: 75 },
  { date: "21/09", value: 95 },
  { date: "21/09", value: 85 },
  { date: "21/09", value: 70 },
];

const coins: Coin[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "1.2",
    value: "$80,399.12",
    address: "bvdw355509********4gbnwou432m",
    icon: "/assets/btc-icon.svg",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    balance: "1.2",
    value: "$80,399.12",
    address: "bvdw355509********4gbnwou432m",
    icon: "/assets/binance-icon.svg",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "1.2",
    value: "$80,399.12",
    address: "bvdw355509********4gbnwou432m",
    icon: "/assets/eth-icon.svg",
  },
  {
    symbol: "TRX",
    name: "Tron",
    balance: "1.2",
    value: "$80,399.12",
    address: "bvdw355509********4gbnwou432m",
    icon: "/assets/tron-icon.svg",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    balance: "1.2",
    value: "$80,399.12",
    address: "bvdw355509********4gbnwou432m",
    icon: "/assets/binance-icon.svg",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "1.2",
    value: "$80,399.12",
    address: "bvdw355509********4gbnwou432m",
    icon: "/assets/eth-icon.svg",
  },
];

export {
  chartData,
  assets,
  transactions,
  quickTransfer,
  transactionsToday,
  transactionsYesterday,
  mockChartData,
  coins,
};
