import Vue from "vue";
import App from "./App.vue";
const axios = require("axios");

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:7001/api/v1';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
