require('./bootstrap');

import { createApp } from 'vue';

import App from '../vue/components/App.vue'

import Dialog from 'primevue/dialog';

const app = createApp(App);


app.component('Dialog', Dialog);

app.mount("#app")
