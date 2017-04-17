// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from 'vuex'
// import axios from 'axios'
import vueResource from 'vue-resource'
import errorStatus from './config/errorStatus'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(store)
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach()

Vue.http.interceptors.push((request, next) => {
  debugger
  next((response) => {
    if (response && response.body && response.body.statusCode === 2000403) {
      router.replace('/')
      return new Error(errorStatus[response.body.statusCode])
    } else {
      return response
    }
  })
})
