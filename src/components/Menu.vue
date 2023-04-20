<template>
  <header class="section-header">
    <nav class="navbar navbar-dark navbar-expand padding__0 btn-main">
      <div class="container-fluid">
        <ul class="navbar-nav display-none display-md-flex mr-auto">
          <li class="nav-item"><a class="nav-link" href="./">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="./drinks.html">Drinks</a></li>
          <li class="nav-item"><a class="nav-link" href="./cart.html">Cart</a></li>
          <li class="nav-item"><a class="nav-link" href="./auth-register.html">Register</a></li>
          <li class="nav-item"><a class="nav-link" href="./orders.html">Orders</a></li>
        </ul>
        <ul class="navbar-nav display-flex align-items-center">
          <div class="dropdown">
            <a class="nav-link display-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <li class="nav-item">
                <div class="display-flex flex-row">
                  <img src="https://i.imgur.com/EYFtR83.jpg" class="rounded-circle" width="30">
                </div>
              </li>
              <li class="nav-item">
                <span>Kizito</span>
                <i class='ps-1 bi bi-chevron-down'></i>
              </li>
            </a>
            <ul class="dropdown-menu">
              <div class="display-block display-lg-none display-md-none">
                <li><a class="dropdown-item" href="./">Home</a></li>
                <li><a class="dropdown-item" href="./drinks.html">Drinks</a></li>
                <li><a class="dropdown-item" href="./cart.html">Cart</a></li>
                <li><a class="dropdown-item" href="./auth-register.html">Register</a></li>
                <li><a class="dropdown-item" href="./orders.html">Orders</a></li>
              </div>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item text-danger" href="./auth-login.html">Logout</a></li>
            </ul>
          </div>
        </ul>
        <!-- list-inline //  -->
      </div>
      <!-- navbar-collapse .// -->
      <!-- container //  -->
    </nav>
    <!-- header-top-light.// -->

    <section class="header-main border-bottom background__white">
      <div class="container-fluid">
        <div class="row padding__2 pt-3 pb-3 display-flex align-items-center">
          <div class="column-md-2">
            <a href="./" class="h2 text-decoration-none display-none display-md-flex text-main">CELLAR</a>
          </div>
          <div class="column-md-8">
            <div class="input-group">
              <input type="search" id="search" placeholder="Search for product" class="form-control" />
              <button type="button" class="btn btn-main"><i class="bi bi-search"></i></button>
            </div>
          </div>

          <div class="column-md-2">
            <a href="./cart.html"
              class="text-decoration-none text-dark display-flex display-none display-md-flex flex-row align-items-center">
              <span
                class="btn-main text-light cart display-flex align-items-center justify-content-center fs-4 rounded-circle square-42"><i
                  class="bi bi-cart"></i></span>
              <div class="display-flex flex-column ms-2">
                <span>1 Product</span>
                <span class="fw-bold">£27.90</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>
<script>
export default {
  props: ['meal'],
  data() {
    return {
      search: ''
    }

  },
  computed: {
    filteredMeals: function () {
      return this.meals.filter((meal) => {
        return meal.title.match(this.search)
      })
    }
  }
}
</script>