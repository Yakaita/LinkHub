/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            inter: ['"Inter"'],
            satoshi: ['"Satoshi"'],
        },
        extend: {
            colors: {
                lightGray: '#F7F8FB',
            },
        },
    },
};
