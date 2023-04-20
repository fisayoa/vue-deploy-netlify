<template>
    <div id="app">
        <Carousel></Carousel>
        <div class='container-fluid'>
            <div class="row">
                <div class="mx-auto column-lg-3 column-md-4 column-sm-6 column-10 mt-5" :key="drink.id"
                    v-for="drink in drinks">
                    <drink v-on:click=addToCart(drink) :drink="drink"></drink>
                </div>
            </div>
        </div>
        <!-- <div class="col-md-4 my-2">
        <cart v-on:pay="pay()" v-on:clearCart="clearCart()" v-on:remove-from-cart="removeItem($event)" :items="cart"></cart>
      </div> -->
    </div>
</template>
  
<script>

import drinks from '@/drinks.json'

import Drink from '@/components/Drink.vue'

import Carousel from '@/components/Carousel.vue'

export default {
    name: 'Index',
    components: {
        Drink,
        Carousel,
    },
    data() {
        return {
            drinks,
            cart: [],
            search: '',
        }
    }
}
</script>
  