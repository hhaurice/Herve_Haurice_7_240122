import { createRouter, createWebHistory } from "vue-router";
import PostView from "../views/PostView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import HomeVue from "../views/HomeVue.vue";
import MyAccount from "../views/MyAccount.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: HomeVue
  },
  {
    path: "/auth/posts",
    name: "posts",
    component: PostView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn
  },
  {
    path: "/account",
    name: "account",
    component: MyAccount
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
