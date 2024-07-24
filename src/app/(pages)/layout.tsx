"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { ChatModal } from "@/components/chat/ChatModal";
import { ChatButton } from "@/components/chat/ChatButton";


export default function LayoutPage ({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center bg-zinc-900 px-4 py-8 text-zinc-50">
          <Logo />
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