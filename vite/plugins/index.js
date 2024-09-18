import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createComponents from './components'
import createMock from './mock'
import createSvgIcon from './svg-icon'
import createUnocss from './unocss'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createMock(viteEnv, isBuild))
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createUnocss())

  return vitePlugins
}
