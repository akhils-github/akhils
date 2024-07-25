import { constructMetadata } from "@/lib/metadata";
import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";


const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
