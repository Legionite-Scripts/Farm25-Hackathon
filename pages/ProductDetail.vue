<template>
  <section class="wrapper center pr-5 pl-5">
    <Navbar class="mb-5" />
    <div class="search mb-5">
      <input type="search" placeholder="Search" />
      <button class="pr-3 pl-3 mb-5">Go</button>
    </div>

    <section class="main">
      <div class="first">
        <div class="mb-2">
          <img src="@/assets/images/Home/selectedProduct.png" alt="" />
        </div>
        <div class="mb-4">
          <img
            src="@/assets/images/Home/selectedProduct.png"
            alt=""
            id="active"
          />
          <img src="@/assets/images/Home/selectedProduct.png" alt="" />
          <img src="@/assets/images/Home/selectedProduct.png" alt="" />
          <img src="@/assets/images/Home/selectedProduct.png" alt="" />
        </div>
      </div>
      <div class="second">
        <h2 style="color: #364051" class="mb-1">Powdered Pap</h2>
        <p class="mb-2">(318 reviews)</p>

        <div
          class="mb-3"
          style="
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          "
        >
          <p style="color: #337a31; font-weight: 600" class="left">N5,000</p>
          <button
            class="right p-1 pr-3 pl-3"
            style="
              background-color: #337a31;
              color: #ffffff;
              border-radius: 4px;
            "
          >
            Add to Cart
          </button>
        </div>

        <p style="color: #4e4f4e; font-weight: 400">
          Fuel your mornings with the goodness of whole grains!<br />
          Agri-Yum's powdered pap is a convenient and delicious way to start
          your day. Made with a blend of maize, this nutrient-rich powder is
          packed with:<br />
          Essential Vitamins & Minerals: Vitamin A for healthy vision, Iron for
          energy, and Calcium for strong bones.<br />
          Dietary Fiber: Keeps you feeling full and satisfied throughout the
          morning.<br />
          Natural Protein: Supports muscle building and repair.<br /><br />
          Simple to Prepare: Just mix 3 tablespoon scoops of Superfood with cold
          water and stir, then pour boiling water tot thicken to taste, add milk
          to taste, stir, and enjoy! You can customize your breakfast by adding
          soya beans or honey for extra flavor and nutrients.<br /><br />
          A perfect choice for busy mornings, active lifestyles, and anyone
          looking for a nutritious and delicious breakfast on-the-go.
          <br /><br /><b>Order yours today!</b>
        </p>
      </div>
    </section>
  </section>
</template>

<script></script>

<style scoped>
img {
  -webkit-user-drag: none;
  user-select: none;
}
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
.main {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.main > div {
  width: 50%;
  height: 100%;
}
.first > div:last-child {
  display: flex;
  flex-direction: row;
  gap: 3%;
}
.first > div:last-child > img {
  width: 5em;
  border: 2px solid #c5c5c4;
}
.first > div:last-child > img#active {
  width: 5em;
  border: 2px solid #5a945a;
}

@media (max-width: 1000px) {
  .wrapper {
    padding: 20px;
    width: 100%;
  }
  .main {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .main > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .first > div:first-child {
    display: flex;
    justify-content: center;
  }
  .first > div:first-child > img {
    width: 90%;
  }
}
</style>
