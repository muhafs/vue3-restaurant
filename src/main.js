import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import '@/assets/styles/style.css';

//? Bootstrap Vue 3
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

//? Vue Toast Notification
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const options = {
	transition: 'Vue-Toastification__bounce',
	maxToasts: 20,
	newestOnTop: true,
};

//? Vue Fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faCartShopping, faCartArrowDown, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(faCartShopping, faCartArrowDown, faAnglesRight, faTwitterSquare, faInstagramSquare, faWhatsappSquare);

createApp(App).use(router).use(BootstrapVue3).use(Toast, options).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
