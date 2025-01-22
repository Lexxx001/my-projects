<script setup lang="ts">
import { useBasketStore } from "../../stores/basket";

const basketStore = useBasketStore()

</script>

<template>
    <main class="basketMod">
        <h1 class="basketMod__titlle">КОРЗИНА</h1>
        <section class="basketMod">
            <ul class="basketMod__list">
                <li v-for="(item, index) in basketStore.basketArrStore" :key="index" class="basketMod__item flex">
                    <div class="list__wrapper-img flex">
                        <img :src="item.imgOil" alt="oil-img" class="list-img " height="86px">
                    </div>
                    <div class="list__box-center flex">
                        <div class="list__boxTop flex">
                            <div class="list__boxTop-oil"> Масло "{{ item.nameOil }}"</div>
                            <div class="list__boxTop-volume">250&nbsp;мл</div>
                        </div>
                        <div class="list__btns-counter flex">
                            <button @click="item.total > 0 ? item.total-- :
                                basketStore.basketArrStore.splice(index, 1)" class="list__btn-minus btn__reset">
                                -
                            </button>
                            <div class="list__number-counter"> {{ item.total }} </div>
                            <button @click="item.total++" class="list__btn-plus btn__reset"> +
                            </button>
                        </div>
                    </div>

                    <div class="list__box-left flex">
                        <div class="list__price">{{ item.price * item.total }}&nbsp; &nbsp;руб</div>
                        <button @click="basketStore.basketArrStore.splice(index, 1)"
                            class="list__btn-dell btn__reset flex">
                            <img src="../../assets/modal/btnbasketdell.png" alt="btn-dell" class="lisn__btn-icon">
                        </button>
                    </div>
                </li>
            </ul>
        </section>
        <section class="formMod" ref="formMod">
            <form action="#" class="form">
                <div class="form__top flex">
                    <div class="form__client">
                        <div class="form__item form__item-name flex">
                            <label for="name">Имя получателя </label>
                            <input type="text" name="name" id="name" placeholder="Фамилия Имя Отчечство" required />
                        </div>
                        <div class="form__item form__item-tel flex">
                            <label for="tel">Контактный номер телефона </label>
                            <input type="tel" name="phone" id="phone" placeholder="+7" required />
                        </div>
                    </div>
                    <fieldset class="fieldset">
                        <legend class="form__payment-titlle">Способы оплаты</legend>
                        <div class="form__payment-cardpay">
                            <input type="radio" id="cardpay" name="payment" value="cardpay" checked />
                            <label for="cardpay">На карту</label>
                            <span> &nbsp;(номер карты: 123456789) </span>
                        </div>

                        <div class="form__payment-cashpay">
                            <input type="radio" id="cashpay" name="payment" value="cashpay" />
                            <label for="cashpay">При получении</label>
                            <span> &nbsp;(наличными или наложным плотежом) </span>
                        </div>
                    </fieldset>
                </div>
                <div class="form__center">
                    <fieldset class="form__delivery-radiobtn flex">
                        <legend class="form__delivery-titlle">Способы доставки</legend>
                        <div class="form__delivery-pickup">
                            <input type="radio" id="pickup" name="delivery" value="pickup" checked />
                            <label for="pickup">Самовывоз</label>
                            <span> &nbsp;(адрес доставки: ул. Ленина 100) </span>
                        </div>
                        <div class="form__delivery-mail">
                            <input type="radio" id="maile" name="delivery" value="maile" />
                            <label for="maile">Почта</label>

                        </div>
                        <div class="form__delivery-newmail">
                            <input type="radio" id="newmail" name="delivery" value="newmail" />
                            <label for="newmail">Новая почта</label>
                        </div>
                    </fieldset>
                </div>
                <div class="form__bottom">
                    <div class="form__bottom-mail flex">
                        <div class="form__newmail">
                            <div class="form__newmail-titlle">Новая почта:</div>

                            <div class="form__item form__item-newcity flex">
                                <label for="newcity"></label>
                                <input type="text" name="newcity" id="newcity" placeholder="Город" required />
                            </div>
                            <div class="form__item form__item-office flex">
                                <label for="office"></label>
                                <input type="text" name="office" id="office" placeholder="Отделение №" required />
                            </div>
                        </div>
                        <div class="form__mail">
                            <div class="form__mail-titlle">Почта:</div>
                            <div class="form__mail-wrapper flex">
                                <div class="form__item form__item-index flex">
                                    <label for="index"></label>
                                    <input type="text" name="index" id="index" placeholder="49000" required />
                                </div>

                                <div class="form__item form__item-city flex">
                                    <label for="city"></label>
                                    <input type="text" name="city" id="city" placeholder="Город" required />
                                </div>

                                <div class="form__item form__item-street flex">
                                    <label for="street"></label>
                                    <input type="text" name="street" id="street" placeholder="Улица" required />
                                </div>

                                <div class="form__item form__item-house flex">
                                    <label for="house"></label>
                                    <input type="text" name="house" id="house" placeholder="Дом" required />
                                </div>

                                <div class="form__item form__item-other flex">
                                    <label for="other"></label>
                                    <input type="text" name="other" id="other"
                                        placeholder="Дополнительно (подъезд, квартира и т.п.)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form__bottom-comments flex">

                        <div class="form__item form__item-comments flex">
                            <label for="comments"></label>
                            <textarea type="text" name="comments" id="comments" placeholder="Ваш комментарий к заказу">
                                </textarea>
                        </div>
                        <div class="form__bottom-btn">
                            <button action="#" class="form__btn form__btn-send btn__reset">Отправить
                                заказ</button>
                            <button type="reset"
                                @click="basketStore.basketArrStore.splice(0, basketStore.basketArrStore.length)"
                                class="form__btn form__btn-reset btn__reset">Сбросить</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </main>

