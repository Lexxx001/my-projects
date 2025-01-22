import { ref } from "vue";

export const navMenuItems = [
  {
    title: "Масло",
    link: "#Oil",
    code: "about",
  },
  {
    title: "О нас",
    link: "#aboutUs",
    code: "about",
  },
  {
    title: "Отзывы",
    link: "#reviews",
    code: "about",
  },
  {
    title: "Оплата и доставка",
    link: "#DeliveryAndPay",
    code: "about",
  },
  {
    title: "Контакты",
    link: "#contacts",
    code: "about",
  },
];

export const contactMenu = [
  {
    id: 1,
    img: "/src/assets/contacts/contphones.svg",
    titlle: "+38 (066) 11-43-558",
    path: "#",
  },
  {
    id: 2,
    img: "/src/assets/contacts/contfacebook.svg",
    titlle: "https://www.facebook.com/r.olio8/",
    path: "#",
  },
  {
    id: 3,
    img: "/src/assets/contacts/continsta.svg",
    titlle: "https://www.instagram.com/r.olio_/",
    path: "#",
  },
  {
    id: 4,
    img: "/src/assets/contacts/contteleg.svg",
    titlle: "https://t.me/r_olio",
    path: "#",
  },
  {
    id: 5,
    img: "/src/assets/contacts/contviber.svg",
    titlle: "+38 (066) 11-43-558",
    path: "#",
  },
];

export const offerMenu = ref([
  {
    id: "0",
    img: "/src/assets/offer/offerSalad.png",
    img1366: "/src/assets/offer/offerSalad1366.png",
    img768: "/src/assets/offer/offerSalad768.png",
    img320: "/src/assets/offer/offerSalad320.png",
    imgOil: "src/assets/oil/oilSalad.png",
    imgOil1366: "/src/assets/oil/oilSalad1366.png",
    nameOil: "Для салата",
    price: 350,
    color: "#688800",
    total: 0,
    totalOil: 0,
    descrOil:
      "Название говорит само за себя. Это идеальная заправка, которая даже скучной и привычной капусте придаст неповторимый вкус и аромат.",
    subdescrOil:
      "Состав: оливковое масло холодного отжима, розмарин, тимьян, базилик, орегано, чеснок, смесь из 5 перцев.",
  },
  {
    id: "1",
    img: "/src/assets/offer/offerItalian.png",
    img1366: "/src/assets/offer/offerItalian1366.png",
    img768: "/src/assets/offer/offerItalian768.png",
    img320: "/src/assets/offer/offerItalian320.png",
    imgOil: "src/assets/oil/oilItalian.png",
    imgOil1366: "/src/assets/oil/oilItalian1366.png",
    nameOil: "Итальянское",
    price: 270,
    color: "#009246",
    total: 0,
    totalOil: 0,
    descrOil:
      "Добавит ноток Италии в любое ваше блюдо. Паста, ризотто, пицца, салаты - его везде можно использовать. ",
    subdescrOil:
      "Состав: оливковое масло холодного отжима, чеснок, вяленые томаты, базилик, орегано, майоран, смесь перцев.",
  },
  {
    id: "2",
    img: "/src/assets/offer/offerMeat.png",
    img1366: "/src/assets/offer/offerMeat1366.png",
    img768: "/src/assets/offer/offerMeat768.png",
    img320: "/src/assets/offer/offerMeat320.png",
    imgOil: "/src/assets/oil/oilMeat.png",
    imgOil1366: "/src/assets/oil/oilMeat1366.png",
    nameOil: "Для мяса",
    price: 250,
    color: "#D73A31",
    total: 0,
    totalOil: 0,
    descrOil:
      "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",
    subdescrOil:
      "Состав: оливковое масло холодного отжима, чеснок, паприку, кориандр, смесь перцев, розмарин, тимьян, перец чили.",
  },
  {
    id: "3",
    img: "/src/assets/offer/offerEast.png",
    img1366: "/src/assets/offer/offerEast1366.png",
    img768: "/src/assets/offer/offerEast768.png",
    img320: "/src/assets/offer/offerEast320.png",
    imgOil: "/src/assets/oil/oilEast.png",
    imgOil1366: "/src/assets/oil/oilEast1366.png",
    nameOil: "Восточное",
    price: 330,
    color: "#E67F10",
    total: 0,
    totalOil: 0,
    descrOil:
      "Oтлично подойдёт для блюд среднеазиатской кухни: шурпа, плов, лагман с этим маслом приобретут традиционные нотки Средней Азии.",
    subdescrOil:
      "Состав: оливковое масло холодного отжима, перец чили, зира, куркума, чеснок, смесь перцев.",
  },
]);
