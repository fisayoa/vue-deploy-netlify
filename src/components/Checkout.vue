<template>
  <div>
    <h4 class="mb-3">Billing address</h4>
    <form action="#"> 
      <div class="row">
        <div class="column-md-6 mb-3">
          <label for="firstName">First name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder=""
            value=""
          />
        </div>
        <div class="column-md-6 mb-3">
          <label for="lastName">Last name</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="email"
          >Email <span class="text-muted">(Optional)</span></label
        >
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="you@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="1234 Main St"
        />
      </div>
      <div class="mb-3">
        <label for="address2">Delivery Address</label>
        <input
          type="text"
          class="form-control"
          id="address2"
          placeholder="1234 Main St"
        />
      </div>
      <div class="row">
        <div class="column-md-5 mb-3">
          <label for="country">Country</label>
          <select class="form-select display-block w-100" id="country">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
        </div>
        <div class="column-md-4 mb-3">
          <label for="state">State</label>
          <select class="form-select display-block w-100" id="state">
            <option value="">Choose...</option>
            <option>California</option>
          </select>
        </div>
        <div class="column-md-3 mb-3">
          <label for="zip">Zip</label>
          <input type="text" class="form-control" id="zip" placeholder="" />
        </div>
      </div>
      <hr class="mb-4" />
      <h4 class="mb-3">Payment</h4>
      <div class="display-block my-3">
        <div class="custom-control custom-radio">
          <input
            id="credit"
            name=""
            type="radio"
            class="custom-control-input"
            checked=""
          />
          <label class="custom-control-label" for="credit">Credit card</label>
        </div>
        <div class="custom-control custom-radio">
          <input
            id="debit"
            name=""
            type="radio"
            class="custom-control-input"
          />
          <label class="custom-control-label" for="debit">Debit card</label>
        </div>
      </div>
      <div class="row">
        <div class="column-md-6 mb-3">
          <label for="cc-name">Name on card</label>
          <input type="text" class="form-control" id="cc-name" placeholder="" />
          <small class="text-muted">Full name as display-ed on card</small>
        </div>
        <div class="column-md-6 mb-3">
          <label for="cc-number">Credit card number</label>
          <input
            type="text"
            class="form-control"
            id="cc-number"
            placeholder=""
          />
        </div>
      </div>
      <div class="row">
        <div class="column-md-6 mb-3">
          <label for="cc-expiration">Expiration</label>
          <input
            type="text"
            class="form-control"
            id="cc-expiration"
            placeholder=""
          />
        </div>
        <div class="column-md-6 mb-3">
          <label for="cc-cvv">CVV</label>
          <input type="text" class="form-control" id="cc-cvv" placeholder="" />
        </div>
      </div>
      <hr class="mb-4" />
      <button v-on:click="pay()" class="btn btn-main btn-lg btn-block">
        Checkout
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  methods: {
    pay() {
      this.$store.dispatch("cart/CHECKOUT_CART");

      alert("Order Completed successfully");

     // Redirect to orders Page
    },
  },
};
</script>
