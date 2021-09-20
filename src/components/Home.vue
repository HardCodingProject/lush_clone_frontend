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
                        <el-carousel trigger="click" height="300px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <el-row :gutter="15">
                                    <el-col :span="5">
                                        <div class="grid-content bg-purple">
                                            <img :src="best_product_1">
                                        </div>
                                    </el-col>
                                    <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
                                    <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
                                </el-row>
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
import best_product_1 from '@/assets/best_product_1.jpg';

    export default {
        data(){
            return{
                    main_banner_1 : main_banner_1,
                    main_banner_2 : main_banner_2,
                    main_banner_3 : main_banner_3,
                    main_banner_4 : main_banner_4,
                    main_banner_5 : main_banner_5,
                    main_banner_6 : main_banner_6,
                    best_product_1 : best_product_1,

                banners : [
                    main_banner_1,
                    main_banner_2,
                    main_banner_3,
                    main_banner_4,
                    main_banner_5,
                    main_banner_6
                ]
            }
        },
        methods:{

        }
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
    grid-template-rows: 582px 300px 300px 300px;
}
.main_banner_1, .main_banner_2, .main_banner_3, .main_banner_4 {
    width: 100vw;
    /* height: 100%; */
    border: 1px solid black;

}
.main_banner_2{
    width: 100%;
    padding-top: 80px;
    padding-bottom: 120px;
}
.main_banner_2 .inner_wrap{
    width: 100%;
}
.main_banner_2 .inner_wrap .display_list {
    margin-left: 100px;
}
.main_banner_2 .inner_wrap .display_list > h2 {
    font-size: 35px;
    color: black;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

}
.el-carousel__item img {
    height: 100%;
    width: 100vw;
}
.el-row {
    /* margin-bottom: 20px; */
    margin-left: 20px;
}
.el-col {
border-radius: 4px;
}
.bg-purple-dark {
    height: 100%;
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple img {
    height: 100%;

}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 10px 0;
background-color: #f9fafc;
}
</style>