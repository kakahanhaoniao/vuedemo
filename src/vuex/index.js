import Vue from 'vue'
import Vuex from 'vuex'
import globals from './module/global'
import login from './module/login'
Vue.use(Vuex)
debugger;
console.log(login)
console.log(globals)
export default new Vuex.Store({
    modules: {
        login,
        global: globals
    }
    // modules: {
    //   login,
    //   global: {
    //     namespaced: true,
    //     modules: {
    //       global:globals
    //     }
    //   }
    // }
})
