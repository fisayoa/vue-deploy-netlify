<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div
        class="column-md-6 vh-md-100 vh-sm-25 background__main auth-side"
      ></div>
      <div class="column-md-6 vh-md-100">
        <div
          class="jumbotron display-flex align-items-center min-vh-md-100 min-vh-sm-75"
        >
          <div class="container">
            <h2>Hello 👋,</h2>
            <p class="text-muted">Welcome back</p>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>

              <div class="display-flex">
                <button
                  class="mx-auto btn btn-main w-75 mb-3"
                  @click="loginUser"
                >
                  LOGIN
                </button>
              </div>

              <div class="text-center">
                Don't have an account
                <router-link class="text-main" to="/register"
                  >Register</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      const value = JSON.parse(localStorage.getItem("user"));

      if (this.email == value.email && this.password == value.password) {
        alert("Login Successful");

        this.$router.push("/");
      } else {
        alert("Incorrect password or email");

        this.$router.push('/login')
      }
    },
  },
};
</script>

<style scoped>
.container,
.container-fluid {
  --fine-wine-auth-gutter-x: 1.5rem;
  --fine-wine-auth-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--fine-wine-auth-gutter-x) * 0.5);
  padding-left: calc(var(--fine-wine-auth-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

.row {
  --fine-wine-auth-gutter-x: 1.5rem;
  --fine-wine-auth-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--fine-wine-auth-gutter-y));
  margin-right: calc(-0.5 * var(--fine-wine-auth-gutter-x));
  margin-left: calc(-0.5 * var(--fine-wine-auth-gutter-x));
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--fine-wine-auth-gutter-x) * 0.5);
  padding-left: calc(var(--fine-wine-auth-gutter-x) * 0.5);
  margin-top: var(--fine-wine-auth-gutter-y);
}

@media (min-width: 768px) {
  .column-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

.form-label {
  margin-bottom: 0.5rem;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control[type="file"]:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}

.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }

  .form-control::file-selector-button {
    transition: none;
  }
}

.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}

.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.form-floating > .form-control-plaintext:not(:-moz-placeholder-shown),
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}

.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group > .form-control:not(:focus).is-valid,
.input-group > .form-floating:not(:focus-within).is-valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-control:not(:focus):valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.was-validated .input-group > .form-select:not(:focus):valid {
  z-index: 3;
}

.input-group > .form-control:not(:focus).is-invalid,
.input-group > .form-floating:not(:focus-within).is-invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-control:not(:focus):invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.was-validated .input-group > .form-select:not(:focus):invalid {
  z-index: 4;
}

.btn {
  --fine-wine-auth-btn-padding-x: 0.75rem;
  --fine-wine-auth-btn-padding-y: 0.375rem;
  --fine-wine-auth-btn-font-family: ;
  --fine-wine-auth-btn-font-size: 1rem;
  --fine-wine-auth-btn-font-weight: 400;
  --fine-wine-auth-btn-line-height: 1.5;
  --fine-wine-auth-btn-color: #212529;
  --fine-wine-auth-btn-bg: transparent;
  --fine-wine-auth-btn-border-width: 1px;
  --fine-wine-auth-btn-border-color: transparent;
  --fine-wine-auth-btn-border-radius: 0.375rem;
  --fine-wine-auth-btn-hover-border-color: transparent;
  --fine-wine-auth-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  --fine-wine-auth-btn-disabled-opacity: 0.65;
  --fine-wine-auth-btn-focus-box-shadow: 0 0 0 0.25rem
    rgba(var(--fine-wine-auth-btn-focus-shadow-rgb), 0.5);
  display: inline-block;
  padding: var(--fine-wine-auth-btn-padding-y)
    var(--fine-wine-auth-btn-padding-x);
  font-family: var(--fine-wine-auth-btn-font-family);
  font-size: var(--fine-wine-auth-btn-font-size);
  font-weight: var(--fine-wine-auth-btn-font-weight);
  line-height: var(--fine-wine-auth-btn-line-height);
  color: var(--fine-wine-auth-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: var(--fine-wine-auth-btn-border-width) solid
    var(--fine-wine-auth-btn-border-color);
  border-radius: var(--fine-wine-auth-btn-border-radius);
  background-color: var(--fine-wine-auth-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: var(--fine-wine-auth-btn-hover-color);
  background-color: var(--fine-wine-auth-btn-hover-bg);
  border-color: var(--fine-wine-auth-btn-hover-border-color);
}

.btn:focus-visible {
  color: var(--fine-wine-auth-btn-hover-color);
  background-color: var(--fine-wine-auth-btn-hover-bg);
  border-color: var(--fine-wine-auth-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--fine-wine-auth-btn-focus-box-shadow);
}

.btn-check:focus-visible + .btn {
  border-color: var(--fine-wine-auth-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--fine-wine-auth-btn-focus-box-shadow);
}

.btn:first-child:active {
  color: var(--fine-wine-auth-btn-active-color);
  background-color: var(--fine-wine-auth-btn-active-bg);
  border-color: var(--fine-wine-auth-btn-active-border-color);
}

.btn-check:checked + .btn:focus-visible,
.btn.active:focus-visible,
.btn.show:focus-visible,
.btn:first-child:active:focus-visible,
:not(.btn-check) + .btn:active:focus-visible {
  box-shadow: var(--fine-wine-auth-btn-focus-box-shadow);
}

.btn:disabled {
  color: var(--fine-wine-auth-btn-disabled-color);
  pointer-events: none;
  background-color: var(--fine-wine-auth-btn-disabled-bg);
  border-color: var(--fine-wine-auth-btn-disabled-border-color);
  opacity: var(--fine-wine-auth-btn-disabled-opacity);
}

.btn-link:focus-visible {
  color: var(--fine-wine-auth-btn-color);
}

.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.display-flex {
  display: flex !important;
}

.w-75 {
  width: 75% !important;
}

.vh-100 {
  height: 100vh !important;
}

.align-items-center {
  align-items: center !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.text-center {
  text-align: center !important;
}

.text-muted {
  --fine-wine-auth-text-opacity: 1;
  color: #6c757d !important;
}

.auth-side {
  background-image: url(../assets/images/auth-side.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
