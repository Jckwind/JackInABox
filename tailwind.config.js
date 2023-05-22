/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue': '#000080', // Royal Blue
                'gold': '#FFD700', // Gold
                'pale-gold': '#FFEBCD', // Pale gold
                'blackish': '#212121', // Blackish
                'white': '#FFFFFF', // White
            },
            fontFamily: {
                // Add your custom fonts here
                // 'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}