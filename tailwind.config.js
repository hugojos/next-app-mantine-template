const { twColors } = require("./src/theme/index.tsx");
const { breakpointsWithPx } = require("lkd-web-kit");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: breakpointsWithPx,
    colors: twColors,
  },
};
