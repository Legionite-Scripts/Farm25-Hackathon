<template>
  <section class="wrapper center pr-5 pl-5">
    <Navbar class="mb-5" />
    <div class="search mb-5">
      <input type="search" placeholder="Search" />
      <button class="pr-3 pl-3 mb-5">Go</button>
    </div>

    <h1 class="mb-4">Blog</h1>
    <div class="blog-info mb-4">
      <div class="hero left mb-5">
        <img src="@/assets/images/Home/mrMarv.png" alt="Hero" class="mb-3" />
        <h2 class="mb-1">Marv Magic</h2>
        <p>Nutritionist</p>
      </div>

      <div class="blog-text">
        <p class="mb-1">
          <b>From Field to Fork: How Farmers-Haven is Revolutionizing Food</b>
        </p>

        <p class="mb-2">
          The food on your plate has a story. It starts with a seed sown in
          fertile soil, nurtured by sunshine and rain, and tended to by
          dedicated farmers. But what happens between the field and your fork?
          This is where Farmers-Haven comes in, playing a transformative role in the
          journey of our food.
        </p>

        <p class="mb-1"><b>Farmers-Haven: Bridging the Gap:</b></p>
        <p class="mb-2">
          Farmers-Haven is the marriage of agriculture and technology. It
          encompasses a wide range of innovations, from precision farming
          techniques that optimize yield to smart irrigation systems that
          conserve water. But its impact goes beyond just efficiency. Farmers-Haven
          is creating a more sustainable and equitable food system, bridging the
          gap between rural and urban communities. Here's how Farmers-Haven is
          revolutionizing food:
        </p>

        <li class="mb-1">
          Fresher Produce, Less Waste: Smart sensors monitor soil conditions and
          weather patterns, allowing farmers to optimize resource usage and
          reduce waste. This translates to fresher produce with a longer shelf
          life, reaching your table with all its nutritional goodness intact.
        </li>
        <li class="mb-1">
          Empowering Rural Communities: Farmers-Haven tools like data analysis and
          mobile platforms empower farmers with valuable insights. They can make
          informed decisions about planting, manage resources effectively, and
          connect directly with consumers, bypassing traditional middlemen.
        </li>
        <li class="mb-1">
          Sustainable Practices for a Healthy Planet: Precision agriculture
          minimizes the use of water, fertilizers, and pesticides, promoting
          environmentally friendly farming practices. This reduces our carbon
          footprint and helps conserve precious resources for future
          generations.
        </li>
        <li class="mb-4">
          Transparency & Traceability: Consumers are increasingly interested in
          knowing where their food comes from. Farmers-Haven solutions like
          blockchain technology can create transparent supply chains, allowing
          you to trace your food back to the farm and meet the farmers who grow
          it.
        </li>

        <h2 class="mb-2">The Future of Food is Tech-Powered</h2>
        Farmers-Haven is not just a buzzword; it's a revolution reshaping the way we
        produce, distribute, and consume food. By embracing these innovations,
        we can ensure a more sustainable, equitable, and delicious food future
        for all. What are your thoughts on Farmers-Haven? How do you think it will
        impact the way we eat in the future? Share your comments below!
      </div>

      <img src="@/assets/images/Home/like.png" alt="Like" class="mt-4 mb-3" />
      <div>
        <h2>Comment</h2>
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="Comment your opinion"
        ></textarea>
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
.blog-info {
  width: 100%;
}
.blog-info > .hero > img {
  border-radius: 50%;
  width: 30%;
  -webkit-user-drag: none;
  user-select: none;
}
textarea {
  width: 40em;
}

@media (max-width: 1000px) {
  .wrapper {
    padding: 20px;
  }
  .blog-info > .hero {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  textarea {
    width: 90%;
  }
}
</style>
