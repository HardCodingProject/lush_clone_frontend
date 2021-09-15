import { createApp } from 'vue'
import App from './App.vue'

// router
import router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

// socket
// import io from 'socket.io-client';
// const socket = io("/", { transports : ['websocket']});

const app = createApp(App);

app.use(router);  //router
// app.config.globalProperties.$socket = socket;
app.mount('#app');