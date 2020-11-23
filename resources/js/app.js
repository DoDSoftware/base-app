require('./bootstrap');

import { createApp } from 'vue';

import App from '../vue/components/App.vue'

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const app = createApp(App);


app.component('Dialog', Dialog);
app.component('Button', Button);

app.mount("#app")
