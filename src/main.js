import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/style/index.scss";
// import 'element-ui/lib/theme-chalk/index.css'
// import { input } from "element-ui";

Vue.config.productionTip = false;
// Vue.use(input);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
