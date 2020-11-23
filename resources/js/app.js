require('./bootstrap');

import { createApp } from 'vue';

import App from '../vue/components/App.vue';

const app = createApp(App);


// load all the primevue components we'll need
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);

app.mount("#app")
