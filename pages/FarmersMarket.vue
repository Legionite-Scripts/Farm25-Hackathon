<template>
  <NuxtLayout name="main">
    <div class="wrapper center pr-5 pl-5">
      <div class="search mt-5 mb-5">
        <input type="search" placeholder="Search location, farm, products..." />
        <button class="pr-3 pl-3">Go</button>
      </div>

      <section class="farmers mb-3">
        <h1 class="mb-3">Meet Our Farmers</h1>
        <div class="product-sections mb-2">
          <p class="mb-1">Seeds</p>
          <p class="mb-1">Fruits</p>
          <p class="mb-1">Nuts</p>
          <p class="mb-1">Legumes</p>
          <p class="mb-1">Cereals</p>
          <p class="mb-1">Oil</p>
          <p class="mb-1">Fish</p>
          <p class="mb-1">Meat</p>
          <p class="mb-1">Birds</p>
        </div>

        <p class="mb-5">
          At <b>AGRI-YUM</b>, we're passionate about transforming farm-fresh
          produce into delicious and convenient finished goods. But we're more
          than just food innovators – we're bridge builders. We connect the
          dedication of rural and urban farmers with the needs of discerning
          consumers like you.
        </p>

        <section class="profiles">
          <!-- First -->
          <div class="profile mb-4">
            <img src="@/assets/images/Home/profile-1.png" alt="Icon" />

            <div class="p-2">
              <h2 class="mb-1" style="display: flex; align-items: center">
                <img
                  src="@/assets/images/Home/houseIcon.png"
                  alt="Home-icon"
                />&nbsp;Greeners Farm
              </h2>
              <p class="mb-3">Kano, Nigeria</p>
              <p class="mb-1">
                We source our ingredients directly from rural farmers who
                prioritize sustainable and responsible agricultural practices.
                This means you get the freshest produce, packed with nutrients
                and flavor.
              </p>
              <p class="mb-3">Seeds, Legumes.</p>

              <div class="mb-1">
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/globeIcon.png"
                    alt="Globe"
                  />&nbsp;greenersfarm.com
                </p>
                <img src="@/assets/images/Home/shopping-cart.png" alt="Globe" />
              </div>

              <div>
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/phoneIcon.png"
                    alt="Globe"
                  />&nbsp;07029282927
                </p>
                <p>Place order here</p>
              </div>
            </div>
          </div>
          <!-- Second -->

          <div class="profile mb-4">
            <img src="@/assets/images/Home/profile-2.png" alt="Icon" />
            <div class="p-2">
              <h2 class="mb-1" style="display: flex; align-items: center">
                <img
                  src="@/assets/images/Home/houseIcon.png"
                  alt="Home-icon"
                />&nbsp;Gutestafa
              </h2>
              <p class="mb-3">Jalingo, Nigeria</p>
              <p class="mb-1">
                We source our ingredients directly from rural farmers who
                prioritize sustainable and responsible agricultural practices.
                This means you get the freshest produce, packed with nutrients
                and flavor.
              </p>
              <p class="mb-3">Seeds, Legumes.</p>
              <div class="mb-1">
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/globeIcon.png"
                    alt="Globe"
                  />&nbsp;gutestafa.com
                </p>
                <img src="@/assets/images/Home/shopping-cart.png" alt="Globe" />
              </div>
              <div>
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/phoneIcon.png"
                    alt="Globe"
                  />&nbsp;07029282927
                </p>
                <p>Place order here</p>
              </div>
            </div>
          </div>
          <!-- Third -->
          <div class="profile mb-4">
            <img src="@/assets/images/Home/profile-3.png" alt="Icon" />
            <div class="p-2">
              <h2 class="mb-1" style="display: flex; align-items: center">
                <img
                  src="@/assets/images/Home/houseIcon.png"
                  alt="Home-icon"
                />&nbsp;Egbelese Poultry
              </h2>
              <p class="mb-3">Damaturu, Nigeria</p>
              <p class="mb-1">
                We source our ingredients directly from rural farmers who
                prioritize sustainable and responsible agricultural practices.
                This means you get the freshest produce, packed with nutrients
                and flavor.
              </p>
              <p class="mb-3">Seeds, Legumes.</p>
              <div class="mb-1">
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/globeIcon.png"
                    alt="Globe"
                  />&nbsp;Egbelesepoultry.com
                </p>
                <img src="@/assets/images/Home/shopping-cart.png" alt="Globe" />
              </div>
              <div>
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/phoneIcon.png"
                    alt="Globe"
                  />&nbsp;07029282927
                </p>
                <p>Place order here</p>
              </div>
            </div>
          </div>
          <!-- Fourth -->
          <div class="profile mb-4">
            <img src="@/assets/images/Home/profile-4.png" alt="Icon" />
            <div class="p-2">
              <h2 class="mb-1" style="display: flex; align-items: center">
                <img
                  src="@/assets/images/Home/houseIcon.png"
                  alt="Home-icon"
                />&nbsp;Wahala Crops
              </h2>
              <p class="mb-3">Makurdi, Nigeria</p>
              <p class="mb-1">
                We source our ingredients directly from rural farmers who
                prioritize sustainable and responsible agricultural practices.
                This means you get the freshest produce, packed with nutrients
                and flavor.
              </p>
              <p class="mb-3">Seeds, Legumes.</p>
              <div class="mb-1">
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/globeIcon.png"
                    alt="Globe"
                  />&nbsp;wahala.com
                </p>
                <img src="@/assets/images/Home/shopping-cart.png" alt="Globe" />
              </div>
              <div>
                <p style="display: flex; align-items: center">
                  <img
                    src="@/assets/images/Home/phoneIcon.png"
                    alt="Globe"
                  />&nbsp;07029282927
                </p>
                <p>Place order here</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </NuxtLayout>
</template>

<script></script>

<style scoped>
img {
  user-select: none;
  -webkit-user-drag: none;
}
.wrapper {
  background-color: #e2dede;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.search {
  display: flex;
  flex-direction: row;
}
.search > input {
  height: 3em;
  background-color: transparent;
  border: 1px solid #cfcacb;
  width: 25em;
}
.search > button {
  height: 3em;
  background-color: #375e37;
  color: #ffffff;
  border-radius: 4px;
}
.farmers {
  width: 100%;
}
.farmers > .product-sections {
  display: flex;
  flex-direction: row;
  gap: 3%;
  flex-wrap: wrap;
}
.farmers > .product-sections > p {
  border: 2px solid #327b31 !important;
  padding: 1em;
  font-weight: 500;
  color: #010100;
}
.profiles > .profile {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.profiles > .profile > img {
  width: 50%;
}

.profiles > .profile > div {
  width: 50%;
}

.profiles > .profile > div > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* Screens lower than 1000px */
@media (max-width: 1000px) {
  .wrapper {
    padding: 20px;
  }
  .search > input {
    width: 100%;
  }
  .profiles > .profile {
    display: flex;
    flex-direction: column;
  }
  .profiles > .profile > img {
    width: 100%;
  }

  .profiles > .profile > div {
    width: 100%;
  }
}
</style>
