<template>
  <div id="app">
    <Menu></Menu>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import drinks from "@/drinks.json";

import Drink from "@/components/Drink.vue";

import Menu from "@/components/Menu.vue";

import Carousel from "@/components/Carousel.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Drink,
    Menu,
    Carousel,
    Footer,
  },
  mounted() {
    this.$store.dispatch("cart/GET_CART");
  },
  methods: {},
};
</script>
