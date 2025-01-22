<script setup>
import { resCards } from "../stores/resultCards";

const crrResp = resCards();

console.log(crrResp.cardsResp)


</script>


<template>
    <div class="container">
        Привет
        {{ crrResp.cardsResp }}
    </div>
</template>