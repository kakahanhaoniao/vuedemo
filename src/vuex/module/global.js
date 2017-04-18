import { Message } from 'element-ui';
import api from '../../httpclient/api';
const state = {
    loading: false,
    progress: 0,
    isLogin: false
};

const actions = {
    ['loading']({commit, state}, isShowloading) {
        /* eslint-disable no-debugger */
        debugger
        commit('loading', isShowloading);
    },
    ['showMsg']({commit, state}, {error, isCode}) {
        debugger
        Message({
            showClose: true,
            message: isCode ? api.errorStatus[error] : error,
            type: 'error',
            duration: 3000
        });
    },
    ['isLogin']({commit, state}, isLogin){
      commit('isLogin', isLogin);
    }
};

const mutations = {
    ['loading'](state, loading) {
        state.loading = loading;
    },
    ['isLogin'](state, isLogin) {
        state.isLogin = isLogin;
    },
};

const getters = {
    ['global'](state){
        return state;
    }
};
console.log(actions)
export default {
    actions,
    state,
    mutations,
    getters
}
