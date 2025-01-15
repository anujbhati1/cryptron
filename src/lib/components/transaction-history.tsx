const transactionsToday = [
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
const transactionsYesterday = [
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

export function TransactionHistory() {
  return (
    <div className='pb-20 md:pb-6 bg-[#1C1C1C] rounded-xl m-3'>
      {/* Search Section */}
      <div className='p-4 md:p-6'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h2 className='text-white text-base font-bold'>
              Transaction History
            </h2>
          </div>
          <div className='relative flex items-center lg:min-w-72'>
            <img
              src='/assets/search.svg'
              alt='Search'
              className='w-4 h-4 absolute left-3'
            />
            <input
              type='text'
              placeholder='Search'
              className='w-full text-xs h-10 bg-[#2A2A2A] rounded-lg pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00FF9D]'
            />
            <button className='absolute right-3'>
              <img src='/assets/filter.svg' alt='Search' className='w-6 h-6' />
            </button>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className='hidden md:flex items-center justify-between mb-6'>
          <div className='flex items-center gap-2'>
            <h3 className='text-white text-sm'>Applied Filters:</h3>
            <span className='text-gray-400 text-xs'>No Filter Applied</span>
          </div>
          <button className='border-[0.5px] border-red-600 flex items-center gap-2 text-white text-sm font-light rounded-md px-4 py-1.5'>
            <img
              src='/assets/download.svg'
              alt='Download CSV'
              className='w-4 h-4'
            />
            <p>Download CSV</p>
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className='space-y-4 px-4 md:px-6'>
        <div>
          <h3 className='text-white mb-4 text-sm font-light'>Today</h3>
          <div className='space-y-3'>
            {transactionsToday.map((transaction, index) => (
              <div
                key={index}
                className='flex items-center gap-4 p-3 rounded-lg bg-white/5'
              >
                <div className='w-10 h-10 flex items-center justify-center'>
                  <img
                    src={transaction.icon}
                    alt={transaction.type}
                    className='w-10 h-10'
                  />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <span className='text-white'>{transaction.type}</span>
                    <div className='text-xs text-gray-400 mt-1'>
                      Wallet: {transaction.wallet}
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span
                      className={`text-xs py-0.5 rounded ${
                        transaction.status === "Completed"
                          ? " text-green-500"
                          : transaction.status === "Failed"
                          ? " text-red-500"
                          : " text-yellow-500"
                      }`}
                    >
                      {transaction.status}
                    </span>
                    <div className='h-2 w-2 bg-gray-600 rounded-full mx-3'></div>
                    <span className='text-xs text-gray-400 '>
                      {transaction.date}
                    </span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-white'>${transaction.amount}</div>
                  <div className='text-xs text-white mt-1'>
                    {transaction.currency}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-white mb-4 text-sm font-light'>Yesterday</h3>
          <div className='space-y-3'>
            {transactionsYesterday.map((transaction, index) => (
              <div
                key={index}
                className='flex items-center gap-4 p-3 rounded-lg bg-white/5'
              >
                <div className='w-10 h-10 flex items-center justify-center'>
                  <img
                    src={transaction.icon}
                    alt={transaction.type}
                    className='w-10 h-10'
                  />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <span className='text-white'>{transaction.type}</span>
                    <div className='text-xs text-gray-400 mt-1'>
                      Wallet: {transaction.wallet}
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span
                      className={`text-xs py-0.5 rounded ${
                        transaction.status === "Completed"
                          ? " text-green-500"
                          : transaction.status === "Failed"
                          ? " text-red-500"
                          : " text-yellow-500"
                      }`}
                    >
                      {transaction.status}
                    </span>
                    <div className='h-2 w-2 bg-gray-600 rounded-full mx-3'></div>
                    <span className='text-xs text-gray-400 '>
                      {transaction.date}
                    </span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-white'>${transaction.amount}</div>
                  <div className='text-xs text-white mt-1'>
                    {transaction.currency}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
