import React from "react";

export default function Gdpr() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white/90 rounded-2xl shadow-xl max-w-5xl w-full px-4 md:px-16 py-10 mt-24 mb-8 border border-gray-200 backdrop-blur">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Ochrana osobných údajov (GDPR)
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">1. Prevádzkovateľ</h2>
          <p>
            Prevádzkovateľom webovej stránky <span className="font-semibold">tlacko.sk</span> je spoločnosť [Tvoja firma], sídlo [Adresa], IČO: [doplň], zapísaná v [doplň]. Kontakt: [e-mail], [telefón].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">2. Aké údaje spracúvame</h2>
          <ul className="list-disc ml-6">
            <li>Meno a priezvisko (pri objednávke)</li>
            <li>Kontaktné údaje: e-mail, telefónne číslo, adresa</li>
            <li>Fakturačné údaje (ak sú potrebné)</li>
            <li>Technické údaje: IP adresa, cookies, údaje o používaní stránky</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">3. Účel spracúvania</h2>
          <ul className="list-disc ml-6">
            <li>Vybavenie objednávky a poskytovanie služieb</li>
            <li>Komunikácia so zákazníkom</li>
            <li>Plnenie právnych povinností</li>
            <li>Štatistika a analýza návštevnosti (Google Analytics)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">4. Právny základ</h2>
          <p>
            Spracúvanie údajov je založené na plnení zmluvy, plnení zákonných povinností, oprávnenom záujme alebo na základe súhlasu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">5. Doba uchovávania</h2>
          <p>
            Osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelu ich spracúvania alebo podľa zákonných požiadaviek.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">6. Práva dotknutých osôb</h2>
          <ul className="list-disc ml-6">
            <li>právo na prístup k údajom</li>
            <li>právo na opravu údajov</li>
            <li>právo na vymazanie (zabudnutie)</li>
            <li>právo na obmedzenie spracúvania</li>
            <li>právo namietať</li>
            <li>právo na prenos údajov</li>
            <li>právo podať sťažnosť dozornému orgánu (Úrad na ochranu osobných údajov SR)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">7. Cookies</h2>
          <p>
            Stránka používa cookies na zlepšenie používateľského zážitku a na analytické účely. Podrobnosti nájdete v sekcii <span className="underline">Podmienky používania</span>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">8. Kontakt</h2>
          <p>
            V prípade otázok o ochrane osobných údajov nás kontaktujte na <span className="underline">[tvoj e-mail]</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
