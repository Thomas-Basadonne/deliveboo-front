import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/GuestComponents/HomePage.vue";
import RestaurantIndex from "../components/GuestComponents/RestaurantIndex.vue";
import Menu from "../components/GuestComponents/Menu.vue";
import RestaurantCard from "../components/GuestComponents/RestaurantCard.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/restaurants",
      name: "restaurants",
      component: RestaurantIndex,
    },
    {
      path: "/restaurants/",
      name: "restaurant-card",
      component: RestaurantCard,
    },

    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
  ],
});

export { router };
