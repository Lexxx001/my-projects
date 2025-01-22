<script lang="ts" setup>
import { ref } from "vue";
import { useBasketStore, basketObjType } from "../../../stores/basket";
import { offerMenu } from "../../../constants";
import OilCarousel from "./OilCarousel.vue";

const basketStOil = useBasketStore()

const isHover = ref<boolean>(false)
const counter = ref<number>()

const activeHover = (event: any) => {
    isHover.value = true;
    let targetSearch = event.target;
    counter.value = Number(targetSearch.id)
}

const countId = ref<number>()

const basketAdd = (event: any) => {
    let targetSearch = event.target;
    countId.value = Number(targetSearch.id);
    console.log(countId.value)

    if (offerMenu.value[countId.value].totalOil > 0) {
        const basketObj: basketObjType =
        {
            id: countId.value,
            imgOil: offerMenu.value[countId.value].imgOil,
            nameOil: offerMenu.value[countId.value].nameOil,
            price: offerMenu.value[countId.value].price,
            total: offerMenu.value[countId.value].totalOil,
        }
        const result = basketStOil.basketArrStore.find(item => item.id === basketObj.id);
        if (result === undefined) {
            basketStOil.basketArrStore.push(basketObj)
        } else {
            result.total = (Number(result.total) + offerMenu.value[countId.value].totalOil)
        };
    }
}

</script>
<template>
    <section id="Oil" class="oil">
        <div class="container oil__container">
            <h1 class="oil__tittle"> Масло</h1>
            <ul class="oil__list flex">
                <li class="oil__item" v-for="(item, index) in offerMenu" :key="index">
                    <picture class="oil__item-img" :class="{
                        oil__itemDinamic: counter === Number(item.id) && isHover
                    }">
                        <source :srcset="item.imgOil1366" media="(max-width: 1420px)">
                        <img :src="item.imgOil" class=" oil__img" :class="{
                            oil__imgDinamic: counter === Number(item.id) && isHover
                        }">
                    </picture>
                    <div class="oil__description">
                        <h3 class="oil__item-titlle" :style="`color: ${item.color}`"> Масло &nbsp;{{
                            item.nameOil }}</h3>
                        <p class="oil__descr">{{ item.descrOil }}</p>
                        <p class="oil__subdescr">{{ item.subdescrOil }}</p>
                    </div>
                    <div class="oil__basket">
                        <div class="oil__basket-top flex">
                            <div class="oil__btns-counter flex">
                                <button @click="item.totalOil > 0 ? item.totalOil-- : undefined"
                                    class="oil__btn-minus btn__reset">
                                    -
                                </button>
                                <div class="oil__number-counter" :style="`color: ${item.color}`">
                                    {{ item.totalOil }} </div>
                                <button @click="item.totalOil++" class="oil__btn-plus btn__reset" :id=item.id> +
                                </button>
                            </div>
                            <div class="oil__basket-price flex">
                                <div class="oil__volume">250&nbsp;мл</div>
                                <div class="oil__price" :style="`color: ${item.color}`">
                                    115<span class="oil__price-span">руб</span></div>
                            </div>
                        </div>
                        <div class="oil__basket-right">
                            <div class="oil__btns-add flex">
                                <button class="oil-btn-basket oil-btn-basketAdd  btn__reset" :id="item.id"
                                    :style="`color: ${item.color}; border: 1px solid ${item.color}`"
                                    @mouseover="activeHover($event)" @mouseout="isHover = false" @click="basketAdd">
                                    В&nbsp;КОРЗИНУ</button>
                                <button class="oil-btn-basket  btn__reset"
                                    :style="`color: ${item.color}; border: 1px solid ${item.color}`"> ЗАКАЗАТЬ
                                    В&nbsp;ТГ</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="oil__carousel">
                <OilCarousel />
            </div>
        </div>
    </section>

</template>

<style scoped>
@import "../../../assets/global.css";
@import "../../../assets/normalize.css";

