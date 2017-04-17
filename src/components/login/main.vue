<template>
    <div class="login">
        <el-tabs v-model="activeName"  type="border-card">
            <el-tab-pane label="用户登录" name="first">
                <loginComponent></loginComponent>
            </el-tab-pane>
            <el-tab-pane label="用户注册" name="second">
                <registComponent></registComponent>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

 <script type="text/ecmascript-6">
    import loginComponent from './login'
    import registComponent from './regist'
    export default {
      data () {
            return {
                activeName: 'first'
            }
        },
        components: {
            loginComponent,
            registComponent
        }
    }
</script>

<style>
    .login {
        width: 50%;
        margin: 0 auto;
    }
</style>
