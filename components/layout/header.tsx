"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Icons } from "../shared/icons";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative h-16 w-full border-b border-border">
      <nav className="container flex h-full items-center justify-between">
        <div className="z-50">
          <Link href="/" className="text-xl font-bold">
            <Icons.nextjs className="size-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="z-50 flex size-10 items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative size-6">
            {isMobileMenuOpen ? (
              <X className="size-6 transition-all duration-300 ease-in-out" />
            ) : (
              <Menu className="size-6 transition-all duration-300 ease-in-out" />
            )}
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-8 pt-16">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
