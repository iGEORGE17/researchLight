
import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-background fixed z-10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-lg font-semibold tracking-tight"
        >
            <FaGraduationCap className="mr-1"/>
          <span className="text-primary">Research</span>
          <span className="text-gold">Light</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}


