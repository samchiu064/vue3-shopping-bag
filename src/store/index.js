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
    }
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push({ quantity: 1, ...product })
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex((item) => item.id === productId)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
    increaseQuantity(state, productId) {
      const cartItem = state.cart.find((item) => item.id === productId)
      if (cartItem) {
        cartItem.quantity++
      }
    },
    decreaseQuantity(state, productId) {
      const cartItem = state.cart.find((item) => item.id === productId)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      }
    }
  }
})

export default store
