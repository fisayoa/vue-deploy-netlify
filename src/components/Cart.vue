<template>
    <div>
        <div class="column-sm-12 column-md-8">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Total</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="column-sm-8 column-md-6">
                                <div class="media">
                                    <a class="thumbnail pull-left" href="#">
                                        <!-- <img class="media-object" :src="drink.image" style="width: 72px; height: 72px;"> -->
                                    </a>
                                    <div class="media-body">
                                        <h5 class="media-heading"><a class="link-dark" href="./drink.html">{{ drink.name }}
                                            </a></h5>
                                        <span>Status: </span><span class="badge background__success"><strong>In
                                                Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            <td class="column-sm-1 column-md-1" style="text-align: center">
                                <input type="email" class="form-control" id="exampleInputEmail1" value="3">
                            </td>
                            <td class="column-sm-1 column-md-1 text-center"><strong>£ {{ drink.price }}</strong></td>
                            <td class="column-sm-1 column-md-1 text-center"><strong>£ {{ drink.price * 3 }}</strong></td>
                            <td class="column-sm-1 column-md-1">
                                <button type="button" class="btn btn-danger">
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
                                <h5><strong>£ {{ drink.price * 3 }}</strong></h5>
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
                                <h5><strong>£ 6.94</strong></h5>
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
                                <h4><strong>£ {{ drink.price * 3 + 6.94 }}</strong></h4>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="./drinks.html" class="btn btn-sm btn-main">
                                    <span class="bi bi-shopping-cart"></span> Continue Shopping
                                </a>
                            </td>
                            <td>
                                <a href="#checkout" class="btn btn-sm btn-success">
                                    Checkout <span class="bi bi-play"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- <div>
     <ul class="list-group">
       <h3 class="text-center">Your Cart</h3>
        <h6 class="list-group-item" v-for="item in items" :key="item.id">
           {{ item.title }} - $ {{item.price}}
           <transition name="alert-in">
             <button @click="$emit('remove-from-cart', item)" class="btn btn-danger btn-sm float-right ">Remove Meal</button>
           </transition>
        </h6>
        <button v-on:clearCart="clearCart()" class="btn btn-primary" :items="meal">Clear Cart</button>
   </ul>
   <div class="card p-3 my-5">
       <h6 class="text-center">Your Carty Is Empty</h6>
        <h5 class="text-center">Total : ${{ total }}</h5>
   </div>
   <button :disabled="items.length === 0" @click="$emit('pay')" class="btn btn-success form-control">Order Now</button>
  </div> -->
</template>
<script>
import drinks from '../drinks.json'

export default {
    name: 'Cart',
    computed: {
        total() {
            return this.items.reduce((acc, item) => acc + Number(item.price), 0)
        },
        drink() {
            return drinks.slice()
        }
    },
    methods: {
        removeItem(drink) {
            this.cart = this.cart.filter(item => item.id !== drink.id)
        },
        clearCart() {
            this.cart = []
            alert('Done')
        }
    }
}
</script>
