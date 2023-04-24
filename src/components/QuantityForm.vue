<template>
  <div>
    <input
      type="number"
      v-model="quantity"
      class="form-control"
      id="exampleInputEmail1"
    />
  </div>
</template>

<script>
export default {
  name: "QuantityForm",
  props: ["value", "drink"],
  data() {
    return {
      quantity: this.$props.value,
    };
  },

  watch: {
    quantity(val, oldVal) {
      if (oldVal < val) {
        console.log("HIGHER");
        this.$store.dispatch("cart/ADD_QUANTITY", {
          data: this.$props.drink,
          quantity: val - oldVal,
        });
      } else {
        console.log("LOWER");
        this.$store.dispatch("cart/REMOVE_QUANTITY", {
          data: this.$props.drink,
          quantity: val - oldVal,
        });
      }
    },
  },
};
</script>
