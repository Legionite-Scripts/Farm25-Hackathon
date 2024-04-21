<template>
  <NuxtLayout name="main">
    <section class="wrapper pr-5 pl-5 p-2">
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
        <a href="/ProductPage">
          <button class="text-center p-1 pr-2 pl-2">
            Explore Products&nbsp;
            <img
              src="@/assets/images/Home/arrow-narrow-right.png"
              alt="Right"
            /></button
        ></a>
      </div>

      <!-- Products -->
      <div class="products">
        <h1 class="mb-3 left">Top Selling Products</h1>

        <div>
          <Product v-for="n in 12" :key="n" />
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="why center mb-5">
        <h1 class="mb-3">Why Choose Us?</h1>
        <p class="mb-2">
          At <b>AGRI-YUM</b>, we're passionate about transforming farm-fresh
          produce into delicious and convenient finished goods. But we're more
          than just food innovators – we're bridge builders. We connect the
          dedication of rural and urban farmers with the needs of discerning
          consumers like you.
        </p>

        <!-- First Section -->
        <section class="mb-3">
          <div class="pt-5">
            <h2 class="mb-1 mt-5">
              <b> From Farm to Shelf, with Freshness You Can Taste:</b>
            </h2>
            <p class="mb-2">
              We source our ingredients directly from rural farmers who
              prioritize sustainable and responsible agricultural practices.<br />
              This means you get the freshest produce, packed with nutrients and
              flavor.
            </p>
          </div>
          <img src="@/assets/images/Home/profile-1.png" alt="" />
        </section>

        <!-- Second Section -->
        <section class="two mb-3">
          <div class="pt-5">
            <h2 class="mb-1 mt-5">
              <b> The Power of Agritech:</b>
            </h2>
            <p class="mb-2">
              We harness the power of innovative technology to transform these
              raw ingredients into delicious and convenient finished goods. This
              translates to less waste, longer shelf life, and a wider variety
              of healthy options for you.
            </p>
          </div>
          <img src="@/assets/images/Home/why-1.png" alt="" />
        </section>

        <!-- Third Section -->
        <section class="mb-3">
          <div class="pt-5">
            <h2 class="mb-1 mt-5">
              <b>Bridging the Gap Between Farm and Table:</b>
            </h2>
            <p class="mb-2">
              Convenience for Busy Lives: We transform farm-fresh ingredients
              into convenient finished goods that fit seamlessly into your busy
              lifestyle. Enjoy the taste of fresh, healthy food without the
              hassle.
            </p>
          </div>
          <img src="@/assets/images/Home/why-2.png" alt="" />
        </section>

        <!-- Fourth Section -->
        <section class="four mb-3">
          <div class="pt-5">
            <h2 class="mb-1 mt-5">
              <b>Delicious & Nutritious: </b>
            </h2>
            <p class="mb-2">
              We don't compromise on taste. Our finished goods are not only good
              for you, but they're also incredibly flavorful and satisfying.
              Explore our wide variety of products and discover new ways to
              incorporate healthy options into your meals.
            </p>
          </div>
          <img src="@/assets/images/Home/why-3.png" alt="" />
        </section>

        <!-- Fifth Section -->
        <section class="mb-3">
          <div class="pt-5">
            <h2 class="mb-1 mt-5">
              <b>Agricultural Education: </b>
            </h2>
            <p class="mb-2">
              We intentionally share educational resources through our blog. At
              Agri-Yum, we are raising a community of people who are aware and
              make informed decisions about what they inject into their body as
              food. flavor.
            </p>
          </div>
          <img src="@/assets/images/Home/why-4.png" alt="" />
        </section>
      </div>
      <!--  -->

      <!-- What our customers say -->
      <div class="what center mb-5 p-2">
        <h1 class="mb-4 mt-2">What our customers say</h1>

        <section class="center mb-3">
          <div>
            <h2 class="mb-1">Love the Conveninence</h2>
            <p class="mb-1">
              Love the convenience! Agri-Yum's products are a lifesaver for busy
              days. They're healthy, taste amazing, and I can whip up a<br />
              nutritious meal in minutes. Plus, knowing I'm supporting local
              farmers makes it even better.
            </p>
            <b> <i>Legionite~Scripts</i></b>
          </div>

          <img src="@/assets/images/Home/Me.png" alt="Hero" />
        </section>

        <section class="center">
          <div>
            <h2 class="mb-1">
              Finally, Healthy food that actually tastes good!
            </h2>
            <p class="mb-1">
              I used to struggle to find healthy snacks that weren't loaded with
              processed ingredients.<br />
              Agri-Yum's products are a game-changer. They're packed with flavor
              and perfect for satisfying cravings without the guilt.
            </p>
            <b> <i>Marv Magic</i></b>
          </div>

          <img src="@/assets/images/Home/mrMarv.png" alt="Hero" />
        </section>
      </div>

      <!-- Blog -->
      <div class="blog center">
        <h1>Blog</h1>
        <div>
          <p class="mb-2">
            <b>From Field to Fork: How Agrictech is Revolutionizing Food</b>
          </p>
          <p>
            The food on your plate has a story. It starts with a seed sown in
            fertile soil, nurtured by sunshine and rain, and tended to by
            dedicated farmers. But what happens between the field and your fork?
            This is where Agrictech comes in, playing a transformative role in
            the journey of our food...
          </p>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  components: {
    Product,
  },
};
</script>

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
.background > a {
  text-decoration: none;
}
.background > a > button {
  background-color: #327a30;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}
/*  */

.products > div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Why */
.why > img {
  width: 100%;
}
.why > div {
  width: 100%;
}
.why > section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.why > section > div {
  width: 40%;
}
.why > section.two,
.why > section.four {
  display: flex;
  flex-direction: row-reverse !important;
}
.why > section > img {
  width: 50% !important;
}
/*  */

/* What our customers say */
.what {
  background-color: #c8cdc6;
}
.what > section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3em;
}

.what > section:last-child {
  flex-direction: row-reverse;
}
.what > section > img {
  width: 25em !important;
  border-radius: 50%;
  border: 100px dashed #327a30;
  -webkit-user-drag: none;
}
/*  */

/* Blog */
.blog {
  height: 50vh;
}
.blog p {
  font-size: 1.5em;
}
/*  */

/* Screens lower than 1000px */
@media (max-width: 767px) {
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
  .products > div {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .what > section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5em;
  }
  .what > section > img {
    width: 90% !important;
    border-radius: 50%;
  }
  .what > section:last-child {
    flex-direction: column;
  }
  .blog p {
    font-size: 1em !important;
  }
  .why > section {
    width: 100%;
    display: flex;
    flex-direction: column !important;
    justify-content: space-between;
  }
  .why > section > img {
    width: 100% !important;
  }
  .why > section > div {
    width: 100%;
  }
  .why > section.two,
  .why > section.four {
    display: flex;
    flex-direction: column !important;
  }
}
</style>
