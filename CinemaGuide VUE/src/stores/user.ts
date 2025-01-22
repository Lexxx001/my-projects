import { defineStore } from "pinia";
import { ref } from "vue";

export const userSt = defineStore("user", () => {
  // const isAuthorized = ref(localStorage.getItem("key"));
  const isAuthorized = ref();

  return {
    isAuthorized,
  };
});
