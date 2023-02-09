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
        primary: '#f89f4e',
        rarely: '#02a29f'
      },
      minWidth: {
        'btn': '98px',
        'btn-primary': '310px',
        'btn-rarely': '110px',
        'btn-secondary': '228px'
      },
      minHeight: {
        'btn': '46px',
        'btn-primary': '110px',
        'btn-rarely': '38px',
        'btn-secondary': '56px'
      },
      fontFamily: {
        primary: ['Abel', 'sans-serif']
      },
      fontSize: {
        'size-xs': '15px',
        'size-sm': '19px',
        'size-lg': '20px',
        'size-xl': '22px',
        'size-2xl': '25px',
        'size-3xl': '48px'
      },
      lineHeight: {
        'xs': '19px',
        'sm': '24px',
        'lg': '25px',
        'xl': '28px',
        '2xl': '32px',
        '3xl': '61px'
      }
    },
  },
  plugins: [],
}
