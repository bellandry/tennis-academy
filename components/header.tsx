"use client";

import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-300 md:px-6 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 md:px-4 ${
          isScrolled
            ? "border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-white/70 bg-white/70 shadow-sm backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label="FOTA accueil">
          <Image
            src="/logo-fota.png"
            width={92}
            height={46}
            alt="FOTA Tennis Academy"
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-tennis-50 hover:text-tennis-700"
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-2 rounded-full bg-[#075e58] px-5 text-white shadow-md shadow-[#075e58]/15 hover:bg-[#064a46]"
          >
            <Link href="/inscription">S&apos;inscrire</Link>
          </Button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full p-2 text-slate-700 transition-colors hover:bg-tennis-50 hover:text-tennis-700 md:hidden"
          aria-label={mobileMenuOpen ? "Fermer menu" : "Ouvrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="container absolute left-4 right-4 top-full mx-auto mt-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-tennis-50 hover:text-tennis-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-2xl bg-[#075e58] hover:bg-[#064a46]">
              <Link href="/inscription" onClick={() => setMobileMenuOpen(false)}>
                S&apos;inscrire
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
