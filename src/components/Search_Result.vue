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
            <div class="display_table">
                <div class="pr_list">
                    <ul style="padding-left:20px;">
                        <li style="width:23% height:450px" v-for="item in items" v-bind:key="item">
                            <div class="pr_box">
                                <div class="pr_img">
                                    <router-link :to="`/pd_bathbomb?code=${item._id}`">
                                        <img :src="`/product/image/list?code=${item._id}`">
                                    </router-link>
                                </div>
                                <div class="pr_info">
                                    <div class="pr_conditions">
                                        <div v-for="pr in priorityLength[idx]" v-bind:key="pr">
                                            <img :src="`/product/type/image?product_code=${item._id}&priority=${pr}`" >
                                        </div>
                                    </div>
                                    <div class="pr_name_tag">
                                        <span class="pr_name">{{item.name}}</span>
                                        <span class="pr_tag">{{item.tag}}</span>
                                    </div>
                                    <div class="pr_price">
                                        <span class="price">
                                            <strong> ₩{{item.price}}</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Footer from './Footer.vue';
import select_arrow_down from '@/assets/select_arrow_down.png';
    export default {
        data(){
            return{
                select_arrow_down : select_arrow_down,
                isOpen :false,
                selected : '추천순',
                items : [],
                idx : 0,
                itemcode : [],
                priorityLength : [],
                category_code : this.$route.query.category_code,
                id : '',
            }
        },
        async created(){
            await this.handleItems();
        },
        components:{
            Footer : Footer,
        },
        methods : {
            async handleItems(){
                const url = `/product/list?categoryCode=${this.category_code}`;
                const result = await axios.get(url);
                console.log(result);
                if(result.data.ret === 1){
                    this.items = result.data.data;
                }

                for(var i=0; i<this.items.length; i++){
                    this.itemcode[i] = this.items[i]._id;
                    const url1 = `/product/type/image/count?product_code=${this.itemcode[i]}`;
                    const result1 = await axios.get(url1);
                    console.log(result1);
                    if(result1.data.ret === 1){
                        this.priorityLength[i] = result1.data.data;
                    }
                }

                console.log(this.priorityLength);
            },
            openOption(){
                this.isOpen = !this.isOpen;
                console.log(this.isOpen);
            },
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
    overflow-y: scroll;
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
    /* width: 1180px; */
    margin: 0 auto;
    height: 300px;
    position: relative;
}
.top_header{
    width: 1180px;
    display: inline-flex;
    padding: 70px 0px 0px 0px;
    margin: 0 auto;
}
.top_header > h2{
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    margin: 0;
    position: relative;
    left: 15%;
}


/* select 박스 */
.sort_select{
    width: 110px;
    position:absolute;
    right : 12%;
    top: 23%;
    z-index: 1;
}
.select-box{
    border: 1px solid rgb(197, 197, 197);
    color : rgb(117, 117, 117);
    overflow: hidden;
    width: 100%;
    height:33px;
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
    padding: 9px 0px 8px 8px;
}
.options-container{
    display: block;
    color:black;
    border: 1px solid rgb(197, 197, 197);
    width: 110px;
    height: fit-content;
    opacity: 1;
    background: white;
    flex-flow: column;
    transform: translateY(-2.2%);
    z-index: 100000;
}
.options-container label {
    display: block;
    width: 102px;
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


/* 구분선 */
.divider{
    width: 1180px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 1.5px;
    background-color: black;
}

/* 상품테이블 */
.product_table .lower_cate{
    width: 1180px;
    margin: 0 auto;
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
    font-family: 'Nanum Gothic', sans-serif;
    text-align: center;
    vertical-align: middle;
    margin:0px 30px 0px 0px;
}
.product_table .lower_cate li:first-child span{
    padding-left: 0px;
}
.product_table .lower_cate li span{
    display: block;
    padding: 0 1px;
    margin: 0;
    font-size: 14px;
    cursor: pointer;
    color: #8f8f8f;
}
.product_table .lower_cate li span:hover{
    color: black;
}
.display_table{
    width: 1180px;
    margin: 0 auto;
}
.display_table .pr_list{
    display: table;
    width: 100%;
}
.display_table .pr_list li{
    padding: 0 0;
}
.display_table .pr_list ul li{
    display: inline-block;
    font-size: 12px;
    text-align: center;
    vertical-align: top;
    margin: 0;
    list-style: none;
    cursor: pointer;
    width: 285px;
}
.display_table .pr_list ul li .pr_box{
    display: block;
    position: relative;
}
.display_table .pr_list ul li .pr_img{
    position: relative;
    left: 0;
    width: 100%;
    height: 285px;
    text-align: center;
}
.display_table .pr_list ul li .pr_img img{
    overflow: hidden;
    width: 285px;
    height: 285px;
    border: none;
    vertical-align: top;
}
.item-display .pr_img:after {
    content: '';
    display: block;
    clear: both;
}
.display_table .pr_list ul li .pr_info{
    position: relative;
    display: block;
    padding: 30px 0 0;
    text-align: center;
}
.display_table .pr_list ul li .pr_conditions{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
}
.display_table .pr_list ul li .pr_conditions > img{
    padding: 2px;
    vertical-align: top;
    border: none;
}
.display_table .pr_list ul li .pr_name_tag{
    display: block;
    padding: 0;
    color: #1e1e1e;
    text-align: center;
    line-height: 20px;
}
.display_table .pr_list ul li .pr_name_tag .pr_name{
    display: block;
    padding: 0;
    color: #333;
    line-height: 22px;
    font-size: 16px;
    max-height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.display_table .pr_list ul li .pr_name_tag .pr_tag{
    display: block;
    padding: 0;
    color: #8f8f8f;
    line-height: 20px;
    font-size: 14px;
    max-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.display_table .pr_list ul li .pr_price{
    display: block;
    line-height: 30px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    color: #333;
    font-size: 16px;
}
.display_table .pr_list ul li .pr_price .price strong{
    font-weight: normal;
    color: #333;
    font-size: 16px;
}
</style>