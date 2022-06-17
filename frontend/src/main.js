import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { vClickOutside } from "click-outside-vue3";
import store from './store';


library.add(fas, far)


createApp(App)
.use(store)
.use(router, vClickOutside, VueAxios, axios)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");


