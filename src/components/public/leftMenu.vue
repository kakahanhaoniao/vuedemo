<template>
    <el-row>
      <el-col>
          <div class="line" @click="clickfn"></div>
          <el-menu default-active="2" class="el-menu-vertical-demo " :router=true theme="dark">
          <template v-for="(item,index) in $router.options.routes">
              <el-submenu :index="index+''" v-if="!item.isLeaf && !item.isHidden">
                  <template slot="title"><i></i>{{item.name}}</template>
                  <el-menu-item v-for="child in item.children" :index="child.path" :key="child.index">
                      <i class="fa space"></i>{{child.name}}
                  </el-menu-item>
              </el-submenu>
              <el-menu-item v-if="!item.isHidden && item.isLeaf && item.children && item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
          </template>
          </el-menu>
      </el-col>
    </el-row>
</template>

 <script type="text/ecmascript-6">
    export default {
      methods: {
        clickfn () {
          debugger
        }
      },
      computed: {
        handle () {
          debugger
          console.log('ss')
        }
      }
    }
 </script>

 <style>

 </style>
