<!-- src/views/Cart.vue -->
<template>
    <div>
      <h1>ตะกร้าสินค้า</h1>
      <ul>
        <li v-for="(product, index) in $store.cart.cartList" :key="index">
          {{ product.name }} - {{ product.price }}
          <button @click="$store.cart.removeFromCart(index)">ลบ</button>
        </li>
      </ul>
      <p>ราคารวม: {{ $store.cart.calculateTotalPrice() }}</p>
      <button @click="checkout">ยืนยันการสั่งซื้อ</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      checkout() {
        // ทำการยืนยันการสั่งซื้อและเก็บข้อมูลไว้ที่ตัวแปร orderList
        const order = {
          products: this.$store.cart.cartList,
          totalPrice: this.$store.cart.calculateTotalPrice(),
          date: new Date().toISOString(),
        };
        this.$store.order.addToOrderList(order);
        this.$store.cart.clearCart();
        // นำทางไปยังหน้าคำสั่งซื้อ
        this.$router.push('/order');
      },
    },
  };
  </script>

<style scoped>
/* สไตล์ CSS สำหรับคอมโพนเนนต์นี้ */
</style>
  