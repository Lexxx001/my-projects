<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { movId } from "../stores/infofilm";
import { userInf } from "../stores/userinf";

const userInform = userInf();

function accountExit() {
  console.log("Аккаунт выход");
  accountEx();
}

const accountEx = async () => {
  const fetchResponse = await fetch(
    "https://cinemaguide.skillbox.cc/auth/logout",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const response = await fetchResponse.json();
  console.log(response);

  return response;
};

const isActiveAcc = ref(false);
const isActiveFm = ref(false);

function accountName() {
  isActiveAcc.value = true;
  isActiveFm.value = false;
}

function accountFm() {
  isActiveAcc.value = false;
  isActiveFm.value = true;
}
</script>

<template>
  <div class="container">
    <h2 class="account_titlle">Мой аккаунт</h2>
    <section class="account_menu">
      <RouterLink to="/accfm">
        <h3
          @click="accountFm"
          :class="{ account_under: isActiveFm }"
          class="account_titlle1"
        >
          Избранные фильмы
        </h3>
      </RouterLink>
      <RouterLink to="/accset">
        <h3
          @click="accountName"
          :class="{ account_under: isActiveAcc }"
          class="account_titlle2"
        >
          Настройка аккаунта
        </h3>
      </RouterLink>
    </section>

    <router-view> </router-view>
  </div>
</template>

<style scoped>
@import "../assets/global.css";
@import "../assets/normalize.css";

.account_titlle {
  margin-bottom: 75px;
  font-size: 40px;
  font-weight: bold;
}
.account_menu {
  display: flex;
  margin-bottom: 72px;
}
.account_titlle1,
.account_titlle2 {
  margin: 0;
  padding: 0;
  font-size: 24px;
  cursor: pointer;
}
.account_titlle1 {
  margin-right: 50px;
}

.account_under {
  text-decoration: underline;
}
</style>
