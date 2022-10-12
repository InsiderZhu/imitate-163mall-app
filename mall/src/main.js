import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import  './iconfont/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import * as filters from '@/filters'
import 'animate.css'
Vue.use(Vant);

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
