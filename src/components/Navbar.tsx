import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
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
        <div className="md:hidden fixed inset-0 z-40 bg-blue-900 bg-opacity-95 flex flex-col items-center pt-24 space-y-8 transition-all">
          <Link onClick={() => setOpen(false)} to="/" className="text-white text-xl font-semibold">Domov</Link>
          <Link onClick={() => setOpen(false)} to="/app/antistres" className="text-white text-xl font-semibold">Antistres</Link>
          <Link onClick={() => setOpen(false)} to="/app/auticka" className="text-white text-xl font-semibold">Autíčka</Link>
          <Link onClick={() => setOpen(false)} to="/app/dekoracie" className="text-white text-xl font-semibold">Dekorácie</Link>
          <Link onClick={() => setOpen(false)} to="/app/figurky" className="text-white text-xl font-semibold">Figúrky</Link>
          <Link onClick={() => setOpen(false)} to="/app/zvieratka" className="text-white text-xl font-semibold">Zvieratká</Link>
          <Link onClick={() => setOpen(false)} to="/podmienky" className="text-white text-xl font-semibold">Podmienky</Link>
          <Link onClick={() => setOpen(false)} to="/gdpr" className="text-white text-xl font-semibold">GDPR</Link>
        </div>
      )}
    </nav>
  );
}
