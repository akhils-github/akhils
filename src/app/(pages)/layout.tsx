"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { ChatButton } from "@/components/chat/ChatButton";
import { ChatModal } from "@/components/chat/ChatModal";
export default function LayoutPage ({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center bg-zinc-900 px-4 py-8 text-zinc-50">
          <Link href="/">
            <Image
              width={20}
              height={20}
              quality={100}
              src="/logo.svg"
              priority={true}
              className="h-14 w-14 text-center mb-4"
              alt="Christopher Alonzo Initials Logo"
            />
          </Link>
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