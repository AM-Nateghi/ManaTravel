/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FBF9F5',
          card: '#FFFFFF',
          border: '#E7E2D9',
          subtle: '#F4EFEB',
        },
        celadon: {
          DEFAULT: '#2D5A4C',
          deep: '#1F3F35',
          surface: '#E8EFEA',
          border: '#C3D6C9',
        },
        terracotta: {
          DEFAULT: '#C15C3D',
          deep: '#9B452B',
          surface: '#FDF0EB',
          border: '#EACCC1',
        },
        stone: {
          title: '#1D1C1A',
          body: '#34322E',
          caption: '#7A756D',
          muted: '#9E9991',
        },
      },
      fontFamily: {
        serif: ['"Literata"', '"Source Serif 4"', '"Noto Serif SC"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sharp': '2px',
        'subtle': '4px',
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(29, 28, 26, 0.05)',
        'elevated': '0 12px 32px -4px rgba(29, 28, 26, 0.08)',
      },
    },
  },
  plugins: [],
}
