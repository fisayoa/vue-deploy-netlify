<template>
  <header class="section-header">
    <nav class="navbar navbar-dark navbar-expand padding__0 btn-main">
      <div class="container-fluid">
        <ul class="navbar-nav display-none display-md-flex mr-auto">
          <li class="nav-item"> <router-link to="/home" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/drinks" class="nav-link">Drinks</router-link></li>
          <li class="nav-item"> <router-link to="/cart" class="nav-link">Cart</router-link></li>
          <li class="nav-item"><router-link to="/register" class="nav-link">Register</router-link></li>
          <li class="nav-item"><router-link to="/orders" class="nav-link">Orders</router-link></li>
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
                <li><router-link to="/index" class="dropdown-item">Home</router-link></li>
                <li><router-link to="/drinks" class="dropdown-item">Drinks</router-link></li>
                <li><router-link to="/cart" class="dropdown-item">Cart</router-link></li>
                <li><router-link to="/register" class="dropdown-item">Register</router-link></li>
                <li><router-link to="/orders" class="dropdown-item">Orders</router-link></li>
              </div>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><router-link to="/index" class="dropdown-item text-danger">Login</router-link></li>
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
            <a href="./" class="h2 text-decoration-none display-none display-md-flex text-main">Fine Wine</a>
          </div>
          <div class="column-md-8">
            <div class="input-group">
              <input type="search" id="search" placeholder="Search for product" class="form-control" />
              <button type="button" class="btn btn-main"><i class="bi bi-search"></i></button>
            </div>
          </div>

          <div class="column-md-2">
            <router-link to="/cart"
              class="text-decoration-none text-dark display-flex display-none display-md-flex flex-row align-items-center">
              <span
                class="btn-main text-light cart display-flex align-items-center justify-content-center fs-4 rounded-circle square-42"><i
                  class="bi bi-cart"></i></span>
              <div class="display-flex flex-column ms-2">
                <span>{{ length }} Product</span>
                <span class="fw-bold">£{{ total }}</span>
              </div>
            </router-link>

          </div>
        </div>
      </div>
    </section>
  </header>
</template>
<script>
export default {
  data() {
    const arr = JSON.parse(localStorage.getItem('cart'))

    const val = arr.map(v => v.price)

    const newd = arr.filter(
      (obj, index) =>
        arr.findIndex((item) => item.id === obj.id) === index
    )

    return {
      length: newd.length,
      total: parseFloat(val.reduce((a, b) => a + b, 0)).toFixed(2)
    }
  }
}
</script>