<script setup>
import { ref, toRefs } from "vue";
import { cards } from "../stores/cards";
import { resultCards } from "../stores/resultCards";

const selected = ref(null);
const cardsStore = cards();
const props = defineProps(['question'])
const cardsResult = resultCards();
const currentCard = ref(cardsResult.cardsStore.length)
const { question } = toRefs(props)
const progress = ref(resultCards());

const clickRadioButton = (answer) => {

  if (selected.value === null) {
    console.log(selected.value)

    selected.value = answer;
    console.log(selected.value)
    setTimeout(() => {
      emit("answer", answer)
    }, 1000);
  }

  progress.value = 100 / cardsStore.cards.length * (cardsResult.cardsStore.length + 1);
  currentCard.value = cardsResult.cardsStore.length + 1
}

const emit = defineEmits(["answer"]);

</script>

<template>
  <h1 class="main_title">Тестирование</h1>
  <div class="main_container" v-if="question">
    <h2 class="question_title">{{ question.question }}</h2>
    <ul class="question__list">
      <li class="question__item" v-for="answer in question.answers" :key="answer">
        <label class="question__resp-label">
          <input class="question__respInput" type="radio" name="btn" />{{ answer.name }}
          <span class="question__resp-custom" :class="{ question__respActive: selected?.id === answer.id }"
            :id="answer.id" @click="clickRadioButton(answer)">
          </span>
        </label>
      </li>
    </ul>
  </div>
  <div class="progress__bar">
    <div class="progress__bar-top">
      <div class="progress__bar-start">0</div>
      <div class="progress__bar-finish">{{ cardsStore.cards.length }}</div>
    </div>
    <div class="progress__bar-line">
      <div class="progress__bar-line1"></div>

      <div class="progress__bar-line2" :style="`width:${progress}%`"><span v-if="currentCard !== 0">{{ currentCard
          }}</span></div>
    </div>
  </div>
</template>

<style scoped>
.main_container {
  padding: 44px 40px;
  width: 810px;
  min-height: 445px;
  background-color: #f7f7f7;
  border-radius: 20px;
}

.main_title {
  margin: 0;
  margin-top: 38px;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 800;
  font-family: 'Montserrat';
}

.question__list {

  padding: 0;
  display: flex;
  flex-direction: column;
}

.question_title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.question__respInput {
  display: flex;
  align-self: flex-start;
  font-size: 24px;
  outline: 0;
}

.question__list {
  display: flex;
  gap: 20px;
  list-style: none;
}

.question__resp-label {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50%;
  padding: 3px;
}

.question__resp-custom,
.question__resp-custom::before {
  border-radius: 50%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.question__resp-custom {
  position: absolute;
  top: 2px;
  display: block;
  width: 20px;
  height: 20px;
  background-color: #F7F7F7;
}



.question__resp-custom::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 1px solid black;
}

.question__respActive {
  background-color: #3300FF;
  transform: scale(1.1);
}

.question__respActive::before {
  border-color: transparent;
  border: 0;

}

.progress__bar {
  padding-top: 20px;
}

.progress__bar-line {
  position: relative;
}

.progress__bar-line1 {
  width: 890px;
  height: 12px;

  background-color: #F7F7F7;
  border-radius: 5px;
  z-index: -1;

}

.progress__bar-line2 {

  position: absolute;

  height: 12px;
  top: 0;
  background-color: #3300FF;
  border-radius: 5px;
  z-index: 1;
}

.progress__bar-line2 span {
  position: absolute;
  top: 12px;
  right: 0;
}

.progress__bar-top {

  display: flex;
  justify-content: space-between;
  font-size: 16px;

  font-weight: 700;
  font-family: 'Montserrat';
}
</style>
