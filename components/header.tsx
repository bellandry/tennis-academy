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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-sm shadow-subtle"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold font-display text-tennis-600"
        >
          <Image
            src="/logo-fota.png"
            width="100"
            alt="fota logo"
            height="100"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="px-4 py-2 font-medium text-gray-600 transition-colors rounded-md hover:text-tennis-600 hover:bg-tennis-50"
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="bg-tennis-500 hover:bg-tennis-600"
          >
            <Link href="/inscription" className="ml-4">
              S&apos;inscrire
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600 md:hidden hover:text-tennis-600 focus:outline-none"
          aria-label={mobileMenuOpen ? "Fermer menu" : "Ouvrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 py-4 bg-white shadow-lg md:hidden top-full animate-slide-in-bottom">
          <nav className="flex flex-col px-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="px-4 py-3 font-medium text-gray-600 transition-colors rounded-md hover:text-tennis-600 hover:bg-tennis-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="w-full bg-tennis hover:bg-tennis-600"
            >
              <Link
                href="/inscription"
                className="px-4 py-3 mt-2 text-center btn-tennis"
                onClick={() => setMobileMenuOpen(false)}
              >
                S&apos;inscrire
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
