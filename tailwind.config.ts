import type { Config } from "tailwindcss";
const flowbite = require('flowbite-react/tailwind');

const {default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', flowbite.content()],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '5rem',
      },
      screens: {
        sm: '100%',
        md: '670px',
        lg: '1224px',
        xl: '1290px',
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [flowbite.plugin(), addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
