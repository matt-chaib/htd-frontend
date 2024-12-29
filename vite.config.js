import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_URL': JSON.stringify('http://localhost:5003'),
  },
  server: {
    host: "0.0.0.0", // Binds the server to all interfaces
    port: 3000,      // Optional: Ensures it uses the correct port
  },
})