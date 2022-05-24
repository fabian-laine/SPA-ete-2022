module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'orange': '#ef5713',
        'blue': '#275d6d',
        'counter-unit': '#1d4d5c',
        'border': '#707070',
        'banner': '#fbf3ee',
        'facebook':'#3b5998',
        'twitter': '#00acee',
        'whatsapp': '#25D366',
        'why': '#eff2f4',
        'card-section': "#dfe7eb",
      },
      borderRadius: {
        'large': '30px',
      },
      boxShadow: {
        'inner': 'inset 0 40px 20px 0 rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
}
