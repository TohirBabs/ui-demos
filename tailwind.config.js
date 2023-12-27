/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["h-[450px]", "h-0"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        dm: ["DM Sans"],
        open: ["Open Sans"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
