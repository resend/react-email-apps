const colors = require('@radix-ui/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const iOsHeight = plugin(function ({ addUtilities }) {
  const supportsTouchRule = '@supports (-webkit-touch-callout: none)';
  const webkitFillAvailable = '-webkit-fill-available';

  const utilities = {
    '.min-h-screen-ios': {
      [supportsTouchRule]: {
        minHeight: webkitFillAvailable,
      },
    },
    '.h-screen-ios': {
      [supportsTouchRule]: {
        height: webkitFillAvailable,
      },
    },
  };

  addUtilities(utilities, ['responsive']);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}',
    '../../apps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)',
        gradientHover:
          'linear-gradient(145.37deg, rgba(255, 255, 255, 0.1) -8.75%, rgba(255, 255, 255, 0.057) 83.95%)',
        shine:
          'linear-gradient(45deg, rgba(255,255,255,0) 45%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 55%,rgba(255,255,255,0) 100%)',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-100%' },
          '100%': { backgroundPosition: '100%' },
        },
        dash: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      colors: {
        gray: {
          1: colors.mauveDark.mauve1,
          2: colors.mauveDark.mauve2,
          3: colors.mauveDark.mauve3,
          4: colors.mauveDark.mauve4,
          5: colors.mauveDark.mauve5,
          6: colors.mauveDark.mauve6,
          7: colors.mauveDark.mauve7,
          8: colors.mauveDark.mauve8,
          9: colors.mauveDark.mauve9,
          10: colors.mauveDark.mauve10,
          11: colors.mauveDark.mauve11,
          12: colors.mauveDark.mauve12,
        },
        green: {
          1: colors.greenDark.green1,
          2: colors.greenDark.green2,
          3: colors.greenDark.green3,
          4: colors.greenDark.green4,
          5: colors.greenDark.green5,
          6: colors.greenDark.green6,
          7: colors.greenDark.green7,
          8: colors.greenDark.green8,
          9: colors.greenDark.green9,
          10: colors.greenDark.green10,
          11: colors.greenDark.green11,
          12: colors.greenDark.green12,
        },
        red: {
          1: colors.redDark.red1,
          2: colors.redDark.red2,
          3: colors.redDark.red3,
          4: colors.redDark.red4,
          5: colors.redDark.red5,
          6: colors.redDark.red6,
          7: colors.redDark.red7,
          8: colors.redDark.red8,
          9: colors.redDark.red9,
          10: colors.redDark.red10,
          11: colors.redDark.red11,
          12: colors.redDark.red12,
        },
        yellow: {
          1: colors.amberDark.amber1,
          2: colors.amberDark.amber2,
          3: colors.amberDark.amber3,
          4: colors.amberDark.amber4,
          5: colors.amberDark.amber5,
          6: colors.amberDark.amber6,
          7: colors.amberDark.amber7,
          8: colors.amberDark.amber8,
          9: colors.amberDark.amber9,
          10: colors.amberDark.amber10,
          11: colors.amberDark.amber11,
          12: colors.amberDark.amber12,
        },
        blue: {
          1: colors.blueDark.blue1,
          2: colors.blueDark.blue2,
          3: colors.blueDark.blue3,
          4: colors.blueDark.blue4,
          5: colors.blueDark.blue5,
          6: colors.blueDark.blue6,
          7: colors.blueDark.blue7,
          8: colors.blueDark.blue8,
          9: colors.blueDark.blue9,
          10: colors.blueDark.blue10,
          11: colors.blueDark.blue11,
          12: colors.blueDark.blue12,
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [iOsHeight],
};
