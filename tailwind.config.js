/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from logo
        logo: {
          purple: '#6C5CE7',
          dark: '#2D3436',
        },
        // Sidebar
        sidebar: {
          bg: '#1E2432',
          hover: '#2A3142',
          border: '#343D4D',
        },
        // Accent green (for active states, LIVE badge)
        accent: {
          DEFAULT: '#00D9A5',
          light: '#E8FBF5',
          dark: '#00B88C',
        },
        // Chart colors
        chart: {
          purple: '#8B5CF6',
          'purple-light': '#C4B5FD',
          blue: '#6366F1',
          green: '#10B981',
          gray: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
