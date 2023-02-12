/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-primary',
    'bg-rarely',

    'min-w-btn',
    'min-w-btn-primary',
    'min-w-btn-rarely',
    'min-w-btn-secondary',
    'min-w-nav',

    'min-h-btn',
    'min-h-btn-primary',
    'min-h-btn-secondary',
    'min-h-btn-rarely',
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        lightPrimary: '#fafafa',
        lightSecondary: '#f2f2f2',
        dark: '#34343f',
        primary: '#80410A',
        rarely: '#02a29f'
      },
      minWidth: {
        'btn': '98px',
        'btn-primary': '310px',
        'btn-rarely': '110px',
        'btn-secondary': '228px',
        'nav': '192px'
      },
      minHeight: {
        'btn': '46px',
        'btn-primary': '110px',
        'btn-rarely': '38px',
        'btn-secondary': '56px'
      },
      maxWidth: {
        'header': '695px',
        'part': '50%',
        'full': '100%'
      },
      fontFamily: {
        primary: ['Abel', 'sans-serif']
      },
      fontSize: {
        'size-xs': '15px',
        'size-sm': '19px',
        'size-md': '20px',
        'size-lg': '22px',
        'size-xl': '25px',
        'size-2xl': '48px'
      },
      lineHeight: {
        'xs': '19px',
        'sm': '24px',
        'md': '25px',
        'lg': '28px',
        'xl': '32px',
        '2xl': '61px'
      }
    },
  },
  plugins: [],
}
