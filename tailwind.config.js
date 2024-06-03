/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#152935",
      },
      screens: {
        // SH
        laptop: "1500px",
        tab: "850px",
        xtab: "1050px",
        maxtab:"1200px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'mr-dafoe': ['"Mr Dafoe"', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'fira': ['Fira Sans', 'sans-serif'],
        'google': [
          'Josefin Sans',
          'sans-serif',],
          'Yeseva': [
            'Yeseva One', // Add Yeseva One to the list
          ],

      }
    },
  },
  plugins: [],
};
