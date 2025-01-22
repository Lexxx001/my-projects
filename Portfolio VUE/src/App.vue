<script setup>
import { ref } from "vue";
import CardProject from "./components/CardProject.vue";


const images = ref([
  [
    "/src/assets/Blanchard1.jpg",
    "/src/assets/Blanchard2.jpg",
    "/src/assets/Blanchard3.jpg",
    "/src/assets/Blanchard4.jpg"
  ],

  [
    "/src/assets/SystemData1.jpg",
    "/src/assets/SystemData2.jpg",
    "/src/assets/SystemData3.jpg",
    "/src/assets/SystemData4.jpg"
  ],
  [
    "/src/assets/cinema1.jpg",
    "/src/assets/cinema2.jpg",
    "/src/assets/cinema3.jpg",
    "/src/assets/cinema4.jpg"
  ],
  [
    "/src/assets/test1.jpg",
    "/src/assets/test2.jpg",
    "/src/assets/test3.jpg",

  ],


])


let isActive1 = ref(false)
const button1 = () => {
  isActive1.value = true;
}

let isActive2 = ref(false)
const button2 = () => {
  isActive2.value = true;
}

let isActive3 = ref(false)
const button3 = () => {
  isActive3.value = true;
}

let isActive4 = ref(false)
const button4 = () => {
  isActive4.value = true;
}


const buttonClose = () => {
  isActive1.value = false;
  isActive2.value = false;
  isActive3.value = false;
  isActive4.value = false;

}



</script>

