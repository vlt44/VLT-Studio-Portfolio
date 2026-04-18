import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Sunrise → nightfall stops (used by the hero overlay)
        sunrise: '#FFF1E6',
        daygold: '#FFD166',
        peach: '#FDBA74',
        dusk: '#FB7185',
        violeta: '#C084FC',
        twilight: '#7C3AED',
        indigoNight: '#312E81',
        deepNight: '#0B1220',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
};

export default config;
