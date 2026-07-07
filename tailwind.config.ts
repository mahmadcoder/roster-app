import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EA",
        paper: "#FDFBF6",
        ink: "#1B1712",
        red: "#D8402A",
        redDeep: "#A82E1C",
        clay: "#B8ADA0",
        line: "rgba(27,23,18,0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
