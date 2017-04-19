import axios from 'axios';
import store from '../vuex';
import router from '../router';

axios.interceptors.request.use(request => {
    store.dispatch('global/loading', true);
    return request
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    store.dispatch('global/loading', false);
    if (response && response.body && response.body.statusCode === 2000403) {
      router.replace('/')
      return new Error(store.state.getStatus[response.body.statusCode])
    } else {
      return response
    }
}, error => Promise.resolve(error.response))


export default {
    post(url, data) {
        return axios({
            method: 'post',
            url: url,
            data,
            timeout: 3000
        })
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params,
            timeout: 3000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    }
}
