module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  colors: {
    background: {
      primary: "#0B0F19",
      secondary: "#111827",
      tertiary: "#1F2937",
    },
    primary: {
      DEFAULT: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
    secondary: {
      DEFAULT: "#8B5CF6",
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    text: {
      primary: "#E5E7EB",
      secondary: "#9CA3AF",
      muted: "#6B7280",
      heading: "#F9FAFB",
    },
  },
}
};