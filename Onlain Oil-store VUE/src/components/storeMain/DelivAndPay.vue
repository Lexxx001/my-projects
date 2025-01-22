<script lang="ts" setup>
import { ref } from "vue";

const deliveryCads = ref([
    {
        id: 1,
        img: '/src/assets/delivAndPay/deliv1.svg',
        titlle: 'Новая почта'
    },
    {
        id: 2,
        img: '/src/assets/delivAndPay/deliv2.svg',
        titlle: 'Руспочта'
    },
    {
        id: 2,
        img: '/src/assets/delivAndPay/deliv3.svg',
        titlle: 'Самовывоз'
    },
])

const payCads = ref([
    {
        id: 1,
        img: '/src/assets/delivAndPay/pay1.svg',
        titlle: 'Наложенный платеж'
    },
    {
        id: 2,
        img: '/src/assets/delivAndPay/pay2.svg',
        titlle: 'Приват24'
    },
    {
        id: 2,
        img: '/src/assets/delivAndPay/pay3.svg',
        titlle: 'Наличными при самовывозе'
    },
])

</script>

<template>
    <section id="DeliveryAndPay" class="DeliveryAndPay">
        <h1 class="deliv__titlleSmall">-Доставка</h1>
        <div class="DeliveryAndPay__bloc"></div>
        <div class="container__delive-wrap">
            <div class="container container__deliv">
                <div class="deliv flex">

                    <ul class="deliv__list flex">
                        <li class="deliv__item" v-for="item in deliveryCads" :key="item.id">
                            <img :src="item.img" alt="oilImg" class="oil__deliver-img flex">
                            <h3 class="deliv__item-titlle">{{ item.titlle }}</h3>
                        </li>
                    </ul>
                    <h1 class="deliv__titlle">-Доставка</h1>
                    <div class="deliv__img-right"></div>
                </div>
            </div>
        </div>
        <h1 class="pay__titlleSmall">Оплата-</h1>
        <div class="container__pay-wrap">
            <div class="container container__pay">
                <div class="pay flex">
                    <div class="pay__img-right"></div>
                    <h1 class="pay__titlle">Оплата-</h1>
                    <ul class="pay__list flex">
                        <li class="pay__item" v-for="item in payCads" :key="item.id">
                            <img :src="item.img" alt="oilImg" class="oil__pay-img flex">
                            <h3 class="pay__item-titlle">{{ item.titlle }}</h3>
                        </li>
                    </ul>
                    <div class="pay__img-right"></div>
                </div>
            </div>

        </div>


    </section>
</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";


.DeliveryAndPay {
    padding-top: 78px;
    padding-bottom: 36px;
}

.deliv {
    position: relative;
    margin-bottom: 50px;
    align-items: center;
}

