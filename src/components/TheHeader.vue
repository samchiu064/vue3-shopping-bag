<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const store = useStore()
const route = useRoute()

const cartQuantity = computed(() => store.state.cart.length)
</script>

<template>
  <header class="h-12 bg-black w-full flex justify-center items-center">
    <p class="text-white">目前頁面：{{ route.meta.title }}</p>
    <router-link
      v-if="route.name === 'product-list'"
      :to="{ name: 'shopping-cart' }"
      class="text-blue-400 hover:text-blue-500 ps-4"
      >（購物車商品數量：{{ cartQuantity }}）</router-link
    >
    <router-link
      v-else
      :to="{ name: 'product-list' }"
      class="text-blue-400 hover:text-blue-500 ps-4"
      >回到商品列表頁 （購物車商品數量：{{ cartQuantity }}）</router-link
    >
  </header>
</template>
