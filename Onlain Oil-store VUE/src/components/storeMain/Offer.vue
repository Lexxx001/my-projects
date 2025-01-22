<script lang="ts" setup>
import { ref } from "vue";
import { useBasketStore, basketObjType } from "../../stores/basket";
import { offerMenu } from "../../constants";

const basketStOffer = useBasketStore();
const counter = ref<number>(0);
const basketCount = ref<number>(0)

const choiceBtn = (event: any) => {
    let targetSearch = event.target;
    counter.value = Number(targetSearch.id);
}

const basketAdd = () => {
    if (basketCount.value > 0) {
        const basketObj: basketObjType =
        {
            id: counter.value,
            imgOil: offerMenu.value[counter.value].imgOil,
            nameOil: offerMenu.value[counter.value].nameOil,
            price: offerMenu.value[counter.value].price,
            total: basketCount.value,
        }
        const result = basketStOffer.basketArrStore.find(item => item.id === basketObj.id);
        if (result === undefined) {
            basketStOffer.basketArrStore.push(basketObj)

        } else {
            result.total = (Number(result.total) + basketCount.value)
        };
    }
}
</script>

<template>
    <section class="offer">
        <div class="container container__offer">
            <div class="offer_wrapper flex">
                <picture class="offer__left">
                    <source :srcset="offerMenu[counter].img1366" media="(max-width: 1366px)">
                    <img :src="offerMenu[counter].img" alt="image.alt" class="cardWrapper_card" />
                </picture>

                <div class="offer__right">
                    <div class="offer__top-box">
                        <h3 class="offer__topBox-titlle">
                            Наши продукты
                        </h3>
                        <ul class="offer__list list__reset flex">
                            <li class="offer__item" v-for="item in offerMenu" :key="item.id">
                                <button :class="{ offer__itemBack: Number(item.id) === counter }" :id=item.id
                                    class="offer__link btn__reset" @click="choiceBtn($event)">
                                    {{ item.nameOil }}
                                </button>
                            </li>
                        </ul>
                        <picture class="offer__left-768">
                            <source :srcset="offerMenu[counter].img320" media="(max-width: 690px)">
                            <source :srcset="offerMenu[counter].img768" media="(max-width: 1100px)">
                            <img :src="offerMenu[counter].img" alt="image.alt" class="cardWrapper_card" />
                        </picture>
                    </div>
                    <div class="offer__bottom-box">
                        <h2 class="offer__botBox-titlle">
                            Масло "{{ offerMenu[counter].nameOil }}"
                        </h2>
                        <p class="offer__botBox-descr">
                            {{ offerMenu[counter].descrOil }}
                        </p>

                        <div class="offer__basket">
                            <div class="offer__btns-counter flex">
                                <button @click="basketCount > 0 ? basketCount-- : null"
                                    class="offer__btn-minus btn__reset"> - </button>
                                <div class="offer__number-counter"> {{ basketCount }} </div>
                                <button @click="basketCount >= 0 ? basketCount++ : null"
                                    class="offer__btn-plus btn__reset"> + </button>
                            </div>
                            <div class="offer__btns-add flex">
                                <button class="offer-btn-add offer__btn-addBasket   btn__reset"> ПОДРОБНЕЕ</button>
                                <button @click="basketAdd" class="offer-btn-add btn__reset">
                                    В&nbsp;КОРЗИНУ</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="offer__btn-wrap flex">
                <button @click="counter > 0 ? counter-- : counter = 3"
                    class="offer__arrow-btn  offer__arrow-prev btn__reset"></button>
                <button @click="counter < offerMenu.length - 1 ? counter++ : counter = 0"
                    class="offer__arrow-btn offer__arrow-next btn__reset"></button>
            </div>
        </div>
    </section>

</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";

.offer {
    position: relative;
}

.offer_wrapper {
    min-height: 744px;
    padding-left: 59px;
}

.offer__btn-wrap {
    position: relative;
}

.offer__arrow-btn {
    position: absolute;
    width: 17px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center;
    bottom: 315px;
    color: #4A4A4A;
}

.offer__arrow-prev {
    background-image: url(../../assets/offer/arrowLeft.png);
    left: 22px;
}

.offer__arrow-next {
    background-image: url(../../assets/offer/arrowRight.png);
    right: 22px;
}

.offer__left {
    width: 611px;
    margin-right: 92px;
}

.offer__right {
    width: 740px;
    padding-top: 83px;
    padding-bottom: 130px;
}

.offer__top-box {
    margin-bottom: 36px;
}

