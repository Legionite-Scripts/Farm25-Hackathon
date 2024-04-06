<template>
  <div class="center">
    <form class="p-5 center" @submit.prevent="handleSignUp">
      <h1 class="mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        class="mb-2 pl-2"
        ref="emailInput"
        required
      />
      <input
        type="password"
        placeholder="Password"
        class="mb-2 pl-2"
        ref="passwordInput"
        required
      />
      <button class="pr-4 pl-4 pt-1 pb-1 mb-2" @click="handleLogin">
        Submit
      </button>
      <p>{{ store.email }}</p>
      <p>{{ store.password }}</p>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDetailStore } from "@/stores/userStore";
const store = useDetailStore();

const emailInput = ref(null);

const handleLogin = () => {
  const trimmedEmail = emailInput.value.value.trim();

  if (trimmedEmail === store.email) {
    alert("Email Matches"); // More informative message
    console.log("store.email:", store.email);
    console.log("trimmedEmail:", trimmedEmail);
  } else {
    // Implement login logic here (e.g., API call, authentication)
    console.log("Email doesn't match");

    console.log("store.email:", store.email);
    console.log("trimmedEmail:", trimmedEmail);
  }
};
</script>

<style scoped>
* {
  overflow: none !important;
}
div {
  border: 1px solid #333;
  height: 100vh;
}
form {
  border: 1px dotted #333;
  display: flex;
  flex-direction: column;
}
input {
  border-radius: 3px;
  border: 1px solid #333;
  width: 25em;
  height: 3em;
}
button {
  background-color: #101010;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  transform: scale(1.05);
}

@media (max-width: 1000px) {
  form {
    width: 100vw;
    border: none;
  }
}
</style>
