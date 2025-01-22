<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { genreQ } from "../stores/genre";

/*получение жанров*/
const genres = ref();

const topTenFilm = async () => {
  const fetchResponse = await fetch(
    "https://cinemaguide.skillbox.cc/movie/genres",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const response = await fetchResponse.json();
  genres.value = response;

  console.log(genres.value);
};
topTenFilm();

const genreStore = genreQ();
let query = ref("");

/*клик по жанрам*/
function geneCard(event) {
  console.log("клик по карточке");
  let target = event.target;
  console.log(target.textContent);

  genreStore.genreQuery = target.textContent;
  query = target.textContent;
}
</script>

<template>
  <main class="genre">
    <div class="container">
      <div class="genre_title">Жанры фильмов</div>

      <div class="genre_cards">
        <div
          @click="geneCard($event)"
          class="genre_card"
          v-for="genre in genres"
          :key="genre.id"
        >
          <RouterLink to="/genrelist" class="genre_card-bot"
            >{{ genre }}
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
  margin-bottom: 64px;
  font-size: 48px;
  font-weight: bold;
  color: white;
}

.genre_cards {
  display: flex;
  flex-wrap: wrap;
  column-gap: 65px;
  row-gap: 60px;
}

.genre_card {
  width: 290px;
  height: 300px;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 24px;
  background-color: rgb(37, 35, 35);
  cursor: pointer;
}

.genre_card-bot {
  display: flex;
  padding-top: 240px;
  padding-bottom: 37px;
  justify-content: center;
  border-radius: 24px;
  background-image: url(../assets/film.png);
  background-size: 300px 220px;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
