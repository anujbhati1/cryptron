import {
  ArrowUpDownIcon as ArrowsUpDownIcon,
  DollarSignIcon,
  HomeIcon,
  ListIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { Link } from "react-router";

export function MobileNav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] md:hidden'>
      <div className='flex justify-around items-center h-16'>
        <NavItem icon={<HomeIcon size={24} />} label='Home' href='#' />
        <NavItem icon={<ArrowsUpDownIcon size={24} />} label='Swap' href='#' />
        <NavItem
          icon={<DollarSignIcon size={24} />}
          label='Buy/Sell'
          href='#'
        />
        <NavItem
          icon={<ListIcon size={24} />}
          label='History'
          href='#'
          active
        />
        <NavItem
          icon={<MoreHorizontalIcon size={24} />}
          label='More'
          href='#'
        />
      </div>
    </nav>
  );
}

function NavItem({
  icon,
  label,
  href,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`flex flex-col items-center gap-1 ${
        active ? "text-[#00FF9D]" : "text-gray-400"
      }`}
    >
      {icon}
      <span className='text-xs'>{label}</span>
    </Link>
  );
}
