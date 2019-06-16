import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import index from "./components/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/index",
      name: "index",
      component: index
    }
  ]
});
