import { createApp } from 'vue'
import App from './App.vue'

// router
import router from './routes';

const app = createApp(App);

app.use(router);  //router

app.mount('#app');