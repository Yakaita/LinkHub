/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            inter: ['"Inter"'],
        },
        extend: {
            boxShadow: {
                'offset-black': '5px 5px black',
            },
        },
    },
};
