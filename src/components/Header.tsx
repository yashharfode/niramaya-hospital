"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About Us", href: "#about" },
  { name: "Departments", href: "#" },
  { name: "Doctors", href: "#" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex justify-between items-center max-w-7xl">

        {/* Logo Container (Flex 1 to balance right side) */}
        <div className="flex-1 flex justify-start">
          <Link href="#" className="flex items-center gap-2 group">
            <div className="relative w-48 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo.png"
                alt="Niramaya Hospital Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav (Perfectly Centered) */}
        <nav className="hidden lg:flex items-center lg:space-x-1 xl:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`lg:px-3 xl:px-4 py-2 rounded-full text-[13px] xl:text-[14px] font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${link.active ? "bg-brand-blue text-white shadow-md" : "text-gray-600 hover:bg-blue-50 hover:text-brand-blue"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button Container (Flex 1 to balance left side) */}
        <div className="hidden lg:flex flex-1 justify-end shrink-0 ml-2 xl:ml-0">
          <Link
            href="/appointment"
            className="bg-brand-blue hover:bg-[#062960] text-white px-5 xl:px-8 py-2.5 xl:py-3 rounded-full font-bold text-[13px] xl:text-sm tracking-wide transition-all shadow-[0_8px_20px_rgba(4,30,66,0.15)] hover:shadow-[0_8px_20px_rgba(4,30,66,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-brand-blue p-2 hover:bg-blue-50 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col p-6 space-y-5 shadow-2xl text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg transition-colors ${link.active ? "text-brand-blue font-bold" : "hover:text-brand-blue"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="bg-brand-blue text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
