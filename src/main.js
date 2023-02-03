import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import './assets/responsive.css';
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCartShopping,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faUser, faCartShopping);

import router from "./router";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
