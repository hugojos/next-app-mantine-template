import type { Config } from "tailwindcss";
import { breakpointsWithPx, twColors } from "./src/theme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: breakpointsWithPx,
    colors: twColors
  }
} satisfies Config;
