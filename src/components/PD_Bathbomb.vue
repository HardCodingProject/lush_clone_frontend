<template>
    <div class="pd_bathbomb">
        <div class="pd_wrap">
            <div class="locations">
                <div class="paths">
                    <span>홈 > </span>
                    <div class="nav">러쉬</div> <span>></span>
                    <div class="nav">배쓰</div> <span>></span>
                    <div class="nav">배쓰밤</div>
                </div>
            </div>
            <div class="goods_info_table">
                <div class="goods_img">
                    <img :src="`/product/image/list?code=${itemDetail._id}`">
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
                                    <td id="price">{{itemDetail.price}}원</td>
                                </tr>
                                <tr>
                                    <th><p>상품무게</p></th>
                                    <td>{{itemDetail.weight}}</td>
                                </tr>
                                <tr>
                                    <th><p>구매수량</p></th>
                                    <td id="quantity"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="goods_info_price">
                        <ul>
                            <li>
                                <span>총 제품 금액</span>
                                <p>18000원</p>
                            </li>
                            <li>
                                <span>총 합계 금액</span>
                                <p>18000원</p>
                            </li>
                        </ul>
                    </div>
                    <div class="order_btn_container">
                        <button type="button" id="cartbtn">장바구니</button>
                        <button type="button" id="orderbtn">주문하기</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import axios from 'axios';
    export default {
        data(){
            return{
                itemDetail : [],
                itemCode : this.$route.query.code,
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
                    console.log(this.itemDetail);
                }
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
    height: 100%;
    font-family: 'Nanum Gothic', sans-serif;
}
.pd_wrap{
    /* border: 1px solid black; */
    width: 1180px;
    height: 100%;
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
    position : absolute;
    width: 590px;
    height: fit-content;
    right: 0;
    bottom: 0;
    display: inline-flex;
    font-size: 13px;
}
.paths span{
    padding-top: 5px;
    font-family: 'Nanum Gothic', sans-serif;
}
.nav{
    border: 0.5px solid #ccc;
    width: 130px;
    margin: 0 10px 0 10px;
    height: 17px;
    color: #535353;
    padding: 5px 0 0 5px;
}
.nav:hover{
    border: 0.5px solid rgb(0, 0, 0);
    cursor: pointer;
}
.goods_info_table{
    /* border: 1px solid black; */
    display: inline-flex;
    margin : 40px auto;
}
.goods_info_table .goods_img{ 
    /* border: 1px solid black; */
    width: 380px;
    height: 380px;
    margin-right:50px;
    padding-right: 30px;
}
.goods_info{
    /* border: 1px solid black; */
    width : 580px;
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
}
.goods_info_title #goods_info_title > p{
    /* border: 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-size: 24px;
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
    background-image: url("/src/assets/icon_tooltip_off.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1; 
}
.goods_info .goods_info_detail th{
    /* border: 1px solid black; */
    width: fit-content;
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
    width: fit-content;
    width: calc(100%-80px);
    text-align: left;
    padding: 15px 0px;
}
#price{
    /* border: 1px solid black; */
    width: fit-content;
    width: calc(100%-80px);
    text-align: left;
    padding: 15px 0px;
    font-weight: bold;
}
.goods_info .goods_info_detail #quantity{
    /* border: 1px solid black; */
    width: fit-content;
    width: calc(100%-80px);
    text-align: left;
    padding: 45px 0px;
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
    font-size: 20px;
    font-weight: bold;
}
.order_btn_container{
    width : 580px;
    height : 50px;
    display: inline-flex;
    justify-content: space-between;
    margin-top: 20px;
}
.order_btn_container #cartbtn, #orderbtn{
    border : 0.5px solid black;
    width : 285px;
    height : 50px;
}
.order_btn_container #cartbtn{
    background-color: #ffffff;
    color : black;
}
.order_btn_container #orderbtn{
    background-color: black;
    color : #ffffff;
}
.order_btn_container #cartbtn:hover, #orderbtn:hover{
    opacity: 0.9;
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



</style>