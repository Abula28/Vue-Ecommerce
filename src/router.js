import { createWebHistory, createRouter } from "vue-router";

import Home from './pages/Home.vue'
import Inner from './pages/Inner.vue'
import Cart from './pages/Cart.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Inner",
    name: "Inner",
    component: Inner,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;