
const glassItems = [
  { title: "Veselé zvieratko", desc: "Roztomilé 3D hračky pre najmenších.", icon: "🦊" },
  { title: "Robot", desc: "Interaktívny robot z 3D tlačiarne.", icon: "🤖" },
  { title: "Autíčko", desc: "Originálne autíčka podľa výberu.", icon: "🚗" },
  { title: "Stavebnica", desc: "Modulárne stavebnice na hranie.", icon: "🔧" },
  { title: "Puzzle", desc: "Logické 3D puzzle.", icon: "🧩" },
  { title: "Figúrka", desc: "Hrdinovia do zbierky aj na hranie.", icon: "🦸" },
  { title: "Dekorácia", desc: "Vytlačené dekorácie do detskej izby.", icon: "🖼️" },
  { title: "Kreatívny set", desc: "Sada pre vlastnú tvorbu.", icon: "🎨" },
];

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay pre stmavenie celej stránky */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur shadow z-30">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <span className="text-2xl font-bold text-blue-600 tracking-tight">tlacko.sk</span>
          <div className="space-x-6 font-semibold text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">Domov</a>
            <a href="#" className="hover:text-blue-600 transition">Produkty</a>
            <a href="#" className="hover:text-blue-600 transition">O nás</a>
            <a href="#" className="hover:text-blue-600 transition">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero sekcia */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
          3D tlačené hračky na mieru
        </h1>
        <p className="text-2xl md:text-3xl text-white drop-shadow mb-2">
          Objavte svet 3D tlače a unikátne hračky pre každého!
        </p>
      </section>

      {/* Glassmorph sekcia */}
      <section className="relative z-10 py-16 px-2 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {glassItems.map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center min-h-[230px] transition hover:scale-105 hover:bg-white/70"
              style={{
                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.17)",
              }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h3>
              <p className="text-gray-700 text-center mb-4">{item.desc}</p>
              <button className="mt-auto w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold shadow transition">
                Kúpiť
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur py-4 mt-8 shadow-inner">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-700">
          <span className="font-semibold">&copy; {new Date().getFullYear()} tlacko.sk</span>
          <span>
            Vyrobené s <span className="text-red-500 text-lg">♥</span> pomocou 3D tlače
          </span>
        </div>
      </footer>
    </div>
  );
}
