<script setup>
import { onMounted, ref } from "vue";
import CardQuestion from "./components/CardQuestion.vue";
import AnswersContainer from "./components/AnswersContainer.vue";
import { cards } from "./stores/cards";
import { resultCards } from "./stores/resultCards";

const cardsResult = resultCards();
const cardsStore = cards();

const currentQuestionIndex = ref(null);
const questionsLeft = ref([]);
const showAnswers = ref(false);
const newCards = ref([]);
cardsResult.cardsStore = newCards;

onMounted(() => {
  questionsLeft.value = cardsStore.cards.map((_, index) => index);
  pickQuestion();
});

const nextQuestion = (answer) => {
  const question = cardsStore.cards[currentQuestionIndex.value];
  const selectedAnswer = question.answers[answer.id - 1];

  const obj = {
    resultName: question.question,
    resultAnswers: selectedAnswer.name,
    resultCorrect: selectedAnswer.correct,
  };
  newCards.value.push(obj);

  questionsLeft.value = questionsLeft.value.filter(
    (index) => index !== currentQuestionIndex.value
  );

  if (questionsLeft.value.length) {
    pickQuestion();
  } else {
    showAnswers.value = true;
  }
};

const pickQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questionsLeft.value.length);
  currentQuestionIndex.value = questionsLeft.value[randomIndex];
};
</script>

<template>
  <div class="container">
    <CardQuestion v-if="cardsStore.cards.length && !showAnswers" :key="currentQuestionIndex"
      :question="cardsStore.cards[currentQuestionIndex]" @answer="nextQuestion" />
    <AnswersContainer v-else />
  </div>
</template>

<style scoped>
@import "./assets/global.css";
@import "./assets/normalize.css";
</style>
