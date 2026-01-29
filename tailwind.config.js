/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // OpenAI Brand Kit: Silver, Platinum, Black
                gem: {
                    50: '#fafafa',    // Lightest platinum
                    100: '#f5f5f5',   // Light platinum
                    200: '#e5e4e2',   // Platinum
                    300: '#d4d4d4',   // Light silver
                    400: '#c0c0c0',   // Silver
                    500: '#a3a3a3',   // Medium silver
                    600: '#737373',   // Dark silver
                    700: '#404040',   // Charcoal
                    800: '#171717',   // Near black
                    900: '#000000',   // Solid black
                },
                silver: '#c0c0c0',
                platinum: '#e5e4e2',
                black: '#000000',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgb(192 192 192 / 0.4)' },
                    '100%': { boxShadow: '0 0 20px rgb(192 192 192 / 0.6)' },
                },
            },
        },
    },
    plugins: [],
};
