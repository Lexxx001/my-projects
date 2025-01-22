<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { movId } from "../stores/infofilm";
import TrailerPopup from "../components/TrailerPopup.vue";
import { userSt } from "../stores/user";
import AuthPopup from "../components/AuthPopup.vue";

const filmStore = movId();
const userStore = userSt();

/*получение случайного фильма*/
const muviesPoster = ref();
const muviesRating = ref();
const muviesYear = ref();
const muviesGenres = ref();
const muviesTime = ref();
const muviesTitle = ref();
const muviesId = ref();
const muvies = ref({});
const muviesPlot = ref("Алле");
const muviesTrailer = ref();

const randomFilm = async () => {
  try {
    const fetchResponse = await fetch(
      "https://cinemaguide.skillbox.cc/movie/random"
    );
    const response = await fetchResponse.json();
    muvies.value = response;
    muviesPoster.value = response.backdropUrl;
    muviesRating.value = response.tmdbRating;
    muviesYear.value = response.releaseYear;
    muviesGenres.value = response.genres[0];
    muviesTime.value = response.runtime;
    muviesTitle.value = response.originalTitle;
    muviesPlot.value = response.plot;
    muviesTrailer.value = response.trailerYouTubeId;
    muviesId.value = response.id;

    filmStore.filmId = muviesId.value;

    fullhart.value = false;
  } catch (error) {
    console.log(error);
  }
};
randomFilm();

/*получение топ 10 фильмов*/
const topten = ref();
const toptenPoster = ref();
const toptenId = ref();

const topTenFilm = async () => {
  try {
    const fetchResponse = await fetch(
      "https://cinemaguide.skillbox.cc/movie/top10"
    );
    const response = await fetchResponse.json();
    topten.value = response;
    toptenPoster.value = response[0].posterUrl;
    toptenId.value = response.id;
  } catch (error) {
    console.log(error);
  }
};
topTenFilm();

let isActive = ref(false);
function onClickTrail() {
  isActive.value = true;
  console.log("пуск");
}

function pwrraper() {
  isActive.value = false;
}

// кнопка о фильме
function onClickDesr() {
  console.log("о фильме");
}

// клик по карточке топ 10
function onClickMovieCard() {
  let targetTop10 = event.target;
  console.log(targetTop10);
  console.log(targetTop10.id);
  console.log("топ 10");
  filmStore.filmId = targetTop10.id;
}

// сохранение в избранные
const saveFovar = async () => {
  const fetchResponse = await fetch(
    "https://cinemaguide.skillbox.cc/favorites",
    {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: String(muviesId.value),
      }),
    }
  );
  const response = await fetchResponse.json();
  console.log(response.result);

  return response;
};

const isActiveAuth = ref(false);
const fullhart = ref(false);

function onClicFav() {
  if (userStore.isAuthorized === true) {
    saveFovar();
    fullhart.value = true;
    console.log("Сохранение в избранное");
  } else {
    isActiveAuth.value = true;
    console.log("Сохранение в избранное неуспешно");
  }
}

function clickWrapper() {
  isActiveAuth.value = false;
  console.log("clickWrapper");
}
</script>

<template>
  <AuthPopup :isDctivePop="isActiveAuth" @authXclose="clickWrapper">
  </AuthPopup>
  <div @click="clickWrapper" :class="{ authWrapper: isActiveAuth }"></div>
  <main>
    <section class="randFilmS">
      <div class="container flex">
        <div class="randFilm_left">
          <div class="randFilm_left-info">
            <div class="randFilm_left-top">
              <div class="randFilm_left-topInf flex">
                <div class="randFilm_left-Rating">{{ muviesRating }}</div>
                <div class="randFilm_left-muviesYear">{{ muviesYear }} г.</div>
                <div class="randFilm_left-muviesGenres">
                  {{ muviesGenres }}
                </div>
                <div class="randFilm_left-muviesTime">
                  {{ muviesTime }} мин.
                </div>
              </div>
              <div class="randFilm_left-middle">
                <div class="randFilm_left-title">
                  {{ muviesTitle }}
                </div>
                <div class="randFilm_left-disr">
                  {{ muviesPlot }}
                </div>
              </div>
              <div class="randFilm_leftBut"></div>

              <div class="randFilm_left-bottom flex">
                <button
                  @click="onClickTrail"
                  class="randFilm_btn randFilm_btn-1"
                  :class="{ wrapper: isActive }"
                >
                  Трейлер
                </button>
                <button
                  @click="onClickDesr"
                  class="randFilm_btn randFilm_btn-2"
                >
                  <RouterLink to="/filmcard">О фильме </RouterLink>
                </button>
                <button
                  @click="onClicFav"
                  class="randFilm_btn randFilm_btn-3"
                  :class="{ randFilmHurt: fullhart }"
                ></button>
                <button
                  @click="randomFilm"
                  class="randFilm_btn randFilm_btn-4"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div class="randFilm_riht">
          <img alt="Постер фильма" :src="muviesPoster" />
        </div>
      </div>
    </section>
    <section class="topTen">
      <div class="container">
        <h2 class="topTen_title">Топ 10 фильмов</h2>
        <div class="topTen_wrapper flex">
          <div class="topTen_poster" v-for="topOne in topten" :key="topOne.id">
            <RouterLink to="/filmcard">
              <img
                @click="onClickMovieCard"
                class="topTen_img"
                alt="Топ 10 фильмов"
                :src="topOne.posterUrl"
                :id="topOne.id"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div class="trailerPopupApp">
    <div class="container">
      <TrailerPopup :propsMovis="muviesTrailer" :isActive="isActive">
      </TrailerPopup>
    </div>
  </div>
  <div @click="pwrraper" :class="{ homeWrapper: isActive }"></div>
