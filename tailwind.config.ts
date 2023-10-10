import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cezanne: ["fot-cezanne-pron", ...fontFamily.sans],
        "ryo-gothic": ["ryo-gothic-plusn", ...fontFamily.sans],
        karla: ["var(--font-karla)", ...fontFamily.sans],
      },
      colors: {
        muted: "rgb(178 178 178/var(--tw-text-opacity))",
        "muted-light": "rgb(109 109 109/var(--tw-text-opacity))",
        separator: "rgb(62 62 62/var(--tw-bg-opacity))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            primary: "#89241B",
            secondary: "#FFB86F",
          },
        },
      },
    }),
  ],
};
export default config;
