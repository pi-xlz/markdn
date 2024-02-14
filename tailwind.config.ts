/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "clr-prmry-100": "#E46643",
      "clr-prmry-200": "#F39765",
      "clr-scndry-100": "#7C8187",
      "clr-text-dark": "#35393F",
      "clr-text-light": "#C1C4CB",
      "clr-bg-dark": "#151619",
      "clr-bg-light": "#FFFFFF",
      "clr-highlight-dark": "#2B2D31",
      "clr-highlight-light": "#F5F5F5",
      "clr-accent-100": "#1D1F22",
      "clr-accent-200": "#5A6069",
      "clr-accent-300": "#E4E4E4",
    },
    fontFamily: {
      sans: "Roboto, sans-serif",
      slab: "Roboto\\ Slab, sans-serif",
      mono: "Roboto\\ Mono, monospace",
    },
    fontSize: {
      xs: "0.8125rem",
      sm: "0.875",
      md: "0.9375rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
    },
    extend: {},
  },
  plugins: [],
};
