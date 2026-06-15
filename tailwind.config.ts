import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F4",
        surface: "#F4EEE8",
        primary: "#D8C3B5",
        secondary: "#C9D6C5",
        accent: "#E8D8C3",
        text: "#4E443D",
        muted: "#7D736C",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        body: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "28px",
        "3xl": "36px",
        "4xl": "48px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      spacing: {
        0: "0",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      borderRadius: {
        small: "12px",
        medium: "20px",
        large: "32px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
