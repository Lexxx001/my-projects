<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { genreQ } from "../stores/genre";
import { movId } from "../stores/infofilm";

const filmStore = movId();
const genreStore = genreQ();

let query = genreStore.genreQuery;

const genreResp = ref();

const getGanre = async () => {
  const fetchResponse = await fetch(
    `https://cinemaguide.skillbox.cc/movie?genre=${query}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const response = await fetchResponse.json();

  genreResp.value = response;
  console.log(response);
  console.log(genreResp);
  return response;
};
getGanre();

// const iquery = 30;

// const geneLimit = async () => {
//   console.log(iquery);
//   const fetchResponse = await fetch(
//     `https://cinemaguide.skillbox.cc/movie?count=${iquery}`,
//     {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   const response = await fetchResponse.json();
//   console.log(response);
//   return response;
// };
// geneLimit();

function genreClick() {
  let targetSearch = event.target;
  console.log(targetSearch.id);
  console.log("Алле поиск");
  filmStore.filmId = targetSearch.id;
}
</script>

<template>
  <main class="genre">
    <div class="container">
      <h2 class="genre_title">{{ genreStore.genreQuery }}</h2>
      <div class="genre_wrapper flex">
        <div
          class="genre_poster"
          v-for="genreOne in genreResp"
          :key="genreOne.id"
        >
          <RouterLink to="/filmcard">
            <img
              @click="genreClick"
              class="genre_img"
              alt="Топ 10 фильмов"
              :src="genreOne.posterUrl"
              :id="genreOne.id"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/global.css";
@import "../assets/normalize.css";

.genre_title {
  margin-bottom: 75px;
  font-size: 48px;
  font-weight: bold;
}

.genre_wrapper {
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 40px;
}
.genre_poster {
  display: flex;
}
.genre_img {
  border-radius: 16px;
  width: 224px;
  height: 336px;
}
</style>
