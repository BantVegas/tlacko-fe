import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col text-slate-200 selection:bg-brand-500/30 selection:text-white">
      {/* multilayer dark background (gradient + grid + noise) */}
      <div className="site-bg site-grid site-noise" />

      {/* glass navbar wrapper */}
      <header className="nav-glass sticky top-0 z-40">
        <Navbar />
      </header>

      {/* page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* subtle footer line on dark bg */}
      <footer className="border-t border-white/10">
        <Footer />
      </footer>
    </div>
  );
}

