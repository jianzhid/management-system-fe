import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import ZhuanyeView from '../views/service_option/ZhuanyeView.vue'
import FeishouView from '../views/service_option/FeishouView.vue'
import YewuView from '../views/service_option/YewuView.vue'
import ShebeiView from '../views/service_option/ShebeiView.vue'
import DataView from '../views/DataView.vue'
import TestView from '../views/TestView.vue'
import Test2View from '../views/Test2View.vue'
import YewuduijieView from '../views/YewuduijieView.vue'
import HoutaiView from '../views/HoutaiView.vue'
import Test3View from '../views/Test3View.vue'
import Test4View from '../views/Test4View.vue'
import Test5VIew from '../views/Test5VIew.vue'
import Test6View from '../views/Test6View.vue'
import Test7View from '../views/Test7View.vue'


Vue.use(VueRouter)
Vue.use(Vuex);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    redirect:'/1-1',
    children: [
      {
        path: '/1-1',
        component: ZhuanyeView
      },
      {
        path: '/1-2',
        component: FeishouView
      },
      {
        path: '/1-3',
        component: YewuView
      },
      {
        path: '/1-4',
        component: ShebeiView
      },
      {
        path: '/2',
        component: DataView
      },
      {
        path: '/3',
        component: YewuduijieView
      },
      {
        path: '/4',
        component: HoutaiView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register/:referrer',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/test/:userId',
    name: 'test',
    component: TestView
  } ,
  {
    path: '/test2',
    name: 'test2',
    component: Test2View
  },
  {
    path: '/test3/:userId',
    name: 'test3',
    component: Test3View
  },
  {
    path: '/test4',
    name: 'home',
    component: Test4View,
    redirect:'/test5',
    children: [
      {
        path: '/test5',
        component: Test5VIew
      },
    ]
  },
  {
    path: '/test6',
    name: 'test6',
    component: Test6View
  },
  {
    path: '/test7',
    name: 'test7',
    component: Test7View
  },
]

const router = new VueRouter({
  routes
})



export default router


