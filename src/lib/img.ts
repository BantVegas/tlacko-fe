// src/lib/img.ts
const BASE = import.meta.env.VITE_IMG_BASE ?? "";

export function fbUrl(p: string) {
  if (!p) return p;
  if (/^https?:\/\//i.test(p)) return p;   // už absolútna URL
  const path = p.replace(/^\//, "");
  return `${BASE}/${encodeURIComponent(path)}?alt=media`;
}
