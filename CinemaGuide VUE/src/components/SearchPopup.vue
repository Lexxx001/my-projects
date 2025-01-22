<script lang="ts" setup>
import { ref } from "vue";
import { movId } from "../stores/infofilm";
import { RouterLink } from "vue-router";

const filmStore = movId();

const props = defineProps({
  propsSeachPop: { type: Object, default: {} },
  isPactive: { type: Boolean },
});

const emit = defineEmits(["evSearch"]);

function onClicSearch() {
  let targetSearch = event.target;
  console.log(targetSearch.id);
  console.log("Алле поиск");
  filmStore.filmId = targetSearch.id;
  emit("evSearch");
}
</script>

<template>
  <div class="searchPopup" :class="{ searchPopupOpen: isPactive }">
    <ul class="searchPopup_list">
      <RouterLink to="/filmcard">
        <li @click="onClicSearch" class="searchPopup_item flex" v-for="propsSeach in propsSeachPop" :key="propsSeach.id"
          :id="propsSeach.id">
          <div class="searchPopupLeft">
            <img alt="Постер фильма" width="40px" :src="propsSeach.posterUrl" :id="propsSeach.id" />
          </div>
          <div class="searchPopupRight">
            <div class="searchPopupRightInf flex">
              <div :id="propsSeach.id" class="propsSeachRating">
                {{ propsSeach.tmdbRating }}
              </div>
              <div :id="propsSeach.id" class="propsSeachReleaseYear">
                {{ propsSeach.releaseYear }} г.
              </div>
              <div :id="propsSeach.id" class="propsSeachGenres">
                {{ propsSeach.genres[0] }}
              </div>
              <div :id="propsSeach.id" class="propsSeachRuntime">
                {{ propsSeach.runtime }} мин.
              </div>
            </div>
            <div :id="propsSeach.id" class="propsSeachTtitle">
              {{ propsSeach.title }}
            </div>

            <div class=""></div>
          </div>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<style scoped>
@import "@/assets/global.css";
@import "@/assets/normalize.css";

.searchPopup {
  position: absolute;
  transform: translate(96%, 7%);
  width: 610px;
  height: 510px;
  background-color: rgb(158, 158, 158);
  z-index: 3;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: blue;
  visibility: hidden;
}

.searchPopupOpen {
  visibility: visible;
}

.wrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.6;
  pointer-events: auto;
  position: fixed;
  z-index: 4;
}

.searchPopup_item {
  padding: 20px 16px;
  cursor: pointer;
}

.searchPopupLeft {
  margin-right: 17px;
}

.propsSeachRuntime {
  margin-right: 100px;
}

.searchPopupRight {
  flex-wrap: wrap;
}

.propsSeachRating {
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
  color: white;
}

.searchPopupRightInf {
  align-items: center;
}

.propsSeachReleaseYear,
.propsSeachGenres,
.propsSeachRuntime {
  font-size: 20px;
  color: rgb(235, 235, 235);
}

.propsSeachReleaseYear,
.propsSeachGenres {
  margin-right: 13px;
}

.propsSeachTtitle {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
</style>
