<script setup>
import { useStore } from 'vuex'
import { toRef } from 'vue'
import CartItem from '@/components/CartItem.vue'
import TheHeader from '@/components/TheHeader.vue'

const store = useStore()
const cart = store.state.cart
const cartTotal = toRef(store.getters, 'cartTotal')
</script>

<template>
  <div class="bg-neutral-100 pb-8">
    <TheHeader />
    <main class="flex flex-col items-center justify-center gap-3 p-6">
      <p v-if="cart.length <= 0">目前還沒有選購任何商品</p>
      <CartItem v-for="cartItem in cart" :key="cartItem.id" :item="cartItem" />
    </main>
    <div class="flex justify-center px-8">
      <p v-if="cart.length > 0" class="text-2xl w-1/2 text-right font-bold">
        總計：$ {{ cartTotal }}
      </p>
    </div>
  </div>
</template>
