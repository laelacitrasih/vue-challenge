import Vue from 'vue'
import App from './App.vue'
import AppRouter from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: AppRouter
}).$mount('#app')
