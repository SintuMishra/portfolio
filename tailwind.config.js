export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--text-primary)", secondary: "var(--text-secondary)", muted: "var(--text-muted)",
        page: "var(--bg-page)", deep: "var(--bg-deep)", surface: "var(--surface-1)", raised: "var(--surface-2)",
        accent: "var(--accent-text)", steel: "var(--border-steel)",
      },
    },
  },
  plugins: [],
}