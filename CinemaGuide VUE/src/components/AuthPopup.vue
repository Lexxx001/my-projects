<script lang="ts" setup>
import { watch, ref } from "vue";
import { userSt } from "../stores/user";
import { userInf } from "../stores/userinf";

const userStore = userSt();
const userInform = userInf();

const props = defineProps({
  isDctivePop: { type: Boolean },
  openWrapPop: { type: Boolean },
});

const chekinputmail = ref(false);
const chekinputpass = ref(false);
function onClickEnter() {
  if (authPopupMail.value.length != 0 && authPopupPass.value.length != 0) {
    postLogin();
    chekinputmail.value = false;
    chekinputpass.value = false;
  }
  if (authPopupMail.value.length == 0) {
    chekinputmail.value = true;
  }
  if (authPopupPass.value.length == 0) {
    chekinputpass.value = true;
  }
}

const authPopupMail = ref("");
const authPopupPass = ref("");
const isAuthorized = ref(false);

watch(authPopupMail, (newVal) => {
  chekinputmail.value = false;
});
watch(authPopupPass, (newVal) => {
  chekinputpass.value = false;
});
chekinputmail;

/*запрос на авторизацию*/
const postLogin = async () => {
  const fetchResponse = await fetch(
    "https://cinemaguide.skillbox.cc/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: authPopupMail.value,
        password: authPopupPass.value,
      }),
    }
  );
  const response = await fetchResponse.json();
  console.log(response.result);

  if (response.result === true) {
    userStore.isAuthorized = true;
    postProfil();

    let isAuthorized = true;

    localStorage.setItem("key", isAuthorized.toString());

    emit("authXclose");
    authPopupMail.value = "";
    authPopupPass.value = "";
    chekinputmail.value = false;
    chekinputpass.value = false;
    console.log("Авторизация прошла успешно");
  } else {
    console.log("Авторизация прошла Не успешно");
  }
  console.log(localStorage.getItem("key"));
  return response;
};

// email: "valeraMail",
// password: "654321",

// email: "mashaM",
// password: "123",

/*получение данных пользователя*/

const postProfil = async () => {
  const fetchResponse = await fetch("https://cinemaguide.skillbox.cc/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const respProf = await fetchResponse.json();

  console.log(respProf);
  userInform.profileInf = respProf;

  localStorage.setItem("keyprof", JSON.stringify(respProf));

  return respProf;
};

const emit = defineEmits(["authXclose", "authOpen"]);

function authPopupX() {
  emit("authXclose");
  authPopupMail.value = "";
  authPopupPass.value = "";
  chekinputmail.value = false;
  chekinputpass.value = false;
  console.log("Авторизация попап закрыт");
}

// регистрация
const regOpen = ref(false);
const isActive = ref(false);

function onClickReg() {
  emit("authXclose");
  regOpen.value = true;
  isActive.value = true;
  console.log("Регистрация попап");
}
function regPopupX() {
  regPopupMail.value = "";
  regPopupName.value = "";
  regPopupSun.value = "";
  regPopupPass.value = "";
  regPopupPass2.value = "";

  regOpen.value = false;
  isActive.value = false;
  console.log("Регистрация попап закрыт");
}
function wrraper() {
  regPopupMail.value = "";
  regPopupName.value = "";
  regPopupSun.value = "";
  regPopupPass.value = "";
  regPopupPass2.value = "";
  console.log("Wrrap закрыт");
  isActive.value = false;
  regOpen.value = false;
}

const chekinputMailReg = ref(false);
const chekinputNameReg = ref(false);
const chekinputSunReg = ref(false);
const chekinputPassReg = ref(false);
const chekinputPass2Reg = ref(false);

const regPopupMail = ref("");
const regPopupName = ref("");
const regPopupSun = ref("");
const regPopupPass = ref("");
const regPopupPass2 = ref("");

watch(regPopupMail, (newVal) => {
  chekinputMailReg.value = false;
});
watch(regPopupName, (newVal) => {
  chekinputNameReg.value = false;
});
watch(regPopupSun, (newVal) => {
  chekinputSunReg.value = false;
});
watch(regPopupPass, (newVal) => {
  chekinputPassReg.value = false;
});

watch(regPopupPass2, (newVal) => {
  chekinputPass2Reg.value = false;
});

const userRegistr = async () => {
  const fetchResponse = await fetch("https://cinemaguide.skillbox.cc/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: regPopupMail.value,
      password: regPopupPass.value,
      name: regPopupName.value,
      surname: regPopupSun.value,
    }),
  });

  const response = await fetchResponse.json();
  console.log(response);

  if ((response.value = true)) {
    regOpenDone.value = true;
    regOpen.value = false;

    console.log("открываем попап Done");
  }

  return response;
};

