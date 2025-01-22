<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  propsMovis: { type: String },
  isActive: { type: Boolean },
});
</script>

<template>
  <div class="container">
    <div class="trailerPopup" :class="{ trailerPopupOpen: isActive }">
      <iframe
        class="trailerPopup_iframe"
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${propsMovis}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/global.css";
@import "@/assets/normalize.css";

.trailerPopup {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  min-height: 340px;
  background-color: #ffffff;
  margin: 0 auto;
  z-index: 4;
  visibility: hidden;
}

.trailerPopupOpen {
  visibility: visible;
}
.trailerPopup_iframe {
  padding: 10px 10px;
}
</style>
