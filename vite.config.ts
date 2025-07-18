import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          json: true ,
          filename: "bundle-stats.json",
          gzipSize: true,
          brotliSize: true
        })
      ]
    }
  },
  optimizeDeps: {
    include: [
      
    ]
  }
}))
