"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  // Liens de navigation
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
          <Link href="/" className="flex items-center gap-5" onClick={() => setMenuOpen(false)}>
            <Music className="text-turquoise" size={28} />
            <span className="bg-misty bg-clip-text font-manrope text-2xl font-semibold hover:brightness-150">
              Loopara
            </span>
          </Link>

          {/* Navigation sur desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.to}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-turquoisehover"
              >
                {link.name}
              </Link>
            ))}

            {/* Bouton demo/CTA */}
            <Link
              href="/control"
              className="hover text-md rounded-full bg-turquoise px-5 py-2 font-semibold text-rich transition-all duration-300 hover:bg-turquoise hover:shadow-lg hover:shadow-turquoise/10"
            >
              Essayer maintenant
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white md:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <motion.div
        className="fixed right-0 top-0 z-50 h-full w-full bg-gunmetal p-8 font-hind shadow-xl md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white"
            aria-label="Fermer le menu"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="mb-6 border-b border-turquoisehover/20 pb-6">
          <div className="mb-4 flex items-center gap-2">
            <Music className="text-turquoise" size={24} />
            <span className="font-manrope text-3xl font-bold text-white">Loopara</span>
          </div>
          <p className="text-md text-white">
            Générateur de motifs MIDI rapide et intuitif pour votre créativité musicale
          </p>
        </div>

        <nav className="space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className="text-md flex items-center gap-4 font-medium text-white transition-colors hover:text-white"
              onClick={toggleMenu}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/30 text-turquoise">
                {link.icon}
              </div>
              {link.name}
            </Link>
          ))}

          <div className="mt-6 flex w-full items-center justify-center border-pink-500/20 pt-6">
            <Link href={"/control"} onClick={toggleMenu}>
              <button
                type="button"
                className="flex w-full max-w-xs items-center justify-center self-center rounded-lg bg-turquoise px-5 py-3 text-sm font-medium text-rich transition-all duration-300 hover:bg-turquoisehover hover:shadow-lg hover:shadow-turquoise"
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
