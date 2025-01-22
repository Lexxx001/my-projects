import { defineStore } from "pinia";

export const cards = defineStore("genre", () => {
  const cards = [
    {
      question: "Что такое операционная система?",
      answers: [
        {
          name: "Это просто программа на компьютере, как и другие - Word и Chrome",
          id: "1",
          correct: false,
        },
        {
          name: "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
          id: "2",
          correct: false,
        },
        {
          name: "Это набор взаимосвязанных программ,осуществляющих управление компьютером и взаимодействие  с пользователем",
          id: "3",

          correct: true,
        },
        {
          name: "Нет такого понятия,есть понятие 'файловая система",
          id: "4",
          correct: false,
        },
      ],
    },
    {
      question: "Является ли Android операционной системой?",
      answers: [
        {
          name: "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
          id: "1",
          correct: true,
        },
        {
          name: "Нет, операционные системы бывают только для ПК",
          id: "2",
          correct: false,
        },
        {
          name: "Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные",
          id: "3",
          correct: false,
        },
        {
          name: "Это домашня страничка в настройках вашего браузера",
          id: "4",
          correct: false,
        },
      ],
    },
    {
      question: "Что такое процессор компьютера?",
      answers: [
        {
          name: "Это блок, внутри которого находится дисковод и много разьемов для монитора ",
          id: "1",
          correct: false,
        },
        {
          name: "Это общее название всех комплектующих компьютера",
          id: "2",
          correct: false,
        },
        {
          name: "Это элемент компьютера, с помощью которого обрабатывается информация, находящиеся как собственной памяти, так и дугих устройствах",
          id: "3",
          correct: true,
        },
        {
          name: "Это суммарный показатель вычсилительной мощности компьютера, например 2,7 ГГц",
          id: "4",
          correct: false,
        },
      ],
    },
    {
      question: "Какие бывают разрядности у современных процессоров?",
      answers: [
        {
          name: "32 и 64 бита",
          id: "1",
          correct: true,
        },
        {
          name: "12 и 32 бита",
          id: "2",
          correct: false,
        },
        {
          name: "15 и 32 бита",
          id: "3",
          correct: false,
        },
        {
          name: "84 и 64 бита",
          id: "4",
          correct: false,
        },
      ],
    },
    {
      question: "Какой тип процессора чаще всего используют мобильные девайсы?",
      answers: [
        {
          name: "iOS использует Intel, остальные используют AMD",
          id: "1",
          correct: false,
        },
        {
          name: "Чаще всего используют Intel",
          id: "2",
          correct: false,
        },
        {
          name: "Чаще всего используют AMD",
          id: "3",
          correct: false,
        },
        {
          name: "Чаще всего используют ARM",
          id: "4",
          correct: true,
        },
      ],
    },
    {
      question: "Для чего компьютеру нужна RAM?",
      answers: [
        {
          name: "Для быстрого доступа к данным",
          id: "1",
          correct: true,
        },
        {
          name: "Для долгосрочного хранения данных",
          id: "2",
          correct: false,
        },
        {
          name: "Для правильной фрагментации памяти",
          id: "3",
          correct: false,
        },
        {
          name: "Для дефрагментации данных",
          id: "4",
          correct: false,
        },
      ],
    },
    {
      question: "Чем отличается HDD от SSD?",
      answers: [
        {
          name: "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD.HDD работает быстрее",
          id: "1",
          correct: false,
        },
        {
          name: "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
          id: "2",
          correct: false,
        },
        {
          name: "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
          id: "3",
          correct: false,
        },
        {
          name: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
          id: "4",
          correct: true,
        },
      ],
    },
    {
      question: "Как отличаются между собой USB?",
      answers: [
        {
          name: "Бывают только USB 2.0 и 3.2",
          id: "1",
          correct: false,
        },
        {
          name: "Бывают только micro-USB и mini-USB",
          id: "2",
          correct: false,
        },
        {
          name: "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).",
          id: "3",
          correct: false,
        },
        {
          name: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
          id: "4",
          correct: true,
        },
      ],
    },
    {
      question: "Какой файловой системы не существует?",
      answers: [
        {
          name: "Fat",
          id: "1",
          correct: false,
        },
        {
          name: "NTFS",
          id: "2",
          correct: false,
        },
        {
          name: "APFS",
          id: "3",
          correct: false,
        },
        {
          name: "BolSFS",
          id: "4",
          correct: true,
        },
      ],
    },
  ];
  return {
    cards,
  };
});
