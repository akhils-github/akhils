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

     <body class="bg-gray-100 dark:bg-gray-800">
  <div class="min-h-screen flex flex-col justify-center items-center">
    <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" class="mb-8 h-40">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">Site is under maintenance</h1>
    <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
    <div class="flex space-x-4">
      <a href="#" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600">Contact Us</a>
      <a href="#" class="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white">Reload</a>
    </div>
  </div>
</body>
{/*         {children} */}
      </body>
      <GoogleAnalytics gaId="G-YS5KNVNWL4" />
    </html>
  );
}
