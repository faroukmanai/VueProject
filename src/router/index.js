import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductEdit from '@/views/product-edit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "ProductsView" */ '../views/ProductsView.vue')
  },
  {
    path: '/add-product',
    name: 'addProduct',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/AddProductView.vue')
  },
  {
    path: '/product-edit/:id',
    name: 'product-edit',
    component: ProductEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
