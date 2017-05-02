<template>
    <el-form :model="regist.ruleForm" :rules="regist.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="regist.ruleForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="regist.ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="regist.ruleForm.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</template>
 <script type="text/ecmascript-6">
    import md5 from 'md5';
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
               regist: 'regist'
            })
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let registRs = await this.$store.dispatch('regist');
                        if (registRs.data.statusCode == 2000000) {
                            this.$store.dispatch('global/setCookie', {
                                name: 'user',
                                data: registRs.data.data
                            });
                            this.$router.replace('/home');
                        } else {
                            this.$store.dispatch('global/showMsg', {error:registRs.data.statusCode, isCode: 1});
                        }
                    } else {
                        return false;
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
