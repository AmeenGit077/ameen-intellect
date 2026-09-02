module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#09090e',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'card-dark': '#12121a',
        'card-darker': '#161622',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        'accent-teal': '#00cea8',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
        'card-figma': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/Mybg.jpg)`,
        'figma-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
        'name-gradient': 'linear-gradient(90deg, #a855f7 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
};
