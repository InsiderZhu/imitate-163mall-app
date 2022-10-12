import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/cart.vue'
import Category from '../views/category.vue'
import User from '../views/user.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import {getToken} from '../utils/token.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    redirect: "/home",
	meta:{
		showTab:true
	}
  },
  {
    path: '/home',
    name: 'Home',
    component:Home,
	meta:{
		showTab:true
	}
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart,
	meta:{
		showTab:true,
		Login:true
	}
  },
  {
    path: '/category',
    name: 'Category',
    component:Category,
	meta:{
		showTab:true
	}
  },
  {
    path: '/user',
    name: 'User',
    component:User,
	meta:{
		showTab:true,
		Login:true
	}
  },
  {
    path: '/search',
    name: 'Search',
    component:Search
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) 
  return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
};


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) =>{
	let token = getToken();
	if(!token){
		if(to.meta.Login){
			next({name:'Login',query:{redirect:to.path}})
			return;
		}
	}
	next();
})

export default router
