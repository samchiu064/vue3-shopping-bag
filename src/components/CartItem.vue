<script setup>
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const increaseQuantity = () => store.commit('increaseQuantity', props.product)
const decreaseQuantity = () => store.commit('decreaseQuantity', props.product)
const removeFromCart = () => store.commit('removeFromCart', props.product)
</script>

<template>
  <div class="flex flex-col items-start border-b-2 py-4 w-1/2 bg-white px-4">
    <button type="button" class="ms-auto underline" @click="removeFromCart">移除商品</button>
    <div class="flex items-start w-full justify-between gap-x-4">
      <div class="w-40">
        <img :src="product.image" :alt="product.title" class="p-4 h-48" />
      </div>
      <p class="text-md font-bold w-5/12">{{ product.title }}</p>
      <div class="flex justify-end">
        <button
          type="button"
          class="text-xl"
          :disabled="product.quantity <= 1"
          @click="decreaseQuantity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            :fill="product.quantity <= 1 ? 'LightGray' : 'black'"
          >
            <path d="M200-440v-80h560v80H200Z" />
          </svg>
        </button>
        <span class="text-xl px-2">{{ product.quantity }}</span>
        <button
          type="button"
          class="text-xl"
          :disabled="product.quantity >= 9"
          @click="increaseQuantity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            :fill="product.quantity >= 9 ? 'LightGray' : 'black'"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
        <p class="text-xl ps-3">$ {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
