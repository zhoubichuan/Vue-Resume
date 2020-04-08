import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import i18n from './lang'
import moment from 'moment'

import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.prototype.$moment = moment
Vue.prototype.$log = console.log

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app')
