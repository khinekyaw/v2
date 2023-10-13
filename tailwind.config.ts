import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/styles.ts',
  ],
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          '50': '#f6f6f9',
          '100': '#ececf2',
          '200': '#d5d6e2',
          '300': '#b0b2c9',
          '400': '#8588ab',
          '500': '#656992',
          '600': '#515478',
          '700': '#424462',
          '800': '#393a53',
          '900': '#333447',
          '950': '#0d0d12',
        },
      },
      boxShadow: {
        DEFAULT: '0px 1px 1px 0px',
      },
    },
  },
  plugins: [],
}
export default config
