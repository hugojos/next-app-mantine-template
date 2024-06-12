// prettier.config.js
/** @type {import("prettier").Options} */
module.exports = {
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  trailingComma: "none",
  tailwindFunctions: ["clsx"]
};
