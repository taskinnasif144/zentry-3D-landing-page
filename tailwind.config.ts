import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ["general", "sanf-serif"],
        "zentry-regular": ["zentry-regular", "sanf-serif"],
        "circular-web": ["circular-web", "sanf-serif"],
        "robert-regular": ["robert-regular", "sanf-serif"],
        "robert-medium": ["robert-medium", "sanf-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
      keyframes: {
        "hero-mini": {
          "0%": {
            transform: "scale(0.90) translate(-50%, -50%)",
          },
          "100%": {
            transform: "scale(1.1) translate(-50%, -50%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
