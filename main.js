// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mint from 'mint-ui'; 
Vue.use(Mint);
import Axios from 'axios'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.Axios = Axios
Vue.prototype.Api = 'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/film/getList'
/* eslint-disable no-new */
import './styles/index.less'

new Vue({
  el: '#app',
  router,

  components: { App,
   
  },
  template: '<App/>'
})
