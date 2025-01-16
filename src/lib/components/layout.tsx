import { Bell, ChevronLeft } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { Sidebar } from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='flex items-center justify-between px-6 py-4 border-b border-gray-800'>
        <div className='flex items-center gap-4'>
          <ChevronLeft className='w-5 h-5' />
          <div className='flex items-center gap-2'>
            <img
              src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wallet.jpg-zaqq52Qri60GtblUwJc425BmgBLVrX.jpeg'
              alt='Crpytron'
              className='h-8 w-8'
            />
            <h1 className='text-xl font-semibold'>Welcome to Crypton Wallet</h1>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <span className='bg-red-900/50 text-red-500 px-2 py-1 rounded-md text-xs font-medium'>
            Unverified
          </span>
          <Button variant='ghost' className='p-2'>
            <Bell className='w-5 h-5' />
          </Button>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center'>
              JD
            </div>
            <div className='text-sm'>
              <div>Jhon David</div>
              <div className='text-gray-400'>jdavid@email.com</div>
            </div>
          </div>
        </div>
      </header>
      <div className='flex'>
        <Sidebar />
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </div>
  );
}
