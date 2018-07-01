// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

import axios from 'axios'


Vue.prototype.$axios = axios
Vue.use(VueRouter)
//Vue.prototype.$ajax=axios

/* eslint-disable no-new */



const router = new VueRouter({
  routes,
  mode: 'history'
})
/*
    多行注释
    只有在compress选项未启用的时候才会被输出
 */

// router.beforeEach((to,from,next)=>{
//     if(to.path=='/login' || to.path=='/register'){
//         next();
//     }else{
//       alert('你还没有登陆，请线登陆');
//       next('/register');
//     }

// })   //全局守卫，设置权限

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


