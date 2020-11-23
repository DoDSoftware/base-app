require('./bootstrap');

import { createApp } from 'vue';

import App from '../vue/components/App.vue'

const app = createApp(App);

app.mount("#app")


