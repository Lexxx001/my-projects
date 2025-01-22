<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { movId } from "../stores/infofilm";
import { userInf } from "../stores/userinf";
import { userSt } from "../stores/user";

const userStore = userSt();
const userInform = userInf();

// отрисовка избранных фильмов
const favor = ref()
const favorPoster = ref()
const favorId = ref()

const getFavor = async () => {
  const fetchResponse = await fetch(
    "https://cinemaguide.skillbox.cc/favorites",
    {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const response = await fetchResponse.json();
  favor.value = response;
  favorPoster.value = response[0].posterUrl;
  favorId.value = response.id;
  console.log(response);

  return response;
};

getFavor();

function onClickFavore() {
  let favorEv = event.target;
  console.log(favorEv);
}



// удаление фильма
let movieId;



const dellFM = ref()

const dellFim = async () => {
  const fetchResponse = await fetch(
    `https://cinemaguide.skillbox.cc/favorites/${movieId.id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );
  const response = await fetchResponse.json();

  dellFM.value = response;
  console.log(dellFM.value);
  getFavor();
  return response;
};

function onClickDellFm() {
  movieId = event.target;
  console.log(movieId.id);
  dellFim();
}


</script>

<template>

  <div class="favor_wrapper flex">
    <div class="favor_poster" v-for="fav in favor" :key="fav.id">
      <div class="favor_div">
        <img class="favor_img" alt="Избранные фильмы" :src="fav.posterUrl" :id="fav.id" />

        <button @click="onClickDellFm" :id="fav.id" class="acc_btnDell"></button>
      </div>
    </div>
  </div>

</template>

<style scoped>
@import "../assets/global.css";
@import "../assets/normalize.css";

.favor_img {

  border-radius: 16px;
  width: 224px;
  height: 336px;
}

.favor_div {
  position: relative;
}

.faor_poster {

  display: flex;
}

.favor_wrapper {
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 40px;
}

.acc_btnDell {
  position: absolute;
  left: 200px;
  top: -17px;
  width: 30px;
  height: 50px;
  background-color: rgb(0, 0, 0, 0);
  border: none;
  background-image: url(../src/assets/dellfm.png);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
</style>
