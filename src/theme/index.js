/** @type {import('tailwindcss/tailwind-config').TailwindConfig['theme']} */
const theme = Object.freeze({
  fontFamily: {
    sans: ['Fellix', 'sans-serif'],
    serif: ['Recoleta', 'serif'],
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    'overline-small': '0.5625rem',
    'overline-big': '0.6875rem',
    small: '0.625rem',
    caption: '0.75rem',
    label: '0.875rem',
    body: '1rem',
    copy: '1.125rem',
    title6: '1.25rem',
    title5: '1.5rem',
    title4: '2rem',
    title3: '2.5rem',
    title2: '3rem',
    title1: '4rem',
  },
  letterSpacing: {
    tighter: '-0.03125em',
    tight: '-0.025em',
    snug: '-0.015em',
    normal: '0em',
    wide: '0.2em',
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    brand: {
      primary: ['#1B1C1E', '#F7DD71', '#124E52'],
      yellow: {
        soft: '#F7EBDF',
        light: '#FEF9F3',
      },
      green: {
        DEFAULT: '#5D8F8E',
        light: '#EDF5F5',
        soft: '#A0BBBC',
        dark: '#124E52',
      },
    },
    accent: ['#51B9B4', '#EF9623', '#FBA07F'],
    info: {
      DEFAULT: '#5487F5',
      opacity: '#E5EDFE',
    },
    success: {
      DEFAULT: '#00C48C',
      opacity: '#D9F6EE',
    },
    alert: {
      DEFAULT: '#F1B422',
      opacity: '#FFF8E7',
    },
    warning: {
      DEFAULT: '#FFA26B',
      opacity: '#FFF1E9',
    },
    error: {
      DEFAULT: '#FF647C',
      opacity: '#FFE8EB',
    },
    grey: [
      '#F9F9F9',
      '#F5F5F5',
      '#F0F0F0',
      '#E7E7E7',
      '#C5C5C6',
      '#8B8E98',
      '#636779',
      '#45495A',
      '#131635',
    ],
    black: '#090909',
    white: '#FFFFFF',
    state: {
      hover: ['#FFD27A', '#FFFFFE'],
      pressed: ['#EAAF3B', '#FFEED9'],
    },
  },
  extend: {
    padding: {
      0.5: '2px',
      1.5: '6px',
    },
    boxShadow: (theme) => ({
      button: `4px 6px 0px ${theme('colors.brand.green.dark')}`,
      big: '0px 12px 24px rgba(41, 43, 50, 0.25)',
      medium: '0px 6px 12px rgba(41, 43, 50, 0.12)',
      small: '0px 4px 12px rgba(41, 43, 50, 0.04)',
    }),
    borderWidth: {
      px: '1px',
      1: '1.5px',
    },
    backgroundImage: {
      motion: 'linear-gradient(90deg, #F1F4FF 0%, #E7EBFB 100%)',
    },
  },
});

module.exports = { theme };
