<template>
  <div>
    <img
      class="mx-auto img-thumbnail"
      width="100%"
      height="auto"
      :src="drink.image"
    />
    <div class="border border-light text-center mx-auto">
      <div class="">
        <h6 class="text-truncate">{{ drink.name }}</h6>
        <h5 class="badge background__main-2 my-1 w-50">£ {{ drink.price }}</h5>
        <div
          class="display-flex my-2 align-items-center justify-content-evenly"
        >
          <router-link to="/drink" class="btn btn-outline-main px-auto"
            >VIEW DETAILS</router-link
          >
          <button v-on:click="addToCart(drink)" class="btn btn-main px-auto">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["drink", "isAdded"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    addToCart(drink) {
      this.$store.dispatch("cart/ADD_TO_CART", drink);
    },
  },
};
</script>
