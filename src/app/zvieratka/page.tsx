import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type SimpleProduct = {
  id: number | string;
  name: string;
  desc?: string;
  price?: string;   // v boxe väčšinou neukazujeme
  image: string;    // absolútna z /public, napr. "/images/figurka-1.jpg"
  image2?: string;
  image3?: string;
};

type Props = {
  product: SimpleProduct;
  /** Zobraziť cenu v kartičke? default: false */
  showPrice?: boolean;
  /** Zobraziť tlačidlo "Kúpiť"? default: true */
  showBuy?: boolean;
};

const slugify = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Pre istotu spraví ASCII variant cesty (odstráni diakritiku v názvoch) */
function asciiPath(p: string): string {
  try {
    return p
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      // napr. figúrka -> figurka
      .replace(/figurka/gi, "figurka");
  } catch {
    return p;
  }
}

export default function ProductCard({
  product,
  showPrice = false,
  showBuy = true,
}: Props) {
  const slug = useMemo(() => slugify(product.name), [product.name]);

  // Bezpečne enkódujeme URL (diakritika -> percent-encoding)
  const encode = (p?: string) => (p ? encodeURI(p) : undefined);

  // Kandidáti zdroja (originál -> ASCII varianta -> alternatívne prípony)
  const primaryRaw = product.image || "/images/placeholder.png";

  const candidates = useMemo(() => {
    const arr = new Set<string>();
    const enc = encode(primaryRaw)!;
    arr.add(enc);

    // ASCII fallback celej cesty (odstránenie diakritiky)
    const ascii = encode(asciiPath(primaryRaw))!;
    arr.add(ascii);

    // fallback na .png / .webp, keby exporty mali inú príponu
    arr.add(enc.replace(/\.jpg$/i, ".png"));
    arr.add(enc.replace(/\.jpg$/i, ".webp"));
    arr.add(ascii.replace(/\.jpg$/i, ".png"));
    arr.add(ascii.replace(/\.jpg$/i, ".webp"));

    return Array.from(arr);
  }, [primaryRaw]);

  const [idx, setIdx] = useState(0);
  const currentSrc = candidates[Math.min(idx, candidates.length - 1)];

  // Payload do detailu – tiež enkóduj obrázky
  const payload = {
    slug,
    title: product.name,
    description: product.desc ?? "",
    price: product.price ?? "",
    images: [product.image, product.image2, product.image3]
      .filter(Boolean)
      .map((p) => encode(p as string)) as string[],
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
              // preskoč na ďalšieho kandidáta; ak už niet, nechaj posledný
              setIdx((i) => (i + 1 < candidates.length ? i + 1 : i));
            }}
          />
        </div>
      </Link>

      <Link
        to={`/app/figurky/${slug}`}
        state={{ product: payload }}
        className="mt-4 block text-center"
      >
        <h3 className="text-lg font-bold text-blue-800">{product.name}</h3>
      </Link>

      {showPrice && product.price && (
        <div className="mt-2 text-center font-semibold">{product.price}</div>
      )}

      <div className="mt-4">
        {showBuy ? (
          <Link
            to={`/app/figurky/${slug}`}
            state={{ product: payload }}
            className="w-full inline-flex items-center justify-center px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Zobraziť
          </Link>
        ) : (
          <Link
            to={`/app/figurky/${slug}`}
            state={{ product: payload }}
            className="w-full inline-flex items-center justify-center px-5 py-2 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
          >
            Detail
          </Link>
        )}
      </div>
    </div>
  );
}
