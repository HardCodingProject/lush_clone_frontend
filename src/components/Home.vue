<template>
    <div class="container" >
        <div class="main_banner_1">
            <el-carousel height="580px" direction="vertical" :autoplay="false" id="carousel1">
                <el-carousel-item v-for="item in banners" :key="item" id="carousel1">
                    <img :src="item" class="image">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="main_banner_2">
            <div class="inner_wrap1">
                <div class="display_list">
                    <h2>나만 알고 싶은 향기</h2>
                    <div class="products_list">
                        <el-carousel indicator-position="none" id="carousel2">
                            <el-carousel-item v-for="item in banner2" :key="item" id="carousel2">
                                <img :src="item" class="image2">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="review_float">
                    <div class="review_slide">
                        <el-carousel indicator-position="none" id="carousel3">
                            <el-carousel-item v-for="item in review_slider" :key="item" id="carousel3">
                                <img :src="item" class="image3">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>    
        </div>
        <div class="main_banner_3">
            <div class="grid-container">
                <img :src="banner3_img1" class="img1">
                <img :src="banner3_img2UD" class="img2">
                <img :src="banner3_img3UD" class="img3">
                <img :src="banner3_img4UD" class="img4">
            </div>

        </div>

        <div class="main_banner_4">
            <div class="inner_wrap">
                <div class="banner4_textbox">
                    <h3>NEW 탱글드 헤어 트리트먼트</h3>
                    <p>전통악기에서 영감을 받은 두피 트리트먼트로, 기분좋은 낮잠에 빠져들듯 부드럽고 편안한 시간을 선사합니다.</p>
                </div>
                <img :src="banner4_img" class="banner4img">
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import 'element-plus/dist/index.css'
import Footer from '@/components/Footer.vue';
import DCbanner_5 from '@/assets/DCbanner_5.jpg';
import DCbanner_6 from '@/assets/DCbanner_6.jpg';
import DCbanner_7 from '@/assets/DCbanner_7.jpg';
import DCbanner_8 from '@/assets/DCbanner_8.jpg';
import DCbanner_9 from '@/assets/DCbanner_9.jpg';
import DCbanner_4 from '@/assets/DCbanner_4.jpg';

import banner2_img1 from '@/assets/banner2_img1.png';
import banner2_img2 from '@/assets/banner2_img2.png';
import banner2_img3 from '@/assets/banner2_img3.png';
import banner2_img4 from '@/assets/banner2_img4.png';

import DCsubbanner_1 from '@/assets/DCsubbanner_1.jpg';
import review_img2 from '@/assets/review_img2.jpg';
import review_img1 from '@/assets/review_img1.jpg';
import DCsubbanner_2 from '@/assets/DCsubbanner_2.jpg';
import DCsubbanner_3 from '@/assets/DCsubbanner_3.jpg';
import DCsubbanner_4 from '@/assets/DCsubbanner_4.jpg';

import banner3_img1 from '@/assets/banner3_img1.jpg';
import banner3_img2UD from '@/assets/banner3_img2UD.gif';
import banner3_img3UD from '@/assets/banner3_img3UD.jpg';
import banner3_img4UD from '@/assets/banner3_img4UD.jpg';
import banner4_img from '@/assets/banner4_img.gif';

    export default {
        data(){
            return{
                    banner3_img1 : banner3_img1,
                    banner3_img2UD : banner3_img2UD,
                    banner3_img3UD : banner3_img3UD,
                    banner3_img4UD : banner3_img4UD,
                    banner4_img : banner4_img,
                banners : [
                    DCbanner_5,
                    DCbanner_6,
                    DCbanner_7,
                    DCbanner_9,
                    DCbanner_8,
                    DCbanner_4,
                ],
                banner2 : [
                    banner2_img1,
                    banner2_img2,
                    banner2_img3,
                    banner2_img4,
                ],
                review_slider : [
                    DCsubbanner_1,
                    review_img1,
                    review_img2,
                    DCsubbanner_2,
                    DCsubbanner_3,
                    DCsubbanner_4
                ]
            }   
        },
        components:{
            Footer : Footer,
        },

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

.container{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    box-sizing: content-box;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
    "main_banner_1","main_banner_2","main_banner_3","main_banner_4";
    grid-template-rows: 582px 600px 600px 750px;
}
.main_banner_1, .main_banner_2, .main_banner_3, .main_banner_4 {
    width: 100%;
    /* height: 100%; */
    /* border: 1px solid black; */
}
#carousel1 {
    width: 100%;
}
.main_banner_1{
    height: 580px;
}
.image{
    width: 100%;
    height: 580px;
    object-fit: cover;
}
.main_banner_2{
    /* width: 100vw; */
    margin-top: 70px;
    /* margin-bottom: 120px; */
}
.main_banner_2 .inner_wrap1{
    height: 100%;
}
.inner_wrap1 {
    width: 1180px;
    position: relative;
    margin: 0 auto;
}
.main_banner_4{
    padding: 150px 0px 120px 0px;
}
.display_list {
    margin-top: 40px;
    /* margin-left: 130px; */
    width: fit-content;
}
.display_list > h2 {
    font-size: 45px;
    color: black;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
.products_list{
    width: fit-content;
}
.products_list #carousel2{
    height: 400px;
}
#carousel2 .image2 {
    height: 100%;
    width: 100%;
}
#carousel2{
    width: 880px;
}
.review_float{
    width: 280px;
    height: 652px;
    position: absolute;
    top: -175px;
    right: 0px;
}
#carousel3{
    height: 652px;
}
#carousel3 .image3{
    height: 652px;
}

.grid-container{
    margin: 0 auto;
    margin-top: 50px;
    width: fit-content;
    height: 555px;
    display: grid;
    grid-template-columns: auto auto auto;
}
.img1 {
  grid-row-end: span 3;
  grid-column-start:span 1;
}
.img2 {
  grid-column-start:span 2;
}
.img3 {
  grid-row-end: span 2;
}
.img4 {
  grid-row-end: span 2;
}
.main_banner_4 .inner_wrap {
    position: relative;
}
.inner_wrap{
    padding-top: 40px;
    position: relative;
    width: 1180px;
    margin: 0 auto;
}
.main_banner_4 .banner4_textbox{
    width: 350px;
    padding-left: 280px;
}
.main_banner_4 h3{
    font-family: 'Roboto', sans-serif;
    font-size: 45px;
    color: black;
    margin-bottom: 10px;
}
.main_banner_4 .inner_wrap .banner4img{
    position: absolute;
    top: -40px;
    right: 100px;
    width: 380px;
    z-index: 1;
}
.main_banner_4 .banner4img{
    transition: margin 0.3s ease;
}

</style>