import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Cart from "../views/Cart.vue"
import Gallery from "../views/Gallery.vue"
import Store from "../views/Browse.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path:"/gallery",
    name:"Pre-Order",
    component: Gallery
  },
  {
    path:"/cart",
    name:"Cart",
    component: Cart
  },
  {
    path:"/browse",
    name:"Store",
    component: Store
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
