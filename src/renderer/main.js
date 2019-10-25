import Vue from 'vue'
import axios from 'axios'
import VueBemCn from 'vue-bem-cn'

import App from './App'
import router from './router'
import store from './store'

import HotKey from './directives/hotkey'
import ClickOutSide from './directives/click-outside'

import bemConfig from './configs/bem'

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
}

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(HotKey)
Vue.use(ClickOutSide)
Vue.use(VueBemCn, bemConfig)

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
