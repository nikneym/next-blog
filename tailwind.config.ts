import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--font-roboto)",
      },
      colors: {
        primary: "#94ebeb",
        accent: "#fbb86c",
        ground: "#33302f",
        ["accent-darker"]: "#faac53",
        ["soft-gray"]: "#433f3e",
        ["hover-tone"]: "#211f1f",
      },
    },
  },
  plugins: [],
};
export default config;
