import { createWebHistory, createRouter } from "vue-router";
import { useAuthStore } from "../stores/auth.ts";

import Home from "../views/Home.vue";
import TourDetails from "../views/TourDetails.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Error from "../views/error.vue";
import Account from "../views/Account.vue";
import Settings from "../components/Settings.vue";
import Bookings from "../components/Bookings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/tour/:tourId",
      name: "tour-details",
      component: TourDetails,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/error",
      name: "error",
      component: Error,
    },
    {
      path: "/me",
      name: "account",
      component: Account,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "settings",
          name: "settings",
          component: Settings,
        },
        {
          path: "bookings",
          name: "bookings",
          component: Bookings,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { user } = useAuthStore();

  if ((to.name === "login" || to.name === "register") && user) {
    next({ name: "home" });
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const { user } = useAuthStore();

  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  if (user) next();
  else next({ name: "home" });
});

export default router;
