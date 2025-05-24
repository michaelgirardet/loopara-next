import "../styles/globals.css";
import type { Metadata } from "next";
import { Hind } from "next/font/google";
import Navbar from "@/components/Navbar";

const hind = Hind({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Loopara - Générateur de motifs MIDI",
  description: "Crée instantanément des fichiers MIDI personnalisés. Simple, rapide, musical.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${hind.className} bg-[#030504] text-white`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}