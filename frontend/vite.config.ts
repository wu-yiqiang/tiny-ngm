import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { vitePluginForArco } from '@arco-plugins/vite-react'
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variable.scss";`,
      },
    },
  },
  plugins: [react(), vitePluginForArco()]
})
