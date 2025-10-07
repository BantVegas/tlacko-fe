import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./CartIcon";
import { Menu, Transition } from "@headlessui/react";

type NavbarProps = {
  onCartClick?: () => void;
};

const productLinks = [
  { to: "/app/antistres", label: "Antistres" },
  { to: "/app/auticka", label: "Autíčka" },
  { to: "/app/dekoracie", label: "Dekorácie" },
  { to: "/app/figurky", label: "Figúrky" },
  { to: "/app/zvieratka", label: "Zvieratká" },
];

export default function Navbar({ onCartClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // jednotné správanie odkazov
  const linkCls =
    "text-slate-200 hover:text-white hover:underline underline-offset-4 decoration-emerald-400/60 transition";

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-white/10
        bg-[linear-gradient(to_bottom,rgba(11,16,32,0.92),rgba(11,16,32,0.78))]
        backdrop-blur-md
        shadow-[0_10px_30px_rgba(0,0,0,.35)]
      "
      style={{
        // jemný emerald „glow“ zospodu, nech ladí s kartami
        boxShadow:
          "inset 0 -2px 0 0 rgba(16,185,129,.22), 0 10px 30px rgba(0,0,0,.35)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-extrabold text-xl tracking-tight select-none">
            <span className="text-white">tlacko</span>
            <span className="text-emerald-400">.sk</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {/* Produkty dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button
                className={`${
                  pathname.startsWith("/app") ? "text-white" : "text-slate-200"
                } hover:text-white hover:underline underline-offset-4 decoration-emerald-400/60 transition`}
              >
                Produkty
              </Menu.Button>

              <Transition
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Menu.Items
                  className="
                    absolute left-0 mt-2 w-52 p-1 rounded-xl
                    border border-emerald-400/15
                    bg-[rgba(13,19,36,0.96)] backdrop-blur-md
                    shadow-[0_12px_40px_rgba(0,0,0,.55)]
                    focus:outline-none
                  "
                >
                  {productLinks.map(({ to, label }) => (
                    <Menu.Item key={to}>
                      {({ active }) => (
                        <Link
                          to={to}
                          className={`block rounded-lg px-3 py-2 text-sm ${
                            active
                              ? "bg-emerald-400/10 text-white"
                              : "text-slate-200 hover:bg-white/5"
                          }`}
                        >
                          {label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <Link to="/onas" className={linkCls}>
              O nás
            </Link>
            <Link to="/blog" className={linkCls}>
              Blog
            </Link>
            <Link to="/podmienky" className={linkCls}>
              Podmienky
            </Link>
            <Link to="/gdpr" className={linkCls}>
              GDPR
            </Link>
            <Link to="/kontakt" className={linkCls}>
              Kontakt
            </Link>

            {/* Košík */}
            <CartIcon onClick={onCartClick} />
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center text-slate-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-16 left-0 right-0 px-4">
            <div
              className="
                rounded-2xl p-4
                border border-emerald-400/15
                bg-[rgba(13,19,36,0.96)] backdrop-blur-md
                shadow-[0_20px_60px_rgba(0,0,0,.55)]
              "
            >
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-slate-200 text-lg font-semibold py-2">
                  Produkty
                  <span className="ml-2 text-slate-300 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-2 space-y-2 pl-2">
                  {productLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-emerald-400/10"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link to="/onas" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-emerald-400/10">
                  O nás
                </Link>
                <Link to="/blog" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-emerald-400/10">
                  Blog
                </Link>
                <Link to="/podmienky" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-emerald-400/10">
                  Podmienky
                </Link>
                <Link to="/gdpr" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-emerald-400/10">
                  GDPR
                </Link>
                <Link to="/kontakt" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-emerald-400/10 col-span-2">
                  Kontakt
                </Link>
              </div>

              <div className="mt-4">
                <CartIcon onClick={() => { setOpen(false); onCartClick?.(); }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}



