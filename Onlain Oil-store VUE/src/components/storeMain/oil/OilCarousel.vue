<script lang="ts" setup>
import { ref } from "vue";
import { useBasketStore, basketObjType } from "../../../stores/basket";
import { offerMenu } from "../../../constants";
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-resize/dist/vue3-resize.css'

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
const itemsTo = ref<number>()

window.addEventListener('resize', () => {
    // console.log(window.innerWidth)
    if (window.innerWidth < 690) {
        itemsTo.value = 1
    } else {
        itemsTo.value = 2
    }
});



</script>
<template>
    <Carousel :itemsToShow="itemsTo" :wrapAround="true" class="oilSlider">
        <Slide class="oil__itemCar" v-for="(item, index) in offerMenu" :key="index">
            <picture class="oil__itemCar-img" :class="{
                oil__itemDinamic: counter === Number(item.id) && isHover
            }">
                <source :srcset="item.imgOil1366" media="(max-width: 1366px)">
                <img :src="item.imgOil" class=" oil__img" :class="{
                    oil__imgDinamic: counter === Number(item.id) && isHover
                }">
            </picture>
            <div class="oil__descriptionCar">
                <h3 class="oil__itemCar-titlle" :style="`color: ${item.color}`"> Масло &nbsp;{{
                    item.nameOil }}</h3>
                <p class="oil__descrCar">{{ item.descrOil }}</p>
                <p class="oil__subdescrCar">{{ item.subdescrOil }}</p>
            </div>
            <div class="oil__basketCar">
                <div class="oil__basket-topCar flex">
                    <div class="oil__btns-counterCar flex">
                        <button @click="item.totalOil > 0 ? item.totalOil-- : undefined"
                            class="oil__btn-minusCar btn__reset">
                            -
                        </button>
                        <div class="oil__number-counterCar" :style="`color: ${item.color}`">
                            {{ item.totalOil }} </div>
                        <button @click="item.totalOil++" class="oil__btn-plusCar btn__reset" :id=item.id> +
                        </button>
                    </div>
                    <div class="oil__basket-priceCar flex">
                        <div class="oil__volumeCar">250&nbsp;мл</div>
                        <div class="oil__priceCar" :style="`color: ${item.color}`">
                            115<span class="oil__price-spanCar">руб</span></div>
                    </div>
                </div>
                <div class="oil__basket-rightCar">
                    <div class="oil__btns-addCar flex">
                        <button class="oil-btn-basketCar oil-btn-basketAddCar  btn__reset" :id="item.id"
                            :style="`color: ${item.color}; border: 1px solid ${item.color}`"
                            @mouseover="activeHover($event)" @mouseout="isHover = false" @click="basketAdd">
                            В&nbsp;КОРЗИНУ</button>
                        <button class="oil-btn-basketCar  btn__reset"
                            :style="`color: ${item.color}; border: 1px solid ${item.color}`"> ЗАКАЗАТЬ
                            В&nbsp;ТГ</button>
                    </div>
                </div>
            </div>
        </Slide>
        <template #addons>
            <!-- <Navigation /> -->
            <Pagination class="paginTest" />
        </template>
    </Carousel>
</template>

<style scoped>
@import "../../../assets/global.css";
@import "../../../assets/normalize.css";

@media (max-width: 1100px) {
    .oil__tittle {
        margin: 0;
        margin-top: 12px;
        margin-bottom: 11px;
        padding-top: 7px;
        text-align: center;
        font-size: 48px;
        font-family: 'Amatic SC Regular';
        font-weight: normal;
    }

    .oil__list {
        column-gap: 20px;
    }

    .oil__itemCar {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-left: 7px;
        padding-right: 7px;
        margin-right: 20px;
        width: 360px;
        height: 615px;
        box-shadow: 10px 10px 35px 0px rgba(190, 191, 183, 0.1);
        transform: translateX(143px);

    }

    .oil__itemCar-img {
        display: flex;
        margin: 0 auto;
        margin-bottom: 10px;
        padding-top: 40px;
        justify-content: center;
        min-height: 232px;
        aspect-ratio: 1;
        transition: outline .4s ease-in-out 0s;
    }

    .oil__itemDinamic {

        background: linear-gradient(#536614, #97C20B);
        border-radius: 50%;
    }

    .oil__img {
        display: flex;
        align-self: center;
    }

    .oil__imgDinamic {
        transform: rotate(20deg) scale(1.2);
        transition: transform .4s ease-in-out 0s;
    }

    .oil__itemCar-titlle {
        margin-bottom: 15px;
        font-size: 24px;
        font-family: 'Amatic SC Regular';
    }

    .div:hover img transform scale .oil__item-titlle {
        margin-bottom: 15px;
        font-size: 24px;
        font-family: 'Amatic SC Regular';
    }

    .oil__descriptionCar {
        margin-bottom: auto;
    }

    .oil__descrCar,
    .oil__subdescrCar {
        font-size: 14px;
        font-weight: 300;
        line-height: 125%;
        color: #4A4A4A;
    }

    .oil__descrCar {
        margin-bottom: 8px;
    }

    .oil__basket-topCar {
        margin-bottom: 21px;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .oil__btn-minusCar,
    .oil__btn-plusCar {
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

    .oil__btns-counterCar {
        width: 90px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    .oil__basket-priceCar {
        align-items: center;
    }

    .oil__volumeCar {
        margin-right: 20px;
        font-size: 14px;
        color: #4A4A4A;
    }

    .oil__priceCar {
        margin-bottom: 7px;
        font-size: 24px;
        font-weight: 500;
    }

    .oil__price-spanCar {
        font-size: 18px;
    }

    .oil__btns-addCar {

        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 34px;
        align-items: center;
    }

    .oil-btn-basketCar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 1px;
        margin: 0;
        width: 212px;
        height: 32px;
        font-size: 14px;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 500;
        transition: all .3s ease-in-out 0s;
    }

    .oil-btn-basketCar:hover {
        background: linear-gradient(to right, #97C20B, #536614);
        color: #ffffff !important;
    }

    .oil-btn-basketAddCar {
        margin-bottom: 18px;
    }

    .oil__basketCar {
        padding-bottom: 17px;
    }

    .oil__basket-rightCar {
        padding-right: 35px;
    }

    .paginTest {
        display: flex;
    }
}

@media (max-width: 690px) {
    .oil__itemCar {
        padding-left: 24px;
        padding-right: 24px;
        margin-right: 0;
        height: 564px;
        transform: translateX(0px);
    }

    .oil__itemCar-img {

        margin-bottom: 10px;
        padding-top: 14px;
        min-height: 211px;
    }

    .oil__itemCar-titlle {
        margin-bottom: 7px;
        font-size: 22px;
        line-height: 125%;
    }

    .oil__descrCar,
    .oil__subdescrCar {
        font-size: 10px;
    }

    .oil__descrCar {
        margin-bottom: 15px;
    }

    .oil-btn-basketCar {
        height: 30px;
        width: 246px;
    }

    .oil__imgDinamic {
        transform: rotate(20deg) scale(1.1);
        transition: transform .4s ease-in-out 0s;
    }

}
</style>