import { Header } from "@/lib/components/header";
import { MobileNav } from "@/lib/components/mobile-nav";
import { Sidebar } from "@/lib/components/sidebar";
import { TransactionHistory } from "@/lib/components/transaction-history";

export default function Page() {
  return (
    <div className='flex bg-[#141414] min-h-screen'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <main>
          <TransactionHistory />
        </main>
        <MobileNav />
      </div>
    </div>
  );
}
