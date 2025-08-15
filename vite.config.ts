import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

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
      port: Number(env.VITE_APP_PORT),
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          pathRewrite: {
            ['^' + process.env.VUE_APP_BASE_API]: process.env.VUE_APP_BASE_API,
          },
        },
      },
    },
    plugins: [react(), svgr(), tailwindcss()],
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
