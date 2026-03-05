import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

function devHtmlFallback() {
  return {
    name: 'dev-html-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/' || req.url === '/My-Portfolio/' || req.url === '/index.html' || req.url === '/My-Portfolio/index.html') {
          req.url = '/index.dev.html'
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), devHtmlFallback()],
  base: '/My-Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: resolve(__dirname, 'index.dev.html'),
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          lucide: ['lucide-react']
        }
      }
    }
  }
})
