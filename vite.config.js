import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure the base is explicitly set to root for custom domains
  base: '/',
  build: {
    outDir: 'dist',
  }
})
