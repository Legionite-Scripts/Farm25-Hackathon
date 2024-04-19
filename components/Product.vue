<template>
  <div class="product center p-1">
    <img src="@/assets/images/Home/product.png" alt="Item" />
    <div>
      <h3>Peanut Butter</h3>
      <p>Organic, gluten-free, high protein</p>
      <p>$20 <span>$30</span></p>
    </div>

    <div class="button">
        <button>Quick View</button>
        <a href="#"></a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.product {
  border: 1px solid #333;
  width: 23%;
  height: 30em;
  background-color: #f8f9f8;
}
.product > div {
  width: 100%;
}
.product > img {
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
  border: 1px solid #333;
}
</style>
