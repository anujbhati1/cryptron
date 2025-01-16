import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Header } from "../components/header";
import { MobileNav } from "../components/mobile-nav";
import { Sidebar } from "../components/sidebar";
import { Meta } from "./components/meta";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Meta />
      <div className='flex bg-[#141414] min-h-screen'>
        <Sidebar />
        <div className='flex-1'>
          <Header />
          {children}
          <MobileNav />
        </div>
      </div>
    </ThemeProvider>
  );
};
