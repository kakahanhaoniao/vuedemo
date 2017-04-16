<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="loginUser">
      <el-input v-model="ruleForm.loginUser" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="loginPwd">
      <el-input type="loginPwd" v-model="ruleForm.loginPwd" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

 <script type="text/ecmascript-6">
   export default {
     data () {
      //  const validatePass = (rule, value, callback) => {
      //    if (value === '') {
      //      callback(new Error('请输入密码'))
      //    } else {
      //      if (this.ruleForm.checkPass !== '') {
      //        this.$refs.ruleForm.validateField('checkPass')
      //      }
      //      callback()
      //    }
      //  }
       return {
         ruleForm: {
           loginUser: '',
           loginPwd: ''
         },
         rules: {
           loginUser: [
             { required: true, message: '请输入用户名', trigger: 'blur' },
             { min: 3, message: '最少输入3个字符', trigger: 'blur' }
           ],
           loginPwd: [
             { required: true, message: '请输入密码', trigger: 'blur' },
             { min: 6, message: '最少输入6个字符', trigger: 'blur' }
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
             _this.$http.get('/api/admin/list')
             .then(function (response) {
               debugger
               _this.$router.replace('/product')
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
