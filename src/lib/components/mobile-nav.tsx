import { Link, useLocation } from "react-router";
import { cn } from "../styles/utils";

export function MobileNav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-[#1C1C1C] lg:hidden rounded-t-3xl py-2'>
      <div className='flex justify-around items-center h-16'>
        <NavItem
          icon={"/assets/home.svg"}
          iconActive={"/assets/home-red.svg"}
          label='Home'
          href='/dashboard'
        />
        <NavItem
          icon={"/assets/swap.svg"}
          iconActive={"/assets/swap-red.svg"}
          label='Swap'
          href='#'
        />
        <NavItem
          icon={"/assets/buy.svg"}
          iconActive={"/assets/buy-red.svg"}
          label='Buy/Sell'
          href='#'
        />
        <NavItem
          icon={"/assets/transaction.svg"}
          iconActive={"/assets/transaction-red.svg"}
          label='History'
          href='/transaction-history'
        />
        <NavItem
          icon={"/assets/wallet.svg"}
          iconActive={"/assets/wallet-red.svg"}
          label='Wallet'
          href='/wallet'
        />
      </div>
    </nav>
  );
}

function NavItem({
  icon,
  label,
  href,
  iconActive,
}: {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  iconActive?: string;
}) {
  const pathname = useLocation().pathname;
  return (
    <Link
      to={href}
      className={`flex flex-col items-center gap-1 ${
        href === pathname ? "text-white" : "text-gray-400"
      }`}
    >
      <div className='flex flex-col items-center gap-1'>
        <div
          className={cn("h-2 w-5 mb-1.5 bg-[#1C1C1C] rounded-b", {
            "bg-red-600": href === pathname,
          })}
        ></div>
        <div>
          {href === pathname ? (
            <img src={iconActive} alt={label} className={`w-6 h-6`} />
          ) : (
            <img src={icon} alt={label} className={`w-6 h-6 brightness-50`} />
          )}
        </div>
        <div>
          <span className='text-xs'>{label}</span>
        </div>
      </div>
    </Link>
  );
}
