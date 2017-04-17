<template>
  <div id="app" v-loading="loading" element-loading-text="数据请求中">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            loading: false
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
