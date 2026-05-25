import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0c14",
        paper: "#ffffff",
        cream: "#fff5e8",
        peach: {
          50: "#fff1e0",
          100: "#ffe1c2",
          200: "#ffcfa0",
          300: "#ffb777",
          400: "#ff9d4f",
          500: "#ff7a2f",
        },
        flare: {
          DEFAULT: "#ff6b1a",
          soft: "#ffae5c",
          deep: "#d8480e",
        },
        muted: "#5b6072",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ['"Archivo"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 12px 40px -20px rgba(20, 14, 5, 0.18)",
        pop: "0 18px 60px -28px rgba(20, 14, 5, 0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
