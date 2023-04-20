import Vue from "vue";

import Router from "vue-router";

import Cart from "../components/Cart.vue";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/cart",
      component: Cart,
    },
  ],
});
