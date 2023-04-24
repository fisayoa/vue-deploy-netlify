import Vue from "vue";

import Router, {cre} from "vue-router";

import Cart from "../views/Cart.vue";
import Index from "../views/Index.vue";
import Drinks from "../views/Drinks.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Orders from "../views/Orders.vue";
import Drink from "../views/Drink.vue";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/cart",
      component: Cart,
    },

    {
      path: "/",
      component: Index,
    },

    {
      path: "/drinks",
      component: Drinks,
    },

    {
      path: "/register",
      component: Register,
    },

    {
      path: "/login",
      component: Login,
    },

    {
      path: "/orders",
      component: Orders,
    },

    {
      path: "/drink",
      component: Drink,
    },
  ],
});
