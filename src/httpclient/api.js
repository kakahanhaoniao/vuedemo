import axios from 'axios';
import store from '../vuex';
import router from '../router';
import errorStatus from '../config/errorStatus';

axios.interceptors.request.use(request => {
    debugger
    store.dispatch('loading', true);
    return request
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    debugger
    store.dispatch('loading', false);
    if (response && response.body && response.body.statusCode === 2000403) {
      router.replace('/')
      return new Error(errorStatus[response.body.statusCode])
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
    },
    errorStatus
}
