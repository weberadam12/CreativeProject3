import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import items from "./items"

Vue.config.productionTip = false;

let data = {
  products: items,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