<template>

  <body>
    <header class="header">
      <div class="container header_container flex">
        <div class="header_logo">
          <img alt="logo" class="header_logo-img" width="80px" src="./assets/headerLogo.png" />
        </div>
        <nav class="header_nav">
          <ul class="header_list list_reset flex">
            <li class="header_list-item ">
              <a href="#aboutMe" class="header_link header_link-aboutMe">Обо мне</a>
            </li>
            <li class="header_list-item">
              <a href="#skills" class="header_link header_link-skils">Навыки</a>
            </li>
            <li class="header_list-item">
              <a href="#projects" class="header_link header_link-projects">Мои проекты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <section id="aboutMe" class="aboutMe">
        <div class="container aboutMe_container">
          <h2 class="aboutMe_title">
            Привет! &nbsp;Это я - <span class="aboutMe_span">разработчик.</span>
          </h2>

          <div class="aboutMe_prewiew-wrap flex">
            <div class="aboutMe_gradient"> </div>
            <div class="aboutMe_arrow"></div>
            <img src="./assets/aboutMe.png" alt="фото" width="250px" class="aboutMe_prewiew-img">
            <p class="aboutMe_prewiew-descr">
              Хороший программист делают свою работу не&nbsp;потому, что ожидает оплаты или признания, &emsp; &emsp;
              &emsp; &emsp; <span class="aboutMe_span-descr">
                а&nbsp;потому что
                получает
                удовольствие от&nbsp;программирования.</span>
            </p>
          </div>
          <h3 class="aboutMe_headline">
            Я Frontend Разработчик.
          </h3>
          <p class="aboutMe_headline-descr">
            Сейчас нахожусь в поисках работы.
          </p>
          <p class="aboutMe_descr">
            Знаю на&nbsp;хорошем уровне HTML и&nbsp;CSS, владею навыками адаптивной и&nbsp;кроссбраузерной
            верстки.
            Разрабатываю проекты на&nbsp;JavaScript и&nbsp;VUE с&nbsp;применением технологий Pinia, TypeScript, API.
          </p>
        </div>
      </section>
      <section id="skills" class="skills">
        <div class="container skill_container">
          <h2 class="skills_title">Навыки</h2>

          <div class="skills_wrapper">
            <div class="skills_gradient"></div>
            <div class="skill skill_css">
              <img alt="logo" class="skills_css-img" width="90" src="./assets/css.png" />
              <p class="skill_descr skill_css-descr"> Работа с селекторами, позиционирование, использование
                псевдоклассов,
                препроцессоры, медиазапросы, анмации и т.д. </p>
            </div>
            <div class="skill skill_html">
              <img alt="logo" class="skills_html-img" width="90" src="./assets/html.png" />
              <p class="skill_descr skill_html-descr">
                Умение работать со структурой HTML кода. Знание и умение применять различные теги в зависимости от их
                местоположения и смыслового значения. Использование атрибутов.
              </p>
            </div>
            <div class="skill skill_js">
              <img alt="logo" class="skills_js-img" width="90" src="./assets/js.png" />
              <p class="skill_descr skill_js-descr">
                Понимание синтаксиса и основных концепций языка, таких как переменные, типы данных, функции, объекты и
                массивы. Умение использовать HTML для создания структуры веб-страниц и CSS для их стилизации.
              </p>
            </div>
            <div class="skill skill_vue">
              <img alt="logo" class="skills_vue-img" width="90" src="./assets/vue.png" />
              <p class="skill_descr skill_vue-descr">
                Понимание структуры текста, директивы и обработку событий и форм для эффективного управления элементами
                DOM и обработки пользовательского ввода.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class="progects">
        <div class="container">
          <h2 class="progects_title">Мои проекты</h2>

          <div class="projects_wrraper">

            <div v-if="!isActive2 && !isActive3 && !isActive4" class="progect progect_1">
              <div class="projects_gradient"></div>
              <div class="projects_gradient-1"></div>

              <div class="progect__descr     progect_1-descr">
                <h3 class="progect_title-note">Проект</h3>
                <h2 class="progect_title progect_1-title">Blanchard</h2>
                <span class="progect_title-note progect_note">HTML, CSS</span>
                <div class="progect_card progect_card-l">
                  Проект Blanchard это лендинг с адаптивной версткой корректно отображающийся на ПК, планшете, мобильном
                  устройстве. Верстка выполнена с примененем компонентного подхода БЭМ, в Pixel Perfect для всех
                  разрешений в соотвествии с макетом.
                </div>
                <button id="1" @click="button1" class="project_button project_button-card1"> Узнать больше</button>
              </div>
              <div class="projects__image progect_1-img">
                <img src="./assets/Blanchard1.jpg" alt="фото" class="progect1__img">
              </div>

            </div>

            <div v-if="!isActive1 && !isActive3 && !isActive4" class="progect progect_2">
              <div class="projects_gradient-3"></div>
              <div class="progect__descr progect_2-descr">
                <h3 class="progect_title-note progect_title-note2">Проект</h3>
                <h2 class="progect_title progect_2-title">Система управления данными клиентов.</h2>
                <span class="progect_title-note progect_title-note2 progect_note">JS, HTML, CSS</span>
                <div class="progect_card progect_card-2">
                  Система управления контактными данными клиентов - это проект, выполненный с применением JavaScript.
                  Данный проект позволяет ввести учет клиентов с возвожностью добавление, удаление и
                  корретировки данных пользователей. Для удобства пользователей данный ресурс позволяеть выполнять
                  сортировку, а так же поиск клиентов по ID, ФИО, даты создания и изменения данных.
                </div>
                <button id="2" @click="button2" class="project_button project_button-card2"> Узнать больше</button>
              </div>
              <div class="progect_2-img">
                <img src="./assets/SystemData1.jpg" alt="фото" class="progect2__img">
              </div>

            </div>

            <div v-if="!isActive1 && !isActive2 && !isActive4" class="progect progect_3">
              <div class="projects_gradient-4"></div>
              <div class="projects_gradient-5"></div>
              <div class="progect__descr progect_3-descr">
                <h3 class="progect_title-note progect_title-note3">Проект</h3>
                <h2 class="progect_title progect_3-title">Онлайн платформа по поиску фильмов </h2>
                <span class="progect_title-note progect_note">VUE, HTML, CSS</span>
                <div class="progect_card progect_card-3">
                  Онлайн платформа для пользователей фильмов CinemaGuide - это проект выполненый на VUE JS. Функционал
                  данной платформы позволяет выполнять поиск понравившихся фильмов по жанру и по названию с последующей
                  возможностью внесения их в раздел избранное. Внесение в избранное возможно тольео после авторизации.
                  При разрабтке применены технологиии Pinia, Stora.
                </div>
                <button id="3" @click="button3" class="project_button project_button-card3"> Узнать больше</button>
              </div>
              <div class="progect_3-img">
                <img src="./assets/cinemaTitle.jpg" alt="фото" class="progect3__img">
              </div>
            </div>

            <div v-if="!isActive1 && !isActive2 && !isActive3" class="progect progect_4">
              <div class="projects_gradient-6"></div>
              <div class="progect__descr progect_4-descr">
                <h3 class="progect_title-note progect_title-note4">Проект</h3>
                <h2 class="progect_title progect_4-title">Программа тестирования</h2>
                <span class="progect_title-note progect_title-note2 progect_note">VUE, HTML, CS</span>
                <div class="progect_card progect_card-4">
                  Программа тестирования - программа тетсирования знаний, с чередующимеся заданиями на карточках и
                  споследующим выведением результата. Несложный проет выполненный с примененим технологий Pinia, Stora.
                </div>
                <button id="4" @click="button4" class="project_button project_button-card4"> Узнать больше</button>
              </div>
              <div class="progect_4-img">
                <img src="./assets/test1.jpg" alt="фото" class="progect4__img">
              </div>

            </div>

            <CardProject :images="images" :isActive1="isActive1" :isActive2="isActive2" :isActive3="isActive3"
              :isActive4="isActive4" />

            <button v-if="isActive1 || isActive2 || isActive3 || isActive4" @click="buttonClose"
              class="project_button project_button-close"> Посмотреть другие работы</button>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="container">
        <h3 class="footer_title">Контакты</h3>
        <p class="footer_descr">Ищу команду разработчиков для профессионального роста, буду рад вашему отклику.</p>
        <div class="footer_mail">Ссылка на GitHub:&nbsp;
          <a href="https://github.com/Lexxx001/my-portfolio"
            class="footer_link">https://github.com/Lexxx001/my-portfolio</a>

        </div>

      </div>
    </footer>
  </body>
