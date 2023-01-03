const { slate, slateDark } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      lightmode: {
        'background': slate.slate1,
        'component': slate.slate3,
        'component-hover': slate.slate4,
        'component-selected': slate.slate5,
        'border': slate.slate6,
        'border-interactive': slate.slate7,
        'logo': slate.slate9,
        'logo-hover': slate.slate10,
        'text': slate.slate11,
        'text-high-contrast': slate.slate12,
      },
      darkmode: {
        'background': slateDark.slate1,
        'component': slateDark.slate3,
        'component-hover': slateDark.slate4,
        'component-selected': slateDark.slate5,
        'border': slateDark.slate6,
        'border-interactive': slateDark.slate7,
        'logo': slateDark.slate9,
        'logo-hover': slateDark.slate10,
        'text': slateDark.slate11,
        'text-high-contrast': slateDark.slate12,
      },
    },
  },
  plugins: [],
};
