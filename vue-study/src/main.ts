import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 부트스트랩 추가
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App).use(store).use(router).mount('#app')
