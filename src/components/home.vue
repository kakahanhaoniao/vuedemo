<template>
    <div class="main">
        <div class="app_left">
            <left-menu></left-menu>
        </div>
        <div class="app_right">
            <div class="app_content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
            <publicFooter></publicFooter>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
import leftMenu from '../components/public/leftMenu.vue'
import publicFooter from '../components/public/footer.vue'
export default {
  components: {
    leftMenu,
    publicFooter
  }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-flow: row;
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;
}
.app_left{
    position: relative;
    flex: 0 0 181px;
    background: #292929;
    overflow: auto;
}
.app_right{
    flex: 1;
    display: flex;
    flex-flow: column;
}
.app_content{
    padding: 20px;
    flex: 1;
    overflow: auto;
}

</style>