.container__deliv {
    background: linear-gradient(to right, #EDF4D2 610px, #ffffff 0%);
}

.container__delive-wrap {
    background: linear-gradient(to right, #EDF4D2 33%, #ffffff 0%);
}

.deliv__list {
    column-gap: 63px;
    padding: 20px 50px 20px 211px;
}

.deliv__titlle,
.pay__titlle {
    font-size: 40px;
    font-weight: normal;
    color: #4A4A4A;
    font-family: "Amatic SC Regular";
}

.deliv__titlle {
    margin-left: 32px;
}

.oil__deliver-img,
.oil__pay-img {
    margin: 0 auto;
    margin-bottom: 17px;
}

.deliv__item-titlle,
.pay__item-titlle {
    font-size: 16px;
    font-weight: normal;
    color: #4A4A4A;
}

.pay__titlle {
    margin-left: auto;
    margin-right: 100px;
}

.deliv__img-right {
    position: absolute;
    width: 149px;
    height: 186px;
    background-image: url(../../assets/delivAndPay/delivimg.png);
    background-repeat: no-repeat;
    background-position: center;
    right: -7px;
    top: -4px;
    color: #4A4A4A;
}

.pay {
    position: relative;
    margin-bottom: 50px;
    align-items: center;
}

.pay__list {
    margin-right: 15px;
    column-gap: 62px;
}

.container__pay-wrap {
    background: linear-gradient(to left, #EDF4D2 33%, #ffffff 0%);
}

.container__pay {

    background: linear-gradient(to left, #EDF4D2 612px, #ffffff 0%);
}

.pay__img-right {
    position: absolute;
    width: 232px;
    height: 175px;
    background-image: url(../../assets/delivAndPay/payimg.png);
    background-repeat: no-repeat;
    background-position: center;
    bottom: 20px;
    color: #4A4A4A;
}

.deliv__titlleSmall,
.pay__titlleSmall {
    display: none;
}

@media (max-width: 1366px) {
    .container__deliv {
        background: linear-gradient(to right, #EDF4D2 663px, #ffffff 0%);
    }

    .container__pay {
        background: linear-gradient(to left, #EDF4D2 650px, #ffffff 0%);
    }

    .deliv {
        margin-bottom: 77px;
    }

    .deliv__list {
        padding-left: 248px;
        margin-right: 10px;
    }

    .deliv__img-right {
        width: 104px;
        height: 147px;
        background-image: url(../../assets/delivAndPay/delivimg1366.png);
        right: -31px;
        top: 63px;
    }

    .pay__img-right {
        width: 191px;
        height: 144px;
        background-image: url(../../assets/delivAndPay/payimg1366.png);
        bottom: 76px;
        left: 9px;
    }

    .pay__list {
        margin-right: 50px;
    }

    .pay__titlle {
        margin-right: 100px;
    }
}

@media (max-width: 1100px) {

    .DeliveryAndPay {
        padding-top: 82px;
        padding-bottom: 42px;
    }

    .container__deliv {
        background: linear-gradient(to right, #EDF4D2 487px, #ffffff 0%);
    }

    .deliv__list {
        column-gap: 71px;
        padding-top: 25px;
        padding-left: 92px;
        margin-right: 15px;
    }

    .deliv__img-right {
        right: -7px;
        top: 55px;
    }

    .container__pay {
        background: linear-gradient(to left, #EDF4D2 488px, #ffffff 0%);
    }

    .pay__list {
        margin-right: 0;
        column-gap: 42px;
    }

    .deliv {
        margin-bottom: 88px;
    }

    .pay__titlle {
        padding-top: 5px;
        margin-right: 44px;
    }
}

@media (max-width: 690px) {

    .container__delive-wrap,
    .container__pay-wrap {
        background: #EDF4D2;
    }

    .container__deliv,
    .container__pay {
        background: none;
    }

    .oil__deliver-img,
    .oil__pay-img {
        width: 32px;
        height: 32px;
    }

    .deliv__item-titlle,
    .pay__item-titlle {
        font-size: 12px;
    }

    .deliv__titlle,
    .pay__titlle {
        display: none;
    }

    .deliv__titlleSmall,
    .pay__titlleSmall {
        display: block;
        margin: 0;
        margin-bottom: 9px;
        text-align: center;
        font-size: 32px;
        font-weight: normal;
        color: #4A4A4A;
        font-family: "Amatic SC Regular";
    }

    .DeliveryAndPay {
        padding-top: 41px;
        padding-bottom: 0;
    }

    .deliv__item-titlle {
        white-space: nowrap
    }

    .deliv__list {
        column-gap: 46px;
        padding-top: 25px;
        padding-left: 31px;
    }

    .oil__deliver-img {
        margin-bottom: 5px;
    }

    .deliv__img-right {
        width: 74px;
        height: 99px;
        background-image: url(../../assets/delivAndPay/delivimg320.png);
        right: 9px;
        top: -94px;
    }

    .pay__img-right {
        width: 113px;
        height: 86px;
        background-image: url(../../assets/delivAndPay/payimg320.png);
        bottom: 106px;
        left: 5px;
    }

    .deliv {
        margin-bottom: 42px;
    }

    .pay__list {
        column-gap: 6px;
        padding-top: 23px;
        padding-left: 8px;
        padding-bottom: 22px;
    }

    .oil__pay-img {
        margin-bottom: 7px;
    }

    .pay__item h3 {
        text-align: center;
    }

    .pay {
        margin-bottom: 0;
    }


}
</style>