<template>
  <div class="center">
    <form class="p-3 center" @submit.prevent="handleSignUp">
      <h1 class="mb-4">Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        class="mb-2 pl-2"
        v-model="email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        class="mb-2 pl-2"
        v-model="password"
        required
      />
      <a class="pr-4 pl-4 pt-1 pb-1 mb-2" @click="handleSignUp"> Submit </a>

      <p class="mb-1">This is your email: {{ store.email }}</p>
      <p>This is your password: {{ store.password }}</p>
    </form>
  </div>
</template>

<script setup>
import { useDetailStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
const store = useDetailStore();
const router = useRouter();

const email = ref("");
const password = ref("");

// Signup Logic with Error Handling (Simplified)
const handleSignUp = async () => {
  try {
    await store.setEmail(email.value);
    await store.setPassword(password.value);

    console.log("Signup successful:", store.email, store.password);
  } catch (error) {
    console.error("Signup failed:", error);
  }
  router.push("/login");
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
a {
  background-color: #101010;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}
a:hover {
  transform: scale(1.05);
}

@media (max-width: 1000px) {
  form {
    width: 100vw;
    border: none;
  }
}
</style>
