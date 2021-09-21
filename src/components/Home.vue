<template>
    <div class="container" >
        <div class="main_banner_1">
            <el-carousel height="580px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in banners" :key="item">
                    <img :src="item" class="image">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="main_banner_2">
            <div class="inner_wrap">
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
                    
                </div>
            </div>
        </div>
        <div class="main_banner_3"></div>
        <div class="main_banner_4"></div>
    </div>
</template>

<script>
import 'element-plus/dist/index.css'
import main_banner_1 from '@/assets/main_banner_1.jpg';
import main_banner_2 from '@/assets/main_banner_2.jpg';
import main_banner_3 from '@/assets/main_banner_3.jpg';
import main_banner_4 from '@/assets/main_banner_4.jpg';
import main_banner_5 from '@/assets/main_banner_5.jpg';
import main_banner_6 from '@/assets/main_banner_6.jpg';
import banner2_img1 from '@/assets/banner2_img1.png';
import banner2_img2 from '@/assets/banner2_img2.png';
import banner2_img3 from '@/assets/banner2_img3.png';
import banner2_img4 from '@/assets/banner2_img4.png';

    export default {
        data(){
            return{
                    main_banner_1 : main_banner_1,
                    main_banner_2 : main_banner_2,
                    main_banner_3 : main_banner_3,
                    main_banner_4 : main_banner_4,
                    main_banner_5 : main_banner_5,
                    main_banner_6 : main_banner_6,
                banners : [
                    main_banner_1,
                    main_banner_2,
                    main_banner_3,
                    main_banner_4,
                    main_banner_5,
                    main_banner_6
                ],
                banner2 : [
                    banner2_img1,
                    banner2_img2,
                    banner2_img3,
                    banner2_img4,
                ]
            }   
        },

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

.container{
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    box-sizing: content-box;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
    "main_banner_1","main_banner_2","main_banner_3","main_banner_4";
    grid-template-rows: 582px 600px 300px 300px;
}
.main_banner_1, .main_banner_2, .main_banner_3, .main_banner_4 {
    width: 100vw;
    /* height: 100%; */
    border: 1px solid black;

}
.main_banner_2{
    width: 100%;
    margin-top: 70px;
    /* margin-bottom: 120px; */
}
.main_banner_2 .inner_wrap{
    width: 100%;
}
.display_list {
    margin-left: 150px;
}
.main_banner_2 .inner_wrap .display_list > h2 {
    font-size: 35px;
    color: black;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
.products_list #carousel2{
    height: 400px;
}
.el-carousel__item .image2 {
    height: 100%;
    width: 100%;
}
#carousel2{
    width: 850px;
    /* height: 460px; */
    /* border: 1px solid black; */
}

</style>