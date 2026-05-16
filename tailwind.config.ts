import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // SWAT operational palette — dark mission-control + warm amber signal
        ink: {
          900: "#05070C",   // deepest background
          800: "#0A0D14",   // primary surface
          700: "#10141D",   // raised surface
          600: "#171C28",   // card surface
          500: "#1F2533",   // border strong
          400: "#2A3142",   // border subtle
          300: "#3D4659",
          200: "#5A6377",
          100: "#8892A6",
        },
        signal: {
          // Amber = active intelligence / focus
          50: "#FEF7E0",
          100: "#FCEAB4",
          200: "#FAD982",
          300: "#F7C24F",
          400: "#F5A623",   // primary signal
          500: "#E69010",   // active
          600: "#C2780A",
          700: "#9A5F08",
          800: "#6B4205",
        },
        critical: {
          400: "#FB6B6B",
          500: "#E84545",
          600: "#C73030",
        },
        warning: {
          400: "#FFB454",
          500: "#F59E0B",
        },
        positive: {
          400: "#5EE6A8",
          500: "#22C786",
          600: "#159960",
        },
        info: {
          400: "#6BB1FF",
          500: "#3D8CE6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(245,166,35,0.20), 0 8px 32px rgba(245,166,35,0.10)",
        panel: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 80px rgba(0,0,0,0.55)",
        pulse: "0 0 0 6px rgba(245,166,35,0.10)",
      },
      keyframes: {
        pulse_signal: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(245,166,35,0.45)" },
          "50%": { boxShadow: "0 0 0 8px rgba(245,166,35,0)" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        pulse_signal: "pulse_signal 2.2s ease-out infinite",
        scan: "scan 3s linear infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
