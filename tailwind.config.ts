/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        oama: {
          // Primary brand
          yellow: "#E9B130",
          blue: "#98C1D9",

          // Supporting tones seen across sections
          blueDeep: "#3A88B6",
          cream: "#F7F1E2",
          sand: "#F6EEDB",

          // Typography/contrast (matches your old code vibe)
          ink: "#1E1702",
        },
      },
      fontFamily: {
        // adjust if you're using these in the new build
        oswald: ["Oswald", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
