<template>
  <section class="wrapper pr-5 pl-5 p-2">
    <Navbar class="mb-5" />
    <div class="search">
      <input type="search" placeholder="Search" />
      <button class="pr-3 pl-3">Go</button>
    </div>

    <div class="background mt-5 p-5">
      <h1>Innovative Consumable</h1>
      <p>
        We turn agricultural products into delicious and nutritious finished
        goods Explore Products
      </p>
      <button class="text-center">
        Explore Products
        <img src="@/assets/images/Home/arrow-narrow-right.png" alt="Right" />
      </button>
    </div>

    <h1>kpk</h1>
  </section>
</template>

<script></script>

<style scoped>
.wrapper {
  background-color: #e2dede;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  width: 100vw;
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
.background {
  height: 80vh;

  background: url("../assets/images/Home/bg.png") no-repeat,
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%);
  background-size: cover;
  background-blend-mode: darken !important ;
}

/* Screens lower than 1000px */
@media (max-width: 1000px) {
  .wrapper {
    padding: 20px;
  }
}
</style>
