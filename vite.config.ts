import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

function resolve(dir: string) {
  return join(__dirname, dir)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/_variables.scss";',
      }
    }
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      // '@components': path.resolve(__dirname, './src/components'),
      '@': resolve('src'),
      '@components': resolve('src/components'),
    }
  }
})
