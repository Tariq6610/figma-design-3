import type { Config, }  from "tailwindcss";
import  plugin  from "tailwindcss/plugin";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',


      'md': '768px',
    

      'lg': '1152px',


      'xl': '1440px',
  

      '2xl': '1920px',
  
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function({ addVariant}) {
       // Adding the 'hocus' variant
      addVariant('hocus', ['&:hover', '&:focus']);
      // Adding the 'group-hocus' variant
      addVariant('group-hocus', [".group:hover &", ".group:focus &"]);

    }),
  ],
};
export default config;
