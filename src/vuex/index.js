import Vue from 'vue';
import Vuex from 'vuex';
import globals from './module/global';
import login from './module/login';
import errorStatus from './module/errorStatus';
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        login,
        global: {
            namespaced: true,
            modules: {
              global:globals,
              errorStatus
            }
        }
    }

})
