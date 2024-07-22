import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export default function LayoutPage ({ children }: { children: React.ReactNode }) {

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-8 text-zinc-50">
          <Link href="/">
            <Image
              width={20}
              height={20}
              quality={100}
              src="/logo.svg"
              priority={true}
              className="h-14 w-14 text-center mb-4"
              alt="Christopher Alonzo Initialials Logo"
            />
          </Link>
          {children}
          <Footer />
        </main>
    )
}