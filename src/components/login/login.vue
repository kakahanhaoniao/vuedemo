<template>
        <el-form :model="login.ruleForm" :rules="login.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="login.ruleForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="login.ruleForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
</template>

 <script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    let cookies = require('js-cookie');
    export default {
     computed: {
        ...mapGetters({
          login: 'login'
        })
       },
     methods: {
        submitForm (formName) {
          this.$refs[formName].validate(async (valid) => {
           if (valid) {
              debugger
              let loginRs =await this.$store.dispatch('login');
              if (loginRs.data.statusCode == 2000000) {
                cookies.set('user', loginRs.data.data, { expires: 7 });
                this.$store.dispatch('isLogin', true);
                this.$router.replace('/home');
              } else {
                this.$store.dispatch('showMsg', {error:loginRs.data.statusCode, isCode: 1})
              }
            } else {
              return false;
               this.$store.dispatch('showMsg', {error:'请输入用户名和密码!'});
            }
          })
        },
        resetForm (formName) {
          this.$refs[formName].resetFields()
        }
     }
   }
 </script>

 <style>

 </style>
