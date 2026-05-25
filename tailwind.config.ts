import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F7F4EF',
        'text-primary': '#183B3B',
        'text-secondary': '#1F2D3D',
        'accent-teal': '#7DBDC3',
        'accent-teal-dark': '#5FA3A9',
        'accent-sand': '#D8C6A3',
        'border-light': '#E8E3D8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(24, 59, 59, 0.08)'
      }
    }
  },
  plugins: []
}

export default config
