import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Equinix palette
        ink: "#131925", // primary navy — text on light, dark panel bg
        navy: {
          DEFAULT: "#131925",
          card: "#1c2434", // slightly lighter card inside dark panels
          line: "#2a3346",
        },
        red: {
          DEFAULT: "#e91c24", // Equinix red accent
          dark: "#c20d14",
        },
        cloud: "#f2f3f4", // light card / muted surface
        paper: "#f5f2f8", // light lavender page base
        line: "#e5e2ec", // hairline borders on light
        muted: "#5b6473", // secondary text on light
        // legacy alias kept so any stray reference still resolves to the accent
        lime: { DEFAULT: "#e91c24", dark: "#c20d14" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 10px 40px -24px rgba(19, 25, 37, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "capability-card": {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "capability-card": "capability-card 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
