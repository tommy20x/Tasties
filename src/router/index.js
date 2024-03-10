import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import LeaderboardView from "../views/LeaderboardView.vue";
// import ShopView from "../views/ShopView.vue";
// import AfterMint from "@/views/AfterMint";
// import MintView from "@/views/MintView";

const routes = [
  {
    path: "/staking",
    name: "staking",
    component: DashboardView,
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: LeaderboardView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/shop",
  //   name: "shop",
  //   component: ShopView,
  // },
  // {
  //   path: "/mint-succeed",
  //   name: "mint-succeed",
  //   component: AfterMint,
  // },
  // {
  //   path: "/mint",
  //   name: "mint",
  //   component: MintView,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
