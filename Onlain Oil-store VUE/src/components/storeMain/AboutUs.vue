<script lang="ts" setup>

</script>

<template>
    <section id="aboutUs" class="aboutUs">
        <div class="container container__aboutUs">
            <h1 class="aboutUs__titlle">О нас</h1>
            <div class="aboutUs__we flex">
                <picture class="aboutUs__we-imgwrap">
                    <source srcset="/src/assets/aboutUS/aboutUswe320.png" media="(max-width: 690px)" width="100%"
                        height="214px">
                    <source srcset="/src/assets/aboutUS/aboutUswe768.png" media="(max-width: 1100px)" width="448px"
                        height="314px">
                    <source srcset="/src/assets/aboutUS/aboutUswe1366.png" media="(max-width: 1500px)" width="433px"
                        height="314px">
                    <img src="/src/assets/aboutUS/aboutUswe.png" width="528px" height="333px" alt="AboutUs-img"
                        class="aboutUs__we-img">
                </picture>
                <div class="aboutUs__we-description">
                    <h2 class="aboutUs__title aboutUs__we-titlle">Кто мы</h2>
                    <div class="aboutUs__description">
                        <p> Мы пара: Таня и Рома и мы создатели пряного оливкового масла R.olio.</p>
                        <p> Предыстория:</p>
                        Так сложилось в нашей паре, что готовит у нас Рома, он очень увлечен кулинарией и каждый раз
                        придумывает что-то новенькое.
                        <p>
                            Накануне прошлого Нового года, мы готовили подарки нашим
                            друзьям и родственникам. Нам захотелось к
                        </p>
                        подаркам добавить что-то необычное, от себя.
                        <p>
                            И к нам пришла идея, Рома готовил вкуснейшее пряное оливковое
                            масло для своих рецептов, добавлял
                        </p>
                        <p>
                            розмарин, тимьян, чеснок, разные виды перцев...каждый раз получался новый неповторимый вкус.
                        </p>
                    </div>
                </div>
            </div>

            <div class="aboutUs_weDo flex">
                <div class="aboutUs_weDo-description">
                    <h2 class="aboutUs__title description-titlle">Что мы делаем</h2>
                    <div class="aboutUs__description aboutUs__WeDo-description">
                        <p>
                            И мы решили сделать такое масло, как добавление к подарку. Надо сказать, что наши близкие
                            оценили
                        </p>
                        <p>
                            презент и просили снова и снова сделать им такое масло.</p>
                        И появилась идея: почему бы не попробовать запустить такое масло в продажу?
                        Рома долго выверял рецепты, я разрабатывала дизайн этикеток и
                        искала поставщиков.
                        <p> И вот мы готовы представить его вам!</p>
                        <p>
                            Мы старались сделать наше масло максимально доступным, при этом не потеряв в качестве.
                            Стоимость
                            бутылки(250мл) - всего 115 руб.
                        </p>
                    </div>
                </div>
                <picture class="aboutUs_weDo-imgwrap">
                    <source srcset="/src/assets/aboutUS/aboutUsdo320.png" media="(max-width: 690px)" width="100%">
                    <source srcset="/src/assets/aboutUS/aboutUsdo768.png" media="(max-width: 1100px)" width="448px">
                    <source srcset="/src/assets/aboutUS/aboutUsdo1366.png" media="(max-width: 1500px)" width="433px">
                    <img src="/src/assets/aboutUS/aboutUsdo.png" width="528px" height="333px" alt="AboutUs-img"
                        class="aboutUs__weDo-img">
                </picture>

            </div>

        </div>
    </section>
</template>

<style scoped>
@import "../../assets/global.css";
@import "../../assets/normalize.css";

.aboutUs {
    padding-top: 91px;
}

