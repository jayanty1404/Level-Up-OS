import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#3B82F6",
        neonPurple: "#A855F7",
      },
      boxShadow: {
        glow: "0 0 30px rgba(59, 130, 246, 0.45)",
        violetGlow: "0 0 30px rgba(168, 85, 247, 0.45)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
