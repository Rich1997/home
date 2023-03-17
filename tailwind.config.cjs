/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-light': 'var(--primary-light)',
                'primary-dark': 'var(--primary-dark)',

                'secondary-light': 'var(--secondary-light)',
                'secondary-dark': 'var(--secondary-dark)',

                'tertiary-light': 'var(--tertiary-light)',
                'tertiary-dark': 'var(--tertiary-dark)',

                'surface-light': 'var(--surface-light)',
                'surface-dark': 'var(--surface-dark)',

                'primary-accent': 'var(--primary-accent)',
            },
        },
        screens: {
            phone: '320px',
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
        },
        animation: {
            'spin-soft': 'spin 1s linear 0.5',
        },
    },
    plugins: [],
};
