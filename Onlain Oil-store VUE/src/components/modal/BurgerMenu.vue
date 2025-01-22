<script setup lang="ts">
import { navMenuItems } from '../../constants'


</script>

<template>
    <nav class="burger__nav">
        <ul class="header__list list__reset flex">
            <li class="header__item" v-for="item in navMenuItems" :key="item.code">
                <a :href="item.link" class="header__link">{{ item.title }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";

.burger__nav {
    width: 200px;
}

.header__list {
    flex-direction: column;
    row-gap: 20px;
}


.header__link {
    font-family: "El Messiri";
    font-size: 18px;
    color: #688800;
    transition: all .3s ease-in-out 0s;
}

.header__link:hover {
    color: #BFD087;
}
</style>