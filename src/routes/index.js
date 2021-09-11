import { createWebHistory, createRouter } from "vue-router";


import Home from '@/components/Home.vue';
import Join from '@/components/Join.vue';

const routes = [
    {path : '/' , name :'Home', component : Home},
    {path : '/join' , name :'Join', component : Join},
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});


export default router;