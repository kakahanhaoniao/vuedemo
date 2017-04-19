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
    },
    regist: {
        ruleForm: {
            loginUser: '',
            email: '',
            loginPwd: ''
        },
        rules: {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, message: '最少输入3个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, message: '最少输入6个字符', trigger: 'blur' }
            ],
            email: [
                {required: true, message: '请输入邮箱', trigger: 'blur'},
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
            ]
      }
    }
};

const actions = {
    async ['login']({commit}) {
        return await api.post('/api/admin/login',{
            username: state.login.ruleForm.username,
            password: md5(state.login.ruleForm.password)
        });
    },
    async ['regist'] () {
        return await api.post('/api/admin/regist', {
            username: state.regist.ruleForm.username,
            password: md5(state.regist.ruleForm.password),
            email: state.regist.ruleForm.email
        });
    }
};

const mutations = {

};

const getters = {
    ['login'](state){
        return state.login;
    },
    ['regist'](state){
        return state.regist;
    }
};
export default {
    actions,
    state,
    mutations,
    getters
}