</template>

<style scoped>
@import "../assets/global.css";
@import "../assets/normalize.css";

/* section randFilms*/
.randFilmS {
  position: relative;
  background-color: rgb(37, 35, 35);
}

.randFilm_left {
  padding-top: 100px;
  min-height: 480px;

  width: 460px;
}

.randFilm_riht {
  z-index: 1;

  background-color: rgb(37, 35, 35);
  color: rgb(197, 17, 17);
}

.randFilm_left-info {
  position: absolute;
  z-index: 2;
  width: 600px;
  background: transparent;
}

.randFilm_left-top {
  align-items: center;
}

.randFilm_left-topInf {
  align-items: center;
}

.randFilm_left-Rating {
  display: flex;
  margin-right: 16px;
  align-items: center;
  padding-left: 30px;
  min-width: 50px;
  height: 32px;
  font-size: 24px;
  font-weight: 800;
  background-color: rgb(81, 194, 6);
  border-radius: 16px;
  background-image: url(../assets/star.png);
  background-repeat: no-repeat;
  background-position: 11px;
}

.randFilm_left-muviesYear,
.randFilm_left-muviesGenres,
.randFilm_left-muviesTime {
  font-size: 24px;
}

.randFilm_left-muviesYear {
  margin-right: 16px;
}

.randFilm_left-muviesGenres {
  margin-right: 20px;
}

.randFilm_left-title {
  padding-top: 30px;
  padding-bottom: 38px;
  font-size: 48px;
}

.randFilm_left-disr {
  max-height: 140px;
  font-size: 24px;
  overflow: auto;
}

.randFilm_left-middle {
  margin-bottom: 65px;
}

.randFilm_btn {
  margin: 0;
  padding: 18px 48px;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  border-radius: 100px;
  border: none;
  background-color: #9d5cd0;
  color: #fff;
}

.randFilm_btn:hover {
  cursor: pointer;
}

.randFilm_btn-1 {
  margin-right: 17px;
}

.randFilm_btn-2 {
  margin-right: 17px;
  background-color: gray;
}

.randFilm_btn-3 {
  padding: 18px 38px;
  margin-right: 17px;
  background-color: gray;
  background-image: url(../assets/hart.png);
  background-repeat: no-repeat;
  background-position: center;
}

.randFilmHurt {
  background-image: url(../assets/fullhart.png);
}

.randFilm_btn-4 {
  padding: 18px 38px;
  margin-right: 17px;
  background-color: gray;
  background-image: url(../assets/choice.png);
  background-repeat: no-repeat;
  background-position: center;
}

/*topTen*/
.topTen {
  padding-top: 50px;
  padding-bottom: 120px;
}

.topTen_title {
  margin-bottom: 75px;
  font-size: 40px;
  font-weight: bold;
}

.topTen_img {
  border-radius: 16px;
  width: 224px;
  height: 336px;
}

.topTen_poster {
  display: flex;
}

.topTen_wrapper {
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 40px;
}

.homeWrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.6;
  pointer-events: auto;
  position: fixed;
  z-index: 3;
}

.authWrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.6;
  pointer-events: auto;
  position: fixed;
  z-index: 2;
}
</style>
