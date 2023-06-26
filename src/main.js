import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mitt from 'mitt'
// Vue.prototype.$bus = new Vue()

const app = createApp(App)
app.use(store).use(router).mount('#app')
const eventBus = mitt()
app.config.globalProperties.$eventBus = eventBus