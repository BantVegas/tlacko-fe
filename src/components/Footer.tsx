import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        relative z-30
        border-t border-white/10
        bg-[linear-gradient(to_top,rgba(11,16,32,.95),rgba(11,16,32,.85))]
        backdrop-blur
        text-slate-300
      "
    >
      {/* pevná výška, aby sa domovská stránka zmestila bez scrollu */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 md:h-16">
        <div className="h-full flex items-center justify-between gap-4 text-sm">
          <div className="truncate">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-100">tlacko.sk</span> — Vyrobené s{" "}
            <span className="text-rose-400 text-base align-[-2px]">♥</span> pomocou 3D tlače
          </div>

          <nav className="flex items-center gap-6 shrink-0">
            <Link
              to="/gdpr"
              className="hover:text-white hover:underline underline-offset-4 transition"
            >
              GDPR
            </Link>
            <Link
              to="/podmienky"
              className="hover:text-white hover:underline underline-offset-4 transition"
            >
              Podmienky používania
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

