// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'


//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'


//三级路由
import First from './components/about/second/First'
import Second from './components/about/second/Second'



/* eslint-disable no-new */
export const routes = [
  {path: '/', name:"homeLink",component: Home},
  {path: '/menu', name:"menuLink", component: Menu,
  // beforeEnter:((to,from,next)=>{
  //    alert('非登陆状态，不能访问')
  //     if(to.path=='/login'){
  //         next();
  //     }else{
  //       alert('你还没有登陆，请登陆');
  //       next('/login');
  //     }

  // })  //某个子页面设置权限
},
  {path: '/admin', name:"adminLink", component: Admin},
  {path: '/about', name:"aboutLink",redirect:'/contact', component: About,children:[
    {path: '/contact', name:"ContactLink", redirect:'/second',component: Contact,children:[
      {path: '/first', name:"firstLink", component: First},
      {path: '/second', name:"secondLink", component: Second}
      ]},
    {path: '/delivery', name:"DeliveryLink", component: Delivery},
    {path: '/history', name:"HistoryLink", component: History},
    {path: '/orderingGuide', name:"OrderingGuideLink", component: OrderingGuide}
    ]},
  {path: '/Login',  name:"loginLink",component: Login},
  {path: '/Register', name:"registerLink", component: Register},
  {path: '*', redirect:'/'}
]

