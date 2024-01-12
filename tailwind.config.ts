/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-100": "#151619",
      "dark-200": "#1D1F22",
      "dark-300": "#2B2D31",
      "dark-400": "#35393F",
      "dark-500": "#5A6069",
      "dark-600": "#7C8187",
      "light-400": "#C1C4CB",
      "light-300": "#E4E4E4",
      "light-200": "#F5F5F5",
      "light-100": "#FFFFFF",
      "accent-100": "#E46643",
      "accent-200": "#F39765",
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
