import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
      optimizeDeps: {
    include: ['@solana/web3.js']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000
  }
})