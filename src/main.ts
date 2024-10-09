import "./assets/base.css";
import "./assets/main.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";

import App from "./App.vue";
import Toast from "vue-toastification";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(Toast).mount("#app");
