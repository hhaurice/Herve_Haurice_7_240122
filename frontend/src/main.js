import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { store } from "./store/store"


createApp(App).use(router, VueAxios, axios, store).mount("#app");
