import Link from "next/link";
import { Mail, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="white bg-[#1F2937] text-white">
      <div className="container mx-auto min-h-[20vh] px-6 py-12">
        {/* Top section with logo and navigation */}
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="text-turquoise" size={24} />
              <h3 className="font-manrope text-xl font-bold text-white">Loopara</h3>
            </div>
            <p className="max-w-xs text-start text-sm text-white">
              Générez rapidement des patterns MIDI inspirants pour votre prochain projet musical. Un
              outil gratuit et intuitif pour tous les compositeurs.
            </p>
            <div className="flex items-center justify-center gap-4 pt-2 sm:justify-start">
              <Link href={"/contact"}>
                <button
                  type="button"
                  className="rounded-full bg-turquoise p-2 transition-colors hover:bg-turquoisehover"
                >
                  <Mail size={18} className="text-[#030504]" />
                </button>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex w-full flex-col items-center justify-center text-center sm:flex sm:items-center sm:justify-start sm:text-left">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div className="flex w-full flex-col items-center justify-center text-center sm:flex sm:items-center sm:justify-start sm:text-left">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white underline-offset-4">
              Ressources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tutorial"
                  className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
                >
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href={"/support"}
                  className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
                >
                  Support
                </Link>
              </li>
              <Link
                href={"/blog"}
                className="flex items-center gap-2 text-white decoration-turquoise underline-offset-4 transition-colors hover:underline"
              >
                <li>Blog</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-turquoise/20 to-transparent" />

        {/* Bottom section with copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-4 md:flex-row">
          <p className="text-xs text-white/70">
            Loopara © {new Date().getFullYear()}. Tous droits réservés.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/legal"
              className="text-xs text-white/70 transition-colors hover:text-white"
            >
              Mentions légales
            </Link>
            <span className="text-turquoise">•</span>
            <Link
              href="/privacy"
              className="text-xs text-white/70 transition-colors hover:text-white"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
