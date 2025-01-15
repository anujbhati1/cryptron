import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpDownIcon as ArrowsUpDownIcon,
  BookIcon,
  DollarSignIcon,
  HomeIcon,
  ListIcon,
  LogOutIcon,
  SettingsIcon,
  WalletIcon,
} from "lucide-react";
import { Link } from "react-router";

export function Sidebar() {
  return (
    <aside className='hidden md:flex w-[240px] bg-[#1C1C1C] h-screen flex-col'>
      <div className='p-4 flex items-center gap-2'>
        <img
          src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wallet2.jpg-OCGbwGhEvvUsBoBNvZnrRfAoBAPctr.jpeg'
          alt='Logo'
          className='w-8 h-8'
        />
        <span className='text-white text-xl font-medium'>Crpytron</span>
      </div>

      <div className='mt-8'>
        <p className='text-gray-500 text-sm px-4 mb-2'>Main</p>
        <nav className='space-y-1'>
          <NavItem icon={<HomeIcon size={20} />} label='Dashboard' />
          <NavItem icon={<WalletIcon size={20} />} label='Wallet' />
          <NavItem icon={<ArrowUpIcon size={20} />} label='Send' />
          <NavItem icon={<ArrowDownIcon size={20} />} label='Receive' />
          <NavItem icon={<ArrowsUpDownIcon size={20} />} label='Swap' />
          <NavItem icon={<DollarSignIcon size={20} />} label='Buy/Sell' />
          <NavItem icon={<BookIcon size={20} />} label='Address book' />
          <NavItem
            icon={<ListIcon size={20} />}
            label='Transaction History'
            active
          />
        </nav>
      </div>

      <div className='mt-auto mb-4 space-y-1'>
        <NavItem icon={<SettingsIcon size={20} />} label='Settings' />
        <NavItem
          icon={<LogOutIcon size={20} />}
          label='Logout'
          className='text-red-500'
        />
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  active,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <Link
      to='#'
      className={`flex items-center gap-3 px-4 py-2 text-sm ${
        active
          ? "bg-[#2A2A2A] text-white"
          : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
      } transition-colors ${className}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
