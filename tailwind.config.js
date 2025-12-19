/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'aoc-dark': '#0a0a14',
                'aoc-darker': '#14141e',
                'aoc-darkest': '#1e1e2e',
                'aoc-gold': '#FFD700',
                'aoc-orange': '#FFA500',
                'aoc-red': '#FF6347',
            },
            fontFamily: {
                'display': ['Cinzel', 'serif'],
                'body': ['Inter', 'sans-serif'],
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s infinite',
                'slide-in': 'slide-in 0.8s ease-out',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 0 var(--tw-shadow-color)'
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 0 8px transparent'
                    },
                },
                'slide-in': {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
}
