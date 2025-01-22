<script setup>
import { ref } from "vue";
import { resultCards } from "../stores/resultCards";


const cardsResult = resultCards();
const cards = ref(cardsResult.cardsStore)
const filterObjTrue = ref([])
const filterObjFalse = ref([])

const resultCorrectObj = ref([])

cards.value.forEach((el) => resultCorrectObj.value.push(el.resultCorrect))

filterObjTrue.value = resultCorrectObj.value.filter(cardObj => cardObj == true);
filterObjFalse.value = resultCorrectObj.value.filter(cardObj => cardObj == false);

const lengthObj = resultCorrectObj.value.length
const lengthTrue = filterObjTrue.value.length
const lengthFalse = filterObjFalse.value.length


</script>

<template>

    <div class="block1 block" v-if="lengthObj === lengthTrue">
        <h1 class="main_title">
            Поздравляем!
        </h1>
        <p class="desr">
            Вы правильно ответили на все вопросы.
            <br> Вы действительно разбираетесь в IT.
        </p>
    </div>
    <div class="block2 block" v-if="lengthObj !== lengthFalse">
        <h1 class="main_title">
            Хороший результат!
        </h1>
        <p class="desr">
            Вы ответили правильно на {{ lengthTrue }} вопросов.
            <br>Так держать!
        </p>
    </div>
    <div class="block3 block" v-if="lengthObj === lengthFalse">
        <h1 class="main_title">
            Упс:!
        </h1>
        <p class="desr">
            Вы неправильно ответили на все вопросы.
            <br> Нужно подучить теорию.
        </p>
    </div>

    <div class="cards" v-for="card in cards" :key="card" :class="{ cards_dinamic: card.resultCorrect }">
        <h2 class="card_title">{{ card.resultName }}</h2>
        <p class="card_desr">{{ card.resultAnswers }}</p>
    </div>

    <button class="button" v-if="lengthObj !== lengthTrue" @click="again">Пройти ещё раз</button>

</template>


<style scoped>
@import "../assets/normalize.css";
@import "../assets/global.css";


.cards {
    margin-bottom: 20px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 820px;
    font-family: 'Montserrat';
    background-color: #FFE0E0;
    border-radius: 20px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  
}

.card_title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat';
}

.card_desr {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat';
}

.main_title {
    margin: 0;
    margin-bottom: 28px;
    font-size: 48px;
    font-weight: 800;
    font-family: 'Montserrat';
}

.desr {
    margin: 0;
    margin-bottom: 46px;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Montserrat';

}

.cards_dinamic {
    background-color: #E5F5E1;
}

.button {
    margin-top: 40px;
    padding: 16px 30px;
    display: flex;
    justify-self: center;
    max-width: 220px;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Montserrat';
    background-color: #3300FF;
    color: white;
    border-radius: 10px;
    border: none;
}

.block {
    margin-top: 35px;
}
</style>