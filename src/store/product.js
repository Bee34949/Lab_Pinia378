// store/pinia.js
import { createPinia } from 'pinia';

export const pinia = createPinia();

// store/productStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    productList: [
      {
        id: 1,
        name: 'รองเท้าสีขาว',
        price: 1000,
        description: 'รองเท้าสีขาวสวยงาม',
      },
      {
        id: 2,
        name: 'รองเท้าสีดำ',
        price: 1200,
        description: 'รองเท้าสีดำหล่อหลังคาราเมล',
      },
      // เพิ่มสินค้าอื่น ๆ ตามที่คุณต้องการ
    ],
    cartList: [],
    orderList: [],
  }),
});