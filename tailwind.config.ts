import type { Config } from "tailwindcss";
import daisyui from 'daisyui'
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        spin: {
          '0%': {
            transform: 'rotateY(0deg) rotateX(0deg)',
          },
          '100%': {
            transform: 'rotateY(360deg) rotateX(360deg)',
          },
        },
      }
    },
  },
  plugins: [daisyui],
} satisfies Config;
