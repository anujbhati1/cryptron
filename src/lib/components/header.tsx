export function Header() {
  return (
    <header className='max-lg:m-5 max-lg:rounded-xl flex items-center justify-between mb-2 bg-[#1C1C1C] px-3 lg:px-4 lg:py-3.5 py-2 lg:border-l border-white/5'>
      <h1 className='hidden lg:block text-2xl text-white font-medium'>
        Welcome to Crypton Wallet
      </h1>
      <div className='flex max-lg:w-full max-lg:flex-row-reverse items-center gap-4 max-lg:justify-between'>
        <button className='hidden px-2 py-2 text-sm border border-red-500 text-red-700 bg-red-500/5 rounded-lg lg:flex items-center gap-1'>
          <img
            src='/assets/security-user.svg'
            className='w-5 h-5 text-red-700'
            alt='Vite Logo'
          />
          <span className='text-xs'>Unverified</span>
        </button>
        <button className='hidden w-10 h-10 rounded-lg border border-gray-800 items-center justify-center lg:flex'>
          <div className='relative'>
            <img
              src='/assets/language.svg'
              className='w-7 h-7 text-red-700'
              alt='Vite Logo'
            />
          </div>
        </button>
        <button className='w-10 h-10 rounded-lg border border-gray-800 flex items-center justify-center'>
          <div className='relative'>
            <img
              src='/assets/notification.svg'
              className='w-7 h-7 text-red-700'
              alt='Vite Logo'
            />

            <div className='absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full'></div>
          </div>
        </button>
        <button className='flex items-center gap-3 py-2 rounded-lg'>
          <img src='/assets/user-icon.svg' alt='Avatar' className='w-9 h-9' />
          <div className='text-left'>
            <div className='text-white text-sm font-extrabold'>Jhon David</div>
            <div className='text-xs text-gray-400'>jdavid@gmail.com</div>
          </div>
        </button>
      </div>
    </header>
  );
}