</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";

.basketMod {
    min-width: 1000px;
    color: #4A4A4A;
}

.basketMod__titlle {
    margin: 0;
    margin-bottom: 10px;
    font-size: 32px;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.basketMod__item {
    justify-content: space-between;
    padding-top: 13px;
    padding-bottom: 30px;
    padding-left: 4px;
    padding-right: 4px;
    align-items: center;
    background-color: #E4EBCE;
}

.basketMod__item:not(:last-child) {
    margin-bottom: 12px;
}

.list__wrapper-img {
    margin-top: 16px;
    width: 168px;
    height: 90px;
    justify-content: center;
    align-items: center;
    border: 1px solid #688800;
    border-radius: 5px;
    background-color: #ffffff;
}

.list__box-center {
    margin-right: 16px;
    flex-direction: column;
    align-items: center;
}

.list__boxTop {
    margin-bottom: 25px;
    justify-content: space-between;
}

.list__box-left {
    margin-top: 17px;
    align-items: center;
}

.list__boxTop-oil {
    margin-right: 30px;
    font-size: 14px;
    color: #688800;
}

.list__boxTop-volume {
    font-size: 12px;
    color: #4A4A4A;
}


.list__btns-counter {
    margin-bottom: 32px;
    width: 128px;
    align-items: center;
    justify-content: space-between;
}

.list__btn-minus,
.list__btn-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 32px;
    height: 32px;
    border: 1px solid #949494;
    border-radius: 8px;
    color: #4A4A4A;
}

.list__number-counter {
    font-size: 24px;
    font-weight: 500;
    color: #688800;
}

.list__price {
    margin-right: 26px;
    font-size: 24px;
    color: #688800;
}

.formMod {
    padding-top: 30px;
}

.form__top {
    margin-bottom: 50px;
    justify-content: space-between;
}

.form__client {
    min-width: 486px;
}

.form__item {
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
}

.form__item-name {
    margin-bottom: 25px;
}

.form__item label {
    font-size: 15px;
    color: #4A4A4A;
}

.form__item input,
.form__item textarea {
    padding-left: 20px;
    height: 34px;
    color: grey;
    border: .2px solid grey;
    border-radius: 5px;
}

.form__item textarea {
    width: 570px;
    height: 100%;
    resize: none;
}

.form__payment-titlle,
.form__delivery-titlle {
    font-size: 15px;
    margin-bottom: 20px;
}

.form__payment-cardpay {
    margin-bottom: 25px;
}

.form__delivery-newmail {
    margin-bottom: 15px;
}

.form__payment-cardpay input,
.form__payment-cashpay input,
.form__delivery-pickup input,
.form__delivery-mail input,
.form__delivery-newmail input {
    margin-right: 10px;
}

.form__delivery-radiobtn {
    column-gap: 190px;
}

.form__bottom-mail {
    width: 100%;
    padding-top: 30px;
    justify-content: space-between;
}

.form__newmail-titlle {
    margin-bottom: 19px;
}

.form__item-newcity {
    margin-bottom: 20px;
}

.form__newmail {
    min-width: 486px;
}

.form__mail {
    width: 360px;
}

.form__mail-titlle {
    margin-bottom: 20px;
}

.form__mail-wrapper {
    flex-wrap: wrap;
    row-gap: 14px;
}

.form__item-index {
    margin-right: auto;
    width: 127px;
}

.form__item-city,
.form__item-house {
    width: 217px;
}

.form__item-street {
    margin-right: auto;
    width: 217px;
}

.form__item-house {
    width: 127px;
}

.form__bottom-comments {
    padding-top: 30px;
    justify-content: space-between;
}

.form__item-comments input {
    max-width: 600px;
    min-height: 105px;
}

.form__btn {
    display: flex;
    align-items: center;
    padding-top: 2px;
    justify-content: center;
    margin: 0;
    width: 360px;
    height: 48px;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 500;
    transition: all .3s ease-in-out 0s;
}

.form__btn-send {
    margin-bottom: 20px;
    border: 1px solid #688800;
    color: #688800;
}

.form__btn-reset {
    border: 1px solid #949494;
    color: #949494;
}

.form__btn:hover {
    background-image: linear-gradient(to right, #97C20B, #536614);
    color: #ffffff;
}

@media (max-width: 1366px) {
    .basketMod {
        min-width: 800px;
        color: #4A4A4A;
    }

    .form__newmail {
        min-width: 430px;
        margin-right: 30px;
    }

    .form__item textarea {
        width: 400px;
    }

    .form__client {
        min-width: 430px;
        margin-right: 30px;
    }

    .form__delivery-radiobtn {
        column-gap: 130px;
    }
}

@media (max-width: 1000px) {

    .form__mail {
        width: 325px;
    }

    .basketMod {
        min-width: 650px;
        color: #4A4A4A;
    }

    .form__newmail {
        min-width: 310px;
        margin-right: 15px;
    }

    .form__item textarea {
        width: 270px;
    }

    .form__client {
        min-width: 310px;
        margin-right: 15px;
    }

    .form__delivery-radiobtn {
        column-gap: 80px;
    }

    .form__btn {
        width: 325px;
    }

    .form__item-index {
        width: 100px;
    }

    .form__item-street {
        margin-right: auto;
        width: 190px;
    }

    .fieldset {
        width: 250px;
    }

    .form__delivery-radiobtn {
        column-gap: 50px;
    }

    @media (max-width: 768px) {

        .basketMod {
        min-width: 650px;
       
    }
    }

}
</style>