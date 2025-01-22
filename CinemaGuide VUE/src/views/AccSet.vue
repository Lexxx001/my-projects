<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { movId } from "../stores/infofilm";
import { userInf } from "../stores/userinf";
import { userSt } from "../stores/user";

const userStore = userSt();
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

  if ((response.value = true)) {
    const isAuthorized = ref(false);
    localStorage.setItem("key", isAuthorized.toString());

    console.log(userStore.isAuthorized);
  }

  return response;
};
</script>

<template>
  <section class="account_account">
    <h3 class="account_name">Имя Фамилия</h3>
    <div class="account_n">{{ userInform.profileInf.name }}</div>
    <h3 class="account_mail">Электронная почта</h3>
    <div class="account_m">{{ userInform.profileInf.email }}</div>

    <RouterLink to="/">
      <button @click="accountExit" class="account_btnEx">
        Выйти из аккаунта
      </button>
    </RouterLink>
  </section>
</template>

<style scoped>
@import "../assets/global.css";
@import "../assets/normalize.css";

/*account_account*/
.account_name,
.account_mail {
  margin: 0;
  margin-bottom: 21px;
  padding: 0;
  font-size: 18px;
}
.account_n {
  margin-bottom: 53px;
}
.account_m {
  margin-bottom: 67px;
}

.account_n,
.account_m {
  font-size: 24px;
}
.account_btnEx {
  display: flex;

  margin-bottom: 25px;
  padding: 18px 60px;
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
