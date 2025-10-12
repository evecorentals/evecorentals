"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const wa = "https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20I%E2%80%99d%20like%20to%20book%20an%20electric%20scooter.";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.jpeg"
              alt="EvEco Rentals"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg text-slate-800">
            EvEco <span className="text-green-600">Rentals</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-slate-700">
          <a href="#home" className="hover:text-green-600 font-medium">Home</a>
          <a href="#rentals" className="hover:text-green-600 font-medium">Rentals</a>
          <a href="#about" className="hover:text-green-600 font-medium">About</a>
          <a href="#contact" className="hover:text-green-600 font-medium">Contact</a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919866277630"
            className="text-sm text-slate-600 hidden md:block"
          >
            📞 +91 98662 77630
          </a>
          <Link
            href={wa}
            target="_blank"
            className="hidden md:inline-block bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-inner border-t">
          <nav className="flex flex-col items-center gap-4 py-4 text-slate-700">
            <a href="#home" onClick={() => setOpen(false)} className="hover:text-green-600">Home</a>
            <a href="#rentals" onClick={() => setOpen(false)} className="hover:text-green-600">Rentals</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-green-600">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-green-600">Contact</a>
            <a
              href={wa}
              target="_blank"
              className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
