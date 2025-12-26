/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          700: '#1E40AF',
          900: '#1E3A8A',
        },
        success: {
          500: '#10B981',
          700: '#047857',
        },
        error: {
          500: '#EF4444',
          700: '#B91C1C',
        },
        warning: {
          500: '#F59E0B',
          700: '#92400E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

