<template>
    <div class='container-fluid'>
        <div class="row">
            <Jumbotron></Jumbotron>

            <div class="mx-auto column-lg-3 column-md-4 column-sm-6 column-10 mt-5" :key="drink.id" v-for="drink in drinks">
                <drink v-on:click=addToCart(drink) :drink="drink"></drink>
            </div>
        </div>
    </div>
</template>

<script>
import drinks from '@/drinks.json'

import Drink from '@/components/Drink.vue'
import Jumbotron from '@/components/Jumbotron.vue'

export default {
    name: 'Drinks',
    data() {
        return {
            drinks
        }
    },
    components: {
        Drink,
        Jumbotron
    }
}
</script>