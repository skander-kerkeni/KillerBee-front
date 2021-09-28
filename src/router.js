import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Ingredients from './pages/Ingredients.vue';
import Process from './pages/Process.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Models from './pages/Models.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainNavbarL from './layout/MainNavbarL.vue';
import MainFooter from './layout/MainFooter.vue';
import MainFooterL from './layout/MainFooterL.vue';
import Contact from './pages/Contact.vue';
import About from './pages/About.vue';
import Steps from './pages/Steps.vue';
import AddProcess from './pages/AddProcess.vue';
import EditProcess from './pages/EditProcess.vue';
import AddStep from './pages/AddStep.vue';
import EditStep from './pages/EditStep.vue';
import AddModel from './pages/AddModel.vue';
import EditModel from './pages/EditModel.vue';
import EditIng from './pages/EditIng.vue';
import AddIng from './pages/AddIng.vue';



Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/process',
      name: 'process',
      components: { default: Process, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
     {
      path: '/editModel/:id',
      name: 'editModel',
      components: { default: EditModel, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/addIng',
      name: 'addIng',
      components: { default: AddIng, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/editIng/:id',
      name: 'editIng',
      components: { default: EditIng, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/addStep',
      name: 'addStep',
      components: { default: AddStep, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/addProcess',
      name: 'addProcess',
      components: { default: AddProcess, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/addModel',
      name: 'addModel',
      components: { default: AddModel, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/editStep/:id',
      name: 'editStep',
      components: { default: EditStep, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/editProcess/:id',
      name: 'editProcess',
      components: { default: EditProcess, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      components: { default: Ingredients, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/steps',
      name: 'steps',
      components: { default: Steps, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/',
      name: 'login',
      components: { default: Login, header: MainNavbarL, footer: MainFooterL  },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: Contact, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
     {
      path: '/models',
      name: 'models',
      components: { default: Models, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
