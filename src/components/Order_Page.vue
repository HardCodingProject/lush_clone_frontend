<template>
    <div class="order_page">
        <div class="order_page_wrapper">
            <div class="cart_title_section">
                <h1>SHOPPING CART</h1>
                <el-breadcrumb separator=">" class="bread_crumb">
                    <el-breadcrumb-item>Cart </el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/order_page' }">Order </el-breadcrumb-item>
                    <el-breadcrumb-item>Order confirmed</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue';
    export default {
        data(){
            return{

            }
        },
        components:{
            Footer : Footer,
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100&display=swap');

.order_page{
    width: 100%;
    /* height: 100vh; */
    display : flex;
    flex-direction: column;
    font-family: 'Nanum Gothic', sans-serif;
}
.order_page_wrapper{
    /* border: 1px solid black; */
    width: 1180px;
    /* height: 100vh; */
    margin: 40px auto;
    display: flex;
    flex-direction: column;
}
.cart_title_section{
    /* border : 1px solid red; */
    width : 100%;
    height : fit-content;
    display : flex;
    flex-direction: column;
    align-items: center;
}
.cart_title_section h1{
    /* border : 1px solid black; */
    padding : 1em;
    font-size: 3em;
    width : fit-content;
    height : fit-content;
    letter-spacing: -0.02em;
    margin : 0;
    font-family: 'Roboto', sans-serif;

}
.cart_title_section .bread_crumb{
    /* border : 1px solid black; */
    width : fit-content;
    height: 100px;
    font-size : 1.1em;
    letter-spacing: -0.02em;
    color : rgba(255, 255, 255, 0.89);
    font-family: 'Nanum Gothic', sans-serif;
}
</style>