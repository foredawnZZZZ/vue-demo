import Vue from "vue";
import VueRouter from "vue-router";
import Home from "views/com/Home"
import AccountLogin from "views/com/AccountLogin";
import PhoneLogin from "views/com/PhoneLogin";
import BackToOne from "views/com/BackToOne"
import BackToTwo from "views/com/BackToTwo"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: "home",
    component: Home
  },
  {
    path: '/backToOne',
    name: 'backToOne',
    component: BackToOne
  },
  {
    path: '/backToTwo',
    name: 'backToTwo',
    component: BackToTwo
  },
  {
    path: '/accountLogin',
    name: 'accountLogin',
    component: AccountLogin
  },
  {
    path: '/phoneLogin',
    name: 'phoneLogin',
    component: PhoneLogin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
