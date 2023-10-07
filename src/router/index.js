// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Cart from '../views/car_t.vue';
import Order from '../views/Orde_r.vue';
import Home from '../views/Hom_e.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/car_t', component: Cart },
  { path: '/orde_r', component: Order },
];

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes,
});

export default router;


