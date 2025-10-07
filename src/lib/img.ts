// src/lib/img.ts
// Základ pre Firebase Storage API (bez koncovej "/")
const BASE =
  import.meta.env.VITE_IMG_BASE?.replace(/\/$/, "") ??
  "https://firebasestorage.googleapis.com/v0/b/tlacko-fe.firebasestorage.app/o";

const enc = (p: string) => {
  // p: "/images/hero.png" -> "images%2Fhero.png"
  const clean = p.replace(/^\/+/, "");
  return encodeURIComponent(clean).replace(/%2F/g, "%2F");
};

/** Vráti plný URL na súbor vo Firebase Storage (public, bez tokenu). */
export function fbUrl(path: string) {
  return `${BASE}/${enc(path)}?alt=media`;
}

/** Pomôcka: napojí fbUrl na product.image / image2 / image3 */
export function withFbImages<T extends { image?: string; image2?: string; image3?: string }>(p: T): T {
  return {
    ...p,
    ...(p.image ? { image: fbUrl(p.image) } : {}),
    ...(p.image2 ? { image2: fbUrl(p.image2) } : {}),
    ...(p.image3 ? { image3: fbUrl(p.image3) } : {}),
  };
}
