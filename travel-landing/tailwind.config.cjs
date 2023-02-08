/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-primary',
    'bg-rarely',
    'min-w-button'
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        lightPrimary: '#fafafa',
        lightSecondary: '#f2f2f2',
        dark: '#34343f',
        primary: '#f89f4e',
        rarely: '#02a29f'
      },
      minWidth: {
        'button': '98px',
      },
    },
  },
  plugins: [],
}
