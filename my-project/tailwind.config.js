/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f97c22",
        dark:"#1e1e1e",
        light:"#f5f5f5",
        lightBlue:"#dbedf7",
      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        cursive:["Allura", "cursive"],
      },
      container:{
        center:true,
        padding:"3rem",
        // padding:{
        //   Default:"3rem",
        //   sm:"3rem",
        //   lg:"4rem",
        //   xl: '5rem',
        //   '2xl': '6rem',
        // },
      },
    },
  },
  plugins: [],
}

