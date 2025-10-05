// src/components/blog.tsx
// Blog stránka s celoplošným pozadím z public/hero.png

import React from "react";

export default function Blog() {
  return (
    <main
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: "url('/hero.png')", // public/hero.png -> dostupné na /hero.png
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Jemné stmavenie pre lepšiu čitateľnosť textu */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Obsah v polopriehľadnom „karte“ vzhľade */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl">
          {/* Hero */}
          <section className="px-5 sm:px-8 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              3D tlačené hračky bez tajomstiev: sprievodca pre rodičov, zberateľov aj zvedavcov
            </h1>
            <p className="mt-4 text-gray-700">
              3D tlač nie je len technická vychytávka pre laboratóriá. Vďaka
              spoľahlivým materiálom a rozumne nastaveným procesom sa stala
              prirodzenou súčasťou domácností, škôlok aj dielní. Tento článok je
              praktický sprievodca – vysvetlíme, ako vznikajú naše hotové
              produkty, na čo si dať pozor pri výbere hračiek, prečo dávame
              prednosť stabilnej ponuke pred nekonečnou customizáciou a ako sa o
              3D tlačené veci správne starať, aby vydržali dlho a bezpečne.
            </p>
          </section>

          {/* Prečo 3D tlač dáva zmysel */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Prečo 3D tlač dáva zmysel pri hračkách</h2>
            <p className="mt-3 text-gray-700">
              Klasická výroba hračiek je nastavená na veľké série. To je super,
              ak potrebujete milión kusov, no ak hľadáte pevné, jednoduché a
              výtvarne čisté modely, ktoré netreba komplikovať, 3D tlač má veľké
              výhody. Umožní nám vyberať dizajny, ktoré sú konštrukčne logické a
              funkčné, zároveň šetriť materiál a držať prísnu kontrolu kvality
              nad každým kusom. Výsledok? Hračka nie je „náhrada plastu“, ale
              premyslený výrobok s presne nastavenými parametrami výplne,
              hrúbky vrstiev a rýchlosti.
            </p>
            <p className="mt-3 text-gray-700">
              Druhým dôvodom je transparentnosť. Viete, z čoho to je, ako to
              vzniklo a kto za tým stojí. Nie je to anonymná linka „niekde“, ale
              poctivá lokálna výroba, ktorá sa dá vysvetliť deťom tak jednoducho,
              ako skladanie kociek: krok po kroku, vrstvu po vrstve.
            </p>
          </section>

          {/* Stabilná ponuka vs. custom */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Stabilná ponuka namiesto nekonečnej customizácie</h2>
            <p className="mt-3 text-gray-700">
              Keď sme začínali, skúšali sme všetko – mená na produktoch, zmeny
              rozmerov, špeciálne farby. Rýchlo sme zistili, že každá drobná
              úprava rozbíja to najdôležitejšie: konzistentnú kvalitu a rýchle
              dodanie. Preto sme sa rozhodli ísť cestou hotových modelov. 
              Znamená to, že si vyberáte z presne tej ponuky, ktorú vidíte v e-shope,
              a my máme pre každý produkt vyladený profil tlače. 
              Nezačíname od nuly, ale tlačíme overené nastavenia – a to je dôvod,
              prečo vyzerajú a fungujú rovnako dobre kus po kuse.
            </p>
            <p className="mt-3 text-gray-700">
              Navyše, stabilná ponuka nám umožní vyrábať udržateľnejšie: menej
              odpadu, menej nepodarených testov, lepšie plánovanie materiálu.
              Získavate tak výrobok s férovou cenou a predvídateľným výsledkom –
              bez kompromisov a zbytočných prekvapení.
            </p>
          </section>

          {/* Materiály a bezpečnosť */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Materiály, bezpečnosť a čo od nich čakať</h2>
            <p className="mt-3 text-gray-700">
              Naše produkty tlačíme primárne z PLA – materiálu na báze kukurice,
              ktorý je bez zápachu a vhodný pre hračky. Je tuhý, stabilný a
              dobre drží tvar. Nie je určený na dlhodobé vystavenie vysokým
              teplotám, preto neodporúčame nechávať hračky na palubovke auta na
              letnom slnku. V bežnej domácnosti však PLA funguje skvelo.
            </p>
            <p className="mt-3 text-gray-700">
              Pri dizajnoch pre menšie deti preferujeme zaoblené hrany a diely,
              ktoré sa ťažko oddelia. Ak sa v popise uvádza odporúčaný vek, nie je
              to formalita – vychádza z rozmerov a konštrukcie konkrétneho modelu.
              Pre staršie deti a zberateľov ponúkame aj detailnejšie figúrky s
              jemnejšími líniami, kde je dôležitá vizuálna stránka a stabilita
              povrchu.
            </p>
          </section>

          {/* Ako si vybrať produkt */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Ako si vybrať správnu hračku z našej ponuky</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-700">
              <li>
                <span className="font-semibold">Podľa veku:</span> pri najmenších
                siahajte po zvieratkách a robustnejších tvaroch bez drobných
                súčiastok. Pre väčšie deti sú skvelé autíčka a figúrky.
              </li>
              <li>
                <span className="font-semibold">Podľa použitia:</span> ak chcete
                „žmýkať“ a znižovať napätie, antistresové modely majú príjemnú
                ergonómiu a hladký dotyk. Do poličky a na dekor sú ideálne
                jednoduché geometrické tvary.
              </li>
              <li>
                <span className="font-semibold">Podľa odolnosti:</span> v popise
                produktu sledujte odporúčanú výplň a hrúbku stien – hoci to
                znie technicky, v praxi to znamená, ako veľmi odolný je daný kus.
              </li>
              <li>
                <span className="font-semibold">Podľa estetiky:</span> 3D tlač
                má vlastný rukopis – jemné vrstvičky na povrchu. Vnímame ich ako
                prirodzenú súčasť remeselného vzhľadu, nie chybu.
              </li>
            </ul>
          </section>

          {/* Ako to vyrábame v praxi */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Ako vzniká jeden kus: od profilu tlače po balenie</h2>
            <p className="mt-3 text-gray-700">
              Každý produkt v našej ponuke má uložený vlastný profil tlače:
              teploty, rýchlosti, výška vrstvy, výplň, ventilácia, typ trysky. 
              Pred zaradením do e-shopu prejde model opakovanými testami – skúšame
              rôzne orientácie, bod tlaku, náchylnosť na delamináciu a čistotu
              povrchu. Až keď sme spokojní, uzamkneme nastavenia a vyrábame.
            </p>
            <p className="mt-3 text-gray-700">
              Po do tlači nasleduje ručná kontrola: odstránenie podpor, jemné
              začistenie hrán a druhý pohľad na detaily. Hračku balíme tak, aby
              prežila cestu kuriérom bez toho, aby sa odtlačila alebo poškriabala.
              Zákazník získa kus, ktorý je prakticky zhodný s ukážkou v e-shope –
              takto si predstavujeme férovú sériovú výrobu v malom.
            </p>
          </section>

          {/* Údržba a životnosť */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Údržba, opravy a životnosť</h2>
            <p className="mt-3 text-gray-700">
              3D tlačené hračky nepotrebujú špeciálnu starostlivosť. 
              Stačí vlhká handrička, bežné oprášenie a pravidlo: nenechávame 
              ich dlhodobo na priamom slnku v aute. 
              Ak sa niečo po čase uvoľní alebo praskne, zvyčajne vieme dodať 
              náhradný kus alebo diel – bez zbytočných slov a papierovačiek.
            </p>
            <p className="mt-3 text-gray-700">
              Životnosť je daná konštrukciou a používaním. Zvieratká a autíčka s
              vyššou výplňou zvládnu aj „intenzívnu“ detskú prevádzku. 
              Figúrky s jemnými detailmi sú určené skôr na jemné hranie alebo 
              na zberateľskú poličku. V popise každej položky nájdete naše odporúčanie.
            </p>
          </section>

          {/* Mýty a realita */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Mýty a realita o 3D tlači</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white/80 p-5">
              <p className="text-gray-700">
                <span className="font-semibold">„3D tlač je krehká.“</span>{" "}
                Závisí od nastavení. Pri správnej výplni a hrúbke stien sú naše
                modely pevné a odolné – inak by v ponuke neboli.
              </p>
              <p className="mt-3 text-gray-700">
                <span className="font-semibold">„Vrstvy na povrchu sú chyba.“</span>{" "}
                Nie – je to prirodzený rukopis technológie FDM. Pri niektorých
                dizajnoch vrstvičky dokonca umocňujú textúru a vizuálny dojem.
              </p>
              <p className="mt-3 text-gray-700">
                <span className="font-semibold">„Každý model musí byť na mieru.“</span>{" "}
                Nemusí. Stabilná ponuka znamená, že dostanete overený výrobok v
                rovnakej kvalite, rýchlo a za lepšiu cenu.
              </p>
            </div>
          </section>

          {/* Udržateľnosť a lokálnosť */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Udržateľnosť a lokálna výroba</h2>
            <p className="mt-3 text-gray-700">
              Tlačíme zmysluplne: optimalizujeme modely pre menšiu spotrebu
              materiálu, recyklujeme balenie a zvyšky triedime. Lokálna výroba
              znamená kratšiu cestu k zákazníkovi, lepšiu dohľadateľnosť pôvodu a
              férové podmienky. Ak niečo nefunguje, neskrývame sa za anonymný
              e-mail – jednoducho to opravíme.
            </p>
          </section>

          {/* Mini FAQ */}
          <section className="px-5 sm:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Mini FAQ</h2>
            <ul className="mt-4 space-y-5 text-gray-700">
              <li>
                <p className="font-semibold">Robíte mená na produktoch?</p>
                <p className="mt-1">
                  Nie. Držíme sa hotovej ponuky – vďaka tomu máme rýchle dodanie a
                  rovnakú kvalitu pri každom kuse.
                </p>
              </li>
              <li>
                <p className="font-semibold">Dá sa zvoliť vlastná farba?</p>
                <p className="mt-1">
                  Ponúkame len farebné varianty uvedené v e-shope. Sú otestované
                  na farebnú stabilitu a povrch.
                </p>
              </li>
              <li>
                <p className="font-semibold">Ako dlho trvá dodanie?</p>
                <p className="mt-1">
                  Najčastejšie odosielame v krátkych lehotách – čas závisí od
                  skladovej dostupnosti a kapacity výroby. O stave objednávky
                  informujeme e-mailom.
                </p>
              </li>
              <li>
                <p className="font-semibold">Čo ak príde balík poškodený?</p>
                <p className="mt-1">
                  Stačí nás kontaktovať – riešime výmenu alebo vrátenie podľa
                  obchodných podmienok. Stojíme si za tým, čo vyrábame.
                </p>
              </li>
            </ul>
          </section>

          {/* Záver */}
          <section className="px-5 sm:px-8 pb-12 pt-2">
            <p className="text-gray-700">
              3D tlačené hračky sú poctivý produkt modernej doby: spájajú
              remeslo, technológiu a zdravý rozum. Ak hľadáte hotové modely bez
              zbytočných komplikácií, stabilnú kvalitu a rýchle doručenie,
              ste na správnej adrese. Vyberte si z našej ponuky – o zvyšok sa
              postaráme. A ak si nie ste istí voľbou, ozvite sa: radi poradíme,
              ktorý produkt sadne veku, použitiu aj očakávaniam.
            </p>
            <p className="mt-4 text-gray-700">
              Ďakujeme, že podporujete lokálnu výrobu a férový prístup. 
              Teší nás každý balík, ktorý odchádza z dielne – lebo vieme, 
              že v ňom nie je len plast, ale aj veľa starostlivosti, času a 
              radosti z dobre odvedenej práce.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

