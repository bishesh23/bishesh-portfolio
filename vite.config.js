import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/bishesh-portfolio/',
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  }
})
