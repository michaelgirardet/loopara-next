"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { X, Menu, Music, Info, Mail, Home, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { name: "Accueil", to: "/", icon: <Home size={20} /> },
  { name: "À Propos", to: "/about", icon: <Info size={20} /> },
  { name: "Contact", to: "/contact", icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "py-3 bg-[#2A2D34]/25 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"
  }`;

  return (
    <>
      {/* Top navbar */}
      <header className={navbarClasses}>
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Music className="text-turquoise" size={28} />
            <span className="bg-misty bg-clip-text font-manrope text-2xl font-semibold hover:brightness-150">
              Loopara
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.to}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-turquoisehover"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/control"
              className="rounded-full bg-turquoise px-5 py-2 text-sm font-semibold text-rich transition hover:bg-turquoisehover hover:shadow-lg hover:shadow-turquoise/20"
            >
              Essayer maintenant
            </Link>

            {!session ? (
              <Link href="/login">
                <LogIn size={24} className="text-white" />
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2">
                    {session.user?.image && (
                      <img
                        src={session.user.image}
                        alt="Avatar"
                        className="h-7 w-7 rounded-full border border-turquoise"
                      />
                    )}
                    <span className="font-bold text-white">{session.user?.name || "Compte"}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-rich text-white">
                  <DropdownMenuLabel className="text-center text-sm text-gray-300">
                    Mon compte
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Tableau de bord</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-red-400 focus:text-red-500"
                  >
                    Se déconnecter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white p-2 md:hidden"
            aria-label="Menu mobile"
          >
            {menuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed right-0 top-0 z-50 h-full w-full bg-gunmetal p-8 md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-white p-2"
            aria-label="Fermer"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Logo & Description */}
        <div className="mb-6 border-b border-turquoisehover/20 pb-6">
          <div className="mb-4 flex items-center gap-2">
            <Music className="text-turquoise" size={24} />
            <span className="font-manrope text-3xl font-bold text-white">Loopara</span>
          </div>
          <p className="text-sm text-white">Crée tes patterns MIDI simplement et rapidement.</p>
        </div>

        {/* Mobile Links */}
        <nav className="space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-md flex items-center gap-4 text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/30 text-turquoise">
                {link.icon}
              </div>
              {link.name}
            </Link>
          ))}

          {/* CTA mobile */}
          <div className="mt-8 flex justify-center">
            <Link href="/control" onClick={() => setMenuOpen(false)}>
              <button className="w-full rounded-lg bg-turquoise px-5 py-3 text-sm font-medium text-rich transition hover:bg-turquoisehover hover:shadow-lg">
                Essayer maintenant
              </button>
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
