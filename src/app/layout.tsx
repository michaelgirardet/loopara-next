import "../styles/globals.css";
import type { Metadata } from "next";
import { Hind } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Popover } from "@/components/ui/popover";

const hind = Hind({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Loopara - Générateur de motifs MIDI",
  description: "Crée instantanément des fichiers MIDI personnalisés. Simple, rapide, musical.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${hind.className} flex min-h-screen flex-col bg-[#030504] text-white`}>
        <Popover>
        <Navbar />
        <main className="flex flex-1">{children}</main>
        <Footer />
          </Popover>
      </body>
    </html>
  );
}
