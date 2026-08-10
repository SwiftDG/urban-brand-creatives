import type { Config } from "tailwindcss";
import { colors, radius } from "./lib/theme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "1280px",
      },
      colors: {
        black: colors.black,
        white: colors.white,
        "silver-black": colors.silverBlack,
        "purple-deep": colors.purpleDeep,
        "purple-mid": colors.purpleMid,
        "purple-dark": colors.purpleDark,
        "purple-wash": colors.purpleWash,
        "orange-red": colors.orangeRed,
        "orange-red-dark": colors.orangeRedDark,
        "off-white": colors.offWhite,
        silver: colors.silver,
        "silver-light": colors.silverLight,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-dm-serif-display)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-cormorant-garamond)", "serif"],
      },
      borderRadius: {
        none: radius.none,
        button: radius.button,
        card: radius.card,
      },
      spacing: {
        "section-gap": "120px",
        "side-desktop": "80px",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "fade-slide-in": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
        "fade-slide-in": "fade-slide-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
