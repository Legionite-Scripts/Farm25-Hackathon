<template>
  <footer class="pt-5 pl-5 pr-5">
    <section class="mb-5">
      <div>
        <h2 href="#" class="mb-2">Hotels</h2>
        <h2 href="#" class="mb-2">Accomodations</h2>
        <h2 href="#">Flights</h2>
      </div>
      <div>
        <h2 class="mb-4">Quick Links</h2>
        <a href="#" class="mb-1">About Us</a>
        <a href="#" class="mb-1">Contact Us</a>
        <a href="#" class="mb-1">FAQs</a>
        <a href="#" class="mb-1">Terms and Services</a>
        <a href="#" class="mb-1">Privacy Policy</a>
      </div>
      <div>
        <h2 class="mb-4">Subscribe to our newsletter</h2>
        <p class="mb-3">
          Stay updated with the latest travel deals and promotions by<br />
          subscribing to our newsletter
        </p>

        <div>
          <h3 class="mb-1">Email</h3>
          <input type="text" placeholder="lindaikeji@gmail.com" class="mb-1" />
          <button class="right p-1 pr-3 pl-3">Subscribe</button>
        </div>
      </div>
      <div>
        <h2 class="mb-3">Connect with us</h2>
        <div class="social">
          <img src="@/assets/images/Home/social.png" alt="" />
        </div>
      </div>
    </section>
    <section class="mt-5 mb-4">
      <p>c Copyright. Designed by Lheendah.</p>
      <img src="@/assets/images/Home/bottomSocials.png" alt="" class="bottomSocial"/>
    </section>
  </footer>
</template>

<script></script>

<style scoped>
input {
  height: 2.5em;
  border-radius: 5px;
  width: 100%;
}
button {
  background-color: #0e4211;
  border-radius: 5px;
}
a {
  font-size: 1em;
}
* {
  color: #ffffff;
  text-decoration: none;
}
footer {
  background-color: #262525;
  display: flex;
  flex-direction: column;
}
footer > section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5em;
}
footer > section:first-child > div {
  display: flex;
  flex-direction: column;
  width: 20%;
}

/* Screens lower than 1000px */
@media (max-width: 1000px) {
  footer > section {
    flex-direction: column;
    gap: 5em;
  }
  footer > section:first-child > div {
  width: 100%;
}
.bottomSocial{
width: 50%;
}
}
</style>
