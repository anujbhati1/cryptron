import { AssetsList } from "@/lib/components/asset-list";
import { CryptoChart } from "@/lib/components/crypto-chart";
import { Header } from "@/lib/components/header";
import { MobileNav } from "@/lib/components/mobile-nav";
import { Sidebar } from "@/lib/components/sidebar";
import { TransactionsList } from "@/lib/components/transactions-list";
import {
  assets,
  chartData,
  quickTransfer,
  transactions,
} from "@/lib/constants";

function App() {
  return (
    <div className='flex min-h-screen bg-[#141414]'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <main className='mb-2 px-4 py-2 max-lg:mb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
            <div className='col-span-1'>
              <div className='lg:bg-[#1C1C1C] rounded-xl lg:p-6'>
                <div className='max-lg:bg-[#1C1C1C] max-lg:p-3 max-lg:rounded-xl'>
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
                </div>

                <div className='lg:hidden flex flex-shrink-0 overflow-x-scroll w-full mt-5 gap-4 mb-6 no-scrollbar'>
                  {Object.values(chartData).map((data) => (
                    <CryptoChart key={data.symbol} {...data} />
                  ))}
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

            <div className='hidden lg:block col-span-2'>
              <div className='grid grid-cols-4 gap-4 mb-6'>
                {Object.values(chartData).map((data) => (
                  <CryptoChart key={data.symbol} {...data} />
                ))}
              </div>

              <div className='hidden lg:block bg-[#1C1C1C] rounded-xl p-6'>
                <TransactionsList transactions={transactions} />
              </div>
            </div>
          </div>
        </main>
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
