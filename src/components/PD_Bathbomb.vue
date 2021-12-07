<template>
    <div class="pd_bathbomb">
        <div class="pd_wrap">
            <div class="locations">
                <div class="paths">
                    <el-breadcrumb separator=">" style="display:inline-flex;">
                        <el-breadcrumb-item>홈</el-breadcrumb-item>
                        <el-breadcrumb-item style="width:160px;">
                            <div class="nav">
                                <div class="select-box" v-bind:style="select_box_style">
                                    <span class="selected" @mouseover="openOption">{{selected}}</span>
                                    <img :src="select_arrow_down">
                                </div>
                                <div name class="options-container" v-if="isOpen" v-bind:style="options_container_style">
                                    <input type="radio" id="1" v-model="selected" value="러쉬">
                                    <label for="1">러쉬</label>
                                    <input type="radio" id="2" v-model="selected" @click="choose" value="LUSH SPA" >
                                    <label for="2">LUSH SPA</label>
                                </div>
                            </div>
                        </el-breadcrumb-item>
                        <span style="margin:0px 10px;"> > </span>
                        <el-breadcrumb-item style="width:155px;">
                            <div class="nav">
                                <div class="select-box" v-bind:style="select_box_style">
                                    <span class="selected" @mouseover="openOption2">{{selected2}}</span>
                                    <img :src="select_arrow_down">
                                </div>
                                <div name class="options-container" v-if="isOpen2" v-bind:style="options_container_style">
                                    <input type="radio" id="1" v-model="selected" value="베스트">
                                    <label for="1">베스트</label>
                                    <input type="radio" id="2" v-model="selected" @click="choose" value="신제품" >
                                    <label for="2">신제품</label>
                                    <input type="radio" id="3" v-model="selected" value="배쓰" >
                                    <label for="3">배쓰</label>
                                    <input type="radio" id="4" v-model="selected" value="샤워" >
                                    <label for="4">샤워</label>
                                    <input type="radio" id="5" v-model="selected" value="보디" >
                                    <label for="5">보디</label>
                                    <input type="radio" id="6" v-model="selected" value="페이스" >
                                    <label for="6">페이스</label>
                                    <input type="radio" id="7" v-model="selected" value="헤어" >
                                    <label for="7">헤어</label>
                                    <input type="radio" id="8" v-model="selected" value="메이크업" >
                                    <label for="8">메이크업</label>
                                    <input type="radio" id="9" v-model="selected" value="퍼퓸" >
                                    <label for="9">퍼퓸</label>
                                    <input type="radio" id="10" v-model="selected" value="기프트" >
                                    <label for="10">기프트</label>
                                    <input type="radio" id="11" v-model="selected" value="비건" >
                                    <label for="11">비건</label>
                                </div>
                            </div>
                        </el-breadcrumb-item>
                        <span style="margin:0px 10px;"> > </span>
                        <el-breadcrumb-item>
                            <div class="nav">
                                <div class="select-box" v-bind:style="select_box_style">
                                    <span class="selected" @mouseover="openOption3">{{selected3}}</span>
                                    <img :src="select_arrow_down">
                                </div>
                                <div name class="options-container" v-if="isOpen3" v-bind:style="options_container_style">
                                    <input type="radio" id="1" v-model="selected" value="배쓰 밤">
                                    <label for="1">배쓰 밤</label>
                                    <input type="radio" id="2" v-model="selected" @click="choose" value="버블 바" >
                                    <label for="2">버블 바</label>
                                    <input type="radio" id="3" v-model="selected" value="배쓰 오일" >
                                    <label for="3">배쓰 오일</label>
                                    <input type="radio" id="4" v-model="selected" value="펀" >
                                    <label for="4">펀</label>
                                </div>
                            </div>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
            <div class="goods_info_table"  @mouseover="closeOption" >
                <div class="goods_img">
                    <img :src="`/product/image/list?code=${itemDetail._id}`">
                    <div class="thumbnail_box">
                        <img :src="select_arrow_left" class="left_arrow">
                        <div class="thumbnail_section"> 
                            <img :src="`/product/image/list?code=${itemDetail._id}`"> 
                        </div>
                        <img :src="select_arrow_right" class="right_arrow">
                    </div>
                </div>
                <div class="goods_info">
                    <div class="goods_info_title">
                        <div id="goods_info_title">
                            <p>{{itemDetail.name}}</p>
                            <div class="shareZzimIcon">
                                <div class="shareIcon"></div>
                                <div class="zzimIcon"></div>
                            </div>
                        </div>
                        <p id="producttag">{{itemDetail.tag}}</p>
                    </div>
                    <div class="goods_info_detail">
                        <span>5개의 후기보기</span>
                        <div>
                            <span>Good To Know</span>
                            <div class="questionicon"></div>
                        </div>
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><p>판매가</p></th>
                                    <td id="price">{{priceForm}} 원</td>
                                </tr>
                                <tr>
                                    <th><p>상품무게</p></th>
                                    <td>{{itemDetail.weight}}</td>
                                </tr>
                                <tr>
                                    <th><p>구매수량</p></th>
                                    <td id="quantity">
                                        <div class="count_section">
                                            <img :src="minus" @click="handleMinus">
                                            <span>{{counting}}</span>
                                            <img :src="plus" @click="handlePlus">
                                        </div>
                                        <div class="total_count">
                                            {{totalCountingF}} 원
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="goods_info_price">
                        <ul>
                            <li>
                                <span>총 제품 금액</span>
                                <p>{{totalCountingF}} 원</p>
                            </li>
                            <li>
                                <span>총 합계 금액</span>
                                <p>{{totalCountingF}} 원</p>
                            </li>
                        </ul>
                    </div>
                    <div class="order_btn_container">
                        <button type="button" id="cartbtn">장바구니</button>
                        <button type="button" id="orderbtn">주문하기</button>
                    </div>
                </div>
            </div>
            <div class="pd_contents">
                <div ref="first" class="first_box">
                    <div class="pd_navbar">
                        <span @click.prevent="goThere('first')">상품상세정보</span>
                        <span @click.prevent="goThere('second')">상품후기</span>
                        <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
                    </div>
                </div>
                <div ref="second" class="second_box">
                    <div class="pd_navbar">
                        <span @click.prevent="goThere('first')">상품상세정보</span>
                        <span @click.prevent="goThere('second')">상품후기</span>
                        <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
                    </div>
                </div>
                <div ref="third" class="third_box">
                    <div class="pd_navbar">
                        <span @click.prevent="goThere('first')">상품상세정보</span>
                        <span @click.prevent="goThere('second')">상품후기</span>
                        <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue';
