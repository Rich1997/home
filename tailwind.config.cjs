/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-dark': 'var(--primary-dark)',
                'primary-light': 'var(--primary-light)',
                'secondary-dark': 'var(--secondary-dark)',
                'secondary-light': 'var(--secondary-light)',
                'tertiary-dark': 'var(--tertiary-dark)',
                'tertiary-light': 'var(--tertiary-light)',
                'surface-dark': 'var(--surface-dark)',
                'surface-light': 'var(--surface-light)',
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
