import { defineStore } from "pinia";
import { ref } from "vue";

export const resultCards = defineStore("genres", () => {
  const cardsStore = ref([]);
  const progress = ref();
  return cardsStore;
});
