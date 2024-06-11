/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      pipe: "",
      disc: "disc",
      square: "square",
      decimal: "decimal",
    },
  },
  plugins: [],
};

export default withMT(config);
