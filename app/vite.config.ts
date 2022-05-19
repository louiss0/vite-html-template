import {defineConfig} from "vite"
import WindiCSS from 'vite-plugin-windicss'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  build: {
    rollupOptions: {
      
    },
  },  
  plugins: [
    WindiCSS(),
    pugPlugin(),
    
  ],
})