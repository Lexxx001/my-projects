import { defineStore } from "pinia";
import { ref } from "vue";

export const genreQ = defineStore("genre", () => {
  const genreQuery = ref("");
  return {
    genreQuery,
  };
});
