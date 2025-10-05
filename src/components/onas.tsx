// src/components/onas.tsx
// Jednoduchá, mobil-first komponenta “O nás” pre tlacko.sk.
// Použi ju napr. v route src/app/onas/page.tsx: 
//   import Onas from "@/components/onas"; 
//   export default function Page() { return <Onas />; }

import React from "react";

export default function Onas() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            O nás
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Vitaj na <strong>tlacko.sk</strong> – v malej dielni s veľkým
            srdcom pre 3D tlač. Naším cieľom je prinášať{" "}
            <strong>hotové, overené a bezpečné 3D tlačené hračky</strong>, ktoré
            si jednoducho vyberieš z ponuky a my ich rýchlo odošleme. Žiadne
            zadávanie špeciálnych požiadaviek, žiadne čakanie na návrh – len
            jasný výber, stabilná kvalita a férová cena.
          </p>
        </div>
      </section>

      {/* Čo ponúkame */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-bold">Čo u nás nájdeš</h2>
          <p className="mt-3 text-gray-600">
            Ponuka je zostavená z modelov, ktoré dlhodobo testujeme. To, čo je
            v kategóriách na e-shope, je presne to, čo doručujeme:
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Zvieratká:</span> roztomilé
              postavičky s hladkým povrchom a pevnou konštrukciou pre menšie
              deti.
            </li>
            <li>
              <span className="font-semibold">Antistres:</span> predmety na
              uvoľnenie a sústredenie – príjemné do ruky, s overenou ergonómiou.
            </li>
            <li>
              <span className="font-semibold">Autíčka:</span> jednoduché aj
              odolné „rýchliky“, ktoré zvládnu každodennú prevádzku.
            </li>
            <li>
              <span className="font-semibold">Dekorácie:</span> ľahké doplnky do
              detskej izby či na poličku, farebne stabilné a ľahko
              udržiavateľné.
            </li>
            <li>
              <span className="font-semibold">Figúrky:</span> hrdinovia do hier
              aj do vitríny – čisté línie, dobrá tuhosť a spoľahlivé detaily.
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            <p className="leading-6">
              <strong>Dôležité:</strong> U nás si vyberáš{" "}
              <strong>z hotovej ponuky</strong>. Nepripravujeme individuálne
              nápisy, špeciálne rozmery ani jednorazové úpravy modelov. Vďaka
              tomu držíme <strong>konzistentnú kvalitu</strong>,{" "}
              <strong>lepšiu cenu</strong> a <strong>kratšie dodanie</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Prečo hotové produkty */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-bold">Prečo hotové produkty</h2>
          <p className="mt-3 text-gray-600">
            Roky skúšania a praxe nás naučili, ktoré dizajny držia tvar, pekne
            vyzerajú a zvládnu detské používanie. Keď modely nepreháňame
            neustálymi úpravami, vieme:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Konzistentná kvalita</h3>
              <p className="mt-2 text-sm text-gray-600">
                Stabilné profily tlače = rovnaká pevnosť, povrch a presnosť pri
                každom kuse.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Rýchle doručenie</h3>
              <p className="mt-2 text-sm text-gray-600">
                Skladom alebo rýchla dotlač bez potreby prerábania modelu.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Férová cena</h3>
              <p className="mt-2 text-sm text-gray-600">
                Menej variantov znamená menej odpadu a úspornejšiu výrobu.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Predvídateľný výsledok</h3>
              <p className="mt-2 text-sm text-gray-600">
                Dostaneš presne to, čo vidíš v e-shope – bez prekvapení.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ako vyrábame */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-bold">Ako vyrábame</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-700">
            <li>
              <span className="font-semibold">Výber modelu:</span> preferujeme
              bezpečné tvary, dobrú tuhosť a čisté detaily.
            </li>
            <li>
              <span className="font-semibold">Testovanie:</span> skúšame viaceré
              výplne a vrstvy, kým nenájdeme optimálny pomer vzhľadu a pevnosti.
            </li>
            <li>
              <span className="font-semibold">Stabilné profily tlače:</span>{" "}
              uložené nastavenia zabezpečia opakovateľný výsledok.
            </li>
            <li>
              <span className="font-semibold">Finálna úprava:</span> odstránenie
              podpor, začistenie hrán a detailná vizuálna kontrola.
            </li>
            <li>
              <span className="font-semibold">Dvojitá kontrola kvality:</span>{" "}
              pred zabalením prejde každý kus ešte raz rukami.
            </li>
          </ol>
        </div>
      </section>

      {/* Materiály a údržba */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-bold">Materiály a bezpečnosť</h2>
          <p className="mt-3 text-gray-600">
            Tlačíme najmä z <strong>PLA</strong> – materiálu na báze kukurice,
            bez zápachu a vhodného na hračky. Pri produktoch pre menšie deti
            dbáme na zaoblené hrany a primerané rozmery častí. Údržba je
            jednoduchá: stačí <strong>vlhká handrička</strong> a bežné
            oprášenie. Neodporúčame dlhodobé vystavenie vysokým teplotám (napr.
            palubná doska auta na slnku).
          </p>
        </div>
      </section>

      {/* Objednávka a servis */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-bold">Ako objednávať</h2>
          <p className="mt-3 text-gray-600">
            Vyber si kategóriu, otvor produkt, zvoľ dostupný variant a vlož do
            košíka. My sa postaráme o bezpečné balenie a rýchle odoslanie. Ak by
            produkt prišiel poškodený alebo by nesplnil očakávania, kontaktuj
            nás – riešime výmenu alebo vrátenie podľa obchodných podmienok.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            <p>
              Sme malý tím a dávame prednosť <strong>poctivej sérii</strong>{' '}
              pred nekonečnou customizáciou. Radšej menej modelov, no
              <strong>vyladených do detailu</strong>, ktoré vieme rýchlo a
              kvalitne dodať.
            </p>
          </div>
        </div>
      </section>

      {/* Záver */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-4">
          <p className="text-gray-700">
            Ďakujeme, že podporuješ <strong>slovenskú lokálnu výrobu</strong>.
            Ak máš otázku k produktu z ponuky alebo k doprave, napíš nám.
            <br />
            <strong>tlacko.sk</strong> – hotové 3D tlačené hračky, ktoré si
            jednoducho vyberieš a už len čakáš na balík. 📦✨
          </p>
        </div>
      </section>
    </main>
  );
}
