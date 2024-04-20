<template>
  <div class="product center p-1 mb-4">
    <img src="@/assets/images/Home/product.png" alt="Item" class="mb-2" />
    <div class="mb-2">
      <h3 class="mb-1">Peanut Butter</h3>
      <p class="mb-1">Organic, gluten-free, high protein</p>
      <p>$20 <span>$30</span></p>
    </div>

    <div class="button">
      <button class="left p-1 pr-5 pl-5">Quick View</button>
      <a href="#" class="right">
        <img src="@/assets/images/Home/shopping-cart.png" alt="Item"
      /></a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.product {
  width: 24%;
  border-radius: 10px;
  background-color: #f8f9f8;
}
.product > img {
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
}
.product > div {
  width: 100%;
}
.product > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.product > div:last-child > button {
  background-color: #85af82;
  color: #ffffff;
  border-radius: 5px;
}

/* Screens lower than 1000px */
@media (max-width: 767px) {
  .product {
    width: 100%;
  }
}
</style>
