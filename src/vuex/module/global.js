import { Message } from 'element-ui';
import api from '../../httpclient/api';
let cookies = require('js-cookie');
const state = {
    loading: false,
    progress: 0
};

const actions = {
    ['loading']({commit, state}, isShowloading) {
        commit('loading', isShowloading);
    },
    ['showMsg']({commit, state, rootState}, {error, isCode}) {
        Message({
            showClose: true,
            message: isCode ? rootState.global.errorStatus[error] : error,
            type: 'error',
            duration: 3000
        });
    },
    ['setCookie'] ({commit, state}, {name, data}) {
        if (data) {
            cookies.set(name, data, { expires: 7 });
        }
    },
    ['clearCookie'] ({commit, state}, name) {
        cookies.remove(name);
    }
};

const mutations = {
    ['loading'](state, loading) {
        state.loading = loading;
    }
};

const getters = {
    ['global'](state){
        return state;
    }
};
export default {
    actions,
    state,
    mutations,
    getters
}
