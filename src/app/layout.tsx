import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Popover } from "@/components/ui/popover";
import SessionWrapper from "../../lib/SessionWrapper";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Loopara - Générateur de motifs MIDI",
  description: "Crée instantanément des fichiers MIDI personnalisés. Simple, rapide, musical.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionWrapper>
      <html lang="fr" className="h-full scroll-smooth">
        <body className={"flex min-h-screen flex-col bg-rich text-white"}>
          <Popover>
            <Navbar />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#1F2937",
                  border: "1px solid turquoise",
                  color: "white",
                  position: "relative",
                  bottom: "0",
                  right: "0",
                },
              }}
            />
            <main className="flex flex-1 font-hind">{children}</main>
            <Footer />
          </Popover>
        </body>
      </html>
    </SessionWrapper>
  );
}
