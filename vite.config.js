import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Yeh line honi chahiye

// https://vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Yeh plugin yahan hona chahiye
  ],
})
