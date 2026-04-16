/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        jungle: { DEFAULT: "#0f3d2e", dark: "#08251b", light: "#1f5c48" },
        leaf: { DEFAULT: "#8bc53f", light: "#a6d561", dark: "#6ea32b" },
        sun: { DEFAULT: "#f4c531", dark: "#d9ac1f", light: "#fad65b" },
        sea: { DEFAULT: "#4fbfb5", light: "#7ad3cb", dark: "#2f9a91" },
        cream: "#fafdf6",
        sand: "#eef4df",
        charcoal: "#0f2318",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
