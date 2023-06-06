import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SplashScreen1 from '../views/splash-screen-1.vue';
import SplashScreen2 from '../views/splash-screen-2.vue';
import SplashScreen3 from '../views/splash-screen-3.vue';
import SplashScreen4 from '../views/splash-screen-4.vue';
import SignIn from '../views/sign-in.vue';
import SignUp from '../views/sign-up.vue';
import LandingPage from   '../views/landing-page.vue';
import searchResults from '../views/search-results.vue';
import cart from '../views/cart-page.vue';
import popularFoods from '../views/popular-foods.vue';
import foodReview from '../views/food-review.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/search/searchResults'
  },{
    path: '/home',
    name: 'Home',
    component: HomePage
  },{
    path: '/SplashScreen1',
    name: 'SplashScreen1',
    component: SplashScreen1
  },{
    path: '/SplashScreen2',
    name: 'SplashScreen2',
    component: SplashScreen2
  },{
    path: '/SplashScreen3',
    name: 'SplashScreen3',
    component: SplashScreen3
  },{
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },{
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },{
    path: '/LandingPage',
    name: 'LandingPage',
    component: LandingPage
  },{
    path: '/search/searchResults',
    name: 'searchResults',
    component: searchResults
  },{
    path: '/cart',
    name: 'cart',
    component: searchResults
  },{
    path: '/SplashScreen4',
    name: 'SplashScreen4',
    component: SplashScreen4
  },{
    path: '/popularFoods',
    name: 'popularFoods',
    component: popularFoods
  },{
    path: '/review',
    name: 'foodReview',
    component: foodReview
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
