import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { vitePluginForArco } from '@arco-plugins/vite-react'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variable.scss";`
      }
    }
  },
  plugins: [
    react(),
    vitePluginForArco(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/assets/svg/')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
