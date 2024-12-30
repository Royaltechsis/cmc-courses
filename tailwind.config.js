/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        msGrids: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      colors: {
        lightWhite: "#efefef",
        lightBlue: "#455ff1",
        lightpurple: "#ec2662",
        grays: "#626262",
        white: "#fff",
        grayblack: "#1d2938",
        greenText: "#3DCA8E",
        backgroundRgba: "rgba(0, 0, 0, 0.7)",
        boxshadow: "5px 5px 30px rgba(0, 0, 0, 0.1)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(24,118,242,1) 100%)",
       
        background3:
          "linear-gradient(to right,rgba(26, 245, 223, 1),rgba(42, 251, 188, 1)",
      },
      fontSize: {
        larger: "3rem",
        large: "2.5rem",
        fontSize1: "2rem",
        fontSize2: "1.4rem",
        fontSize3: "1.2rem",
        fontSize4: "16px",
      },
      screens: {
        "sm-min": { min: "640px" },
        "md-min": { min: "800px" },
        "lg-min": { min: "1024px" },
        "xl-min": { min: "1280px" },
        "3xl": { min: "1680px" },

        smaller: { max: "400px" },
        sm: { max: "700px" },
        md: { max: "767px" },
        tablet: { max: "992px" },
        lg: { max: "1200px" },
        xl: { max: "1279px" },
        "2xl": { max: "1400px" },
      },
    },
  },
  plugins: [],
};
