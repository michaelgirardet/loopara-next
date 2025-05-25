"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Music, Info, Mail, Home } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecte le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "py-3 bg-[#2A2D34]/25 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"
  }`;

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  const navLinks = [
    { name: "Accueil", to: "/", icon: <Home size={20} /> },
    { name: "À Propos", to: "/about", icon: <Info size={20} /> },
    { name: "Contact", to: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Music className="text-[#E2768A]" size={28} />
            <span className="bg-[#D43552] bg-clip-text text-2xl font-bold text-transparent">
              Loopara
            </span>
          </Link>

          {/* Navigation sur desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.to}
                className="flex items-center gap-2 font-semibold text-[#FEFEFE] underline-offset-4 transition-colors hover:underline"
              >
                {link.name}
              </Link>
            ))}

            {/* Bouton demo/CTA */}
            <Link
              href="/control"
              className="rounded-full bg-[#E2768A] px-5 py-2 font-semibold text-black transition-all duration-300 hover:bg-[#E6899A] hover:shadow-lg hover:shadow-pink-500/20"
            >
              Essayer maintenant
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fefefe] md:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <X size={24} className="text-[#fefefe]" />
            ) : (
              <Menu size={24} className="text-[#fefefe]" />
            )}
          </button>
        </div>
      </header>


      {/* Menu mobile */}
      <motion.div
        className="font-hind fixed right-0 top-0 z-50 h-full w-full bg-[#0F1012] p-8 shadow-xl md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fefefe]"
            aria-label="Fermer le menu"
          >
            <X size={20} className="text-[#fefefe]" />
          </button>
        </div>

        <div className="mb-6 border-b border-pink-500/20 pb-6">
          <div className="mb-4 flex items-center gap-2">
            <Music className="text-[#E2768A]" size={24} />
            <span className="text-3xl font-bold text-[#D43552]">Loopara</span>
          </div>
          <p className="text-lg text-gray-300">
            Générateur de motifs MIDI rapide et intuitif pour votre créativité musicale
          </p>
        </div>

        <nav className="space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className="flex items-center gap-4 text-xl font-medium text-gray-200 transition-colors hover:text-pink-500"
              onClick={toggleMenu}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E2768A] text-[#030504]">
                {link.icon}
              </div>
              {link.name}
            </Link>
          ))}

          <div className="mt-6 w-full flex justify-center items-center border-pink-500/20 pt-6">
          <Link href={"/control"} onClick={toggleMenu}>
            <button
              type="button"
              className="flex w-full max-w-xs self-center items-center justify-center rounded-lg bg-[#E2768A] px-5 py-3 font-medium text-[#030504] transition-all duration-300 hover:shadow-lg"
              >
              Essayer maintenant
            </button>
              </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

export default Navbar;
