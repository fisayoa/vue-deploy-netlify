import Vue from "vue";

import Router from "vue-router";

import Cart from "../views/Cart.vue";
import Index from "../views/Index.vue"

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/cart",
      component: Cart,
    },

    {
      path: "/home",
      component: Index,
    },
  ],
});
