import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     const path = id.split('/lib/')[1]
        //     return 'compoments'
        //   }
        // }
      }
    }
  }
})
