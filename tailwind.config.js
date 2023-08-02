/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
    fontFamily: {
      burtons: "burtons"
    },
    animation: {
      'bounce-slow': 'bounceSlow 2s cubic-bezier(0.2, 0.55, 0.25, 1.5) infinite',
    },
    keyframes: {
      bounceSlow: {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(-25px)', // Adjust the bounce height
        },
      },
    },
  },
};

export const plugins = [];
