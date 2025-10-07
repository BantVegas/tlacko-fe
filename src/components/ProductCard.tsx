// src/components/ProductCard.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/** Základný typ produktu pre kartičku */
export type SimpleProduct = {
  id: number | string;
  name: string;
  desc?: string;
  price?: number | string;
  image: string;   // "/images/figurka-1.jpg" alebo absolútna URL
  image2?: string;
  image3?: string;
};

type Props = {
  product: SimpleProduct;
  /** Zobraziť cenu? (default: true) */
  showPrice?: boolean;
  /** Zobraziť CTA tlačidlo? (default: true) */
  showBuy?: boolean;
  /** Extra className pre obal karty */
  className?: string;
  /** Handler na kliknutie „Do košíka“ (voliteľné) */
  onBuy?: (p: SimpleProduct) => void;
};

/* ----------------- Helpers ----------------- */
const slugify = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const ENV_BASE = import.meta.env.VITE_IMG_BASE ?? "";
const DEFAULT_BASE =
  "https://firebasestorage.googleapis.com/v0/b/tlacko-fe.firebasestorage.app/o";
const BASE = ENV_BASE || DEFAULT_BASE;

/** Bezpečne spraví public Firebase URL z relatívnej cesty (napr. "/images/hero.png") */
function fbUrl(p?: string): string {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p; // už absolútna URL
  const path = p.replace(/^\//, ""); // zahoď leading slash
  return `${BASE}/${encodeURIComponent(path)}?alt=media`;
}
/* ------------------------------------------- */

export default function ProductCard({
  product,
  showPrice = true,
  showBuy = true,
  className = "",
  onBuy,
}: Props) {
  const slug = useMemo(() => slugify(product.name), [product.name]);

  // Primárny obrázok + fallbacky (.png, .webp)
  const primaryRaw = product.image || "/images/placeholder.png";
  const candidates = useMemo(() => {
    const set = new Set<string>();
    set.add(fbUrl(primaryRaw));
    const altPng = primaryRaw.replace(/\.jpe?g$/i, ".png");
    const altWebp = primaryRaw.replace(/\.jpe?g$/i, ".webp");
    if (altPng !== primaryRaw) set.add(fbUrl(altPng));
    if (altWebp !== primaryRaw) set.add(fbUrl(altWebp));
    return Array.from(set);
  }, [primaryRaw]);

  const [idx, setIdx] = useState(0);
  const currentSrc =
    candidates[Math.min(idx, candidates.length - 1)] ||
    fbUrl("/images/placeholder.png");

  // Payload pre detail (zachováme tvoje správanie)
  const payload = {
    slug,
    title: product.name,
    description: product.desc ?? "",
    price: product.price ?? "",
    images: [product.image, product.image2, product.image3]
      .filter(Boolean)
      .map((p) => fbUrl(p as string)) as string[],
  };

  const priceText =
    typeof product.price === "number"
      ? `${product.price.toFixed(2)} €`
      : product.price;

  return (
    <article
      className={[
        // sklenená karta v dark štýle + interakcia (hover lift)
        "glass rounded-2xl border border-white/10 p-4 md:p-5",
        "text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.30)]",
        "card-interactive", // scale/translate na hover (máš v index.css)
        className,
      ].join(" ")}
    >
      <Link
        to={`/app/figurky/${slug}`}
        state={{ product: payload }}
        className="block group"
      >
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-white/5 border border-white/10">
          <img
            src={currentSrc}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            onError={() =>
              setIdx((i) => (i + 1 < candidates.length ? i + 1 : i))
            }
          />
        </div>

        <h3 className="mt-3 text-base md:text-lg font-semibold text-slate-100 text-center group-hover:underline underline-offset-4 decoration-emerald-400/60">
          {product.name}
        </h3>
      </Link>

      {product.desc && (
        <p className="mt-1 text-sm text-slate-400 line-clamp-2 text-center">
          {product.desc}
        </p>
      )}

      {/* Cena (ak je dostupná a ak ju chceš zobraziť) */}
      {showPrice && priceText && (
        <div className="mt-2 text-center font-semibold text-emerald-300">
          {priceText}
        </div>
      )}

      {/* CTA */}
      {showBuy && (
        <div className="mt-3">
          <Link
            to={`/app/figurky/${slug}`}
            state={{ product: payload }}
            className="
              w-full inline-flex items-center justify-center
              rounded-xl px-4 py-2.5 text-sm font-semibold
              border border-white/15 bg-white/10
              hover:bg-white/15 hover:border-white/25
              transition
            "
            onClick={(e) => {
              // ak chceš primárne použiť vlastný handler, zavoláme ho
              if (onBuy) {
                e.preventDefault();
                onBuy(product);
              }
            }}
          >
            Zobraziť
          </Link>
        </div>
      )}
    </article>
  );
}



