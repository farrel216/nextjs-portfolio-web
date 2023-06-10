/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        merriweather: ['var(--font-merriweather)'],
        roboto_mono: ['var(--font-roboto-mono)']
      },
      colors: {
        'dark': '#1b1b1b',
        'light': '#f7f7f7',
        'primary': '#14b8a6'
      },
    },
  },
  plugins: [],
}