.aboutUs__titlle {
    margin: 0;
    margin-bottom: 30px;
    font-size: 48px;
    text-align: center;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.aboutUs__we-description {
    margin-left: 370px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 55px;
    width: 850px;
    background-color: #ffffff;
    filter: drop-shadow(10px 10px 35px rgba(190, 191, 183, 0.1));
    z-index: 0;
}

.aboutUs__we {
    position: relative;
    margin-bottom: 30px;
    padding-top: 54px;
    min-height: 356px;
}

.aboutUs__we::before {
    content: '';
    width: 195px;
    height: 357px;
    background-color: #688800;
    opacity: 40%;
    z-index: -1;
}

.aboutUs__we-imgwrap {
    position: absolute;
    top: 6px;
    left: 83px;
}

.aboutUs__title {
    margin-bottom: 20px;
    font-size: 32px;
    font-family: 'Amatic SC Regular';
    font-weight: normal;
}

.aboutUs__description {
    font-size: 16px;
    line-height: 24px;
    color: #4A4A4A;
    white-space: normal;
}

.aboutUs__line-break {
    display: block;
    white-space: pre-line;
}

.aboutUs_weDo {
    position: relative;
    padding-top: 54px;
    min-height: 330px;
}

.aboutUs_weDo::after {
    content: '';
    width: 195px;
    height: auto;
    background-color: #688800;
    opacity: 40%;
    z-index: -5;
}

.aboutUs_weDo-description {
    margin-right: auto;
    max-width: 813px;
    padding-left: 50px;
    padding-right: 60px;
    padding-top: 50px;
    background-color: #ffffff;
    filter: drop-shadow(10px 10px 35px rgba(190, 191, 183, 0.1));
}

.aboutUs_weDo-imgwrap {
    position: absolute;
    top: 0px;
    left: 885px;
    z-index: -1;
}

.aboutUs_weDo-back {
    min-width: 195px;
    background-color: #688800;
    opacity: 40%;
    z-index: -1;
}

@media (max-width: 1500px) {
    .container__aboutUs {
        margin: 0 auto;
        max-width: 1066px;
    }

    .aboutUs {
        padding-top: 77px;
    }

    .aboutUs__we::before {
        width: 231px;
    }

    .aboutUs__we-description {
        margin-left: 305px;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 30px;
    }

    .aboutUs_weDo-description {
        max-width: 561px;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 36px;
    }

    .aboutUs_weDo-imgwrap {
        top: 12px;
        left: 548px;
    }

    .aboutUs_weDo::after {
        width: 154px;
        height: auto;
    }
}

@media (max-width: 1100px) {
    .container__aboutUs {
        margin: 0 auto;
        max-width: 688px;

    }

    .aboutUs {
        padding-top: 122px;
    }

    .aboutUs__we {
        flex-wrap: wrap;
    }

    .aboutUs__we-imgwrap {
        position: absolute;
        top: 11px;
        left: 119px;
    }

    .aboutUs__we-description {
        margin-top: 227px;
        margin-left: 64px;
    }

    .aboutUs__we::before {
        position: absolute;
    }

    .aboutUs_weDo-imgwrap {
        top: 12px;
        left: 121px;
    }

    .aboutUs_weDo-description {
        max-width: 575px;
        margin-top: 227px;
    }

    .aboutUs_weDo::after {
        position: absolute;
        width: 209px;
        height: 333px;
        top: 62px;
        left: 480px;
    }
}

@media (max-width: 690px) {
    .container__aboutUs {
        margin: 0 auto;
        max-width: 280px;
    }

    .aboutUs__titlle {
        margin-bottom: 19px;
        font-size: 36px;
    }

    .aboutUs {
        padding-top: 91px;
    }

    .aboutUs__we {
        padding-top: 0;
        margin-bottom: 30px;
    }

    .aboutUs__we-imgwrap {
        position: static;
    }

    .aboutUs__we::before {
        position: absolute;
        width: 319px;
        height: 190px;
        top: 38px;
        left: -20px;
    }

    .aboutUs__we-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
        padding-top: 20px;
        margin-top: 10px;
    }

    .aboutUs__title {
        margin-bottom: 7px;
        font-size: 24px;

    }

    .aboutUs__description {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
    }

    .aboutUs_weDo {
        flex-wrap: wrap;
        flex-direction: column-reverse;
        padding: 0;
        text-align: center;
    }


    .aboutUs_weDo-imgwrap {
        position: static;
        width: 100%;
        z-index: -1;
    }

    .aboutUs_weDo::after {
        position: absolute;
        width: 319px;
        height: 190px;
        top: 38px;
        left: -20px;
    }

    .aboutUs_weDo-description {
        padding: 0;
        margin: 0;
        margin-top: 20px;
        padding-top: 11px;
    }

    .aboutUs__WeDo-description {
        line-height: 24px;
    }

}
</style>