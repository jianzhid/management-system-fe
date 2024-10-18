import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';



axios.defaults.withCredentials = true; // 发送凭据
axios.defaults.xsrfCookieName = 'session:'; // 以‘session:’识别会话

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios,axios);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
