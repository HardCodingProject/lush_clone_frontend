import { createWebHistory, createRouter } from "vue-router";

import Home from '@/components/Home.vue';
import Join from '@/components/Join.vue';
import MyPage from '@/components/MyPage.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/components/Login.vue';
import Join_Complete from '@/components/Join_Complete.vue';
import Product_Bathbomb from '@/components/Product_Bathbomb.vue';
import Product_Bodyspray from '@/components/Product_Bodyspray.vue';
import PD_Bathbomb from '@/components/PD_Bathbomb.vue';
import Shopping_Cart from '@/components/Shopping_Cart.vue';
import Order_Page from '@/components/Order_Page.vue';
import Search_Result from '@/components/Search_Result.vue';
import OrderConfirmedPage from '@/components/OrderConfirmedPage.vue';


const routes = [
    {path : '/' , name :'home', component : Home},
    {path : '/join' , name :'Join', component : Join},
    {path : '/mypage' , name :'MyPage', component : MyPage},
    {path : '/footer' , name :'Footer', component : Footer},
    {path : '/login' , name :'Loign', component : Login},
    {path : '/join_complete' , name :'Join_Complete', component : Join_Complete},
    {path : '/product_bathbomb' , name :'Product_Bathbomb', component : Product_Bathbomb},
    {path : '/product_bodyspray' , name :'Product_Bodyspray', component : Product_Bodyspray},
    {path : '/pd_bathbomb' , name :'PD_Bathbomb', component : PD_Bathbomb},
    {path : '/shopping_cart' , name :'Shopping_Cart', component : Shopping_Cart},
    {path : '/order_page' , name :'Order_Page', component : Order_Page},
    {path : '/search_result' , name :'Search_Result', component : Search_Result},
    {path : '/order_confirmed_page' , name :'OrderConfirmedPage', component : OrderConfirmedPage},
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});


export default router;