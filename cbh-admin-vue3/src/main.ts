import { createApp } from "vue";
import "./styles/global.css";
import "uno.css";
import { router } from "./router";
import { pinia } from "./store";
import Particles from "vue3-particles";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Particles)
app.mount("#app");
