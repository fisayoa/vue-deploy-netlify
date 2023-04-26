<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.drinksonline.store/wp-content/uploads/2022/06/vs.jpg" class="display-block w-100"
                        alt="...">
                    <div class="carousel-caption display-none display-md-block">
                        <h4>A Special Drink for a special customer.</h4>
                        <a href="./drinks.html" class="btn-main btn">Order Now</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://www.drinksonline.store/wp-content/uploads/2022/04/Drinks-header-baner-scaled.jpg"
                        class="display-block w-100" alt="...">
                    <div class="carousel-caption display-none display-md-block">
                        <h4>Wherever you are we can get there.</h4>
                        <a href="./drinks.html" class="btn-main btn">Order Now</a>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>