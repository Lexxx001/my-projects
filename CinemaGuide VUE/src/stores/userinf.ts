import { defineStore } from "pinia";
import { ref } from "vue";

export const userInf = defineStore("userinf", () => {
  const profileInf = ref("");

  return {
    profileInf,
  };
});
