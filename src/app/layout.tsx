import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Alonzo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-12 text-zinc-50">
          <Link href="/">
            <Image
              width="20"
              height="20"
              src="/logo.svg"
              className="h-14 w-14 text-center mb-4"
              alt="Christopher Alonzo Initialials Logo"
            />
          </Link>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
