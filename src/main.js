// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import vueResource from 'vue-resource';
import errorStatus from './config/errorStatus';
import cookies from 'js-cookie';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vueResource);
Vue.use(Vuecookies);

router.beforeEach(({path}, from, next) => {
    if ( !cookies.get('user') && path !== '/login') {
        next({path: '/login'});
    } else if (path == '/') {
        next({path: '/home'});
    } else {
        next();
    }
})
/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


Vue.http.interceptors.push((request, next) => {
    debugger
    app.$root.$children[0].loading = true
    next((response) => {
        app.$root.$children[0].loading = false
        if (response && response.body && response.body.statusCode === 2000403) {
          router.replace('/')
          return new Error(errorStatus[response.body.statusCode])
        } else {
          return response
        }
    })
})