function onClickCreate() {
  if (
    regPopupMail.value.length != 0 &&
    regPopupName.value.length != 0 &&
    regPopupSun.value.length != 0 &&
    regPopupPass.value.length != 0 &&
    regPopupPass2.value.length != 0
  ) {
    console.log("зсохранение на сервере");
    userRegistr();
    chekinputMailReg.value = false;
    chekinputNameReg.value = false;
    chekinputSunReg.value = false;
    chekinputPassReg.value = false;
    chekinputPass2Reg.value = false;
  }
  if (regPopupMail.value.length == 0) {
    chekinputMailReg.value = true;
  }
  if (regPopupName.value.length == 0) {
    chekinputNameReg.value = true;
  }
  if (regPopupSun.value.length == 0) {
    chekinputSunReg.value = true;
  }
  if (regPopupPass.value.length == 0) {
    chekinputPassReg.value = true;
  }
  if (regPopupPass2.value.length == 0) {
    chekinputPass2Reg.value = true;
  }
}

function IhavePass() {
  regOpen.value = false;
  emit("authOpen");
  isActive.value = false;
  console.log("у меня есть пароль");
}

/* попап успешная регистрация */
const regOpenDone = ref(false);

function regPopupXDon() {
  isActive.value = false;
  regOpenDone.value = false;
  console.log(" попап закрыт");
}

function enterDonePop() {
  emit("authOpen");
  isActive.value = false;
  regOpenDone.value = false;
  console.log("Войти");
}
</script>

<template>
  <div @click="wrraper" :class="{ wrapper: isActive }"></div>
  <!-- попап авторизации -->
  <div class="authPopup" :class="{ authPopupOpen: isDctivePop }">
    <div @click="authPopupX" class="authPopupX"></div>
    <div class="authPopupLogo">
      <img src="../assets/logoAuth.png" alt="logo" class="authLogo" />
    </div>
    <input
      type="text"
      class="authPopup_mail"
      :class="{ redboard: chekinputmail }"
      placeholder="Электронная почта"
      v-model="authPopupMail"
      required
    />
    <input
      type="password"
      class="authPopup_pass"
      :class="{ redboard: chekinputpass }"
      placeholder="Пароль"
      v-model="authPopupPass"
      required
    />
    <button @click="onClickEnter" class="authPopup_btnEn">Войти</button>
    <button @click="onClickReg" class="authPopup_btnReg">Регистрация</button>
    <!-- <button @click="onClicktest" class="authPopup_btnReg">Тест</button> -->
  </div>

  <!-- попап регистрации -->
  <div class="regPopup" :class="{ regPopupOpen: regOpen }">
    <div @click="regPopupX" class="regPopupX"></div>
    <div class="regPopupLogo">
      <img src="../assets/logoAuth.png" alt="logo" class="regLogo" />
    </div>
    <div class="regPopupTittle">Регистрация</div>
    <input
      type="text"
      class="regPopup_mail"
      :class="{ redboard: chekinputMailReg }"
      placeholder="Электронная почта"
      v-model="regPopupMail"
      required
    />
    <input
      type="text"
      class="regPopup_name"
      :class="{ redboard: chekinputNameReg }"
      placeholder="Имя"
      v-model="regPopupName"
      required
    />
    <input
      type="text"
      class="regPopup_suname"
      :class="{ redboard: chekinputSunReg }"
      placeholder="Фамилия"
      v-model="regPopupSun"
      required
    />
    <input
      type="password"
      class="regPopup_pass"
      :class="{ redboard: chekinputPassReg }"
      placeholder="Пароль"
      v-model="regPopupPass"
      required
    />
    <input
      type="password"
      class="regPopup_pass2"
      :class="{ redboard: chekinputPass2Reg }"
      placeholder="Подтвердите пароль"
      v-model="regPopupPass2"
      required
    />

    <button @click="onClickCreate" class="regPopup_btnCreat">
      Создать аккаунт
    </button>
    <button @click="IhavePass" class="regPopup_btnPass">
      У меня есть пароль
    </button>
  </div>
  <!-- попап успешная регистрации -->
  <div class="regPopupDone" :class="{ regPopupOpenDone: regOpenDone }">
    <div @click="regPopupXDon" class="regPopupXDone"></div>
    <div class="regPopupLogoDone">
      <img src="../assets/logoAuth.png" alt="logo" class="regLogoDone" />
    </div>
    <div class="regPopupTittleDone">Регистрация завершена</div>
    <div class="regPopupTittleDone1">
      Используйте вашу элетронную почту для входа
    </div>

    <button @click="enterDonePop" class="regPopup_btnEnterDone">Войти</button>
  </div>
