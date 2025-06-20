import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-lg border-t border-gray-200 py-4 shadow-inner text-center text-gray-700 transition-all">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          &copy; {new Date().getFullYear()} tlacko.sk — Vyrobené s{" "}
          <span className="text-red-500 text-lg">♥</span> pomocou 3D tlače
        </div>
        <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:space-x-6 text-sm items-center">
          <Link to="/gdpr" className="hover:text-blue-700 underline transition">
            GDPR
          </Link>
          <Link to="/podmienky" className="hover:text-blue-700 underline transition">
            Podmienky používania
          </Link>
        </div>
      </div>
    </footer>
  );
}
