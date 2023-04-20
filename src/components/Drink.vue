<template>
  <div>
    <img class='mx-auto img-thumbnail' width="100%" height="auto" :src="drink.image" />
    <div class="border border-light text-center mx-auto">
      <div class=''>
        <h6 class="text-truncate"> {{ drink.name }}</h6>
        <h5 class="badge background__main-2 my-1 w-50">£ {{ drink.price }}</h5>
        <div class="display-flex my-2 align-items-center justify-content-evenly">
          <router-link to="/drink" class="btn btn-outline-main px-auto">VIEW DETAILS</router-link>
          <button v-on:click="addToCart(drink, drink.id)" class="btn btn-info form-control">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ADD_ITEM_TO_CART
} from "vuex-shopping-cart/constants.type";

export default {
  props: ['drink', 'isAdded'],
  data() {
    return {
      search: ''
    }

  },
  methods: {
    addToCart(drink, id) {
      console.log('Hey ma')
      console.log(drink)
      this.$store.dispatch(ADD_ITEM_TO_CART, {
        item: drink,
        sku: drink.id,
      });
    }
  }

}
</script>