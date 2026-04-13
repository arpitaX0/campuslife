/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#2C3A8C',
        'brand-gold': '#A59381',
        'soft-off-white': '#FAF9F6',
        'charcoal': '#3E3A36',
        'rose-primary': '#8B6E66',
        'navy-block': '#070B2B',
        'brand-accent': '#d83b9d',
        'violet': '#5a5af3',
        'brand-orange': '#E56D24',
        'brand-yellow': '#E5AA3E',
        'soft': 'rgba(37, 51, 134, 0.05)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Playfair Display', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        inter: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #d83b9d 0%, #a259ff 50%, #5a5af3 100%)',
      },
      borderRadius: {
        'lg': '32px',
        'md': '20px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
