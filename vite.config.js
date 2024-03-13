import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',
  envDir: '../',
  build: {
    outDir: '../dist'
  },
  base: './',
  plugins: [react(), nodePolyfills()],
})
