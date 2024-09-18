import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({ /* preset 选项 */}),
    presetUno(),
    presetIcons(),
    // ...自定义 presets
  ],
})
