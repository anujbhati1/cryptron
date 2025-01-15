import { AssetsList } from "@/lib/components/asset-list";
import { CryptoChart } from "@/lib/components/crypto-chart";
import { Header } from "@/lib/components/header";
import { Sidebar } from "@/lib/components/sidebar";
import { TransactionsList } from "@/lib/components/transactions-list";
import { ChartData, CryptoAsset, Transaction } from "@/lib/types";

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
    color: "#627EEA",
    data: [45, 59, 30, 81, 56, 55, 40],
    icon: "/assets/eth-icon.svg",
  },
  TRX: {
    symbol: "TRX",
    price: 76296.6,
    change: "-0.01%",
    color: "#FF0013",
    data: [65, 59, 80, 31, 56, 25, 40],
    icon: "/assets/tron-icon.svg",
  },
  SOL: {
    symbol: "SOL",
    price: 76296.6,
    change: "+0.01%",
    color: "#00FFA3",
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

const quickTransfer: { id: number; icon: string }[] = [
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

function App() {
  return (
    <div className='flex min-h-screen bg-[#141414]'>
      <Sidebar />

      <div className='flex-1'>
        <Header />

        <div className='grid grid-cols-3 gap-4 mb-2 px-4 py-2'>
          <div className='col-span-1'>
            <div className='bg-[#1C1C1C] rounded-xl p-6'>
              <div className='text-center'>
                <div className='text-white text-sm font-light mb-2'>
                  Total balance
                </div>
                <div className='text-2xl text-white font-extrabold mb-8 mt-4'>
                  $81,910.00
                </div>
              </div>

              <div className='grid grid-cols-4 gap-4'>
                <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                  <img
                    src='/assets/send-icon.svg'
                    className='w-5 h-5 text-red-700'
                    alt='Vite Logo'
                  />
                  <span className='text-xs text-white'>Send</span>
                </button>
                <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                  <img
                    src='/assets/received.svg'
                    className='w-5 h-5 text-red-700'
                    alt='Vite Logo'
                  />
                  <span className='text-xs text-white'>Receive</span>
                </button>
                <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                  <img
                    src='/assets/swap.svg'
                    className='w-5 h-5 text-red-700'
                    alt='Vite Logo'
                  />
                  <span className='text-xs text-white'>Swap</span>
                </button>
                <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                  <img
                    src='/assets/buy.svg'
                    className='w-5 h-5 text-red-700'
                    alt='Vite Logo'
                  />
                  <span className='text-xs text-white'>Buy</span>
                </button>
              </div>

              <div className='mt-6'>
                <div className='text-white text-sm mb-4 font-light'>
                  Quick transfer
                </div>
                <div className='flex space-x-4'>
                  {quickTransfer.map((item) => (
                    <div key={item.id} className='w-10 h-10 rounded-full'>
                      <img
                        src={item.icon}
                        alt={`Contact ${item}`}
                        className='w-full h-full rounded-full'
                      />
                    </div>
                  ))}
                </div>
              </div>

              <AssetsList assets={assets} />
            </div>
          </div>

          <div className='col-span-2'>
            <div className='grid grid-cols-4 gap-4 mb-6'>
              {Object.values(chartData).map((data) => (
                <CryptoChart key={data.symbol} {...data} />
              ))}
            </div>

            <div className='bg-[#1C1C1C] rounded-xl p-6'>
              <TransactionsList transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
