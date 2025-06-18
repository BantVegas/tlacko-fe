import React, { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({ meno: "", email: "", sprava: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Tu si doplň vlastnú logiku na odoslanie (napr. email API)
    setSent(true);
    setForm({ meno: "", email: "", sprava: "" });
  }

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
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl max-w-5xl w-full p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Kontakt Formulár */}
        <div>
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Kontaktujte nás</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Meno a priezvisko</label>
              <input
                type="text"
                name="meno"
                value={form.meno}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Správa</label>
              <textarea
                name="sprava"
                value={form.sprava}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-blue-600 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-800 text-white font-semibold hover:bg-blue-900 transition"
              disabled={sent}
            >
              {sent ? "Odoslané!" : "Odoslať"}
            </button>
            {sent && (
              <div className="text-green-600 mt-2 text-center">
                Správa bola odoslaná. Ďakujeme!
              </div>
            )}
          </form>
          <div className="mt-8 text-gray-600 text-sm">
            <div className="mb-2">
              <span className="font-semibold">E-mail:</span> info@tlacko.sk
            </div>
            <div>
              <span className="font-semibold">Telefón:</span> +421 911 000 000
            </div>
            <div>
              <span className="font-semibold">Adresa:</span> Tvoja adresa 123, Mesto
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg min-h-[320px] h-full">
          <iframe
            title="Google mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.061183036114!2d17.1067409!3d48.1485965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8943402e5d5b%3A0x400f7d1c69775b0!2zQnJhdGlzbGF2YSwgU2xvdmFraWE!5e0!3m2!1ssk!2ssk!4v1718888888888!5m2!1ssk!2ssk"
            width="100%"
            height="100%"
            className="min-h-[320px] h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
