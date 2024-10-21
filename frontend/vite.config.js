import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
  
// })


export default defineConfig({
  server: {
    host: true,  // This makes Vite bind to all interfaces (including local IP)
    port: 5173,  // Change this if you want a different port
  },
  plugins: [react()],
});