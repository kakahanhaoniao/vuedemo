<template>
  <div id="app" v-loading="global.loading" element-loading-text="数据请求中">
  <!-- <div id="app" class="loading" element-loading-text="数据请求中"> -->
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
debugger;
export default {
    name: 'app',
    computed: {
        ...mapGetters({
            global: 'global/global'
        })
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
