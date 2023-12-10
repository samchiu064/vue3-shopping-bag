import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
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
    addToCart(state, product) {
      state.cart.push({ quantity: 1, ...product })
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
    increaseQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decreaseQuantity(state, cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--
      }
    }
  }
})

export default store
