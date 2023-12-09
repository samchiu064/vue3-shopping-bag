<script setup>
import ProductCard from '@/components/ProductCard.vue'
import TheHeader from '@/components/TheHeader.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const products = computed(() => store.state.products)
const fetchProducts = () => store.dispatch('fetchProducts')

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="bg-neutral-100">
    <TheHeader />
    <main class="container flex flex-wrap gap-3 p-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </main>
  </div>
</template>
