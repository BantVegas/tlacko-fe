import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div
        className="min-h-screen flex flex-col bg-gray-50 relative"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay podľa potreby */}
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" /> */}

        {/* Dôležité: Navbar dostáva správne onCartClick */}
        <Navbar onCartClick={() => setCartOpen(true)} />

        <main className="flex-grow pt-16 z-10 relative">
          {children}
        </main>

        <Footer />

        {/* CartDrawer na konci, nad všetkým */}
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
