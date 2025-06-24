import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: '/' + env.VITE_APP_BASE_SYS_NAME,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: 'localhost',
      port: 2457,
      proxy: {
        '/api': {
          target: 'http://61.145.163.252:6148',
        },
      },
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // 可以在这里添加全局的 Less 变量
          additionalData: `@import "@/assets/css/variables.less";`,
        },
      },
    },
  }
})
