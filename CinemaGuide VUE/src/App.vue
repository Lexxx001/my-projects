<script setup>
import { watch, ref } from "vue";
import TrailerPopup from "./components/TrailerPopup.vue";
import SearchPopup from "./components/SearchPopup.vue";
import AuthPopup from "./components/AuthPopup.vue";
import { userSt } from "./stores/user";
import { RouterLink } from "vue-router";

import { userInf } from "./stores/userinf";

const userStore = userSt();
const userInform = userInf();

let isActive = ref(false);
function onClickTrail() {
  isActive.value = true;
}

function wrraper() {
  isPactive.value = false;
  searchText.value = "";
}

function awrapper() {
  isDactive.value = false;

}

function onClickDesr() { }
function Favourites() {
  console.log("В избранное");
}

let isDactive = ref();
function authlogin() {
  isDactive.value = true;
}

/*для searchPopup*/
const searchText = ref("");
const movies = ref([]);

let isPactive = ref(false);

watch(searchText, (newVal) => {
  console.log("Алле");
  getProducts(newVal);
  console.log(searchText.value.length);
  if (searchText.value.length > 0) {
    isPactive.value = true;
  }
});

const moviesMod = ref([]);

const getProducts = async (searchText) => {
  const fetchResponse = await fetch("https://cinemaguide.skillbox.cc/movie");
  // isLoading.value = false;
  const response = await fetchResponse.json();
  const resp = searchText
    ? response.filter((el) => el.title.toLowerCase().includes(searchText))
    : response;
  movies.value = await resp;
  moviesMod.value = movies.value.slice(0, 5);
  console.log(movies.value);
  console.log(moviesMod.value);
  return movies, moviesMod;
};

if (localStorage.getItem("key") === "true") {
  console.log("true");
  userStore.isAuthorized = true;
  userInform.profileInf = JSON.parse(localStorage.getItem("keyprof"));
}
if (localStorage.getItem("key") === "false") {
  console.log("не true");
  userStore.isAuthorized = false;
}
</script>

