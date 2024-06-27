/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
const colors = require("tailwindcss/colors");

// import colors from "tailwind/colors";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sitePages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    listStyleType: {
      pipe: "",
      disc: "disc",
      square: "square",
      decimal: "decimal",
    },

    extend: {
      colors: {
        ...colors,
        primaryYellowLighter: "#f7d67c",
        primaryYellowLight: "#f5c85f",
        primaryYellow: "#f1b319",
        primaryYellowDark: "#e0a717",
        primaryYellowDarker: "#b88912",
      },
      fontSize: {
        "h1-sm": "2.986rem",
        "h2-sm": "2.488rem",
        "h3-sm": "2.074rem",
        "h4-sm": "1.728rem",
        "h5-sm": "1.44rem",
        "h6-sm": "1.2rem",
        "p-sm": "1rem",
        "sm-sm": "0.833rem",
        "xs-sm": "0.694rem",

        "h1-md": "3.815rem",
        "h2-md": "3.052rem",
        "h3-md": "2.441rem",
        "h4-md": "1.953rem",
        "h5-md": "1.563rem",
        "h6-md": "1.25rem",
        "p-md": "1rem",
        "sm-md": "0.8rem",
        "xs-md": "0.64rem",

        "h1-lg": "5.61rem",
        "h2-lg": "4.209rem",
        "h3-lg": "3.157rem",
        "h4-lg": "2.369rem",
        "h5-lg": "1.777rem",
        "h6-lg": "1.333rem",
        "p-lg": "1rem",
        "sm-lg": "0.75rem",
        "xs-lg": "0.563rem",
      },
      keyframes: {
        "underline-in": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "underline-out": {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "underline-in": "underline-in 0.5s forwards",
        "underline-out": "underline-out 0.5s forwards",
      },
    },
  },
  plugins: [],
};

export default withMT(config);