</template>

<style scoped>
@import "@/assets/global.css";
@import "@/assets/normalize.css";

.authPopup {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 420px;
  height: 444px;
  background-color: rgb(255, 255, 255, 255);
  z-index: 3;
  border-radius: 30px;
  visibility: hidden;
  color: black;
}

.authPopupOpen {
  visibility: visible;
}

.authPopupX {
  margin-top: 15px;
  margin-left: 380px;
  padding-bottom: 30px;
  width: 24px;
  height: 24px;
  background-image: url(../assets/iconX.svg);
  background-repeat: no-repeat;
  cursor: pointer;
}

.authLogo {
  display: flex;
  margin: 0 auto;
}

.authPopupLogo {
  margin-bottom: 35px;
}

.authPopup_mail,
.authPopup_pass {
  display: flex;
  margin: 0 auto;
  padding-left: 18px;
  font-size: 18px;
  width: 312px;
  height: 57px;
  border-radius: 8px;
  border-color: rgb(126, 126, 126);
}

.authPopup_mail {
  margin-bottom: 13px;
}

.authPopup_pass {
  margin-bottom: 25px;
}

.redboard {
  border-color: red;
}

.authPopup_btnEn {
  display: flex;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 18px 150px;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  border-radius: 100px;
  border: none;
  background-color: #9d5cd0;
  color: #fff;
  cursor: pointer;
}

.authPopup_btnReg {
  display: flex;
  margin: 0 auto;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: bold;
}

/* попап регистрации */
.regPopup {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 420px;
  height: 700px;
  background-color: rgb(255, 255, 255, 255);
  z-index: 3;
  border-radius: 30px;
  visibility: hidden;
  color: black;
}

.regPopupOpen {
  visibility: visible;
}

.regPopupX {
  margin-top: 15px;
  margin-left: 380px;
  padding-bottom: 30px;
  width: 24px;
  height: 24px;
  background-image: url(../assets/iconX.svg);
  background-repeat: no-repeat;
  cursor: pointer;
}

.regLogo {
  display: flex;
  margin: 0 auto;
}

.regPopupLogo {
  margin-bottom: 35px;
}

.regPopupTittle {
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 18px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: bold;
}

.regPopup_mail,
.regPopup_pass,
.regPopup_pass2,
.regPopup_name,
.regPopup_suname {
  display: flex;
  margin: 0 auto;
  font-size: 18px;
  padding-left: 18px;
  width: 312px;
  height: 57px;
  border-radius: 8px;
  border-color: rgb(126, 126, 126);
}

.regPopup_mail,
.regPopup_pass,
.regPopup_name,
.regPopup_suname {
  margin-bottom: 13px;
}

.regPopup_pass2 {
  margin-bottom: 25px;
}

.redboard {
  border-color: red;
}

.regPopup_btnCreat {
  display: flex;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 18px 105px;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  border-radius: 100px;
  border: none;
  background-color: #9d5cd0;
  color: #fff;
  cursor: pointer;
}

.regPopup_btnPass {
  display: flex;
  margin: 0 auto;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: bold;
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
  z-index: 3;
}

/* попап успешная регистрация */

.regPopupDone {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 420px;
  height: 390px;
  background-color: rgb(255, 255, 255, 255);
  z-index: 3;
  border-radius: 30px;
  visibility: hidden;
  color: black;
}

.regPopupOpenDone {
  visibility: visible;
}

.regPopupXDone {
  margin-top: 15px;
  margin-left: 380px;
  padding-bottom: 30px;
  width: 24px;
  height: 24px;
  background-image: url(../assets/iconX.svg);
  background-repeat: no-repeat;
  cursor: pointer;
}

.regLogoDone {
  display: flex;
  margin: 0 auto;
}

.regPopupLogoDone {
  margin-bottom: 35px;
}

.regPopupTittleDone {
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 18px;
  font-weight: bold;
}

.regPopupTittleDone1 {
  width: 250px;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 18px;
}

.regPopup_btnEnterDone {
  display: flex;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 18px 105px;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  border-radius: 100px;
  border: none;
  background-color: #9d5cd0;
  color: #fff;
  cursor: pointer;
}
</style>
