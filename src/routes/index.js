import { createWebHistory, createRouter } from "vue-router";


import Home from '@/components/Home.vue';
import Join from '@/components/Join.vue';
import Footer from '@/components/Footer.vue';


const routes = [
    {path : '/' , name :'home', component : Home},
    {path : '/join' , name :'Join', component : Join},
    {path : '/footer' , name :'Footer', component : Footer},

];

const router = createRouter({
    history : createWebHistory(),
    routes,
});


export default router;