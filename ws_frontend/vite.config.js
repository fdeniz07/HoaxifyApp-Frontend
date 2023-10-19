import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath,  URL } from 'node:url'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  },
  // Bu kisim JS ile alakali oldugu ucun tüm projelerde uygulanabilir. Kendi olusturdugumuz dosyalarda path belirtirken ../ yerine @ yazarak tanimlamamizi saglar. Src altindaki yollara otomatik erisebiliriz.
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
