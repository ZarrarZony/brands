module.exports = {
  mode: 'jit',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FC4A1A',
        secondary: '#40545C',
        'secondary-darker': '#36464D',
        'gray-10': '#f5f5f5',
        'gray-30': '#cccccc',
        'gray-33': '#555555',
        'gray-47': '#777777',
        'gray-49': '#F9F9F9',
        'gray-69': '#B1B1B1',
        'gray-80': '#444',
        'gray-86': '#dcdcdc',
        'gray-94': '#EFEFEF',
        yellow: '#F7B733',
        'black-70': '#333333',
        'black-80': '#262626',
        'black-90': '#222',
      },
      width: {
        '18px': '18px',
      },
      spacing: {
        0: '0',
        '4%': '4%',
        97: '97%',
        1275: '1275px',
      },
      backgroundImage: {
        'footer-link': 'url(@/assets/icons/widget-footer-link.png)',
      },
      fontSize: {
        xs: ['12px', '28px'],
        sm: '14px',
        l: '24px',
        '6xl': '64px',
      },
      screens: {
        xs: { min: '472px' },
        'xs-max': { max: '471.9px' },
        'sm-max': { max: '767.9px' },
        'md-max': { max: '1023.9px' },
        'lg-max': { max: '1279.9px' },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover'],
      width: ['group-hover'],

      padding: ['hover'],
      borderWidth: ['first'],
      margin: ['first'],
      scale: ['group-hover'],
    },
  },
}
