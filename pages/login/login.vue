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
        Login
      </button>
      <p>{{ store.email }}</p>
      <p>{{ store.password }}</p>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDetailStore } from "@/stores/userStore";
const store = useDetailStore();

const emailInput = ref(null);
const passwordInput = ref(null);

const handleLogin = () => {
  const trimmedEmail = emailInput.value.value.trim();
  const trimmedPassword = passwordInput.value.value.trim();

  //Email Validation
  if (trimmedEmail === store.email) {
    alert("Email Matches"); // More informative message
    console.log("store.email:", store.email);
    console.log("trimmedEmail:", trimmedEmail);
  } else {
    // Implement login logic here (e.g., API call, authentication)
    alert("Email doesn't match");
    
    console.log("store.email:", store.email);
    console.log("trimmedEmail:", trimmedEmail);
  }
  //Password Validation
  if (trimmedPassword === store.password) {
    alert("Password Matches"); // More informative message
    console.log("store.password:", store.password);
    console.log("trimmedPassword:", trimmedPassword);
  } else {
    // Implement login logic here (e.g., API call, authentication)
    alert("Password doesn't match");
    
    console.log("store.password:", store.password);
    console.log("trimmedPassword:", trimmedPassword);
  }
  router.push("/home");

};
</script>

<style scoped>
* {
  overflow: none !important;
}
div {
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
