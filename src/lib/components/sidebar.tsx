import { Link, useLocation } from "react-router";

const navItems = [
  {
    label: "Dashboard",
    icon: "/assets/home.svg",
    iconActive: "/assets/home-red.svg",
    href: "/dashboard",
  },
  {
    label: "Wallet",
    icon: "/assets/wallet.svg",
    iconActive: "/assets/wallet-red.svg",
    href: "/wallet",
  },
  {
    label: "Send",
    icon: "/assets/send-icon.svg",
    iconActive: "/assets/send-icon.svg",
    href: "#",
  },
  {
    label: "Receive",
    icon: "/assets/received.svg",
    iconActive: "/assets/received.svg",
    href: "#",
  },
  {
    label: "Swap",
    icon: "/assets/swap.svg",
    iconActive: "/assets/swap.svg",
    href: "#",
  },
  {
    label: "Buy/Sell",
    icon: "/assets/buy.svg",
    iconActive: "/assets/buy.svg",
    href: "#",
  },
  {
    label: "Address book",
    icon: "/assets/address-book.svg",
    iconActive: "/assets/address-book.svg",
    href: "#",
  },
  {
    label: "Transaction History",
    icon: "/assets/transaction.svg",
    iconActive: "/assets/transaction-red.svg",
    href: "/transaction-history",
  },
];

export function Sidebar() {
  const pathname = useLocation().pathname;

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
              <Link
                to={item.href}
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                  item.href === pathname
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <div className='flex justify-center items-center gap-3 text-xs font-light'>
                  {item.href === pathname ? (
                    <img
                      src={item.iconActive}
                      alt={item.label}
                      className={'"w-5 h-5'}
                    />
                  ) : (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={'"w-5 h-5'}
                    />
                  )}
                  {item.label}
                </div>
              </Link>
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
