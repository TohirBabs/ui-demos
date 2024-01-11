/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["h-[450px]", "h-0","h-[0vh]","h-[100vh]","h-[96vh]"],
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
