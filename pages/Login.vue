<template>
  <div class="wrapper">
    <form class="p-5 center">
      <h1 class="mb-4 text-center">Sign In</h1>
      <div class="mb-2">
        <label for="f-name" class="mb-1">Email <span>(Required)</span></label>
        <input type="email" placeholder="samuelonwuka88@gmail.com" required />
      </div>
      <div class="mb-5">
        <label for="f-name" class="mb-1"
          >Password <span>(Required)</span></label
        >
        <input type="password" placeholder="********" required />
      </div>

      <div class="buttons center mb-3">
        <button class="mb-2 p-1">Sign Up</button>
        <p class="mb-2">-OR-</p>
        <button class="p-1">
          <img src="@/assets/images/Home/googleIcon.png" alt="" /> Sign in with
          Google
        </button>
      </div>

      <div class="links center">
        <p class="mb-2">Don't have an account?  <a href="#">Sign Up</a></p>
        <a href="#">Forgot Password?</a>
      </div>
    </form>

    <section></section>
  </div>
</template>

<script></script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
form {
  width: 50%;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form > div {
  display: flex;
  flex-direction: column;
  width: 80%;
}
label > span {
  color: #f63b3b;
}
input {
  width: 100%;
  height: 3em;
  background-color: #fffefe;
  border: 1px solid #e5e6ea;
  border-radius: 5px;
}
.terms {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
.terms > p > a {
  font-weight: 900;
  text-decoration: none;
  color: #4e4f4e;
}
.terms > input {
  width: 2em;
}
.terma > input[type="checkbox"]:checked {
  background-color: red;
}
.buttons > button:first-child {
  width: 50%;
  border-radius: 4px;
  background-color: #327b31;
  color: #ffffff;
}
.buttons > button:last-child {
  width: 50%;
  border-radius: 4px;
  color: #4e4f4e;
  background-color: #fefeff;
  border: 1px solid #4f4f4f !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
}
section {
  width: 50%;
  background: url("@/assets/images/Home/loginImg.png") no-repeat;
  background-size: cover;
}
.links > a,
.links > p > a {
  color: #5a955b;
  font-weight: 600;
  text-decoration: none;
}

/* Screens lower than 1000px */
@media (max-width: 1000px) {
  section {
    display: none;
  }
  form {
    width: 100%;
  }
  form > div {
    width: 100%;
  }
  .buttons > button {
    width: 100% !important;
  }
}
</style>
