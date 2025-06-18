import React from "react";

export default function Podmienky() {
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
          Podmienky používania
        </h1>

        {/* --- OSTATNÝ OBSAH --- */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">1. Úvodné ustanovenia</h2>
          <p>
            Tieto Podmienky používania upravujú práva a povinnosti užívateľov webovej stránky <span className="font-semibold">tlacko.sk</span> a jej prevádzkovateľa. Vstupom na stránku a jej používaním vyjadrujete svoj súhlas s týmito podmienkami. Ak s podmienkami nesúhlasíte, stránku nepoužívajte.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">2. Prístup na stránku a jej používanie</h2>
          <ul className="list-disc ml-6">
            <li>
              Stránku môžete používať len v súlade s právnymi predpismi Slovenskej republiky a týmito podmienkami.
            </li>
            <li>
              Prevádzkovateľ môže kedykoľvek obmedziť alebo zrušiť prístup používateľa v prípade porušenia podmienok alebo zákona.
            </li>
            <li>
              Je zakázané akýmkoľvek spôsobom narúšať bezpečnosť alebo prevádzku stránky.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">3. Objednávky a registrácia</h2>
          <ul className="list-disc ml-6">
            <li>
              Objednávky sa realizujú prostredníctvom elektronického formulára na stránke. Ak je potrebná registrácia, ste povinní uvádzať pravdivé údaje.
            </li>
            <li>
              Prevádzkovateľ si vyhradzuje právo odmietnuť objednávku v odôvodnených prípadoch.
            </li>
            <li>
              Užívateľ je zodpovedný za správnosť údajov uvedených pri objednávke.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">4. Ceny a platobné podmienky</h2>
          <ul className="list-disc ml-6">
            <li>
              Všetky ceny uvedené na stránke sú konečné vrátane DPH, pokiaľ nie je uvedené inak.
            </li>
            <li>
              Platba prebieha elektronicky alebo spôsobom podľa aktuálnej ponuky na stránke.
            </li>
            <li>
              Objednávka je záväzná až po prijatí potvrdenia prevádzkovateľom a úspešnej úhrade ceny.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">5. Autorské práva a ochrana obsahu</h2>
          <ul className="list-disc ml-6">
            <li>
              Všetky materiály na stránke (texty, obrázky, kód a ďalšie prvky) sú chránené autorským právom.
            </li>
            <li>
              Bez súhlasu prevádzkovateľa nie je dovolené tieto materiály kopírovať, šíriť ani používať na komerčné účely.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">6. Ochrana osobných údajov</h2>
          <p>
            Spracúvanie osobných údajov sa riadi zásadami uvedenými v sekcii <span className="underline">Ochrana osobných údajov (GDPR)</span>.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">7. Zodpovednosť a vylúčenie zodpovednosti</h2>
          <ul className="list-disc ml-6">
            <li>
              Prevádzkovateľ nenesie zodpovednosť za škody spôsobené nesprávnym používaním stránky alebo jej nedostupnosťou.
            </li>
            <li>
              Prevádzkovateľ nezaručuje úplnosť, správnosť a aktuálnosť obsahu stránky.
            </li>
            <li>
              Stránka môže obsahovať odkazy na stránky tretích strán, za ktorých obsah prevádzkovateľ nezodpovedá.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">8. Zmeny podmienok</h2>
          <ul className="list-disc ml-6">
            <li>
              Prevádzkovateľ si vyhradzuje právo tieto podmienky kedykoľvek meniť alebo dopĺňať.
            </li>
            <li>
              Zmeny nadobúdajú účinnosť ich zverejnením na stránke.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">9. Kontakt</h2>
          <p>
            V prípade otázok nás kontaktujte na <span className="underline">[tvoj e-mail]</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