<template>

  <body>
    <div @click="wrraper" :class="{ wrapper: isPactive }"></div>
    <div @click="pwrraper" :class="{ pwrapper: isActive }"></div>
    <div @click="awrapper" :class="{ awrapper: isDactive }"></div>

    <header>
      <div class="container">
        <div class="head_wrapper flex">
          <div class="hedlogo">
            <RouterLink to="/">
              <img alt="Vue logo" class="logo" width="240px" src="./assets/hedlogo.png" />
            </RouterLink>
          </div>
          <div>
            <button @click="onClick" class="button button_head1">
              <RouterLink to="/">Главная</RouterLink>
            </button>
          </div>
          <div>
            <button @click="onClick" class="button button_head2">
              <RouterLink to="/genre">Жанры</RouterLink>
            </button>
          </div>
          <div>
            <input type="searchText" placeholder="Поиск" class="input_head" v-model="searchText"
              :class="{ input_headHid: isActive }" />
          </div>
          <div>
            <div class="btn1">
              <button v-if="!userStore.isAuthorized" @click="authlogin" class="button button_head2">
                {{ "Войти" }}
              </button>
            </div>
            <div class="btn2">
              <RouterLink to="/account">
                <button v-if="userStore.isAuthorized" class="button button_head2">
                  {{ userInform.profileInf.name }}
                </button>
              </RouterLink>
            </div>
          </div>
        </div>

        <SearchPopup :propsSeachPop="moviesMod" :isPactive="isPactive" @evSearch="wrraper" />
      </div>
    </header>

    <footer class="footer">
      <div class="container flex">
        <div class="footer_left flex">
          <p class="footer_left-desr">LLC «Мультимедиа Визион»</p>
          <p class="footer_left-desr1">Все права защищены</p>
        </div>
        <div class="footer_riht">
          <ul class="footer_social flex">
            <li class="social_link">
              <a href="#" class="social_link-VK">
                <svg width="29" height="29" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_9_1443)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M23.4865 1.37968C23.6253 0.985106 23.4865 0.698125 22.8719 0.698125H20.8298C20.3144 0.698125 20.0764 0.949207 19.9377 1.21829C19.9377 1.21829 18.8869 3.51408 17.4198 5.00273C16.9439 5.4332 16.7259 5.57669 16.4682 5.57669C16.3293 5.57669 16.1509 5.4332 16.1509 5.03862V1.36173C16.1509 0.895411 15.9923 0.680176 15.5561 0.680176H12.3444C12.0271 0.680176 11.8289 0.895411 11.8289 1.11065C11.8289 1.55907 12.5624 1.66666 12.6417 2.92217V5.64843C12.6417 6.24034 12.5228 6.34793 12.2651 6.34793C11.5711 6.34793 9.88596 4.03419 8.87484 1.39763C8.67655 0.877462 8.47831 0.680176 7.96286 0.680176H5.90093C5.30617 0.680176 5.20703 0.93131 5.20703 1.20034C5.20703 1.68461 5.90093 4.12389 8.43863 7.35236C10.1239 9.55846 12.5228 10.7422 14.6838 10.7422C15.9923 10.7422 16.1509 10.4732 16.1509 10.0248V8.3568C16.1509 7.81868 16.2699 7.72904 16.6862 7.72904C16.9836 7.72904 17.5189 7.87248 18.7283 8.9307C20.1161 10.1862 20.354 10.7602 21.1272 10.7602H23.1693C23.764 10.7602 24.0416 10.4911 23.883 9.97098C23.7046 9.45087 23.0305 8.69757 22.1582 7.80073C21.6823 7.29857 20.9686 6.74256 20.7505 6.47347C20.4531 6.1148 20.5324 5.97131 20.7505 5.64843C20.7307 5.64843 23.2287 2.45585 23.4865 1.37968Z"
                      fill="white" fill-opacity="0.8" shape-rendering="crispEdges" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M23.4865 1.37968C23.6253 0.985106 23.4865 0.698125 22.8719 0.698125H20.8298C20.3144 0.698125 20.0764 0.949207 19.9377 1.21829C19.9377 1.21829 18.8869 3.51408 17.4198 5.00273C16.9439 5.4332 16.7259 5.57669 16.4682 5.57669C16.3293 5.57669 16.1509 5.4332 16.1509 5.03862V1.36173C16.1509 0.895411 15.9923 0.680176 15.5561 0.680176H12.3444C12.0271 0.680176 11.8289 0.895411 11.8289 1.11065C11.8289 1.55907 12.5624 1.66666 12.6417 2.92217V5.64843C12.6417 6.24034 12.5228 6.34793 12.2651 6.34793C11.5711 6.34793 9.88596 4.03419 8.87484 1.39763C8.67655 0.877462 8.47831 0.680176 7.96286 0.680176H5.90093C5.30617 0.680176 5.20703 0.93131 5.20703 1.20034C5.20703 1.68461 5.90093 4.12389 8.43863 7.35236C10.1239 9.55846 12.5228 10.7422 14.6838 10.7422C15.9923 10.7422 16.1509 10.4732 16.1509 10.0248V8.3568C16.1509 7.81868 16.2699 7.72904 16.6862 7.72904C16.9836 7.72904 17.5189 7.87248 18.7283 8.9307C20.1161 10.1862 20.354 10.7602 21.1272 10.7602H23.1693C23.764 10.7602 24.0416 10.4911 23.883 9.97098C23.7046 9.45087 23.0305 8.69757 22.1582 7.80073C21.6823 7.29857 20.9686 6.74256 20.7505 6.47347C20.4531 6.1148 20.5324 5.97131 20.7505 5.64843C20.7307 5.64843 23.2287 2.45585 23.4865 1.37968Z"
                      fill="black" fill-opacity="0.2" shape-rendering="crispEdges" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M23.4865 1.37968C23.6253 0.985106 23.4865 0.698125 22.8719 0.698125H20.8298C20.3144 0.698125 20.0764 0.949207 19.9377 1.21829C19.9377 1.21829 18.8869 3.51408 17.4198 5.00273C16.9439 5.4332 16.7259 5.57669 16.4682 5.57669C16.3293 5.57669 16.1509 5.4332 16.1509 5.03862V1.36173C16.1509 0.895411 15.9923 0.680176 15.5561 0.680176H12.3444C12.0271 0.680176 11.8289 0.895411 11.8289 1.11065C11.8289 1.55907 12.5624 1.66666 12.6417 2.92217V5.64843C12.6417 6.24034 12.5228 6.34793 12.2651 6.34793C11.5711 6.34793 9.88596 4.03419 8.87484 1.39763C8.67655 0.877462 8.47831 0.680176 7.96286 0.680176H5.90093C5.30617 0.680176 5.20703 0.93131 5.20703 1.20034C5.20703 1.68461 5.90093 4.12389 8.43863 7.35236C10.1239 9.55846 12.5228 10.7422 14.6838 10.7422C15.9923 10.7422 16.1509 10.4732 16.1509 10.0248V8.3568C16.1509 7.81868 16.2699 7.72904 16.6862 7.72904C16.9836 7.72904 17.5189 7.87248 18.7283 8.9307C20.1161 10.1862 20.354 10.7602 21.1272 10.7602H23.1693C23.764 10.7602 24.0416 10.4911 23.883 9.97098C23.7046 9.45087 23.0305 8.69757 22.1582 7.80073C21.6823 7.29857 20.9686 6.74256 20.7505 6.47347C20.4531 6.1148 20.5324 5.97131 20.7505 5.64843C20.7307 5.64843 23.2287 2.45585 23.4865 1.37968Z"
                      stroke="black" shape-rendering="crispEdges" />
                  </g>
                  <defs>
                    <filter id="filter0_d_9_1443" x="0.707031" y="0.180176" width="27.7188" height="19.0801"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_1443" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_1443" result="shape" />
                    </filter>
                  </defs>
                </svg></a>
            </li>
            <li class="social_link">
              <a href="#" class="social_link-Tube"><svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.0013 1.04957C14.6622 1.23093 15.1827 1.7653 15.3593 2.4439C15.6803 3.67379 15.6803 6.23997 15.6803 6.23997C15.6803 6.23997 15.6803 8.80606 15.3593 10.036C15.1827 10.7146 14.6622 11.249 14.0013 11.4305C12.8035 11.76 8.00031 11.76 8.00031 11.76C8.00031 11.76 3.19708 11.76 1.99927 11.4305C1.33835 11.249 0.817854 10.7146 0.641214 10.036C0.320312 8.80606 0.320312 6.23997 0.320312 6.23997C0.320312 6.23997 0.320312 3.67379 0.641214 2.4439C0.817854 1.7653 1.33835 1.23093 1.99927 1.04957C3.19708 0.719971 8.00031 0.719971 8.00031 0.719971C8.00031 0.719971 12.8035 0.719971 14.0013 1.04957ZM6.56028 4.0802V8.88021L10.4003 6.4803L6.56028 4.0802Z"
                    fill="white" fill-opacity="0.8" />
                </svg>
              </a>
            </li>
            <li class="social_link">
              <a href="#" class="social_link-Ok">
                <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.91902 13.2622L10.5725 15.8238C11.116 16.3474 11.116 17.1978 10.5725 17.722C10.0294 18.2462 9.14932 18.2462 8.60687 17.722L5.99801 15.2048L3.39142 17.722C3.11963 17.9838 2.76349 18.1149 2.40735 18.1149C2.05178 18.1149 1.69621 17.9838 1.42441 17.722C0.881398 17.1978 0.881398 16.348 1.42385 15.8238L4.07758 13.2622C3.1114 13.0497 2.17958 12.6802 1.32132 12.1604C0.671803 11.7651 0.476693 10.9369 0.885942 10.3094C1.29406 9.68105 2.15232 9.49189 2.80297 9.8872C4.74612 11.0671 7.24933 11.0674 9.19362 9.8872C9.84428 9.49189 10.7023 9.68105 11.1112 10.3094C11.5205 10.9364 11.3248 11.7651 10.6753 12.1604C9.81701 12.6807 8.8852 13.0497 7.91902 13.2622Z"
                    fill="white" fill-opacity="0.8" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.24023 4.94193C1.24023 7.46791 3.36913 9.52263 5.98679 9.52263C8.60502 9.52263 10.7333 7.46791 10.7333 4.94193C10.7333 2.41513 8.60502 0.359863 5.98679 0.359863C3.36913 0.359863 1.24023 2.41513 1.24023 4.94193ZM7.95202 4.94145C7.95202 3.89531 7.07048 3.04463 5.98672 3.04463C4.90381 3.04463 4.02141 3.89531 4.02141 4.94145C4.02141 5.98676 4.90381 6.83799 5.98672 6.83799C7.07048 6.83799 7.95202 5.98676 7.95202 4.94145Z"
                    fill="white" fill-opacity="0.8" />
                </svg>
              </a>
            </li>
            <li class="social_link">
              <a href="#" class="social_link-Teleg">
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.600085 6.85877C2.28343 5.93153 4.16251 5.15765 5.91823 4.37981C8.93876 3.10577 11.9713 1.85381 15.0344 0.688246C15.6304 0.489646 16.7012 0.295426 16.8062 1.17863C16.7487 2.42879 16.5122 3.67163 16.35 4.91447C15.9382 7.64759 15.4623 10.3713 14.9982 13.0955C14.8383 14.0028 13.7016 14.4726 12.9742 13.8919C11.2263 12.7112 9.46495 11.5421 7.73935 10.334C7.17409 9.75965 7.69825 8.93483 8.20309 8.52467C9.64273 7.10591 11.1695 5.90051 12.5339 4.40843C12.9019 3.51965 11.8145 4.26869 11.4558 4.49819C9.48493 5.85635 7.56229 7.29743 5.48437 8.49107C4.42297 9.07535 3.18589 8.57603 2.12497 8.24999C1.17372 7.85615 -0.220212 7.45937 0.599989 6.85883L0.600085 6.85877Z"
                    fill="white" fill-opacity="0.8" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <div class="authPopupApp">
      <div class="container">
        <AuthPopup :isDctivePop="isDactive" @authXclose="awrapper" @authOpen="authlogin">
        </AuthPopup>
      </div>
    </div>
  </body>
