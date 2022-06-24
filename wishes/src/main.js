import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import store from './stores/index.js'
import '../node_modules/element-plus/theme-chalk/index.css'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

