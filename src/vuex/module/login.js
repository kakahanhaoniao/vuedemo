import md5 from 'md5';
import api from '../../httpclient/api';
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
        return await api.post('/api/admin/login',{
            username: state.login.ruleForm.username,
            password: md5(state.login.ruleForm.password)
        });
    }
};

const mutations = {

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
