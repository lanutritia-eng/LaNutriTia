/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "hsl(var(--brand))",
        "brand-dark": "hsl(var(--brand-dark))",
        accent: "hsl(var(--accent))",
        surface: "hsl(var(--surface))",
        "surface-muted": "hsl(var(--surface-muted))",
        ink: "hsl(var(--ink))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        "shadow-color": "hsl(var(--shadow))",
      },
      fontFamily: {
        body: "var(--font-body)",
        heading: "var(--font-heading)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        soft: "0 12px 32px -24px hsl(var(--shadow) / 0.45), 0 2px 6px -4px hsl(var(--shadow) / 0.35)",
        card: "0 18px 40px -30px hsl(var(--shadow) / 0.5), 0 4px 12px -8px hsl(var(--shadow) / 0.35)",
      },
    },
  },
  plugins: [],
};
