import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      colors: {
        electric: {
          cyan: "#00D9FF",
          blue: "#0A84FF",
          amber: "#FFB020",
          green: "#00FF94"
        },
        tech: {
          dark: "#0A0E1A",
          darker: "#060810",
          surface: "#141825",
          border: "#1E2433"
        }
      },
      boxShadow: {
        soft: "0 18px 65px -30px rgba(15, 23, 42, 0.8)",
        glow: "0 0 30px -5px rgba(0, 217, 255, 0.3)",
        "glow-amber": "0 0 30px -5px rgba(255, 176, 32, 0.3)"
      },
      animation: {
        "slide-in": "slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "terminal-blink": "terminal-blink 1.2s steps(2) infinite"
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" }
        },
        "terminal-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
