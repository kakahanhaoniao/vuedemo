// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import store from './vuex/index';
import { sync } from 'vuex-router-sync';
let cookies = require('js-cookie');
Vue.config.productionTip = false;
Vue.use(ElementUI);
sync(store, router);

router.beforeEach(({path}, from, next) => {
    if ( cookies.get('user') && path == '/login' ) {
        next({path: '/home'});
    } else if ( !cookies.get('user') &&  path !== '/login' ) {
        next({path: '/login'});
    } else {
        next();
    }
})
/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
