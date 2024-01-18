/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                base: "#07161b",
                second: "#0a1f26",
                main: "#f7ab0a",
                primary: "#3d737f",
                light: "#558d99",
                tt: "#ebeded",
                card: "#cec7bf",
                cardlight: "#e0ddda",
                trans: "#0a1f26a1",
            },
        },
    },
    plugins: [],
};
