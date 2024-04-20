<template>
  <section class="wrapper center">
    <Navbar class="mb-5" />
    <div class="search mb-5">
      <input type="search" placeholder="Search" />
      <button class="pr-3 pl-3">Go</button>
    </div>

    <div class="products mt-5 pr-5 pl-5">
      <h1 class="mb-4">Products</h1>
      <div class="inner">
        <Product v-for="n in 20" :key="n" />
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.wrapper {
  background-color: #e3dedf;
}
.search {
  display: flex;
  flex-direction: row;
  margin: auto;
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
  border-radius: 4px;
}
.products {
  width: 100%;
  height: auto;
}
.products > .inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (max-width: 1000px) {
}
</style>
