<template>
    <div class="p_bathbomb">
        <div class="bathbomb_banner">
            <p class="bannerxt1">배쓰 밤</p>
            <p class="bannerxt2">찬란히 빛나는 물결에 부드럽게 몸을 맡겨 보세요</p>
        </div>
        <div class="product_table">
            <div class="top_header">
                <h2>배쓰 밤</h2>
                <div class="sort_select">
                    <div class="select-box" @click="openOption">
                        <span class="selected">{{selected}}</span>
                        <img :src="select_arrow_down">
                    </div>
                    <div name class="options-container" v-if="isOpen"  >
                        <input type="radio" id="1" v-model="selected" value="추천순">
                        <label for="1" >추천순</label>
                        <input type="radio" id="2" v-model="selected" @click="choose" value="판매인기순" >
                        <label for="2" >판매인기순</label>
                        <input type="radio" id="3" v-model="selected" value="낮은가격순" >
                        <label for="3">낮은가격순</label>
                        <input type="radio" id="4" v-model="selected" value="높은가격순" >
                        <label for="4">높은가격순</label>
                        <input type="radio" id="5" v-model="selected" value="리뷰많은순" >
                        <label for="5">리뷰많은순</label>
                        <input type="radio" id="6" v-model="selected" value="신제품순" >
                        <label for="6">신제품순</label>
                    </div>
                
                </div>
            </div>
            <div class="divider"></div>
            <ul class="lower_cate">
                <li><span>전체(95)</span></li>
                <li><span>배쓰 밤(38)</span></li>
                <li><span>버블 바(54)</span></li>
                <li><span>배쓰 오일(1)</span></li>
                <li><span>펀(2)</span></li>
            </ul>
        </div>

    </div>
    <Footer></Footer>
</template>

<script>
// import axios from 'axios';
import Footer from './Footer.vue'
import select_arrow_down from '@/assets/select_arrow_down.png';
    export default {
        data(){
            return{
                select_arrow_down : select_arrow_down,
                isOpen :false,
                selected : '추천순',
            }
        },
        components:{
            Footer : Footer,
        },
        methods : {
            openOption(){
                this.isOpen = !this.isOpen;
                console.log(this.isOpen);
            },
            choose(click){
                console.log(click);
                
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100&display=swap');

.p_bathbomb{
    padding: 0;
    height: 100%;
    width: 100%;
    box-sizing: content-box;
    display: block;
}
.bathbomb_banner{
    width: 100%;
    height: 500px;
    background-image: url(https://www.lush.co.kr/data/editor/goods/200624/bathbombs01_095105.jpg);
    background-repeat: no-repeat;
    background-position: 50% 0px;
}
.bannerxt1{
    display: block;
    margin: 0;
    padding-top: 190px;
    /* border: 1px solid black; */
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 70px;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
}
.bannerxt2{
    display: block;
    margin: 0;
    /* border: 1px solid black; */
    color: rgba(255, 255, 255, 0.945);
    text-align: center;
    letter-spacing: 0.2em;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 30px;
}
.product_table{
    /* border: 1px solid black; */
    width: 1180px;
    margin: 0 auto;
    height: 300px;
    position: relative;
}
.top_header{
    width: 100%;
    display: inline-flex;
    padding: 70px 0px 0px 0px;
}
.top_header > h2{
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    margin-bottom: 10px;
}
.sort_select{
    width: 110px;
    position:absolute;
    right : 0.4%;
    top: 30%;
}
.select-box{
    border: 1px solid rgb(197, 197, 197);
    color : rgb(117, 117, 117);
    overflow: hidden;
    width: 100%;
    height:37px;
}
.select-box > img {
    width: 15px;
    height: 8px;
    top: 40%;
    right: 10%;
    position: absolute;
}
.selected {
    width: 90%;
    height: 10px;
    /* border: 1px solid black; */
    background: rgb(255, 255, 255);
    color : rgb(37, 36, 36);
    position: absolute;
    text-align: left;
    font-size: 15px;
    padding: 10px 0px 8px 8px;
}
.options-container{
    display: block;
    color:black;
    border: 1px solid rgb(197, 197, 197);
    width: 137px;
    height: fit-content;
    opacity: 1;
    background: white;
    flex-flow: column;
    transform: translateY(-2.2%);
    z-index: 100000;
}
.options-container label {
    display: block;
    width: 130px;
    color: rgb(37, 36, 36);
    text-align: left;
    font-size: 15px;
    line-height: 0.6em;
    padding: 10px 0px 8px 8px;
}
.options-container label:hover{
    background: rgb(228, 228, 228);
}
input[type="radio"]{
    display: none;
}

.divider{
    margin-top: 10px;
    margin-bottom: 10px;
    height: 1px;
    background-color: black;
}

.product_table .lower_cate{
    padding: 10px 0;
    border: none;
    border-top: none;
    font-size: 0;
    text-align: left;
}
.product_table .lower_cate li{
    display: inline-block;
    width: auto;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    margin:0px 30px 0px 0px;
}
.product_table .lower_cate li:first-child span{
    padding-left: 0px;
}
.product_table .lower_cate li span{
    display: block;
    padding: 0 10px;
    margin: 0;
    font-size: 14px;
    cursor: pointer;
}
</style>