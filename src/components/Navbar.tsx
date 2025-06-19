import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { Menu } from "@headlessui/react";

type NavbarProps = {
  onCartClick?: () => void;
};

export default function Navbar({ onCartClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/50 backdrop-blur-lg shadow-lg fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-800">
            tlacko.sk
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Produkty dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-blue-800 hover:underline font-medium">
                Produkty
              </Menu.Button>
              <Menu.Items className="absolute left-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black/10 focus:outline-none z-50">
                <div className="py-1">
                  {[
                    { to: "/app/antistres", label: "Antistres" },
                    { to: "/app/auticka", label: "Autíčka" },
                    { to: "/app/dekoracie", label: "Dekorácie" },
                    { to: "/app/figurky", label: "Figúrky" },
                    { to: "/app/zvieratka", label: "Zvieratká" },
                  ].map(({ to, label }) => (
                    <Menu.Item key={to}>
                      {({ active }) => (
                        <Link
                          to={to}
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-blue-100 text-blue-900" : "text-blue-800"
                          }`}
                        >
                          {label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
            <Link to="/o-nas" className="text-blue-800 hover:underline">
              O nás
            </Link>
            <Link to="/blog" className="text-blue-800 hover:underline">
              Blog
            </Link>
            <Link to="/podmienky" className="text-blue-800 hover:underline">
              Podmienky
            </Link>
            <Link to="/gdpr" className="text-blue-800 hover:underline">
              GDPR
            </Link>
            <Link to="/kontakt" className="text-blue-800 hover:underline">
              Kontakt
            </Link>
            {/* CartIcon vpravo */}
            <CartIcon onClick={onCartClick} />
          </div>
          {/* Hamburger pre mobil */}
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
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-start">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative flex flex-col items-start space-y-5 p-8 z-50 w-full">
            {/* Produkty rozbaľovacie menu pre mobil */}
            <details className="w-full">
              <summary className="text-white text-2xl font-bold mb-2 cursor-pointer">
                Produkty
              </summary>
              <nav className="pl-4 flex flex-col space-y-2">
                {[
                  { to: "/app/antistres", label: "Antistres" },
                  { to: "/app/auticka", label: "Autíčka" },
                  { to: "/app/dekoracie", label: "Dekorácie" },
                  { to: "/app/figurky", label: "Figúrky" },
                  { to: "/app/zvieratka", label: "Zvieratká" },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    onClick={() => setOpen(false)}
                    to={to}
                    className="text-white text-lg"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </details>
            <Link
              onClick={() => setOpen(false)}
              to="/o-nas"
              className="text-white text-2xl font-bold"
            >
              O nás
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/blog"
              className="text-white text-2xl font-bold"
            >
              Blog
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/podmienky"
              className="text-white text-2xl font-bold"
            >
              Podmienky
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/gdpr"
              className="text-white text-2xl font-bold"
            >
              GDPR
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/kontakt"
              className="text-white text-2xl font-bold"
            >
              Kontakt
            </Link>
            {/* CartIcon aj na mobile */}
            <div className="mt-6">
              <CartIcon onClick={onCartClick} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
