import Vue from "vue";
import Router from "vue-router";

const Login = () => import("../views/login/Login.vue");

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
