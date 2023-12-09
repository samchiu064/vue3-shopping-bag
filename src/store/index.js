import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      products: [],
      cart: []
    }
  },
  getters: {
    cartTotal(state) {
      const total = state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
      return Math.floor(total * 100) / 100
    },
    cartQuantity(state) {
      return state.cart.length
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      state.cart.push({ quantity: 1, ...product })
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
    increaseQuantity(state, product) {
      product.quantity++
    },
    decreaseQuantity(state, product) {
      if (product.quantity > 1) {
        product.quantity--
      }
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await axios.get('https://fakestoreapi.com/products?limit=10')
      const products = res.data
      commit('setProducts', products)
    }
  }
})

export default store
