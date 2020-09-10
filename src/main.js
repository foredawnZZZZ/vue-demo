import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loading from '../src/assets/js/direvtive'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/js/globalCom';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
