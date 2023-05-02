<template>
  <div class="container-fluid my-3 px-5">
    <div class="row">
      <div v-if="cart.drinks.length < 1">
        <center>
          <h2 claas="text-center">No Item In Cart</h2>
          <router-link to="/drinks" class="btn btn-main"
            >Buy Drinks</router-link
          >
        </center>
      </div>
      <div class="column-sm-12 column-md-8" v-else>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th class="text-center">Price</th>
                <th class="text-center">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="drink in cart.drinks" :key="drink.id">
                <td class="column-sm-8 column-md-6">
                  <div class="media">
                    <a class="thumbnail pull-left" href="#">
                      <img
                        class="media-object"
                        :src="drink.image"
                        style="width: 72px; height: 72px;"
                      />
                    </a>
                    <div class="media-body">
                      <h5 class="media-heading">
                        <a class="link-dark" href="./drink.html"
                          >{{ drink.name }}
                        </a>
                      </h5>
                      <span>Status: </span
                      ><span class="badge background__success"
                        ><strong>In Stock</strong></span
                      >
                    </div>
                  </div>
                </td>
                <td class="column-sm-1 column-md-1" style="text-align: center">
                  <QuantityForm
                    :value="drink.quantity"
                    :drink="drink"
                  ></QuantityForm>
                </td>
                <td class="column-sm-1 column-md-1 text-center">
                  <strong>£ {{ drink.price }}</strong>
                </td>
                <td class="column-sm-1 column-md-1 text-center">
                  <strong
                    >£
                    {{
                      Number(drink.price * drink.quantity).toFixed(2)
                    }}</strong
                  >
                </td>
                <td class="column-sm-1 column-md-1">
                  <button
                    type="button"
                    v-on:click="removeItem(drink.id)"
                    class="btn btn-danger"
                  >
                    <span class="bi bi-trash"></span> Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td class="text-right">
                  <h5>
                    <strong>£ {{ cart.total }}</strong>
                  </h5>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h5>Estimated shipping</h5>
                </td>
                <td class="text-right">
                  <h5>
                    <strong>£ 10</strong>
                  </h5>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h4>Total</h4>
                </td>
                <td class="text-right">
                  <h4>
                    <strong>£ {{ Number(cart.total) + 10 }}</strong>
                  </h4>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <router-link to="/drinks" class="btn btn-sm btn-main">
                    <span class="bi bi-shopping-cart"></span> Continue Shopping
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column-sm-12 column-md-4" v-if="cart.length > 1">
        <Checkout />
      </div>
    </div>
  </div>
</template>
<script>
import drinks from "../drinks.json";

import Checkout from "../components/Checkout.vue";

import QuantityForm from "../components/QuantityForm.vue";

export default {
  name: "Cart",
  components: {
    Checkout,
    QuantityForm,
  },
  computed: {
    cart() {
      return this.$store.getters["cart/cart"];
    },
  },

  mounted() {
    return this.$store.dispatch("cart/GET_CART");
  },

  methods: {
    removeItem(id) {
      this.$store.dispatch("cart/REMOVE_FROM_CART", id);
    },
  },
};
</script>
