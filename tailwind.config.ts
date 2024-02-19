import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
      slab: "Roboto\\ Slab, sans-serif",
      mono: "Roboto\\ Mono, monospace",
    },
    fontSize: {
      xs: "0.8125rem",
      sm: "0.875rem",
      md: "0.9375rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "clr-prmry-100": "hsl(13, 75%, 58%)",
        "clr-prmry-200": "hsl(21, 86%, 67%)",
        "clr-scndry-100": "hsl(213, 4%, 51%)",
        "clr-text-dark": "hsl(216, 9%, 23%)",
        "clr-text-light": "hsl(222, 9%, 78%)",
        "clr-bg-dark": "hsl(225, 9%, 9%)",
        "clr-bg-light": "hsl(0, 0%, 100%)",
        "clr-highlight-dark": "hsl(220, 7%, 18%)",
        "clr-highlight-light": "hsl(0, 0%, 96%)",
        "clr-accent-100": "hsl(216, 8%, 12%)",
        "clr-accent-200": "hsl(216, 8%, 38%)",
        "clr-accent-300": "hsl(0, 0%, 89%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
