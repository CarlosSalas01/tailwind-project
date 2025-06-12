module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up-fade": "slide-up-fade 0.7s cubic-bezier(.4,0,.2,1) both",
        "fade-in": "fade-in 1s ease-in both",
      },
      animationDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-radial-custom": {
          "mask-image":
            "radial-gradient(circle at center, #000 45%, transparent 80%)",
          "-webkit-mask-image":
            "radial-gradient(circle at center, #000 45%, transparent 80%)",
        },
      });
    },
    function ({ addUtilities, theme, e }) {
      const delays = theme("animationDelay");
      const utilities = Object.entries(delays).reduce((acc, [key, value]) => {
        acc[`.animate-delay-${key}`] = { "animation-delay": value };
        return acc;
      }, {});
      addUtilities(utilities, ["responsive"]);
    },
    require("@midudev/tailwind-animations"),
  ],
};
