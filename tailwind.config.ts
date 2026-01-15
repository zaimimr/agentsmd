import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom theme based on Blank Konferanse
        border: "#3a4340",
        input: "#3a4340",
        ring: "#0000FF",
        background: "#272D2A", // Grå (bakgrunn)
        foreground: "#FFFCB6", // Gul (tekst)
        primary: {
          DEFAULT: "#0000FF", // Blå (knapper/viktige elementer)
          foreground: "#FFFCB6",
        },
        secondary: {
          DEFAULT: "#3a4340",
          foreground: "#FFFCB6",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#FFFCB6",
        },
        muted: {
          DEFAULT: "#3a4340",
          foreground: "#c4c1a0",
        },
        accent: {
          DEFAULT: "#0000FF",
          foreground: "#FFFCB6",
        },
        popover: {
          DEFAULT: "#272D2A",
          foreground: "#FFFCB6",
        },
        card: {
          DEFAULT: "#2f3633",
          foreground: "#FFFCB6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
