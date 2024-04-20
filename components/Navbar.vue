<template>
  <nav class="p-2 pr-5 pl-5 center">
    <h1>Agri-Yum</h1>

    <div class="links center">
      <a href="#" class="active">Home</a>
      <a href="#">Products</a>
      <a href="#">Recipes</a>
      <a href="#">Contact Us</a>
      <a href="#">Blog</a>
    </div>

    <div class="buttons">
      <button>Sign Up</button>
      <button>Sign In</button>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
nav > h1 {
  color: #0e4310;
  font-size: 40px;
}
.links {
  display: flex;
  flex-direction: row;
  gap: 5em;
}
.links a {
  text-decoration: none;
  color: #262627;
  cursor: pointer;
}
.links a.active {
  font-size: 1.5em;
  font-weight: 700;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
.buttons button {
  height: 4em;
  width: 10em;
  border: none;
}
.buttons button:first-child {
  background-color: transparent;
}
.buttons button:last-child {
  background-color: #3a653c;
  color: white;
  border-radius: 4px;
}

@media (max-width: 1000px) {
  nav {
    flex-direction: column;
  }
  .links,
  .buttons {
    flex-direction: column;
    gap: 1em;
  }
}
</style>
