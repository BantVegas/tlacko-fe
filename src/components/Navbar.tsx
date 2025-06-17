import React, { useState } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { name: "Figúrky", href: "/app/figurky" },
  { name: "Zvieratká", href: "/app/zvieratka" },
  { name: "Autíčka", href: "/app/auticka" },
  { name: "Dekorácie", href: "/app/dekoracie" },
  { name: "Antistresové", href: "/app/antistres" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur shadow z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-blue-600 tracking-tight">
          tlacko.sk
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 font-semibold text-gray-700 items-center">
          <Link to="/" className="hover:text-blue-600 transition">
            Domov
          </Link>
          <Link to="/how-it-works" className="hover:text-blue-600 transition">
            Ako to funguje
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="hover:text-blue-600 transition px-2 py-1">
              Produkty
            </button>
            {dropdown && (
              <div className="absolute left-0 top-full mt-1 min-w-[180px] bg-white rounded shadow-lg z-50 border border-gray-100">
                {PRODUCTS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition whitespace-nowrap"
                    onClick={() => setDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-blue-600 transition">
            O nás
          </Link>
          <Link to="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Kontakt
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10"
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-1 bg-blue-700 rounded-full mb-1"></span>
          <span className="block w-7 h-1 bg-blue-700 rounded-full mb-1"></span>
          <span className="block w-7 h-1 bg-blue-700 rounded-full"></span>
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold z-50">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-8 text-white text-4xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Domov
            </Link>
            <Link
              to="/how-it-works"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Ako to funguje
            </Link>
            <div className="flex flex-col items-center space-y-3">
              <span className="text-lg mb-2">Produkty</span>
              {PRODUCTS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-400 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              O nás
            </Link>
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
