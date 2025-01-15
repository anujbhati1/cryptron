import { Transaction } from "../types";

interface TransactionsListProps {
  transactions: Transaction[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  return (
    <div className=''>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-white text-base font-medium'>
          Recent Transactions
        </h2>
        <button className='text-gray-400 text-xs hover:text-white'>
          View All Transactions
        </button>
      </div>
      <div className='space-y-2.5'>
        {transactions.map((transaction, index) => (
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
  );
}
