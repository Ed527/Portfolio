import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed', /* purple-600 */
          light: '#c084fc',   /* purple-400 */
          dark: '#5b21b6'     /* purple-800 */
        },
      },
    },
  },
  plugins: [typography],
};
