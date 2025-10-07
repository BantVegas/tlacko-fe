/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#070B14",
          900: "#0B1020",
          800: "#0F1A2B",
          700: "#14233B",
        },
        brand: {
          300: "#7CD5FF",   // cyan accent
          400: "#49C3FF",
          500: "#1AA7F2",
          600: "#0C89D2",
          700: "#0A67A0",
        },
        neon: {
          400: "#8B8CFF",   // indigo glow
          500: "#6C6DFF",
        },
      },
      boxShadow: {
        glass: "0 10px 40px rgb(0 0 0 / 0.35)",
        glow: "0 0 0 2px rgb(108 109 255 / 0.25), 0 10px 30px rgb(26 167 242 / 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
