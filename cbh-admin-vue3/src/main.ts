import { createApp } from 'vue';
import './styles/global.css';
import 'uno.css';
import { router } from './router';
import { store } from './store';
import VueParticles from 'vue3-particles';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueParticles);
app.mount('#app');
