export interface CryptoAsset {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  amount: number;
  value: number;
  icon: string;
}

export interface Transaction {
  type: "Receive" | "Withdraw" | "Swap" | "Buy";
  status: "Completed" | "Pending" | "Failed";
  amount: number | string;
  currency: string;
  wallet: string;
  date: string;
  icon: string;
}

export interface CryptoChartData {
  symbol: string;
  price: number;
  change: string;
  color: string;
  data: number[];
  icon: string;
}

export type ChartData = Record<string, CryptoChartData>;
