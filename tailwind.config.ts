import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e0f12",
        paper: "#f4f3ef",
        offwhite: "#f4f3ef",
        line: "#e7e6e0",
        muted: "#6b6b6b",
        lime: {
          DEFAULT: "#cfeb2d",
          dark: "#b8d320",
        },
        positive: "#1fc274",
        slate: "#7a8696",
        sage: "#7fa68a",
        lavender: "#8085a3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 8px 32px -20px rgba(14, 15, 18, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