.oil__tittle {
    margin: 0;
    margin-bottom: 103px;
    padding-top: 7px;
    text-align: center;
    font-size: 48px;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.oil__list {
    column-gap: 20px;
}

.oil__item {
    display: flex;
    flex-direction: column;
    padding-left: 21px;
    padding-right: 21px;
    width: 360px;
    min-height: 568px;
    box-shadow: 10px 10px 35px 0px rgba(190, 191, 183, 0.1);
}

.oil__item-img {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    min-height: 259px;
    aspect-ratio: 1;
    transition: outline .4s ease-in-out 0s;
}

.oil__img {
    display: flex;
    align-self: center;
}

.oil__itemDinamic {
    outline: 15px solid #97C20B40;
    background: linear-gradient(#536614, #97C20B);
    border-radius: 50%;
}


.oil__imgDinamic {
    transform: rotate(20deg) scale(1.2);
    transition: transform .4s ease-in-out 0s;
}

.oil__item-titlle {
    margin-bottom: 15px;
    font-size: 24px;
    font-family: 'Amatic SC Regular';
}

.div:hover img transform scale .oil__item-titlle {
    margin-bottom: 15px;
    font-size: 24px;
    font-family: 'Amatic SC Regular';
}

.oil__description {
    margin-bottom: auto;
}

.oil__descr,
.oil__subdescr {
    font-size: 14px;
    font-weight: 300;
    line-height: 125%;
    color: #4A4A4A;
}

.oil__descr {
    margin-bottom: 15px;
}

.oil__basket-top {
    margin-bottom: 21px;
    justify-content: space-between;
    align-items: center;
}

.oil__btn-minus,
.oil__btn-plus {
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border: 1px solid #949494;
    border-radius: 8px;
    color: #4A4A4A;
}

.oil__btns-counter {
    width: 90px;
    align-items: center;
    justify-content: space-between;
}

.oil__basket-price {
    align-items: center;
}

.oil__volume {
    margin-right: 20px;
    font-size: 14px;
    color: #4A4A4A;
}

.oil__price {
    margin-bottom: 7px;
    font-size: 24px;
    font-weight: 500;
}

.oil__price-span {
    font-size: 18px;
}

.oil__btns-add {
    flex-wrap: wrap;
    justify-content: space-between;
}

.oil-btn-basket {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1px;
    margin: 0;
    min-width: 146px;
    height: 32px;
    font-size: 14px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 500;
    transition: all .3s ease-in-out 0s;
}

.oil-btn-basket:hover {
    background: linear-gradient(to right, #97C20B, #536614);
    color: #ffffff !important;
}

.oil-btn-basketAdd {
    margin-bottom: 24px;
}

.oilSlider {
    display: none;
}


@media (max-width: 1420px) {
    .oil__item {
        width: 244px;
        height: 639px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 24px;
    }

    .oil__list {
        column-gap: 30px;
        width: 1066px;
        margin: 0 auto;
    }

    .oil__tittle {
        margin-bottom: 11px;
    }

    .oil__item-titlle {
        margin-bottom: 18px;
        font-size: 22px;
        font-family: 'Amatic SC Regular';
    }

    .oil__item-img {
        min-height: 211px;
    }

    .oil__descr,
    .oil__subdescr {
        font-size: 12px;
    }

    .oil__container {
        display: flex;
        flex-direction: column;
    }

    .oil__basket-top {
        margin-bottom: 20px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }

    .oil__description {
        margin-bottom: auto;
    }

    .oil-btn-basket {
        width: 212px;
    }

    .oil-btn-basketAdd {
        margin-bottom: 13px;
    }

    .oil__basket {
        height: 177px;
        margin-bottom: 23px;
    }

    .oil__btns-counter {
        margin-bottom: 14px;
    }
}

@media (max-width: 1100px) {
    .oil__container {
        margin: 0 auto;
        max-width: 688px;
    }

    .oil__list {
        display: none;
    }

    .oilSlider {
        display: block;
        margin-bottom: 2px;
    }
}

@media (max-width: 690px) {
    .oil__container {
        margin: 0 auto;
        max-width: 280px;
    }

    .oil__tittle {
        padding-top: 23px;
        margin-bottom: 11px;
        font-size: 36px;
    }
}
</style>
