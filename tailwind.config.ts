import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import { breakpointsWithPx, twColors } from "./src/theme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: breakpointsWithPx,
    colors: twColors,
  },
  important: true,
  corePlugins: {
    preflight: false,
  },
  plugins: [
    ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) => {
      addUtilities({
        ".h1": {
          "@apply text-4xl font-bold m-0": {},
        },
        ".h2": {
          "@apply text-2xl font-bold m-0": {},
        },
        ".h3": {
          "@apply text-xl font-bold m-0": {},
        },
        ".h4": {
          "@apply text-lg font-bold m-0": {},
        },
        ".h5": {
          "@apply text-base font-bold m-0": {},
        },
        ".h6": {
          "@apply text-sm font-bold m-0": {},
        },
      });
    },
  ],
} satisfies Config;
