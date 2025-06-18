import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/50 backdrop-blur-lg shadow-lg fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-800">
            tlacko.sk
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-800 hover:underline">Domov</Link>
            <Link to="/app/antistres" className="text-blue-800 hover:underline">Antistres</Link>
            <Link to="/app/auticka" className="text-blue-800 hover:underline">Autíčka</Link>
            <Link to="/app/dekoracie" className="text-blue-800 hover:underline">Dekorácie</Link>
            <Link to="/app/figurky" className="text-blue-800 hover:underline">Figúrky</Link>
            <Link to="/app/zvieratka" className="text-blue-800 hover:underline">Zvieratká</Link>
            <Link to="/podmienky" className="text-blue-800 hover:underline">Podmienky</Link>
            <Link to="/gdpr" className="text-blue-800 hover:underline">GDPR</Link>
            <Link to="/kontakt" className="text-blue-800 hover:underline">Kontakt</Link>
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden flex items-center text-blue-800"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center">
          {/* Overlay podklad */}
          <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-lg"></div>
          {/* Menu linky */}
          <div className="relative flex flex-col items-center pt-24 space-y-8 w-full">
            <Link onClick={() => setOpen(false)} to="/" className="text-white text-xl font-semibold drop-shadow">Domov</Link>
            <Link onClick={() => setOpen(false)} to="/app/antistres" className="text-white text-xl font-semibold drop-shadow">Antistres</Link>
            <Link onClick={() => setOpen(false)} to="/app/auticka" className="text-white text-xl font-semibold drop-shadow">Autíčka</Link>
            <Link onClick={() => setOpen(false)} to="/app/dekoracie" className="text-white text-xl font-semibold drop-shadow">Dekorácie</Link>
            <Link onClick={() => setOpen(false)} to="/app/figurky" className="text-white text-xl font-semibold drop-shadow">Figúrky</Link>
            <Link onClick={() => setOpen(false)} to="/app/zvieratka" className="text-white text-xl font-semibold drop-shadow">Zvieratká</Link>
            <Link onClick={() => setOpen(false)} to="/podmienky" className="text-white text-xl font-semibold drop-shadow">Podmienky</Link>
            <Link onClick={() => setOpen(false)} to="/gdpr" className="text-white text-xl font-semibold drop-shadow">GDPR</Link>
            <Link onClick={() => setOpen(false)} to="/kontakt" className="text-white text-xl font-semibold drop-shadow">Kontakt</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
