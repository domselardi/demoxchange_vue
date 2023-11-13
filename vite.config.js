/*eslint-env node*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
let basePath = '/';
if (process.env.NODE_ENV === 'production') {
  basePath = '/projects/demoxchange';
}
export default defineConfig({
  base: basePath,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
