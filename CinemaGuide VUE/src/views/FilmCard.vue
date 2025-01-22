<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { movId } from "../stores/infofilm";
import { userSt } from "../stores/user";
import AuthPopup from "../components/AuthPopup.vue";

const userStore = userSt();

const respFilm = ref();
const filmStore = movId();
console.log(filmStore.filmId);

let movieId = filmStore.filmId;

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
const muvieslanguage = ref();
const muviesbudget = ref();
const muviesrevenue = ref();
const muviesdirector = ref();
const muviesproduction = ref();
const muviesawardsSummary = ref();

const getFilmId = async () => {
  const fetchResponse = await fetch(
    `https://cinemaguide.skillbox.cc/movie/${movieId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
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
  muvieslanguage.value = response.language;
  muviesbudget.value = response.budget;
  muviesrevenue.value = response.revenue;
  muviesproduction.value = response.production;
  muviesdirector.value = response.director;
  muviesawardsSummary.value = response.awardsSummary;

  respFilm.value = response;
  console.log(response);
  console.log(respFilm);

  return response;
};
getFilmId();

let isActive = ref(false);
function onClickTrail() {
  isActive.value = true;
  console.log("пуск");
}
function pwrraper() {
  isActive.value = false;
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
function onClicFavFC() {
  if (userStore.isAuthorized === true) {
    saveFovar();
    console.log("Сохранение в избранное");
  } else {
    isActiveAuth.value = true;
    console.log("Сохранение в избранное неуспешно");
  }
}
const isActiveAuth = ref(false);

function clickWrapper() {
  isActiveAuth.value = false;
  console.log("clickWrapper");
}
</script>

<template>
  <AuthPopup :isDctivePop="isActiveAuth" @authXclose="clickWrapper">
  </AuthPopup>
  <div @click="clickWrapper" :class="{ authWrapper: isActiveAuth }"></div>
  v
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
              <div class="randFilm_left-muviesTime">{{ muviesTime }} мин.</div>
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
                @click="onClicFavFC"
                class="randFilm_btn randFilm_btn-3"
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

  <section class="filmcard_bot">
    <div class="container">
      <h2 class="filmcard_title">О фильме</h2>

      <div class="filmcard_nfo">
        <div class="filBotInf filmcard_lan">
          Язык оригинал ................. {{ muvieslanguage }}
        </div>
        <div class="filBotInf filmcard_many1">
          Бюджет ............................. {{ muviesbudget }}
        </div>
        <div class="filBotInf filmcard_many2">
          Выручка ............................ {{ muviesrevenue }}
        </div>
        <div class="filBotInf filmcard_der">
          Режиссер ........................... {{ muviesdirector }}
        </div>
        <div class="filBotInf filmcard_com">
          Продакшен ........................ {{ muviesproduction }}
        </div>
        <div class="filBotInf filmcard_reg">
          Награды ............................ {{ muviesawardsSummary }}
        </div>
        <div class="filBotInf filmcard_reg">
          ID ............................ {{ muviesId }}
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="trailerPopup" :class="{ trailerPopupOpen: isActive }">
      <iframe
        class="trailerPopup_iframe"
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${muviesTrailer}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
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

.randFilm_btn-4 {
  padding: 18px 38px;
  margin-right: 17px;
  background-color: gray;
  background-image: url(../assets/choice.png);
  background-repeat: no-repeat;
  background-position: center;
}

/* section о фильме*/
.filmcard_bot {
  padding-top: 50px;
  padding-bottom: 80px;
}

.filmcard_title {
  margin: 0;
  margin-bottom: 70px;
  padding: 0;
}

.filBotInf {
  margin-bottom: 35px;
  font-size: 18px;
}

/* трейлер попап */
.trailerPopup {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  min-height: 340px;
  background-color: #ffffff;
  margin: 0 auto;
  z-index: 4;
  visibility: hidden;
}

.trailerPopupOpen {
  visibility: visible;
}

.trailerPopup_iframe {
  padding: 10px 10px;
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
