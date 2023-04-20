import Vue from 'vue'
import App from './App.vue'
import './assets/css/bs.uncss.css'
import './assets/css/app.css'
import './assets/css/main.css'
import { router } from './router/index';
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
