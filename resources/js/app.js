import VueRouter from 'vue-router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
//Setting the components
import Topbar from "./components/Topbar";
import Navigation from "./components/navigation";
import Text from "./components/text";
import Home from "./components/homeBody";
// import Portfolio from "./components/portfolio";
// import ContactForm from "./components/contactForm";
// import Home from "./components/home";
// importing the bootstrap-vue




window.Vue = require('vue').default
window.axios = require('axios');
Vue.use(require('bootstrap-vue'));
Vue.use(BootstrapVueIcons);

// setting the routes of components
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
    ]
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */



//Making the tag
Vue.component('topbar-component', Topbar);
Vue.component('navigation-component', Navigation);
// Vue.component('home-component', Home);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
