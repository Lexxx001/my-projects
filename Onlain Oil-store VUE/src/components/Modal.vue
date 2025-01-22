<script setup lang="ts">
import { ref } from "vue";

const isActive = ref<boolean>(true)

const emit = defineEmits(["modalClose"]);

const modalClose = () => {
    emit("modalClose")
}

</script>
<template>
    <div>
        <div v-if="isActive" class="wrapperMod ">
            <button @click="modalClose" class="modal_btn btn__reset">
                <img src="../assets/modal/xmodal.svg" alt="img-modal" class="modal__btn-img">
            </button>
            <slot> </slot>
        </div>
        <div @click="modalClose" :class="{ wrapper__mod: isActive }"></div>
    </div>
</template>

<style scoped>
@import "../assets/global.css";
@import "../assets/normalize.css";



.wrapperMod {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    background-color: #ffffff;
    z-index: 3;
    color: black;
    max-height: 100vh;
    overflow-y: auto;
}

.wrapper__mod {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    pointer-events: auto;
    position: fixed;
    z-index: 1;
}

.modal_btn {
    position: absolute;
    right: 55px;
    top: 55px;
    display: flex;
    justify-content: end;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>