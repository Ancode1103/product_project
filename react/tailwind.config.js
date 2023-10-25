import indexHtml from "./index.html";
import { default as srcFiles } from "./src/**/*.{js,jsx,ts,tsx}";

export default {
  content: [
    indexHtml,
    srcFiles
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          "from": {
            transform: "translateY(-0.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
        },
      },
      animation: {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
