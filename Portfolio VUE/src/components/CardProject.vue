<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
    images: { type: Array },
    isActive1: { type: Boolean },
    isActive2: { type: Boolean },
    isActive3: { type: Boolean },
    isActive4: { type: Boolean },
});



</script>

<template>
    <div class="container">
        <div class="cardWrapper">
            <div v-if="isActive1">
                <img v-for="image in props.images[0]" :src="image" alt="image.alt" class="cardWrapper_card" />
            </div>
            <div v-if="isActive2">
                <img v-for="image in props.images[1]" :src="image" alt="image.alt" class="cardWrapper_card" />
            </div>
            <div v-if="isActive3">
                <img v-for="image in props.images[2]" :src="image" alt="image.alt" class="cardWrapper_card" />
            </div>
            <div v-if="isActive4">
                <img v-for="image in props.images[3]" :src="image" alt="image.alt" class="cardWrapper_card" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/global.css";
@import "@/assets/normalize.css";

.cardWrapper {
    margin-bottom: 50px;
}

.cardWrapper_card {
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
}
</style>