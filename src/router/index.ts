import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/CatalogPage.vue"),
      name: "catalog",
      meta: {
        layout: "DefaultLayout",
      },
    },
  ],
});
