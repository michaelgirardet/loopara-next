"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  X,
  Menu,
  Music,
  Info,
  Mail,
  Home,
  LogIn,
  LayoutDashboard,
  User,
  Settings,
  LogOut,
  ChevronDown,
  LogInIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useUserProfile } from "@/lib/api/useUserProfile";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const NAV_LINKS = [
  { name: "Accueil", id: 1, to: "/", icon: <Home size={20} /> },
  { name: "À Propos", id: 2, to: "/about", icon: <Info size={20} /> },
  { name: "Contact", id: 3, to: "/contact", icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { profile, updateProfile } = useUserProfile();
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

  // useEffect(() => {
  //   const load = async () => {
  //     try {
  //       const data = await fetchUserProfile();
  //       updateProfile(data);
  //     } catch (err: unknown) {
  //       if (err instanceof Error) {
  //         toast.error(err.message);
  //       } else {
  //         toast.error("Erreur inconnue");
  //       }
  //     }
  //   };
  //   load();
  // }, [updateProfile]);

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
                className="flex items-center gap-2 text-base font-bold text-white transition-colors hover:text-turquoisehover"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/control"
              className="btn-primary btn-sm rounded-full text-sm font-semibold text-rich transition hover:bg-turquoisehover hover:shadow-lg hover:shadow-turquoise/20"
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
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gunmetal/20 focus:outline-none focus:ring-2 focus:ring-turquoise/50"
                  >
                    {profile.image && (
                      <div className="relative">
                        <img
                          src={profile.image}
                          alt="Avatar"
                          className="h-8 w-8 rounded-full border-2 border-turquoise shadow-sm"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
                      </div>
                    )}
                    {/* Avatar de l'utilisateur en mode desktop  */}
                    <div className="flex flex-col items-start">
                      <span className="text-lgrounded-full flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-semibold capitalize text-rich">
                        {profile.username ? profile.username.charAt(0).toUpperCase() : "U"}
                      </span>
                    </div>

                    <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-56 rounded-lg border border-rich/50 bg-gunmetal p-1 shadow-xl duration-200 animate-in slide-in-from-top-2"
                >
                  {/* En-tête du menu */}
                  <div className="border-b border-rich/30 px-3 py-3">
                    <div className="flex items-center gap-3">
                      {profile.image && (
                        <img
                          src={profile.image}
                          alt="Avatar"
                          className="h-10 w-10 rounded-full border-2 border-turquoise"
                        />
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {session.user?.name || "Utilisateur"}
                        </span>
                        <span className="max-w-32 truncate text-xs text-gray-400">
                          {session.user?.email || "email@example.com"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Options du menu */}
                  <div className="py-1">
                    <DropdownMenuItem asChild>
                      <Link
                        href="/dashboard"
                        className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-rich/30 hover:text-white"
                      >
                        <LayoutDashboard className="h-4 w-4 text-turquoise" />
                        Tableau de bord
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/profile"
                        className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-rich/30 hover:text-white"
                      >
                        <User className="h-4 w-4 text-turquoise" />
                        Mon profil
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/settings"
                        className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-rich/30 hover:text-white"
                      >
                        <Settings className="h-4 w-4 text-turquoise" />
                        Paramètres
                      </Link>
                    </DropdownMenuItem>
                  </div>

                  {/* Séparateur */}
                  <DropdownMenuSeparator className="my-1 bg-rich/30" />

                  {/* Option de déconnexion */}
                  <div className="py-1">
                    <DropdownMenuItem
                      onClick={() => {
                        signOut({ callbackUrl: "/?signedOut=true" });
                      }}
                      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                    >
                      <LogOut className="h-4 w-4" />
                      Se déconnecter
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
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
            type="button"
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
              key={link.id}
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
          <Link
            href={"/login"}
            key={uuidv4()}
            className="text-md flex items-center gap-4 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/30 text-turquoise">
              <LogInIcon />
            </div>
            Connexion
          </Link>
          {session && (
            <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="text-md flex items-center gap-4 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/30 text-turquoise">
                  <LayoutDashboard size={20} />
                </div>
                Tableau de bord
              </Link>

              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-md flex items-center gap-4 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/30 text-turquoise">
                  <User size={20} />
                </div>
                Mon profil
              </Link>

              <Link
                href="/settings"
                onClick={() => setMenuOpen(false)}
                className="text-md flex items-center gap-4 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/30 text-turquoise">
                  <Settings size={20} />
                </div>
                Paramètres
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="text-md flex w-full items-center gap-4 text-red-400 transition-colors hover:text-red-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400/20 text-red-400">
                  <LogOut size={20} />
                </div>
                Se déconnecter
              </button>
            </div>
          )}

          {/* CTA mobile */}
          <div className="mt-8 flex justify-center">
            <Link href="/control" onClick={() => setMenuOpen(false)}>
              <button
                type="button"
                className="w-full rounded-lg bg-turquoise px-5 py-3 text-sm font-medium text-rich transition hover:bg-turquoisehover hover:shadow-lg"
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
