import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50 relative"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional: tmavší overlay, ak chceš viac kontrastu */}
      {/* <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" /> */}

      <Navbar />
      <main className="flex-grow pt-16 z-10 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
