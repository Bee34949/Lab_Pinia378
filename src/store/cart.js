// src/store/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [],
  }),
  actions: {
    addToCart(product) {
      this.cartList.push(product);
    },
    removeFromCart(index) {
      this.cartList.splice(index, 1);
    },
    calculateTotalPrice() {
      // คำนวณราคาสินค้าทั้งหมด
      return this.cartList.reduce((total, product) => total + product.price, 0);
    },
    clearCart() {
      this.cartList = [];
    },
  },
});
