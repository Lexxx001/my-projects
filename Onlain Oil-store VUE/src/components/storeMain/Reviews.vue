<script lang="ts" setup>
import { ref } from "vue";
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const reviewsCards = ref([
    {
        id: 1,
        img: '/src/assets/reviews/reviews1.png',
        img1366: '/src/assets/reviews/reviews11366.png',
        img768: '/src/assets/reviews/reviews1768.png',
        img320: '/src/assets/reviews/reviews1_320.png',
    },
    {
        id: 2,
        img: '/src/assets/reviews/reviews2.png',
        img1366: '/src/assets/reviews/reviews21366.png',
        img768: '/src/assets/reviews/reviews2768.png',
        img320: '/src/assets/reviews/reviews1_320.png',
    },
    {
        id: 3,
        img: '/src/assets/reviews/reviews3.png',
        img1366: '/src/assets/reviews/reviews31366.png',
        img768: '/src/assets/reviews/reviews2768.png',
        img320: '/src/assets/reviews/reviews1_320.png',
    },

])


const counter = ref(0)

const arrowNext = () => {
    reviewsCards.value.push({
        id: reviewsCards.value[0].id,
        img: reviewsCards.value[0].img,
        img1366: reviewsCards.value[0].img1366,
        img768: reviewsCards.value[0].img1366,
        img320: reviewsCards.value[0].img320,
    })
    reviewsCards.value.shift();
    if (counter.value < reviewsCards.value.length - 1) {
        counter.value++
    } else {
        counter.value = 0;
    }
}

const arrowPrev = () => {
    reviewsCards.value.unshift({
        id: reviewsCards.value[reviewsCards.value.length - 1].id,
        img: reviewsCards.value[reviewsCards.value.length - 1].img,
        img1366: reviewsCards.value[reviewsCards.value.length - 1].img1366,
        img768: reviewsCards.value[0].img1366,
        img320: reviewsCards.value[0].img320,
    })
    reviewsCards.value.pop();
    if (counter.value > 0) {
        counter.value--
    } else {
        counter.value = 2;
    }
}

const itemsTo = ref<number>()

window.addEventListener('resize', () => {
    // console.log(window.innerWidth)
    // console.log(window.screen.width)
    if (window.innerWidth < 690) {
        itemsTo.value = 1
    } else {
        itemsTo.value = 2
    }
});


</script>

<template>
    <section id="reviews" class="reviews">
        <div class="container container__reviews">
            <h1 class="reviews__tittle"> Отзывы</h1>
            <ul class="reviews__list flex">
                <li class="reviews__item" v-for="item in reviewsCards" :key="item.id">
                    <picture class="reviews__picture">
                        <source :srcset="item.img1366" class="reviews__img" media="(max-width: 1366px)">
                        <img :src="item.img" alt="reviews.img" class="reviews__img">
                    </picture>
                </li>
            </ul>
            <div class="reviews__points flex">
                <div class="reviews__point" :class="{ reviews__pointExtra: counter === 0 }"></div>
                <div class="reviews__point" :class="{ reviews__pointExtra: counter === 1 }"></div>
                <div class="reviews__point" :class="{ reviews__pointExtra: counter === 2 }"></div>
            </div>
            <div class="reviews__carousel">
                <Carousel :itemsToShow="itemsTo" :wrapAround="true">
                    <Slide class="rewiews__slide" v-for="(card, index) in reviewsCards" :key="index">
                        <picture class="carousel__item">
                            <source :srcset="card.img320" class="reviews__img" media="(max-width: 1100px)">
                            <img :src="card.img" alt="reviews.img" class="reviews__img" height="300px">
                        </picture>
                    </Slide>
                    <template #addons>
                        <!-- <Navigation /> -->
                        <Pagination class="paginTest" />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="reviews__btn-wrap flex">
            <button @click="arrowPrev" class="reviews__arrow-btn  reviews__arrow-prev btn__reset"></button>
            <button @click="arrowNext" class="reviews__arrow-btn reviews__arrow-next btn__reset"></button>
        </div>


    </section>
</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";

.reviews {
    padding-top: 75px;
}

.reviews__tittle {
    margin: 0;
    margin-bottom: 20px;
    font-size: 48px;
    text-align: center;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.reviews__list {
    padding-left: 27px;
}

.reviews__item {
    width: 100%;
}

.reviews__img {
    width: 500px;
    height: 709px;
}

.reviews__btn-wrap {
    position: relative;
    margin: 0 auto;
    max-width: 1500px;
}

.reviews__arrow-btn {
    position: absolute;
    width: 17px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center;
    bottom: 323px;
    color: #4A4A4A;
}

.reviews__arrow-prev {
    background-image: url(../../assets/reviews/arrowLeft.png);
    left: 23px;

}

.reviews__arrow-next {
    background-image: url(../../assets/reviews/arrowRight.png);
    right: 23px;
}

.reviews__points {
    justify-content: center;
    padding-bottom: 10px;
    column-gap: 20px;
}

.reviews__point {
    width: 8px;
    height: 8px;
    background: #949494;
    border-radius: 50%;
}

.reviews__pointExtra {
    position: relative;
    background: #688800;
}

.reviews__pointExtra::after {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #688800;
    opacity: 20%;
    top: -4px;
    left: -4px;
}

.reviews__carousel {
    display: none;
}

@media (max-width: 1366px) {
    .container__reviews {
        margin: 0 auto;
        max-width: 1066px;
    }

    .reviews {
        padding-top: 83px;
    }

    .reviews__item {
        padding-top: 0px;
    }

    .reviews__list {
        padding-left: 27px;
    }

    .reviews__img {
        width: 356px;
        height: 510px;
    }

    .reviews__btn-wrap {
        position: relative;
        margin: 0 auto;
        max-width: 1100px;
    }

    .reviews__arrow-prev {
        bottom: 273px;
        left: -59px;
    }

    .reviews__arrow-next {
        bottom: 273px;
        right: -59px;
    }
}

@media (max-width: 1250px) {
    .reviews__arrow-prev {
        left: -10px;
    }

    .reviews__arrow-next {
        right: -10px;
    }

}

@media (max-width: 1100px) {
    .container__reviews {
        margin: 0 auto;
        max-width: 688px;
    }

    .reviews__list,
    .reviews__btn-wrap,
    .reviews__points {
        display: none;
    }

    .reviews {
        padding-top: 98px;
    }

    .rewiews__slide {
        transform: translateX(176px);

    }

    .reviews__carousel {
        display: block;
    }
}

@media (max-width: 690px) {
    .container__reviews {
        margin: 0 auto;
        max-width: 280px;
    }

    .reviews {
        padding-top: 57px;
    }

    .reviews__tittle {
        margin-bottom: 7px;
        font-size: 32px;
    }

    .reviews__img {
        height: 428px;
    }

    .rewiews__slide {
        transform: translateX(0px);
    }

}
</style>