<!-- src/views/Order.vue -->
<template>
    <div>
      <h1>คำสั่งซื้อ</h1>
      <ul>
        <li v-for="(order, index) in $store.order.orderList" :key="index">
          <h2>รายการที่ {{ index + 1 }}</h2>
          <ul>
            <li v-for="(product, pIndex) in order.products" :key="pIndex">
              {{ product.name }} - {{ product.price }}
            </li>
          </ul>
          <p>ราคารวม: {{ order.totalPrice }}</p>
          <p>วันที่สั่งซื้อ: {{ order.date }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  <style scoped>
  /* สไตล์ CSS สำหรับคอมโพนเนนต์นี้ */
  </style>
  