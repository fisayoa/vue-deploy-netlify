<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
    <Footer></Footer>
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
  created() {
    this.$router.push('/home')
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