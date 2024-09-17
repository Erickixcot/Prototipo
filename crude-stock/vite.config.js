import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://erick-production.up.railway.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
});


// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/Materiales': {
        target: 'http://localhost:5000', // Para entorno de desarrollo
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // directorio de salida de producción
  },
})*/