</template>

<style scoped>
@import "./assets/global.css";
@import "./assets/normalize.css";

/* header */
header {
  padding: 32px 0;
}

.button {
  margin-right: 45px;
  color: white;
  background-color: black;
  border: black;
  font-size: 24px;
}

.button:hover {
  cursor: pointer;
}

.input_head {
  position: relative;
  margin-right: 82px;
  padding-left: 50px;
  width: 559px;
  height: 48px;
  font-size: 24px;
  border-radius: 8px;
  background-color: rgb(158, 158, 158);
  z-index: 4;
}

.input_headHid {
  z-index: 2;
}

.head_wrapper {
  align-items: center;
}

.hedlogo {
  margin-right: 85px;
}

.hedlogo:hover {
  cursor: pointer;
}

/*footer*/
.footer {
  padding: 42px 0;
}

.footer_left {
  margin-right: auto;
  align-items: center;
}

.footer_left-desr,
.footer_left-desr1 {
  margin: 0;
  padding: 0;
}

.footer_left-desr {
  margin-right: 14px;
  font-size: 18px;
  font-weight: bold;
}

.footer_left-desr1 {
  display: flex;
  align-items: center;
  margin-right: 14px;
  font-size: 18px;
  padding-left: 30px;
  background-image: url(../assets/copyright.png);
  background-repeat: no-repeat;
  background-position: left;
  color: rgb(191, 198, 204);
}

.social_link {
  margin-right: 24px;
  top: 10px;
  border: 1px solid white;
  border-radius: 8px;
  width: 36px;
  height: 36px;
}

.social_link:last-child {
  margin-right: 0;
}

.social_link-VK {
  display: flex;
  padding-left: 4px;
  padding-top: 6px;
}

.social_link-Teleg {
  display: flex;
  padding-left: 8px;
  padding-top: 10px;
}

.social_link-Ok {
  display: flex;
  padding-left: 12px;
  padding-top: 8px;
}

.social_link-Tube {
  display: flex;
  padding-left: 10px;
  padding-top: 10px;
}

ul {
  list-style-type: none;
  /* Убирает буллиты */
}

/*popup трейлер*/
.wrapper {
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

.pwrapper {
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

.awrapper {
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

.openWrapper {
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
</style>
