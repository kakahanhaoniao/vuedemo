import { Message } from 'element-ui';
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
    ['showMsg'](error) {
        Message({
            showClose: true,
            message: errorStatus,
            type: 'error',
            duration: 3000
        });
    },
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
console.log(actions)
export default {
    actions,
    state,
    mutations,
    getters
}
