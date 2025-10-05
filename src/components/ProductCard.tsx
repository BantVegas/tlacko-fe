import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type SimpleProduct = {
  id: number | string;
  name: string;
  desc?: string;
  price?: string;   // v boxe neukazujeme
  image: string;    // očakávame cestu typu "/images/figurka-1.jpg" (alebo absolútnu URL)
  image2?: string;  // voliteľné pre detail
  image3?: string;  // voliteľné pre detail
};

type Props = { product: SimpleProduct };

/** Slug do URL (bez diakritiky) */
const slugify = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** 
 * Prevedie lokálnu cestu ("/images/xxx.jpg") na public Firebase URL.
 * Ak už je to absolútna URL (http/https), vráti ju bez zmeny.
 * Očakáva env VITE_IMG_BASE, napr:
 *   https://firebasestorage.googleapis.com/v0/b/tlacko-fe.firebasestorage.app/o
 */
const FB_BASE = import.meta.env.VITE_IMG_BASE ?? "";
function fbUrl(p?: string): string {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p; // už absolútna URL
  const path = p.replace(/^\//, "");      // zahoď leading slash
  return `${FB_BASE}/${encodeURIComponent(path)}?alt=media`;
}

export default function ProductCard({ product }: Props) {
  const slug = useMemo(() => slugify(product.name), [product.name]);

  // Kandidáti zdroja (originál + alternatívne prípony; Firebase berie presný súbor)
  const primaryRaw = product.image || "/images/placeholder.png";

  const candidates = useMemo(() => {
    const set = new Set<string>();
    const original = fbUrl(primaryRaw);
    set.add(original);

    // voliteľné fallbacky na iné prípony (ak by exporty mali inú koncovku)
    const altPng  = primaryRaw.replace(/\.jpe?g$/i, ".png");
    const altWebp = primaryRaw.replace(/\.jpe?g$/i, ".webp");
    if (altPng !== primaryRaw) set.add(fbUrl(altPng));
    if (altWebp !== primaryRaw) set.add(fbUrl(altWebp));

    return Array.from(set);
  }, [primaryRaw]);

  const [idx, setIdx] = useState(0);
  const currentSrc = candidates[Math.min(idx, candidates.length - 1)] || fbUrl("/images/placeholder.png");

  // Payload do detailu – obrázky rovno cez fbUrl
  const payload = {
    slug,
    title: product.name,
    description: product.desc ?? "",
    price: product.price ?? "",
    images: [product.image, product.image2, product.image3]
      .filter(Boolean)
      .map((p) => fbUrl(p as string)) as string[],
  };

  return (
    <div className="rounded-2xl backdrop-blur-xl bg-white/65 border border-white/30 shadow-xl p-5 flex flex-col">
      <Link to={`/app/figurky/${slug}`} state={{ product: payload }} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
          <img
            src={currentSrc}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => {
              // preskoč na ďalšieho kandidáta; ak už niet, nechaj posledný (zobrazí sa placeholder)
              setIdx((i) => (i + 1 < candidates.length ? i + 1 : i));
            }}
          />
        </div>
      </Link>

      <Link to={`/app/figurky/${slug}`} state={{ product: payload }} className="mt-4 block text-center">
        <h3 className="text-lg font-bold text-blue-800">{product.name}</h3>
      </Link>

      <div className="mt-4">
        <Link
          to={`/app/figurky/${slug}`}
          state={{ product: payload }}
          className="w-full inline-flex items-center justify-center px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Zobraziť
        </Link>
      </div>
    </div>
  );
}

