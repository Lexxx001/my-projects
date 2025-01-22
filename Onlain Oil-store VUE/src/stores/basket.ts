import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore("oil", () => {
  const basketArrStore = ref<basketObjType[]>([]);
  return {
    basketArrStore,
  };
});

export type basketObjType = {
  id: number;
  imgOil: any;
  nameOil: string;
  price: number;
  total: number;
};



