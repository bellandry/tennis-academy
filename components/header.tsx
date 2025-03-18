"use client";

import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
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
          ? "py-3 bg-white/90 backdrop-blur-md shadow-subtle"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-bold text-tennis-600"
        >
          <span className="relative w-8 h-8">
            <span className="absolute inset-0 bg-tennis-100 rounded-full"></span>
            <span className="absolute inset-1 border-2 border-tennis-500 rounded-full"></span>
          </span>
          <span>FOTA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="px-4 py-2 rounded-md text-gray-600 font-medium hover:text-tennis-600 hover:bg-tennis-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="lg">
            <Link href="/#contact" className="ml-4 btn-tennis">
              S&apos;inscrire
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-tennis-600 focus:outline-none"
          aria-label={mobileMenuOpen ? "Fermer menu" : "Ouvrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-in-bottom py-4">
          <nav className="flex flex-col space-y-1 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="px-4 py-3 rounded-md text-gray-600 font-medium hover:text-tennis-600 hover:bg-tennis-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg">
              <Link
                href="/#contact"
                className="px-4 py-3 mt-2 btn-tennis text-center"
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
