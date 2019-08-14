import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cinema_ from '@/components/Cinema_'
import Foot from '@/components/Foot'
import myApp from '@/components/myApp'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Address from '@/components/Address'





Vue.use(Router)

export default new Router({
  Foot,
  routes: [
    {
      path:'/',
      redirect:'/address'
    },
    {
      path:'/home',     
      component:Home,
      children:[
        {
          path:'/helloworld',
          component:HelloWorld
        },
        {
          path:'/cinema_',
          component:Cinema_
        },
        {
          path:'/myapp',
          component:myApp
        }
      ]
    },
    {
      path:'/address',
      component:Address
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
        
   
  ]
})
