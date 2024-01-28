/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        Wallpoet: ['Wallpoet', 'sans-serif'],
        'BlackOpsOne': ['Black Ops One', 'system-ui'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // 'corner-clip-option': 'linear-gradient(315deg, transparent 10px, #0078D4 0 )',
      },

      // background: {
      //   'corner-clip-option': 'linear-gradient(315deg, transparent 10px, #0078D4 0 )',
      // }
    },
  },
  plugins: [],
}
