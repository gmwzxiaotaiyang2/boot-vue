import components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
  return components({
    resolvers: [ElementPlusResolver()],
    dirs: [
      'src/components',
      'src/layouts/ui-kit',
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
  })
}
