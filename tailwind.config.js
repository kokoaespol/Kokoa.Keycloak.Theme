/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{html,js,svelte,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                accent: "hsl(var(--color-accent))",
                "accent-secondary": "hsl(var(--color-accent-secondary))",
                "accent-tertiary": "hsl(var(--color-accent-tertiary))"
            }
        }
    },
    plugins: []
};
