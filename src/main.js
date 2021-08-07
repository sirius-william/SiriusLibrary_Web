import { createApp } from 'vue'

import router from './router'
import store from './store'
import ElementPlus from './plugins/element'
import "element-plus/lib/theme-chalk/index.css"
import App from './App.vue'
const app = createApp(App)

app.use(ElementPlus).use(store).use(router).mount('#app')