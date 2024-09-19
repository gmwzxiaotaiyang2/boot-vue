import { createApp } from 'vue'
import '@/assets/styles/global.scss'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.mount('#app')
