<script setup lang="ts">


</script>

<template>
    <div class="contatsMod">
        <h1 class="contatsMod__title">Написать нам</h1>
        <form action="#" class="form ">
            <div class="form__item form__item-name flex">
                <label for="name">Имя </label>
                <input type="text" name="name" id="name" placeholder="Фамилия Имя Отчечство" required />
            </div>
            <div class="form__item form__item-tel flex">
                <label for="tel">Контактный номер телефона </label>
                <input type="tel" name="phone" id="phone" placeholder="+7" required />
            </div>
            <div class="form__item form__item-comments flex">
                <label for="comments"></label>
                <textarea type="text" name="comments" id="comments" placeholder="Текст комментария">
                    </textarea>
            </div>
            <button action="#" class="form__btn form__btn-send btn__reset">Отправить</button>
            <div class="contatsMod__img">
                <img src="../../assets/modalContats/modalContats.png" alt="img-modal">
            </div>
        </form>
    </div>
</template>

<style scoped>
.contatsMod {
    width: 498px;
}

.contatsMod__title {
    margin: 0;
    margin-bottom: 25px;
    font-size: 32px;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.form {
    position: relative;
    width: 475px;
    padding-right: 40px;
}

.form__item {
    flex-direction: column;
    row-gap: 6px;
    width: 100%;
}

.form__item label {
    font-size: 15px;
    color: #4A4A4A;
}

.form__item input,
.form__item textarea {
    width: 100%;
    padding-left: 20px;
    height: 34px;
    color: grey;
    border: .2px solid grey;
    border-radius: 5px;
}

.form__item textarea {
    min-height: 124px;
    resize: none;
}

.form__item-name {
    margin-bottom: 20px;
}

.form__item-tel {
    margin-bottom: 25px;
}

.form__item-comments {
    margin-bottom: 30px;
}


.form__item-comments input {
    min-height: 124px;
}

.form__btn-send {
    display: block;
    margin: 0 auto;
    width: 222px;
    height: 40px;
    font-size: 18px;
    border-radius: 50px;
    cursor: pointer;
    transition: all .3s ease-in-out 0s;
    border: 1px solid #688800;
    color: #688800;
}

.form__btn-send:hover {
    background-image: linear-gradient(to right, #97C20B, #536614);
    color: #ffffff;
}

.contatsMod__img {
    position: absolute;
    top: 290px;
    left: -25px;
}

@media (max-width: 600px) {

    .contatsMod {
        padding-top: 50px;
        width: 230px;
    }

    .form {
        width: 246px;
        padding-right: 1px;
        padding-left: 1px;
    }

    .form {
        margin-bottom: 50px;
    }

    .contatsMod__img {
        top: 353px;
    }
}
</style>