.offer__topBox-titlle {
    margin: 0;
    margin-bottom: 33px;
    font-size: 36px;
    font-family: "Amatic SC Bold";
    color: #688800;
}

.offer__list {
    margin-right: auto;
}

.offer__item {
    display: flex;
    justify-content: center;
    width: 143px;
    height: 40px;
    border: 1px solid #BFD087;
}

.offer__item:not(:last-child) {
    margin-right: 39px;
}

.offer__link {
    width: 100%;
    font-style: 18px;
    color: #BFD087;
}

.offer__itemBack {
    background-color: #BFD087;
    color: #546B06;
}

.offer__botBox-titlle {
    margin-bottom: 34px;
    font-family: 'Amatic SC Bold';
    font-weight: normal;
    font-size: 64px;
    color: #4A4A4A;
}

.offer__botBox-descr {
    margin-bottom: 33px;
    font-size: 18px;
    max-width: 613px;
    color: #4A4A4A;
}

.offer__btns-counter {
    margin-bottom: 32px;
    width: 128px;
    align-items: center;
    justify-content: space-between;
}

.offer__btn-minus,
.offer__btn-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 32px;
    height: 32px;
    border: 1px solid #949494;
    border-radius: 8px;
    color: #4A4A4A;
}

.offer__number-counter {
    font-size: 24px;
    font-weight: 500;
    color: #688800;
}

.offer__btns-add {
    column-gap: 40px;
}

.offer-btn-add {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    margin: 0;
    width: 200px;
    height: 48px;
    font-size: 18px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid #688800;
    color: #688800;
    transition: color .4s ease-in-out, background-image 0.3s ease-in-out;
}

.offer-btn-add:hover {
    background-image: linear-gradient(to right, #97C20B, #536614);
    color: #ffffff;
}

.offer__left-768 {
    display: none;
}

@media (max-width: 1366px) {
    .offer_wrapper {
        padding-left: 100px;
        min-height: 593px;
    }

    .offer__left {
        padding-left: 34px;
        padding-top: 23px;
        width: 450px;
        margin-right: 15px;
    }

    .offer__right {
        padding-top: 40px;
        padding-bottom: 55px;
    }

    .offer__arrow-prev {
        bottom: 287px;
        left: 60px;
    }

    .offer__arrow-next {
        bottom: 287px;
        right: 60px;
    }

    .offer__item:not(:last-child) {
        margin-right: 5px;
    }
}

@media (max-width: 1100px) {
    .container__offer {
        margin: 0 auto;
        max-width: 688px;
    }

    .offer__left {
        display: none;

    }

    .offer__left-768 {
        display: block;
    }

    .offer_wrapper {
        padding-left: 1px;
    }

    .offer__right {
        padding-top: 23px;
    }

    .offer__top-box {
        margin-bottom: 0;
        padding-left: 23px;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .offer__topBox-titlle {
        margin-top: 15px;
        margin-bottom: 23px;
    }

    .offer__item:not(:last-child) {
        margin-right: 21px;
    }

    .offer__bottom-box {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .offer__list {
        margin-bottom: 27px;
    }

    .offer__botBox-titlle {
        margin-bottom: 20px;
        font-size: 48px;
    }

    .offer__left-768 {
        height: 462px;
    }

    .offer__botBox-descr {
        padding: 0;
        min-width: 700px;
        letter-spacing: 0.9px;
    }

    .offer__basket {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}

@media (max-width: 690px) {
    .container__offer {
        margin: 0 auto;
        max-width: 280px;
    }

    .offer__list {
        display: none;
    }

    .offer__botBox-descr {
        margin-bottom: 21px;
        padding: 0;
        text-align: center;
        min-height: 120px;
        min-width: 100%;
        font-size: 16px;
        letter-spacing: 0.9px;
        line-height: 24px;
    }

    .offer__botBox-titlle {
        margin-bottom: 6px;
        font-size: 36px;
    }

    .offer__btns-add {
        flex-wrap: wrap;
    }

    .offer__left-768 {
        height: 355px;
    }

    .offer__topBox-titlle {
        margin-bottom: 50px;
    }

    .offer__btns-counter {
        margin-bottom: 22px;
    }

    .offer-btn-add {
        width: 280px;
        height: 46px;
    }

    .offer__btn-addBasket {
        margin-bottom: 23px;
    }

    .offer__right {
        padding-bottom: 10px;
    }

    .offer_wrapper {
        height: 870px;
    }

    .offer__arrow-prev {
        bottom: 500px;
        left: 9px;
    }

    .offer__arrow-next {
        bottom: 500px;
        right: 9px;
    }

}
</style>
