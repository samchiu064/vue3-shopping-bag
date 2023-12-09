import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product-list',
      component: () => import('@/views/ProductList.vue'),
      meta: {
        title: '商品列表',
      }
    },
    {
      path: '/cart',
      name: 'shopping-cart',
      component: () => import('@/views/ShoppingCart.vue'),
      meta: {
        title: '購物車',
      }
    }
  ]
})

export default router
