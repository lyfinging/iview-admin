import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './permission'//路由控制
import ViewUI from 'view-design';
import VueParticles from "vue-particles";
import 'view-design/dist/styles/iview.css';
import './assets/font/iconfont.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('./mock')

Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.use(VueParticles);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