</template>



<style scoped>
@import "./assets/media.css";
@import "./assets/global.css";
@import "./assets/normalize.css";


/* header */
header {
  padding: 37px 0;
  background-color: #1A0B2E;
}

.header_logo {
  margin-left: 30px;
  margin-right: auto;
}

.header_list-item {
  align-items: center;
}

.header_link {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #FFFFFF;
  transition: all .3s ease-in-out 0s;
}

.header_link:hover {
  color: #763CAC;
}

.header_container {
  display: flex;
  align-items: center;

}

.header_list-item:not(:last-child) {
  margin-right: 80px;
}

@media (max-width: 700px) {
  .header_list-item:not(:last-child) {
    margin-right: 50px;
  }

  .header_logo {
    display: none;
  }
}

/* aboutMe */
.aboutMe {

  padding: 133px 0;
}

.aboutMe_title {
  margin-left: 260px;
  margin-bottom: 50px;
  font-size: 19px;
  color: #FFFFFF;
}

.aboutMe_prewiew-img {
  margin-right: 25px;
}

.aboutMe_container {
  position: relative;
  max-width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
  z-index: 0;
}


.aboutMe_prewiew-wrap {
  flex-wrap: wrap;
  margin-bottom: 150px;
  color: #FFFFFF;
}

.aboutMe_gradient {
  position: absolute;
  width: 385px;
  height: 431px;
  background-image: url(./assets/gradient.png);
  background-repeat: no-repeat;
  background-position: center;
  right: 900px;
  top: 0px;
  z-index: -1;
}

.aboutMe_arrow {
  position: absolute;
  width: 400px;
  height: 400px;
  background-image: url(./assets/aboutArrow.png);
  background-repeat: no-repeat;
  background-position: center;
  right: 810px;
  bottom: 511px;
  z-index: 0;
}

@media (max-width: 1250px) {


  .aboutMe_arrow,
  .aboutMe_gradient {
    display: none;
  }

  .aboutMe_title {
    margin-left: 30px;
  }
}

.aboutMe_prewiew-descr {
  margin: 0;
  max-width: 800px;
  padding-top: 30px;
  font-size: 17px;

}

.aboutMe_span {
  color: #693B93;
}



.aboutMe_span-descr {
  margin: 0;
  font-size: 40px;
}

.aboutMe_headline {
  margin: 0;
  margin-bottom: 10px;
  font-size: 40px;
  color: #FFFFFF;
}

