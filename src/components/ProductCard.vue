<script setup>
import { useStore } from 'vuex'
import { computed, toRefs } from 'vue'

const store = useStore()
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const { product } = toRefs(props)

const addToCart = () => store.commit('addToCart', product.value)
const removeFromCart = () => store.commit('removeFromCart', product.value.id)

const isInCart = computed(() => {
  return store.state.cart.some((item) => item.id === product.value.id)
})
</script>

<template>
  <div
    class="flex flex-col text-center w-64 shadow-xl rounded-sm bg-white hover:scale-105 transition-transform"
  >
    <div class="w-40 mx-auto">
      <img :src="product.image" :alt="product.title" class="p-4 h-48" />
    </div>
    <div class="px-4">
      <p class="text-md font-bold line-clamp-2">{{ product.title }}</p>
      <p class="text-sm text-gray-500 my-2 line-clamp-3">
        {{ product.description }}
      </p>
    </div>
    <p class="my-2 text-xl mt-auto">$ {{ product.price }}</p>
    <button
      type="button"
      :class="[isInCart ? 'bg-red-300' : 'bg-green-300', 'h-11']"
      @click="isInCart ? removeFromCart() : addToCart()"
    >
      {{ isInCart ? '移除購物車' : '加入購物車' }}
    </button>
  </div>
</template>
