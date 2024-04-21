<template>
  <div class="wrapper">
    <form class="p-5">
      <h1 class="mb-4 text-center">Sign Up</h1>

      <div class="mb-2">
        <label for="f-name" class="mb-1"
          >First Name <span>(Required)</span></label
        >
        <input type="text" placeholder="Legionite" required />
      </div>
      <div class="mb-2">
        <label for="f-name" class="mb-1"
          >Last Name <span>(Required)</span></label
        >
        <input type="text" placeholder="OluwaFatai" required />
      </div>

      <div class="mb-2">
        <label for="f-name" class="mb-1">Email <span>(Required)</span></label>
        <input type="email" placeholder="samuelonwuka88@gmail.com" required />
      </div>
      <div class="mb-2">
        <label for="f-name" class="mb-1"
          >Password <span>(Required)</span></label
        >
        <input type="password" placeholder="********" required />
      </div>
      <div class="mb-2">
        <label for="f-name" class="mb-1"
          >Confirm Password <span>(Required)</span></label
        >
        <input type="password" placeholder="********" required />
      </div>
      <div class="terms center mb-3">
        <input type="checkbox" />
        <p>I accept <a href="#">Terms and conditions</a></p>
      </div>

      <div class="buttons center mb-3">
        <a href="/Login" class="center p-1 mb-2"> Sign Up</a>
        <p class="mb-2">-OR-</p>
        <button class="p-1">
          <img src="@/assets/images/Home/googleIcon.png" alt="" /> Sign in with
          Google
        </button>
      </div>

      <div class="links center">
        <p class="mb-2">Already have an account? <a href="#">Sign In</a></p>
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
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.buttons > a {
  width: 50%;
  border-radius: 4px;
  background-color: #327b31;
  color: #ffffff;
  text-decoration: none;
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
  background: url("@/assets/images/Home/formImg.png") no-repeat;
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
  .buttons > button, .buttons > a {
    width: 100% !important;
  }
}
</style>
