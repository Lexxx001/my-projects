<script lang="ts" setup>
import { ref, watch } from "vue";
import { navMenuItems } from '../constants'
import Modal from './Modal.vue'
import { useBasketStore } from "../stores/basket";
import Basket from "./modal/Basket.vue";
import BurgerMenu from "./modal/BurgerMenu.vue";

const basketStore = useBasketStore()
const basketNum = ref(0)

watch(() => basketStore.basketArrStore, () => {
    basketNum.value = basketStore.basketArrStore.reduce((acc: number, e: any) => { return acc + e.total }, 0)
}, { deep: true })

const isOpenModal = ref<boolean>(false)
const isOpenModBurger = ref<boolean>(false)

const openModal = () => {
    isOpenModal.value = true
    document.documentElement.style.overflow = 'hidden'
}


const closeModal = () => {
    isOpenModal.value = false
    document.documentElement.style.overflow = 'auto'
}

</script>

<template>
    <header class="header ">
        <div class="container container__header ">
            <div class="header__logo">
                <div class="header__logoBack"></div>
                <picture class="header__logo-media">
                    <source srcset="../assets/header/headerLogo320.png" media="(max-width: 690px)">
                    <source srcset="../assets/header/headerLogo768.png" media="(max-width: 1100px)">
                    <source srcset="../assets/header/headerLogo1366.png" media="(max-width: 1366px)">
                    <img alt="logo" class="header__logo-img" src="../assets/header/headerLogo.png" />
                </picture>
            </div>

            <nav class="header__nav">
                <ul class="header__list list__reset flex">
                    <li class="header__item" v-for="item in navMenuItems" :key="item.code">
                        <a :href="item.link" class="header__link">{{ item.title }}</a>
                    </li>
                </ul>
            </nav>

            <button @click="isOpenModBurger = true" class="burger__menu btn__reset">
                <picture class="header__burger-menu">
                    <source srcset="../assets/header/burgerMenu320.png" media="(max-width: 690px)">
                    <img alt="Basket" src="../assets/header/burgerMenu.png" />
                </picture>
            </button>

            <button @click="openModal" class="header__button btn__reset">
                <div class="header__button-counter">
                    {{ basketNum }}
                </div>
                <picture class="header__basket">
                    <source srcset="../assets/header/headerBasket320.png" media="(max-width: 690px)">
                    <img alt="Basket" class="header__basket-img" src="../assets/header/headerBasket.png" />
                </picture>
            </button>

        </div>
    </header>

    <modal v-if="isOpenModBurger" @modalClose="isOpenModBurger = false">
        <BurgerMenu />
    </modal>


    <modal v-if="isOpenModal" @modalClose="closeModal">
        <Basket />
    </modal>

</template>

<style scoped lang="scss">
@import "../assets/global.css";
@import "../assets/normalize.css";

/* header */
.container__header {
    display: flex;
    align-items: center;
    padding-top: 27px;
}

.header {
    &__logo {
        position: relative;
        margin-right: auto;
        z-index: 0;

        &Back {
            position: absolute;
            width: 316px;
            height: 316px;
            background-image: url(../assets/header/backLogo.png);
            background-repeat: no-repeat;
            background-position: center;
            top: -60px;
            right: -45px;
            z-index: -1;
            opacity: 0.5
        }
    }
}


.header__nav {
    margin-right: 220px;
}

.header__item:not(:last-child) {
    margin-right: 92px;
}

.header__link {
    font-family: "El Messiri";
    font-size: 18px;
    color: #688800;
    transition: all .3s ease-in-out 0s;
}

.header__link:hover {
    color: #BFD087;
}

.header__button {
    position: relative;
    margin-right: 15px;
}

.header__button-counter {
    position: absolute;
    padding-top: 8px;
    width: 24px;
    height: 24px;
    color: #ffffff;
    top: -14px;
    left: 35px;
    background-image: url(../assets/header/backBasket.png);
    background-repeat: no-repeat;
    background-position: center;
}

.burger__menu {
    display: none;
}

.stop__scrolling {
    height: 100%;
    overflow: hidden;
}




@media (max-width: 1366px) {
    .container__header {
        margin: 0 auto;
        max-width: 1066px;
        padding-top: 6px;
    }

    .header__nav {
        margin-right: 96px;
    }

    .header__logoBack {
        width: 212px;
        height: 212px;
        top: -36px;
        right: -32px;
        background-image: url(../assets/header/backLogo1366.png);
    }

    .header__logo {
        margin-right: auto;
    }

    .header__item:not(:last-child) {
        margin-right: 68px;
    }

    .header__button {
        padding-top: 24px;
    }

    .header__button-counter {
        top: 8px;
        left: 30px;

    }
}

@media (max-width: 1100px) {
    .container__header {
        margin: 0 auto;
        max-width: 688px;
    }

    .header__nav {
        display: none;
    }

    .header__logoBack {
        width: 180px;
        height: 180px;
        top: -23px;
        right: -68px;
        background-image: url(../assets/header/backLogo768.png);
    }

    .header__logo-media {
        padding-left: 44px;
    }

    .header__button {
        padding-top: 43px;
    }

    .burger__menu {
        display: block;
        margin-right: 29px;
        padding-top: 59px;
    }

    .header__button-counter {
        top: 29px;
        left: 31px;
    }

}

@media (max-width: 690px) {
    .container__header {
        margin: 0 auto;
        max-width: 280px;
    }

    .header__logoBack {
        width: 128px;
        height: 128px;
        top: -16px;
        right: -48px;
        background-image: url(../assets/header/backLogo320.png);
    }

    .header__logo-media {
        padding-left: 35px;
    }

    .header__logo-img {
        padding-bottom: 8px;
    }

    .burger__menu {
        padding-top: 15px;
        margin-right: 25px;
    }

    .header__button-counter {
        padding-top: 10px;
        font-size: 12px;
        top: -10px;
        left: 17px;
        background-image: url(/src/assets/header/backBasket320.png);
    }

    .header__button {
        margin-right: 2px;
        padding-top: 0;
    }
}
</style>