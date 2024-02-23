// prettier.config.js

/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  // trailingComma: "es5",
  // tabWidth: 10,
  // semi: false,
  // singleQuote: true,
};

export default config;
