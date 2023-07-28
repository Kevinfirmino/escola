import { createRouter, createWebHistory } from "vue-router";
import AboutItem from "@/views/About.vue"
import cardapioItem from "@/views/cardapio.vue"
import Home from "@/views/Home.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/About",
    name: "AboutItem",
    component: AboutItem
  },

  {
    path: "/cardapio",
    name: "cardapioItem",
    component: cardapioItem
  },

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router