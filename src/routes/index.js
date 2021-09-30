import { createWebHistory, createRouter } from "vue-router";

import Home from '@/components/Home.vue';
import Join from '@/components/Join.vue';
import MyPage from '@/components/MyPage.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/components/Login.vue';
import Join_Complete from '@/components/Join_Complete.vue';
import Product_Bathbomb from '@/components/Product_Bathbomb.vue';


const routes = [
    {path : '/' , name :'home', component : Home},
    {path : '/join' , name :'Join', component : Join},
    {path : '/mypage' , name :'MyPage', component : MyPage},
    {path : '/footer' , name :'Footer', component : Footer},
    {path : '/login' , name :'Loign', component : Login},
    {path : '/join_complete' , name :'Join_Complete', component : Join_Complete},
    {path : '/product_bathbomb' , name :'Product_Bathbomb', component : Product_Bathbomb},
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});


export default router;