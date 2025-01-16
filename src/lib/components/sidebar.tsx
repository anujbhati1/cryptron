const navItems = [
  { label: "Dashboard", icon: "/assets/home.svg", active: true },
  { label: "Wallet", icon: "/assets/wallet.svg" },
  { label: "Send", icon: "/assets/send-icon.svg" },
  { label: "Receive", icon: "/assets/received.svg" },
  { label: "Swap", icon: "/assets/swap.svg" },
  { label: "Buy/Sell", icon: "/assets/buy.svg" },
  { label: "Address book", icon: "/assets/address-book.svg" },
  { label: "Transaction History", icon: "/assets/transaction.svg" },
];

export function Sidebar() {
  return (
    <div className='hidden w-64 bg-[#1C1C1C] min-h-lvh lg:flex flex-col'>
      <div className='p-6 border-b border-white/5'>
        <div className='flex items-center gap-1'>
          <img
            src={"/assets/crpytron-logo.svg"}
            alt='Logout'
            className='w-7 h-7'
          />
          <span className='text-white text-xl font-semibold'>Crypton</span>
        </div>
      </div>

      <div className='px-4 py-2'>
        <span className='text-gray-400 text-xs px-4'>Main</span>
        <nav className='mt-2 space-y-1'>
          {navItems.map((item) => (
            <div>
              <a
                href={"#"}
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <div className='flex justify-center items-center gap-3 text-xs font-light'>
                  <img src={item.icon} alt='Logout' className='w-5 h-5' />
                  {item.label}
                </div>
              </a>
            </div>
          ))}
        </nav>
      </div>

      <div className='mt-auto px-4 pt-6 pb-8 space-y-1'>
        <a
          href='#'
          className='flex items-center gap-3 px-4 py-2 rounded-lg text-xs text-white font-light hover:bg-white/5'
        >
          <img src='/assets/settings.svg' alt='Logout' className='w-5 h-5' />
          Settings
        </a>
        <a
          href='#'
          className='flex items-center gap-3 px-4 py-2 rounded-lg text-xs text-red-700 hover:bg-white/5'
        >
          <img src='/assets/logout.svg' alt='Logout' className='w-5 h-5' />
          Logout
        </a>
      </div>
    </div>
  );
}
