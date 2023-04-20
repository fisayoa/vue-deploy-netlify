<template>
    <div>
        <Jumbotron></Jumbotron>
        <div class="container-fluid my-5">
            <div class="row">
                <div class="column-md-6">
                    <div class="display-flex align-items-center justify-content-center">
                        <img class="img-fluid" src="https://via.placeholder.com/550x380/FFB6C1/000000" alt="">
                    </div>
                    <div class="display-flex align-items-center justify-content-evenly my-2">
                        <a href="#">
                            <img class="img-fluid" src="https://via.placeholder.com/115x100/87CEFA/000000" alt="">
                        </a>
                        <a href="#">
                            <img class="img-fluid" src="https://via.placeholder.com/115x100/FF7F50/000000" alt="">
                        </a>
                        <a href="#">
                            <img class="img-fluid" src="https://via.placeholder.com/115x100/20B2AA/000000" alt="">
                        </a>
                        <a href="#">
                            <img class="img-fluid" src="https://via.placeholder.com/120x100/20B2AA/000000" alt="">
                        </a>
                    </div>
                </div>
                <div class="column-md-6">
                    <h4 class="h2">Leopard Shirt Dress </h4>
                    <p>
                        Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions
                        address your ideal buyer directly and personally. The best product descriptions address your ideal
                        buyer
                        directly and personally.
                    </p>
                    <div class="padding__meta">
                        <span class="posted_in">
                            <strong>Categories:</strong>
                            <a rel="tag" href="#">Wine</a>, <a rel="tag" href="#">Alcohol</a>
                        </span>
                    </div>
                    <div id="price">
                        <strong>Price : </strong>
                        <span class="pro-price"> £300.00</span>
                    </div>
                    <div class="display-flex align-items-center">
                        <label>Quantity : </label>
                        <input type="quantiy" v-model="quantity" placeholder="1" class="form-control form-control-sm w-25 my-3 quantity">
                    </div>
                    <p>
                        <button class="btn btn-round btn-main" type="button">
                            <i class="pb-1 bi bi-cart"></i>
                            Add to Cart
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue';

export default {
    name: 'Drink',
    components: {
        Jumbotron
    },
}
</script>