import axios from 'axios';
import select_arrow_down from '@/assets/select_arrow_down.png';
import select_arrow_left from '@/assets/select_arrow_left.png';
import select_arrow_right from '@/assets/select_arrow_right.png';
import minus from '@/assets/minus.png';
import plus from '@/assets/plus.png';

    export default {
        data(){
            return{
                itemDetail : [],
                priceForm : 0,
                itemCode : this.$route.query.code,
                select_arrow_down,
                select_arrow_left,
                select_arrow_right,
                plus,
                minus,
                isOpen : false,
                isOpen2 : false,
                isOpen3 : false,
                selected : '러쉬',
                selected2 : '배쓰',
                selected3 : '배쓰밤',
                counting : 1,
                totalCounting : 0,
                totalCountingF : 0,

                select_box_style : {
                    border: "1px solid rgb(197, 197, 197)",
                    color : "rgb(117, 117, 117)",
                    overflow : "hidden",
                    width : "100%",
                    height : "25px",
                },

                options_container_style : {
                    display: "block",
                    color : "black",
                    border: "1px solid rgb(197, 197, 197)",
                    width: "150px",
                    height: "fit-content",
                    opacity: "1",
                    background: "white",
                    flexFlow: "column",
                    transform: "translateY(-1%)",
                    zIndex: "100000",
                }
            }
        },
        components:{
            Footer : Footer,
        },
        async created(){
            await this.handleContent();
        },
        methods : {
            async handleContent(){
                const url = `/product?code=${this.itemCode}`;
                const result = await axios.get(url);
                console.log(result);
                if(result.data.ret === 1){
                    this.itemDetail = result.data.data;
                    this.priceForm = result.data.data.price.toLocaleString();
                    this.totalCountingF = this.priceForm.toLocaleString();
                    console.log(this.itemDetail);
                }
            },
            openOption(){
                this.isOpen = !this.isOpen;
            },
            openOption2(){
                this.isOpen2 = !this.isOpen2;
            },
            openOption3(){
                this.isOpen3 = !this.isOpen3;
            },
            closeOption(){
                this.isOpen = false;
                this.isOpen2 = false;
                this.isOpen3 = false;
                this.select_box_style.border = '1px solid rgb(197, 197, 197)';
            },
            handleMinus(){
                if(this.counting >= 1){
                    this.counting--;
                    this.totalCounting -= this.itemDetail.price;
                }
                else if(this.counting < 1){
                    this.counting = 1;
                    this.totalCounting = this.itemDetail.price;
                }
                this.totalCountingF = this.totalCounting.toLocaleString();
            },
            handlePlus(){
                if(this.counting >= 1 && this.counting <= 19){
                    this.counting++;
                    this.totalCounting = this.itemDetail.price * this.counting;
                }
                this.totalCountingF = this.totalCounting.toLocaleString();
            },
            goThere(val){
                var element = this.$refs[val];
                var location = element.offsetTop;
                console.log(location);
                element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }
            
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100&display=swap');

.pd_bathbomb{
    width: 100%;
    /* height: 100vh; */
    display : flex;
    flex-direction: column;
    font-family: 'Nanum Gothic', sans-serif;
}
.pd_wrap{
    /* border: 1px solid black; */
    width: 1180px;
    /* height: 100vh; */
    margin: 40px auto;
    display: flex;
    flex-direction: column;
}
.locations{
    /* border: 1px solid black; */
    position: relative;
    width: 100%;
    padding: 20px 0 0;
    height: 45px;
    z-index: 1;
}
.paths{
    /* border: 1px solid black; */
    position : absolute;
    width: 56.5%;
    height: 100%;
    right: 0;
    bottom: 0;
    display: inline-flex;
    font-size: 13px;
    align-items: center;
}
.paths span{
    padding-top: 5px;
    font-family: 'Nanum Gothic', sans-serif;
}


/* select 박스 */
.nav{
    width: 150px;
    position:absolute;
    /* right: 72%; */
    top: 35%;
    z-index: 1;
}
.select-box > img {
    width: 15px;
    height: 8px;
    top: 40%;
    right: 5%;
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
    font-size: 13px;
    padding: 9px 0px 8px 8px;
}
.options-container label {
    display: block;
    width: 142px;
    color: rgb(37, 36, 36);
    text-align: left;
    font-size: 13px;
    line-height: 0.6em;
    padding: 10px 0px 8px 8px;
}
.options-container label:hover{
    background: #3e3d3c;
    color : white
}
input[type="radio"]{
    display: none;
}


.goods_info_table{
    /* border: 1px solid black; */
    width : 100%;
    display: inline-flex;
    /* margin : 40px auto; */
    justify-content: center;
    padding-top: 20px;
}
.goods_info_table .goods_img{ 
    /* border: 1px solid black; */
    width: 40%;
    height: 380px;
    display :flex;
    flex-direction: column;
}
.goods_info_table .thumbnail_box{
    /* border: 1px solid black; */
    width: 409px;
    height : 50px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.thumbnail_box .left_arrow{
    width : 10px;
    height : 14px;
    cursor: pointer;
}
.thumbnail_box .right_arrow{
    width : 10px;
    height : 14px;
    cursor: pointer;
}
.thumbnail_section{
    width : 380px;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
}
.thumbnail_section > img{
    width : 50px;
    height: 100%;
    border: 0.5px solid rgba(235, 235, 235, 0.815);
}
.goods_info{
    /* border: 1px solid black; */
    width : 53%;
    height: 600px;
    display: flex;
    flex-direction: column;
}
.goods_info_title{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
}
.goods_info_title #producttag{
    padding-top: 8px;
    font-size: 13px;
    color: #808080;
    margin : 0px;
}
.goods_info_title #goods_info_title{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 33.33px;
    justify-content: space-between;
}
.shareZzimIcon{
    /* border: 1px solid black; */
    display: inline-flex;
    align-items: center;
}
.shareIcon{
    /* border: 1px solid black; */
    width: 20px;
    height: 20px;
    background-image: url("/src/assets/icon_share.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1;
    cursor: pointer;
}
.zzimIcon{
    /* border: 1px solid black; */
    width: 20px;
    height: 20px;
    background-image: url("/src/assets/icon_zzim.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    margin-left: 10px;
    cursor: pointer;
}
.goods_info_title #goods_info_title > p{
    /* border: 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-size: 28px;
    line-height: 34px;
    margin : 0px;
    font-weight : bold
}
.goods_info .goods_info_detail{
    border-top: 0.3px solid  #808080;
    border-bottom: 0.3px solid  #808080;
    padding: 20px 0px;
    margin : 20px 0px;
    display: flex;
    flex-direction: column;
}
.goods_info_detail span{
    color : #1e1e1e;
    font-size: 13px;
    letter-spacing: -0.5px;
}
.goods_info_detail > div{
    display: inline-flex;
    width: 100%;
    align-items: center;
    margin: 15px 0px;
}
.questionicon {
    /* border: 1px solid black; */
    width: 14px;
    height: 14px;
    margin-left: 5px;
    background-image: url("/src/assets/icon_tooltip_off.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1; 
    cursor: pointer;
}
.goods_info .goods_info_detail th{
    /* border: 1px solid black; */
    /* width: fit-content; */
    width: 80px;
    text-align: left;
    margin: 30px 0px;
}
.goods_info .goods_info_detail th p{
    /* border: 1px solid black; */
    font-weight: normal;
    width: 80px;
    color: #333;
    margin: 0px;
    font-size: 13px;
}
.goods_info .goods_info_detail td{
    /* border: 1px solid black; */
    /* width: fit-content; */
    width: calc(100%-80px);
    text-align: left;
    padding: 15px 0px;
}
#price{
    /* border: 1px solid black; */
    /* width: fit-content; */
    width: calc(100%-80px);
    text-align: left;
    padding: 15px 0px;
    font-weight: bold;
}
.goods_info .goods_info_detail #quantity{
    /* border: 1px solid black; */
    width: 100%;
    height : 50px;
    /* width: calc(100%-80px); */
    text-align: left;
    padding:0;
    display : inline-flex;
    align-items: center;
}
.count_section{
    border: 0.5px solid rgba(235, 235, 235, 0.815);
    width: 40%;
    margin: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.count_section img{
    width : 20px;
    height : 20px;
    margin : 0px 10px;
    cursor : pointer;
}
.count_section img:last-child{
    width : 15px;
    height : 15px;
    margin : 0px 10px;
}
.count_section span{
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.total_count{
    width : 20%;
    height : fit-content;
    margin : 0px 15px;
    font-size : 14px;
    font-weight: bold;
}
.goods_info .goods_info_price{
    /* border: 1px solid black; */
    /* text-align: right; */
    width: 100%;
}
.goods_info .goods_info_price ul{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin : 0;
}
.goods_info .goods_info_price li{
    list-style: none;
    display: inline-flex;
    align-items: center;
    height : 50px;
}
.goods_info .goods_info_price span{
    width: fit-content;
    height: fit-content;
    color: #333;
    line-height: 30px;
    font-size: 13px;
}
.goods_info .goods_info_price p{
    width: fit-content;
    color: #333;
    margin-left : 20px;
    font-size: 22px;
    font-weight: bold;
}
.order_btn_container{
    width : 100%;
    height : 50px;
    display: inline-flex;
    justify-content: space-between;
    margin-top: 20px;
}
.order_btn_container #cartbtn, #orderbtn{
    border : 0.5px solid black;
    width : 49%;
    height : 50px;
}
.order_btn_container #cartbtn{
    background-color: #ffffff;
    color : black;
    cursor: pointer;
}
.order_btn_container #orderbtn{
    background-color: black;
    color : #ffffff;
}
.order_btn_container #orderbtn:hover{
    opacity: 0.7;
    cursor: pointer;
}
.goods_info .goods_img{
    display: inline-block;
    position: relative;
    float: left;
    width: 380px;
    margin: 0 auto;
    padding: 0 0;
    text-align: center;
    margin-left: 40px;
}

.pd_navbar{
    /* border: 1px solid black; */
    width: 100%;
    height : 50px;
    display: inline-flex;
}
.pd_navbar span {
    border: 0.5px solid rgb(219, 219, 219);
    width: 33.5%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #808080;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.first_box .pd_navbar span:first-child{
    border: 0.5px solid #333;
    width: 33%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #333;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.second_box .pd_navbar span:nth-child(2) {
    border: 0.5px solid #333;
    width: 33%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #333;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.third_box .pd_navbar span:nth-child(3) {
    border: 0.5px solid #333;
    width: 33%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #333;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.pd_contents{
    width : 100%;
    height : fit-content;
}
.pd_contents div {
    border : 1px solid red;
    height : 800px;
}
</style>