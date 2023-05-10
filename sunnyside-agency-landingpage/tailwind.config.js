/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      primary: {
        "soft-red": "hsl(var(--color-primary-soft-red))",
        yellow: "hsl(var(--color-primary-yellow))",
        cyan: "hsl(var(--color-primary-cyan))",
        blue: "hsl(var(--color-primary-blue))",
        mcyan: "hsl(var(--color-primary-mcyan))",
      },
      neutral: {
        ddblue: "hsl(var(--color-neutral-ddblue))",
        dgblue: "hsl(var(--color-neutral-dgblue))",
        dblue: "hsl(var(--color-neutral-dblue))",
        blue: "hsl(var(--color-neutral-blue))",
        white: "hsl(var(--color-neutral-white))",
      },
    },
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    backgroundImage: {
      header: "url('/images/desktop/image-header.jpg')",
      "graphic-design": "url('/images/desktop/image-graphic-design.jpg')",
      photography: "url('/images/desktop/image-photography.jpg')",
      "header-mobile": "url('/images/mobile/image-header.jpg')",
      "graphic-design-mobile": "url('/images/mobile/image-graphic-design.jpg')",
      "photography-mobile": "url('/images/mobile/image-photography.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
