import type { Config } from 'tailwindcss'
import * as colors from 'tailwindcss/colors'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  theme: {
    colors: {
      ...colors,
      background: '#090101',
      mainColor: '#cf4307',
      darkShade: '#2B2A33',
      light: '#fff5d6',
    },
    extend: {
      fontFamily: {
        samantha: 'samantha-signature',
        satoshi: 'satoshi',
      },
    },
    screens: {
      xsm: '390px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
}

export default config
