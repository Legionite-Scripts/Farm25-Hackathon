<template>
  <section class="wrapper pr-5 pl-5 p-2">
    <Navbar class="mb-5" />
    <div class="search">
      <input type="search" placeholder="Search" />
      <button class="pr-3 pl-3">Go</button>
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
.search > input{
    height: 3em;
    background-color: transparent;
    border: 1px solid #cfcacb;
    width: 20em;
}
.search > button{
    height: 3em;
    background-color: #375e37;
    color: #ffffff;
    border: none;
    border-radius:4px ;
}

/* Screens lower than 1000px */
@media (max-width: 1000px) {
  .wrapper {
    padding: 20px;
  }
}
</style>
