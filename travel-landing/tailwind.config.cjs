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
    'min-w-input-sm',
    'min-w-banner',
    'min-w-375',
    'min-w-220',
    'min-w-30',
    'min-w-119',
    'sm:min-w-356',
    'sm:min-h-434',
    'min-h-btn-primary',
    'min-h-btn-secondary',
    'min-h-btn-rarely',
    'min-h-input-sm',
    'min-h-banner',
    'min-h-btn',
    'min-h-16',
    'min-h-446',
    'min-h-504',
    'min-h-417',
    'min-h-480',
    'min-h-434',
    'min-h-310',
    'min-h-492',
    'min-h-405',
    'min-h-581',
    'min-h-32',
    'max-w-alert',
    'max-w-form',
    'max-w-btn-submit',
    'text-tertiary',
    'text-primary'
  ],
  theme: {
    extend: {
      colors: {
        light: '#fff',
        lightPrimary: '#fafafa',
        secondary: '#f8f8f8',
        tertiary: '#34343f',
        primary: '#f89f4e',
        rarely: '#02a29f'
      },
      minWidth: {
        'btn': '98px',
        'btn-primary': '310px',
        'btn-rarely': '110px',
        'btn-secondary': '228px',
        '220': '220px',
        'input-sm': '240px',
        'banner': '480px',
        '375': '375px',
        '356': '356px',
        '30': '30px',
        '119': '119px'
      },
      minHeight: {
        'btn': '46px',
        'btn-primary': '110px',
        'btn-rarely': '38px',
        'btn-secondary': '56px',
        'input-sm': '46px',
        'banner': '420px',
        '310': '310px',
        '581': '581px',
        '480': '480px',
        '446': '446px',
        '504': '504px',
        '417': '417px',
        '405': '405',
        '492': '492px',
        '434': '434px',
        '32': '32px',
        '16': '16px'
      },
      maxWidth: {
        'header': '695px',
        'part': '50%',
        'alert': '355px',
        'form': '480px',
        'btn-submit': '100px'
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
