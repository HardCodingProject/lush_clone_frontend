<template>
    <div class="order_confirmed_page">
        <div class="order_confirmed_page_wrapper">
            <div class="cart_title_section">
                <h1>OREDER CONFIRMED</h1>
                <el-breadcrumb separator=">" class="bread_crumb">
                    <el-breadcrumb-item>Cart </el-breadcrumb-item>
                    <el-breadcrumb-item>Order </el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/order_confirmed_page'}">Order confirmed</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="welcome">
                <img :src="join_complete" id="welcome_img">
                <div class="welcome_text">
                    <p class="txt1">주문이 완료되었습니다.</p>
                    <p class="txt3" @click="goMain">메인페이지로 돌아가기</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue';
import join_complete from '@/assets/join_complete.jpg';

    export default {
        data(){
            return { 
                join_complete : join_complete
            }
        },
        components:{
            Footer : Footer,
        },
        methods : {
            goMain(){
                this.$router.push({path :'/'});
            }
        }
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

.welcome{
    width: 650px;
    height: 306px;
    display: flex;
    margin: 0 auto;
    padding: 90px 70px 10px 70px;
}
.welcome .welcome_img{
    width: 306px;
    height: 306px;
    margin: 0 auto;
}
.welcome_text{
    width: max-content;
    margin-left: 80px;
}
.welcome_text .txt1{
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    color: black;
    margin-top: 80px;
}
.welcome_text .txt3{
    font-family: 'Nanum Gothic', sans-serif;
    line-height: 24px;
    font-size: 16px;
    color: #8f8f8f;
    cursor: pointer;
    /* padding: 30px 0px 10px 0px; */
}
</style>