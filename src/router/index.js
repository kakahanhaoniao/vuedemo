import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import home from '@/components/home.vue'
import order from '@/components/order/order.vue'
import orderDetail from '@/components/order/orderDetail.vue'
import product from '@/components/product/product.vue'
import productDetail from '@/components/product/productDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      isHidden: true,
      component: login
    },
    {
      path: '/product',
      name: '商品管理',
      component: home,
      isLeaf: false,
      children: [
        {path: '/product/list', component: product, name: '商品列表'},
        {path: '/product/add', component: productDetail, name: '商品详情'}
      ]
    },
    {
      path: '/order',
      name: '订单管理',
      component: home,
      isLeaf: false,
      children: [
        {path: '/order/list', component: order, name: '订单列表'},
        {path: '/order/add', component: orderDetail, name: '订单详情'}
      ]
    }
  ]
})
