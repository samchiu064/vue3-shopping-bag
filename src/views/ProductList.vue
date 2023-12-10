<script setup>
import ProductCard from '@/components/ProductCard.vue'
import TheHeader from '@/components/TheHeader.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products?limit=10')
  products.value = res.data
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="bg-neutral-100">
    <TheHeader />
    <main class="flex flex-wrap gap-3 p-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </main>
  </div>
</template>
