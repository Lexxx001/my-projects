import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/genre",
      name: "genre",
      component: () => import("@/views/Genre.vue"),
    },
    {
      path: "/genre",
      name: "genre",
      component: () => import("@/views/Genre.vue"),
    },
    {
      path: "/genrelist",
      name: "genreList",
      component: () => import("@/views/GenreList.vue"),
    },

    {
      path: "/filmcard",
      name: "filmcard",
      component: () => import("@/views/FilmCard.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("@/views/AccountList.vue"),
      children: [
        {
          path: "/accset",
          name: "accset",
          component: () => import("@/views/AccSet.vue"),
        },
        {
          path: "/accfm",
          name: "accfm",
          component: () => import("@/views/AccFilm.vue"),
        },
        {
          path: "/account",
          redirect: "/accfm",
        },
      ],
    },
  ],
});

export default router;
