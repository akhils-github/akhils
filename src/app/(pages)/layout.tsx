"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { FiArrowLeft, FiArrowRight} from "react-icons/fi";
import { ChatModal } from "@/components/chat/ChatModal";
import { ChatButton } from "@/components/chat/ChatButton";
import { NavigateButton } from "@/components/NavigateButton";


export default function LayoutPage({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-zinc-900 px-4 py-8 text-zinc-50">
      <header className={`flex items-center w-full mb-10 ${isHome ? "justify-center" : "justify-between"} overflow-hidden`}>
        {!isHome && (
          <NavigateButton href="/">
            <span className="-translate-x-40 text-sm  group-hover:translate-x-0 flex items-center justify-center absolute inset-2 transition-all duration-500 text-zinc-50 z-20" >
              Home
            </span>
            <FiArrowLeft className="group-hover:translate-x-40 mx-auto text-3xl font-black text-center transition duration-500 whitespace-nowrap"/> 
          </NavigateButton>
        )}
        <Logo />
        {!isHome && (
          <NavigateButton 
            href={pathname === "/projects" ? "/awards" : "/projects"}
          >
            <span className="-translate-x-40  text-sm group-hover:translate-x-0 flex items-center justify-center absolute inset-2 transition duration-500 text-zinc-50 z-20" >
              {pathname === "/projects" ? "Education" : "Projects"}
            </span>
            <FiArrowRight className={`group-hover:translate-x-40 ${pathname === "/projects" ? "mx-3" : "mx-2"} text-3xl font-black text-center transition-all duration-500 whitespace-nowrap`}/> 
          </NavigateButton>
        )}
      </header>
      
      {children}
      <ChatButton setIsOpen={setIsOpen} />
      {isOpen && (
        <ChatModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <Footer />
    </main>
  )
}