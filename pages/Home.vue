<template>
  <section class="wrapper pr-5 pl-5 p-2">
    <Navbar class="mb-5" />
    <div class="search">
      <input type="search" placeholder="Search" />
      <button class="pr-3 pl-3">Go</button>
    </div>

    <!-- Background -->
    <div class="background mt-5 mb-5 p-5">
      <h1 class="mb-5 mt-5">
        Innovative<br />
        Consumable
      </h1>
      <p class="mb-5">
        We turn agricultural products into delicious and nutritious finished
        goods Explore Products
      </p>
      <button class="text-center p-1 pr-2 pl-2">
        Explore Products&nbsp;
        <img src="@/assets/images/Home/arrow-narrow-right.png" alt="Right" />
      </button>
    </div>

    <!-- Products -->
    <div class="products center">
      <h2 class="mb-2">Products</h2>

      <div>
        <Product/>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.wrapper {
  background-color: #e2dede;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.search {
  display: flex;
  flex-direction: row;
  margin: auto !important;
}
.search > input {
  height: 3em;
  background-color: transparent;
  border: 1px solid #cfcacb;
  width: 20em;
}
.search > button {
  height: 3em;
  background-color: #375e37;
  color: #ffffff;
  border: none;
  border-radius: 4px;
}

/* Background */
.background {
  height: 80vh;
  background: url("@/assets/images/Home/bg.png") no-repeat,
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%);
  background-size: cover;
  background-blend-mode: darken !important;
  width: 100%;
}
.background > h1,
.background > p {
  color: #ffffff;
}
.background > h1 {
  font-size: 6em;
}
.background > button {
  background-color: #327a30;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}
/*  */
.products {
  border: 1px solid #333;
}
.products > div{
  border: 1px solid red;
  width: 100%;
}

/* Screens lower than 1000px */
@media (max-width: 1000px) {
  .wrapper {
    padding: 20px;
  }
  .background {
    height: 70vh;
    padding-left: 1.5em;
  }
  .background > h1 {
    font-size: 3em;
  }
}
</style>
