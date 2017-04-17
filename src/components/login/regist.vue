<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="ruleForm.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</template>
 <script type="text/ecmascript-6">
   import md5 from 'md5'
   import errorStatus from '../../config/errorStatus'
   export default {
     data () {
       return {
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
     },
     methods: {
       submitForm (formName) {
         const _this = this
         this.$refs[formName].validate((valid) => {
           if (valid) {
                debugger
                _this.$http.post('/api/admin/regist', {
                  username: _this.ruleForm.username,
                  password: md5(_this.ruleForm.password),
                  email: _this.ruleForm.email
                })
                .then(function (response) {
                  if (response.body.statusCode == 2000000) {
                      _this.$router.replace('/home')
                  } else {
                      _this.$message({
                          showClose: true,
                          message: errorStatus[response.body.statusCode],
                          type: 'error'
                      });
                  }
                })
                .catch(function (error) {
                    console.log(error)
                })
           } else {
                console.log('error submit!!')
                return false
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
