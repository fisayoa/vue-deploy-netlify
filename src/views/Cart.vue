<template>
    <div class="container-fluid my-3 px-5">
        <div class="row">
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
                            <tr v-for="drink in drinks" :key="drink.id">
                                <td class="column-sm-8 column-md-6">
                                    <div class="media">
                                        <a class="thumbnail pull-left" href="#">
                                            <img class="media-object" :src="drink.image" style="width: 72px; height: 72px;">
                                        </a>
                                        <div class="media-body">
                                            <h5 class="media-heading"><a class="link-dark" href="./drink.html">{{ drink.name
                                            }}
                                                </a></h5>
                                            <span>Status: </span><span class="badge background__success"><strong>In
                                                    Stock</strong></span>
                                        </div>
                                    </div>
                                </td>
                                <td class="column-sm-1 column-md-1" style="text-align: center">
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        :value="drink.quantity">
                                </td>
                                <td class="column-sm-1 column-md-1 text-center"><strong>£ {{ drink.price }}</strong></td>
                                <td class="column-sm-1 column-md-1 text-center"><strong>£ {{ drink.price * drink.quantity
                                }}</strong>
                                </td>
                                <td class="column-sm-1 column-md-1">
                                    <button type="button" v-on:click="removeItem(drink.id)" class="btn btn-danger">
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
                                    <h5><strong>£ {{ total }}</strong></h5>
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
                                    <h5><strong>£ {{ shipping }}</strong></h5>
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
                                    <h4><strong>£ {{ total + shipping }}</strong></h4>
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
                                <td>
                                    <button class="btn btn-sm btn-success" v-on:click="clearCart()"> Checkout <span
                                            class="bi bi-play"></span></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="column-sm-12 column-md-4">
                <Checkout />

            </div>
        </div>
    </div>
</template>
<script>
import drinks from '../drinks.json'

import Checkout from '../components/Checkout.vue'

export default {
    name: 'Cart',
    components: {
        Checkout
    },
    data() {
        const val = JSON.parse(localStorage.getItem('cart'))

        return {
            val: val,
            shipping: 7,
            length: this.removeDupes(val).length,
            drinks: this.removeDupes(val),
            total: parseFloat(val.map(v => v.price).reduce((a, b) => a + b, 0)).toFixed(2)
        }
    },

    methods: {
        removeDupes(arr) {
            return arr.filter(
                (obj, index) =>
                    arr.findIndex((item) => item.id === obj.id) === index
            ).map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    price: res.price,
                    quantity: this.getDuplicates(arr, res.id),
                    image: res.image
                }
            })
        },
        getDuplicates(arr, id) {
            let duplicates = [];
            let idSet = new Set();
            for (let item of arr) {
                if (item.id === id) {
                    if (idSet.has(id)) {
                        duplicates.push(item);
                    } else {
                        idSet.add(id);
                    }
                }
            }

            if (duplicates.length < 1) {
                return 1
            } else {
                return duplicates.length + 1
            }
        },

        removeItem(id) {
            let arr = this.val
            let d
            const objWithIdIndex = arr.findIndex((obj) => obj.id === id);


            if (objWithIdIndex > -1) {
                arr.splice(objWithIdIndex, 1);

                localStorage.setItem('cart', JSON.stringify(arr))
            }
        },
        clearCart() {
            localStorage.clear()
            alert('Done')
        }
    }
}
</script>