.aboutMe_headline-descr {
  margin: 0;
  margin-bottom: 90px;
  font-size: 22px;
  color: #FFFFFF;
}

.aboutMe_descr {
  margin: 0;
  margin-bottom: 70px;
  max-width: 1050px;
  font-size: 22px;
  color: #FFFFFF;
  line-height: 2;
}


/* skills */
.skills {
  padding-bottom: 190px;
}

.skills_title {

  margin: 0;
  margin-bottom: 100px;
  font-size: 40px;
  color: #FFFFFF;
}

.skills_wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
}

.skill {
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding-left: 45px;
  padding-right: 45px;
  width: 500px;
  height: 193px;
  border-radius: 10px;
  background-color: #290f4c;
  z-index: 1;
  box-shadow: 3px 3px 3px #693B93;
}

.skill:hover {
  background-color: #0f4c17;
}

.skill_css {
  background: linear-gradient(45deg, #1A0B2E 40%, #430f74, #290f4c);
}

.skill_html {
  background: linear-gradient(to left, #1A0B2E, #430f74, #290f4c 45%);
}

.skill_js {
  background: linear-gradient(#1A0B2E 25%, #430f74, #290f4c);
}

.skill_vue {
  background: linear-gradient(135deg, #1A0B2E, #430f74, #290f4c 45%);
}

.skill_descr {
  font-family: "Montserrat", sans-serif;
  color: #FFFFFF;
}

.skill_css-descr {
  padding-top: 5px;
}

.skill_container {
  max-width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
}

.skills_gradient {
  position: absolute;
  width: 725px;
  height: 800px;
  background-image: url(./assets/skillGradient.png);
  background-repeat: no-repeat;
  background-position: bottom;
  left: 208px;
  top: -280px;
  z-index: 0;
}

@media (max-width: 1200px) {
  .skills_gradient {
    left: 1px;
    top: 1px;
    width: 0px;
  }


}

/* my progects */
.progects {
  padding-bottom: 100px;

}

.progects_title {
  margin: 0;
  margin-bottom: 100px;
  font-size: 40px;
  color: #FFFFFF;
}

.progect_title {
  margin: 0;

  font-size: 40px;
  color: #FFFFFF;
}

.progect {
  height: 341px;
}

.progect:not(:last-child) {
  margin-bottom: 150px;
}

@media (max-width: 1200px) {
  .progect:not(:last-child) {
    margin-bottom: 470px;
  }

  .progect_4 {
    padding-bottom: 335px;
  }
}

.progect_title {
  font-size: 32px;
}

.progect_card {
  margin-bottom: 20px;
  width: 630px;
  height: 130px;
  padding-left: 35px;
  padding-right: 30px;
  padding-top: 35px;
  border-radius: 10px;
  color: #FFFFFF;
  background: linear-gradient(to right, #1A0B2E, #763CAC, hsl(276, 16%, 94%));
  opacity: 0.9;
}

@media (max-width: 1200px) {
  .progect_card {
    padding-bottom: 30px;
    width: 550px;
    height: 100%;

  }
}

@media (max-width: 700px) {
  .progect_card {
    width: 90%
  }
}

.progect_title-note {
  margin: 0;
  font-size: 19px;
  color: #9857D3;
}

.progect_note {
  margin-bottom: 10px;
  color: #FFFFFF;
}

.progect_1 {
  position: relative;
  z-index: 1;
}

.projects_gradient {
  position: absolute;
  width: 625px;
  height: 700px;
  background-image: url(./assets/projectsGradient.png);
  background-repeat: no-repeat;
  background-position: center;
  right: 140px;
  top: -160px;
  z-index: -1;
}

.projects_gradient-1 {
  position: absolute;
  width: 625px;
  height: 700px;
  background-image: url(./assets/projectsGradient.png);
  background-repeat: no-repeat;
  background-position: center;
  left: 680px;
  top: -160px;
  z-index: -1;
}

@media (max-width: 1200px) {

  .projects_gradient,
  .projects_gradient-1 {
    display: none;
  }
}

.progect_1-img {
  position: absolute;
  width: 582px;
  height: 340px;
  background-color: #FFFFFF;
  border-radius: 10px;
  z-index: -1;
  top: 1px;
  right: 1px;
}

@media (max-width: 1300px) {
  .progect_1-img {
    top: 335px;
    left: 1px;
  }
}

.progect__descr {
  display: flex;
  flex-direction: column;
}

.project_button {
  margin: 0;
  width: 150px;
  padding: 10px 18px;
  font-size: 16px;
  outline: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #1A0B2E, #763CAC, #1A0B2E);
  color: #fff;
  transition: all .3s ease-in-out 0s;
}

.project_button:hover {
  box-shadow: 0px 0px 4px 3px #693B93;
}


.project_button-card2,
.project_button-card4 {
  margin-left: auto;
}

.progect_title-note2,
.progect_title-note4,
.progect_2-title,
.progect_4-title {
  margin-left: auto;
}

.progect_2-descr,
.progect_4-descr {
  margin-left: 533px;
}

@media (max-width: 1200px) {

  .progect_2-descr,
  .progect_4-descr {
    margin-left: 0px;
  }

  .project_button-card2,
  .project_button-card4 {
    margin-left: 0;
  }

  .progect_title-note2,
  .progect_title-note4,
  .progect_2-title,
  .progect_4-title {
    margin-left: 0;
  }
}

.progect_2 {
  position: relative;
  z-index: 1;
}

.projects_gradient-3 {
  position: absolute;
  width: 625px;
  height: 700px;
  background-image: url(./assets/projectsGradient.png);
  background-repeat: no-repeat;
  background-position: center;
  right: 700px;
  top: -160px;
  z-index: -1;
}

.progect_2-img {
  position: absolute;
  width: 582px;
  height: 340px;
  background-color: #FFFFFF;
  border-radius: 10px;
  z-index: -1;
  top: 1px;
  left: 1px;
}

@media (max-width: 1200px) {
  .progect_2-img {
    top: 335px;
  }
}

.progect_card-2,
.progect_card-4 {
  background: linear-gradient(to left, #1A0B2E, #763CAC, hsl(276, 16%, 94%));
}

.progect_3 {
  position: relative;
  z-index: 1;
}

.projects_gradient-4 {
  position: absolute;
  width: 625px;
  height: 700px;
  background-image: url(./assets/projectsGradient.png);
  background-repeat: no-repeat;
  background-position: center;
  right: 140px;
  top: -160px;
  z-index: -1;
}

.projects_gradient-5 {
  position: absolute;
  width: 625px;
  height: 700px;
  background-image: url(./assets/projectsGradient.png);
  background-repeat: no-repeat;
  background-position: center;
  left: 680px;
  top: -160px;
  z-index: -1;
}

@media (max-width: 1200px) {

  .projects_gradient-4,
  .projects_gradient-5 {
    display: none;
  }
}

.progect_3-img {
  position: absolute;
  width: 582px;
  height: 340px;
  background-color: #FFFFFF;
  border-radius: 10px;
  z-index: -1;
  top: 1px;
  right: 1px;
}

@media (max-width: 1200px) {
  .progect_3-img {
    top: 335px;
    left: 1px;
  }
}

.progect_4 {
  position: relative;
  z-index: 1;
}

.projects_gradient-6 {
  position: absolute;
  width: 625px;
  height: 700px;
  background-image: url(./assets/projectsGradient.png);
  background-repeat: no-repeat;
  background-position: center;
  right: 700px;
  top: -160px;
  z-index: -1;
}

.progect_4-img {
  position: absolute;
  width: 582px;
  height: 340px;
  background-color: #FFFFFF;
  border-radius: 10px;
  z-index: -1;
  top: 1px;
  left: 1px;
}

@media (max-width: 1200px) {
  .progect_4-img {
    top: 335px;
  }
}



/* my footer */
.footer {
  padding-bottom: 50px;
}

.footer_title {
  margin: 0;
  margin-bottom: 100px;
  color: #FFFFFF;
  font-size: 40px;
}

.footer_descr {
  margin: 0;
  padding-bottom: 40px;
  color: #FFFFFF;
}

.footer_mail {
  margin-bottom: 50px;
  color: #FFFFFF;
}

.project_button-close {
  display: block;
  padding: 18px 18px;
  margin: 0 auto;
  width: 250px;
}

.footer_link {
  text-decoration: underline;
}
</style>
