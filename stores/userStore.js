import { defineStore } from "pinia";

export const useDetailStore = defineStore("details", {
  state: () => ({
    email: ref(""),
    password: ref(""),
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
    setPassword(newPassword) {
      this.password = newPassword;
    },
  },
  persist: {
    enabled: true,
  },
});
