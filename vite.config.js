import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default async ({ mode, command }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd())

  // 返回 Vite 配置
  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/types'),
      },
    },

    // 配置插件
    // createVitePlugins 函数用于创建一组 Vite 插件
    // 传入环境变量和一个布尔值，表示是否为生产构建
    plugins: createVitePlugins(env, command === 'build'),

    // 这里可以添加其他 Vite 配置选项
    // 例如：
    // base: '/',
    // server: { ... },
    // build: { ... },
    // resolve: { ... },
    // css: { ... },
    // 等等
  })
}
