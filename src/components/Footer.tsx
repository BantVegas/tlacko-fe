import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur py-4 mt-8 shadow-inner text-center text-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          &copy; {new Date().getFullYear()} tlacko.sk — Vyrobené s{" "}
          <span className="text-red-500 text-lg">♥</span> pomocou 3D tlače
        </div>
        <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:space-x-6 text-sm items-center">
          <Link to="/gdpr" className="hover:text-blue-700 underline transition">
            GDPR
          </Link>
          <Link to="/terms" className="hover:text-blue-700 underline transition">
            Podmienky používania
          </Link>
        </div>
      </div>
    </footer>
  );
}
