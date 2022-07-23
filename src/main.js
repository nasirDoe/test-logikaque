import { createApp } from 'vue';
import './style.css';
import './styles/main.css';
import App from './App.vue';
import router from './router';
const app = createApp(App);

import DefaultLayout from '@layouts/Default.vue';
import WithNavbar from '@layouts/WithNavbar.vue';

app.component('default-layout', DefaultLayout);
app.component('with-navbar', WithNavbar);
app.use(router);
app.mount('#app');
