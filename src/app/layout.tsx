import "./globals.css";
import { constructMetadata } from "@/lib/metadata";

import { Syne } from 'next/font/google'
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Syne({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>

     

<div class="container">
   <div class="box">
    <div class="animation">
     <div class="one spin-one"></div>
     <div class="two spin-two"></div>
     <div class="three spin-one"></div>
    </div>
  <h1>Under maintenance</h1>
  <p>Update in progress.  Please run installer to finish update.</p>
  <p>Maintenance screen for<a href="https://www.ladesk.com/?utm_source=maintenance&utm_campaign=maintenance/" target="_blank">LiveAgent</a></p>
  </div>
</div>
        {children}
      </body>
      <GoogleAnalytics gaId="G-YS5KNVNWL4" />
    </html>
  );
}
