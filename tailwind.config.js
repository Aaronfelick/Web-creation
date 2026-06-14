const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Syne"', ...defaultTheme.fontFamily.sans],
        sans: ['"Inter"', '"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        canvas: {
          900: "#10100f",
          950: "#090908",
          980: "#050504",
        },
        graphite: {
          100: "#f6f3ee",
          200: "#d8d2c8",
          400: "#8b857a",
          700: "#25231f",
          800: "#171613",
          900: "#0d0c0a",
        },
        electric: {
          orange: "#ff6a00",
          ember: "#ff8a1f",
          amber: "#ffc46b",
        },
        glass: {
          white: "rgba(255, 255, 255, 0.08)",
          stroke: "rgba(255, 255, 255, 0.1)",
          muted: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(8, 8, 7, 0.58)",
        },
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at 50% 0%, rgba(255, 106, 0, 0.22), transparent 34%), radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.09), transparent 22%), linear-gradient(180deg, #10100f 0%, #050504 100%)",
        "hero-aurora":
          "radial-gradient(circle at 18% 18%, rgba(255, 106, 0, 0.28), transparent 28%), radial-gradient(circle at 82% 12%, rgba(255, 255, 255, 0.1), transparent 24%), radial-gradient(circle at 50% 82%, rgba(255, 138, 31, 0.1), transparent 30%)",
        "orange-glow":
          "linear-gradient(135deg, rgba(255, 106, 0, 0.95) 0%, rgba(255, 138, 31, 0.72) 45%, rgba(255, 196, 107, 0.52) 100%)",
        "glass-sheen":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 42%, rgba(255, 255, 255, 0.02) 100%)",
        "dark-mesh":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 55%), radial-gradient(circle at 0% 0%, rgba(255, 106, 0, 0.12), transparent 32%)",
      },
      boxShadow: {
        glass:
          "0 24px 80px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "glass-sm":
          "0 16px 48px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.07)",
        "orange-glow":
          "0 0 0 1px rgba(255, 106, 0, 0.18), 0 16px 54px rgba(255, 106, 0, 0.24)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "18px",
        navbar: "24px",
        panel: "30px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["responsive", "hover", "focus", "supports-backdrop"],
      backgroundColor: ["supports-backdrop"],
      borderColor: ["supports-backdrop"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        "supports-backdrop",
        "@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0)))",
      );
    },
  ],
};
