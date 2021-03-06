import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import router from "./router/index"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
