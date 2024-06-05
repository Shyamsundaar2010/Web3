module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    theme: {
      screens: {
        'xs': '375px',
        'sm': '375px',
         //=> @media (min-width: '375px')
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {
      colors: {
        purple: {
          100: "#e0b2e6",
          800: "#5e12a0",
          "100_01": "#f0baff",
          A200_01: "#ff1ecb",
          A200: "#f03cef",
          A100: "#ff7bfb",
        },
        cyan: { A100: "#97ebff", A200: "#00ffff" },
        light_green: { 500: "#87c63a", A700: "#7bb60c", A100: "#bfef7d", A200: "#aee04d" },
        lime: { A200: "#f6ff39" },
        light_blue: { 500: "#009cff", 600: "#0099ec" },
        green: { A100: "#9af6c1" },
        yellow: {
          100: "#ffedca",
          500: "#fae635",
          600: "#ffd436",
          900: "#cc820d",
          A200: "#fefd00",
          A400: "#f4e311",
          "100_01": "#fdf4bc",
          "900_01": "#fd7819",
        },
        pink: { 300: "#ff55a9", 600: "#de1342", A100: "#ff66a8", "300_01": "#ff7490" },
        teal: { 500: "#00b581", "500_01": "#12b475", A400: "#31e4ba" },
        blue_gray: {
          900: "#353333",
          "900_02": "#1e0e46",
          "900_01": "#2c3235",
          "900_05": "#333333",
          "900_04": "#27104a",
          "900_03": "#312755",
        },
        deep_orange: { 500: "#f76b27", 800: "#d14f18", A400: "#ff2500", "500_01": "#ff6012", A400_01: "#f62500" },
        red: { 100: "#fccac9", 900: "#871412", A700: "#f20000", "900_01": "#8e1715" },
        gray: {
          50: "#fafafa",
          200: "#e9e9e9",
          400: "#bcbbbc",
          500: "#a98698",
          600: "#7d7d7d",
          900: "#5c2200",
          "900_02": "#371610",
          "900_03": "#101213",
          "900_01": "#1d1d1d",
        },
        orange: { 200: "#e6bb74", 800: "#d06e00", A200: "#fba639" },
        amber: { 200: "#ffde82", 600: "#ffb50a", 700: "#d99e00", "700_01": "#e2a00e" },
        white: { A700: "#fffcfc", A700_01: "#ffffff" },
        blue: { 200: "#9cd6fa", A700: "#0051ee" },
        deep_purple: { 500: "#7e2fd9", A100: "#c585ff" },
        black: { 900: "#000000" },
        indigo: { 900: "#000083", A400: "#475df6" },
      },
      boxShadow: {},
      fontFamily: { satoshivariable: "Satoshi Variable", inter: "Inter" },
    },
  },
};
