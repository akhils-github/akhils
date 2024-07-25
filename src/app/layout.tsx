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
      <meta name="twitter:image" content="<generated>" />
      <meta name="twitter:image:type" content="<generated>" />
      <meta name="twitter:image:width" content="<generated>" />
      <meta name="twitter:image:height" content="<generated>" />
      <meta property="og:image:alt" content="Christopher Alonzo Thumbnail" />
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
