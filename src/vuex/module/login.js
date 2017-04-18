import md5 from 'md5';
import api from '../../httpclient/api';
let cookies = require('js-cookie');
const state = {
    login: {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, message: '最少输入3个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '最少输入6个字符', trigger: 'blur' }
          ]
        }
    }
};

const actions = {
    async ['login']({commit}) {
        debugger
        let loginRs =await api.post('/api/admin/login',{
            username: state.login.ruleForm.username,
            password: md5(state.login.ruleForm.password)
        });
        commit('login', loginRs);
    }
};

const mutations = {
    ['login'](state,response) {
        debugger
        if (response.body.statusCode == 2000000) {
            cookies.set('user', response.body.data, { expires: 7 });
            _this.$router.replace('/home');
        } else {
            commit('global/showMsg', api.errorStatus[response.body.statusCode])
        }
    }
};

const getters = {
    ['login'](state){
        return state.login;
    }
};
debugger
export default {
    actions,
    state,
    mutations,
    getters
}
