<template>
  <div id="app">
    <Menu></Menu>
    <!-- <Carousel></Carousel> -->

    <div class='container-fluid'>
      <div class="row">
        <div class="mx-auto column-lg-3 column-md-4 column-sm-6 column-10 mt-5" :key="drinks.id" v-for="drink in drinks">
          <drink :isAdded="isAdded(drink)" v-on:click=addToCart(drink) :drink="drink"></drink>
        </div>
      </div>
    </div>

    <router-view/>
    <Footer></Footer>
    <!-- <div class="col-md-4 my-2">
      <cart v-on:pay="pay()" v-on:clearCart="clearCart()" v-on:remove-from-cart="removeItem($event)" :items="cart"></cart>
    </div> -->
  </div>
</template>

<script>

import drinks from '@/drinks.json'

import Drink from '@/components/Drink.vue'

import Menu from '@/components/Menu.vue'

import Carousel from '@/components/Carousel.vue'

import Footer from '@/components/Footer.vue'


export default {
  name: 'app',
  components: {
    Drink,
    Menu,
    Carousel,
    Footer
  },
  data() {
    return {
      drinks,
      cart: [],
      search: '',
    }
  },
  methods: {
    addToCart(drink) {
      this.cart.push(drink)
    },
    isAdded(drink) {
      const item = this.cart.find(item => item.id === drink.id)

      if (item) {
        return true
      }

      return false
    },
    removeItem(drink) {
      this.cart = this.cart.filter(item => item.id !== drink.id)
    },
    pay() {
      this.cart = []
      alert('Done')
    },
    clearCart() {
      this.cart = []
      alert('Done')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
  border-radius: 0 !important;
  font-family: Poppins;
}
</style>
