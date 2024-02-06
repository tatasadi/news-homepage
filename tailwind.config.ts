import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
        // Neutral colors
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
}
export default config
