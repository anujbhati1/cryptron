import {
  ArrowLeftRight,
  BookOpen,
  DollarSign,
  History,
  LayoutDashboard,
  LogOut,
  ReceiptIcon,
  Send,
  Settings,
  Wallet,
} from "lucide-react";
import { cn } from "../styles/utils";

const menuItems = [
  {
    title: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard!" },
      { icon: Wallet, label: "Wallet" },
      { icon: Send, label: "Send" },
      { icon: ReceiptIcon, label: "Receive" },
      { icon: ArrowLeftRight, label: "Swap" },
      { icon: DollarSign, label: "Buy/Sell" },
      { icon: BookOpen, label: "Address book" },
      { icon: History, label: "Transaction History" },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className='w-64 bg-gray-900 min-h-[calc(100vh-73px)] p-4'>
      {menuItems.map((section) => (
        <div key={section.title} className='mb-6'>
          <div className='text-sm text-gray-400 mb-2'>{section.title}</div>
          {section.items.map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800",
                item.label === "Wallet" && "bg-gray-800 text-white"
              )}
            >
              <item.icon className='w-5 h-5' />
              {item.label}
            </button>
          ))}
        </div>
      ))}
      <div className='mt-auto pt-6 border-t border-gray-800'>
        <button className='flex items-center gap-3 w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800'>
          <Settings className='w-5 h-5' />
          Settings
        </button>
        <button className='flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-500 hover:bg-gray-800'>
          <LogOut className='w-5 h-5' />
          Logout
        </button>
      </div>
    </div>
  );
}
