<script lang="ts" setup>
import { ref } from "vue";
import { contactMenu } from '../../constants'
import Modal from '../Modal.vue'
import Feedback from "../modal/Feedback.vue"

const isOpenModal = ref<boolean>(false)
const contactsBtnOpen = () => {
    isOpenModal.value = true
}
</script>

<template v-slot="contacts">
    <section id="contacts" class="contacts">
        <div class="container contacts__container">
            <h1 class="contacts__titlle">Контакты</h1>
            <div class="contacts__wrapper flex">
                <picture class="contacts__picture">
                    <source srcset="/src/assets/contacts/contactsimg320.png" media="(max-width: 690px)">
                    <source srcset="/src/assets/contacts/contactsimg768.png" media="(max-width: 1100px)">
                    <source srcset="/src/assets/contacts/contactsimg1366.png" media="(max-width: 1366px)">
                    <img src="/src/assets/contacts/contactsimg.png" alt="contacts.img" class="contacts__img">
                </picture>
                <div class="contacts__box">
                    <ul class="contacts__list">
                        <li class="contacts__item " v-for="item in contactMenu" :key="item.id">
                            <a href="" class="contacts__link flex">
                                <img :src="item.img" alt="contacts.img" class="contact__icon">
                                <p class="contacts__descr">{{ item.titlle }}</p>
                            </a>
                        </li>
                    </ul>
                    <button @click="contactsBtnOpen" class="contacts__btn btn__reset">НАПИСАТЬ НАМ </button>
                </div>
            </div>

        </div>
    </section>
    <modal v-if="isOpenModal" @modalClose="isOpenModal = false">
        <Feedback />
    </modal>

</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";

.contacts {
    padding-bottom: 69px;
}

.contacts__titlle {
    margin: 0;
    margin-bottom: 70px;
    font-size: 48px;
    text-align: center;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.contacts__wrapper::before {
    content: '';
    display: block;
    margin-left: 128px;
    width: 195px;
    height: 472px;
    background-color: #688800;
    opacity: 40%;
    z-index: -1;
}

.contacts__wrapper {
    position: relative;
}

.contacts__img {
    position: absolute;
    left: 253px;
    top: -33px;
}

.contacts__box {
    display: flex;
    flex-direction: column;
    margin-left: 627px;
    padding-top: 55px;
    padding-left: 19px;
    align-items: center;
    min-width: 377px;
    min-height: 424px;
    background-color: #ffffff;
    filter: drop-shadow(10px 10px 35px rgba(190, 191, 183, 0.1));
}

.contacts__list {
    margin-bottom: 31px;
}

.contacts__item:not(:last-child) {
    margin-bottom: 32px;
}

.contacts__link {
    align-items: center;
    column-gap: 20px;
}

.contacts__descr {
    font-size: 16px;
    color: #4A4A4A;
    font-weight: normal;
}

.contacts__btn {
    width: 222px;
    height: 40px;
    padding-top: 2px;
    font-size: 18px;
    border-radius: 50px;
    cursor: pointer;
    transition: all .3s ease-in-out 0s;
    border: 1px solid #688800;
    color: #688800;
}

.contacts__btn:hover {
    background-image: linear-gradient(to right, #97C20B, #536614);
    color: #ffffff;
}

.contact__icon svg path {
    fill: red;
}

.contact__icon:hover {
    fill: rgb(26, 255, 0);
}

@media (max-width: 1366px) {
    .contacts__container {
        margin: 0 auto;
        max-width: 1066px;
    }

    .contacts {
        padding-bottom: 48px;
    }

    .contacts__titlle {
        margin-bottom: 67px;
    }

    .contacts__box {
        margin-left: 354px;
        padding-top: 31px;
        padding-left: 0;
        padding-right: 1px;
        min-width: 377px;
        min-height: 424px;
    }

    .contacts__img {
        left: 185px;
    }

    .contacts__wrapper::before {
        margin-left: 92px;
        width: 153px;
        height: 424px;
    }
}

@media (max-width: 1100px) {
    .contacts__container {
        margin: 0 auto;
        max-width: 688px;
    }

    .contacts__wrapper::before {
        margin-left: 0;
    }

    .contacts {
        padding-bottom: 283px;
    }

    .contacts__titlle {
        margin-bottom: 84px;
    }

    .contacts__img {
        left: 121px;
        top: -49px;
    }

    .contacts__box {
        position: absolute;
        padding-top: 39px;
        padding-left: 1px;
        left: -207px;
        top: 227px;
        min-width: 393px;
        min-height: 400px;
    }

    .contacts__item:not(:last-child) {
        margin-bottom: 22px;
    }

}

@media (max-width: 690px) {
    .contacts__container {
        margin: 0 auto;
        max-width: 280px;
    }

    .contacts__titlle {
        font-size: 32px;
        margin-bottom: 16px;
    }

    .contacts {
        padding-top: 41px;
        padding-bottom: 350px;
    }

    .contacts__img {
        position: static;
    }

    .contacts__wrapper::before {
        position: absolute;
        width: 320px;
        height: 280px;
        left: -20px;
        top: 39px;
    }

    .contacts__box {
        padding-top: 11px;
        padding-left: 1px;
        left: -364px;
        top: 229px;
        min-width: 298px;
        min-height: 299px;
    }

    .contact__icon {
        width: 24px;
        height: 24px;
    }

    .contacts__descr {
        font-size: 14px;
    }

    .contacts__item:not(:last-child) {
        margin-bottom: 24px;
    }

    .contacts__list {
        margin-bottom: 14px;
    }

    .contacts__btn {
        height: 38px;
    }
}
</style>
