import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayBorder: "#2f3339",
        todosBg: "#3d424a",
        inputBg: "#353a40",
        todoDescr: "#90979f",
        todoTitle: "#fff",
        inputText: "#70757e"

      },
    },
  },
  plugins: [],
} satisfies Config;
