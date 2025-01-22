import { defineStore } from "pinia";
import { ref } from "vue";

export const movId = defineStore("filmIn", () => {
  const filmId = ref();
  const filmIdHome = ref();
  return {
    filmId,
    filmIdHome,
  };
});
