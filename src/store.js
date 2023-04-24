import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexLocalStorage = new VuexPersist({
  key: "state",
  storage: window.localStorage,
  filter: (mutation) => true,
});

Vue.use(Vuex);

const initialState = {
  cart: null,
  total: 0,
  orders: null,
};

function getDuplicates(arr, id) {
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
    return 1;
  } else {
    return duplicates.length + 1;
  }
}

function removeDupes(arr) {
  return arr
    .filter(
      (obj, index) => arr.findIndex((item) => item.id === obj.id) === index
    )
    .map((res) => {
      return {
        id: res.id,
        name: res.name,
        price: res.price,
        quantity: getDuplicates(arr, res.id),
        image: res.image,
      };
    });
}

const cart = {
  namespaced: true,
  state: initialState,
  actions: {
    GET_CART({ commit }) {
      const val = JSON.parse(localStorage.getItem("cart"));

      commit("GET_CART_SUCCESS", {
        val: val,
        shipping: 7,
        length: removeDupes(val).length,
        drinks: removeDupes(val),
        total: parseFloat(
          val.map((v) => v.price).reduce((a, b) => a + b, 0)
        ).toFixed(2),
      });
    },
    ADD_TO_CART({ commit }, payload) {
      let data = [];

      data.push(payload);

      if (localStorage.getItem("cart") != null) {
        const existing = JSON.parse(localStorage.getItem("cart"));

        localStorage.setItem("cart", JSON.stringify([...existing, ...data]));
      } else {
        localStorage.setItem("cart", JSON.stringify(data));
      }

      const val = JSON.parse(localStorage.getItem("cart"));

      commit("ADD_TO_CART_SUCCESS", {
        val: val,
        shipping: 7,
        length: removeDupes(val).length,
        drinks: removeDupes(val),
        total: parseFloat(
          val.map((v) => v.price).reduce((a, b) => a + b, 0)
        ).toFixed(2),
      });
    },
    ADD_QUANTITY({ commit }, payload) {
      let data = [];

      for (let i = 0; i < payload.quantity; i++) {
        data.push(payload.data);
      }

      if (localStorage.getItem("cart") != null) {
        const existing = JSON.parse(localStorage.getItem("cart"));

        localStorage.setItem("cart", JSON.stringify([...existing, ...data]));
      } else {
        localStorage.setItem("cart", JSON.stringify(data));
      }

      const val = JSON.parse(localStorage.getItem("cart"));

      commit("ADD_TO_CART_SUCCESS", {
        val: val,
        shipping: 7,
        length: removeDupes(val).length,
        drinks: removeDupes(val),
        total: parseFloat(
          val.map((v) => v.price).reduce((a, b) => a + b, 0)
        ).toFixed(2),
      });
    },
    REMOVE_QUANTITY({ commit }, payload) {
      const arr = JSON.parse(localStorage.getItem("cart"))

      if (payload.quantity < 1) {
        const arr = JSON.parse(localStorage.getItem("cart"));

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === payload.data.id) {
            arr.splice(i, 1);

            localStorage.setItem("cart", JSON.stringify(arr));
            break;
          }
        }

        const val = JSON.parse(localStorage.getItem("cart"));

        commit("REMOVE_FROM_CART_SUCCESS", {
          val: val,
          shipping: 7,
          length: removeDupes(val).length,
          drinks: removeDupes(val),
          total: parseFloat(
            val.map((v) => v.price).reduce((a, b) => a + b, 0)
          ).toFixed(2),
        });
      }

      for (let i = 0; i < payload.quantity; i++) {
        if (arr[i].id === payload.data.id) {
          arr.splice(i, 1);

          localStorage.setItem("cart", JSON.stringify(arr));
          break;
        }
      }

      const val = JSON.parse(localStorage.getItem("cart"));

      commit("REMOVE_FROM_CART_SUCCESS", {
        val: val,
        shipping: 7,
        length: removeDupes(val).length,
        drinks: removeDupes(val),
        total: parseFloat(
          val.map((v) => v.price).reduce((a, b) => a + b, 0)
        ).toFixed(2),
      });
    },
    REMOVE_FROM_CART({ commit }, id) {
      const arr = JSON.parse(localStorage.getItem("cart"));

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr.splice(i, 1);

          localStorage.setItem("cart", JSON.stringify(arr));
        }
      }

      const val = JSON.parse(localStorage.getItem("cart"));

      commit("REMOVE_FROM_CART_SUCCESS", {
        val: val,
        shipping: 7,
        length: removeDupes(val).length,
        drinks: removeDupes(val),
        total: parseFloat(
          val.map((v) => v.price).reduce((a, b) => a + b, 0)
        ).toFixed(2),
      });
    },
  },
  mutations: {
    GET_CART_SUCCESS(state, data) {
      state.cart = data;
    },
    ADD_TO_CART_SUCCESS(state, data) {
      state.cart = data;
      console.log(state.cart);
    },
    REMOVE_FROM_CART_SUCCESS(state, data) {
      state.cart = data;
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
};

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: { cart },
  state: {},
  mutations: {},
  actions: {},
});
