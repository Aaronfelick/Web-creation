/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* ----------------------------------------------------------------
       * Typography — premium pairing
       * Headings:  Syne / Space Grotesk (expressive, geometric)
       * Body:      Inter / DM Sans (clean, legible)
       * ---------------------------------------------------------------- */
      fontFamily: {
        display: ["Syne", "Space Grotesk", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Syne", "system-ui", "sans-serif"],
        sans: ["Inter", "DM Sans", "system-ui", "sans-serif"],
        body: ["DM Sans", "Inter", "system-ui", "sans-serif"],
      },

      /* ----------------------------------------------------------------
       * Color system — dark canvas + electric orange signature
       * ---------------------------------------------------------------- */
      colors: {
        // Bright electric orange signature color
        brand: {
          DEFAULT: "#FF5B14",
          50: "#FFF1EA",
          100: "#FFE0CE",
          200: "#FFBE9C",
          300: "#FF9A66",
          400: "#FF7A38",
          500: "#FF5B14", // signature
          600: "#F23E00",
          700: "#C22E00",
          800: "#8F2200",
          900: "#5E1700",
          glow: "#FF7A38",
        },
        // Deep dark canvas
        ink: {
          DEFAULT: "#070708",
          950: "#050506",
          900: "#0A0A0C",
          850: "#0F1014",
          800: "#14151A",
          700: "#1C1D24",
          600: "#262833",
          500: "#373A47",
        },
        // Glass surfaces (used with opacity utilities)
        glass: {
          light: "rgba(255,255,255,0.08)",
          medium: "rgba(255,255,255,0.06)",
          dark: "rgba(10,10,12,0.55)",
          border: "rgba(255,255,255,0.10)",
        },
      },

      /* ----------------------------------------------------------------
       * Premium gradients
       * ---------------------------------------------------------------- */
      backgroundImage: {
        // Signature warm electric gradient
        "gradient-brand":
          "linear-gradient(135deg, #FF7A38 0%, #FF5B14 45%, #F23E00 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(255,122,56,0.18) 0%, rgba(255,91,20,0.10) 100%)",
        // Sophisticated mesh / aurora canvas
        "gradient-mesh":
          "radial-gradient(at 18% 22%, rgba(255,91,20,0.22) 0px, transparent 55%), radial-gradient(at 82% 12%, rgba(120,80,255,0.16) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(255,122,56,0.14) 0px, transparent 55%)",
        "gradient-aurora":
          "conic-gradient(from 180deg at 50% 50%, #FF5B14 0deg, #F23E00 120deg, #7850FF 240deg, #FF5B14 360deg)",
        // Subtle premium surface sheen for cards / glass
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 100%)",
        "gradient-glass-strong":
          "linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)",
        // Hero spotlight + dark vignette
        "gradient-spotlight":
          "radial-gradient(60% 60% at 50% 0%, rgba(255,91,20,0.18) 0%, transparent 70%)",
        "gradient-ink":
          "linear-gradient(180deg, #0A0A0C 0%, #070708 60%, #050506 100%)",
        // Animated text gradient
        "gradient-text":
          "linear-gradient(120deg, #FFFFFF 0%, #FFD9C2 35%, #FF7A38 70%, #FF5B14 100%)",
        // Thin hairline borders via gradient
        "gradient-hairline":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)",
      },

      /* ----------------------------------------------------------------
       * Backdrop blur variants (glassmorphism)
       * ---------------------------------------------------------------- */
      backdropBlur: {
        xs: "2px",
        sm: "6px",
        DEFAULT: "10px",
        md: "14px",
        lg: "20px",
        xl: "28px",
        "2xl": "40px",
        "3xl": "64px",
      },
      backdropSaturate: {
        125: "1.25",
        150: "1.5",
        175: "1.75",
        200: "2",
      },

      /* ----------------------------------------------------------------
       * Shadows — soft glows + glass elevation
       * ---------------------------------------------------------------- */
      boxShadow: {
        glass:
          "0 8px 32px -8px rgba(0,0,0,0.55), inset 0 1px 0 0 rgba(255,255,255,0.08)",
        "glass-lg":
          "0 24px 64px -16px rgba(0,0,0,0.65), inset 0 1px 0 0 rgba(255,255,255,0.10)",
        glow: "0 0 0 1px rgba(255,91,20,0.20), 0 8px 30px -6px rgba(255,91,20,0.45)",
        "glow-lg":
          "0 0 0 1px rgba(255,91,20,0.25), 0 16px 56px -8px rgba(255,91,20,0.55)",
        "glow-soft": "0 10px 60px -10px rgba(255,122,56,0.40)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.10)",
      },

      /* Tighter, premium display tracking + sizes */
      letterSpacing: {
        tightest: "-0.05em",
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "9xl": ["8rem", { lineHeight: "1.0", letterSpacing: "-0.045em" }],
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },

      /* ----------------------------------------------------------------
       * Motion
       * ---------------------------------------------------------------- */
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
