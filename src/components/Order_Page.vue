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
            <div class="cart_list_section">
                <p>제품</p>
                <el-table style="border-top:1px solid black;" :data="cartItemList">
                    <el-table-column label="제품정보" width="450" align="center">
                        <template #default="scope">
                            <el-image style="width: 150px;" :src="`/product/image/list?code=${scope.row.product_code}`" :fit="cover"></el-image>
                            <div class="product_detail_info" style="width: 60%; height:150px; display: flex; flex-direction: column; float:right; justify-content: center; text-align:left; padding:5px 10px;">
                                <span style="font-size:14px; color:#333; font-weight:bold">{{scope.row.product_name}}</span>
                                <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.product_category}}</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="수량" width="170" align="center">
                        <template #default="scope">
                            <div class="count_section">
                                <img :src="minus" @click="handleMinus(scope.row.product_code, scope.row.product_count)">
                                <span>{{scope.row.product_count}}</span>
                                <img :src="plus" @click="handlePlus(scope.row.product_code, scope.row.product_count)">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column property="finalPrice" label="금액" width="175" align="center">
                        <template #default="scope">
                            <p style="width:100%; font-size:14px; color:black; margin:0;">{{scope.row.product_price}} 원</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="finalPrice" label="복지혜택" width="175" align="center">
                        <template>
                            <p style="font-size:14px; color:black; margin:0;"></p>
                        </template>
                    </el-table-column>
                    <el-table-column label="배송비"  width="210" align="center">
                        <p style="font-size:13px; color:#333; font-weight:bold; margin:5px 0px;">2,500원(기본)<br> 3만원 이상 구매시 무료배송</p>
                    </el-table-column>
                </el-table>
                <div class="list_total_section">
                    <span>총 {{total}} 개의 금액</span>
                    <p>{{totalPriceF}} 원</p>
                    <span>+ 배송비 </span>
                    <p>{{totalShippingPriceF}} 원</p>
                    <span>= 총 주문금액 </span>
                    <p>{{totalOrderPriceF}} 원</p>
                </div>
            </div>
            <div class="gift_section">
                <div class="gift_title">
                    <p>사은품 선택</p>
                    <span>사은품 수령을 원하지 않을 시, 배송메세지에 X 표시를 적어주세요</span>
                </div>
                <div class="gift_contents">
                    <el-checkbox label="오늘의 스마트 샘플" name="type" id="checkbox"></el-checkbox>
                    <img :src="gift">
                    <p>[랜덤] 오늘의 당신을 위한 선물 (1개)</p>
                </div>
            </div>
            <div class="member_section">
                <p>주문 고객 정보</p>
                <div class="member_contents">
                    <table class="member_info_table">
                        <colgroup>
                            <col class="th_area">
                            <col class="td_area">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>주문하시는 분</th>
                                <td><input placeholder="나나나"></td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td><span>[48229] 부산광역시 수영구 수영로540번길 55(광안동삼정그린코아아파트)</span></td>
                            </tr>
                            <tr>
                                <th>휴대폰 번호</th>
                                <td><input placeholder="000-0000-0000"></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td style="align-items: stretch;">
                                    <input placeholder="me@gmail.com" id="email_section">
                                    <div class="select-option">
                                        <div class="select-box">
                                            <span class="selected">{{selected}}</span>
                                            <img :src="select_arrow_down" @click="openOption">
                                        </div>
                                        <div name class="options-container" v-bind:style="selector_style" @mouseup="closeOptions">
                                            <input type="radio" id="1" v-model="selected" value="" >
                                            <label for="1">직접입력</label>
                                            <input type="radio" id="2" v-model="selected" value="naver.com" >
                                            <label for="2">naver.com</label>
                                            <input type="radio" id="3" v-model="selected" value="hanmail.net" >
                                            <label for="3">hanmail.net</label>
                                            <input type="radio" id="4" v-model="selected" value="daum.net" >
                                            <label for="4">daum.net</label>
                                            <input type="radio" id="5" v-model="selected" value="nate.com" >
                                            <label for="5">nate.com</label>
                                            <input type="radio" id="6" v-model="selected" value="hotmail.com" >
                                            <label for="6">hotmail.com</label>
                                            <input type="radio" id="7" v-model="selected" value="gmail.com" >
                                            <label for="7">gmail.com</label>
                                            <input type="radio" id="8" v-model="selected" value="icloud.com" >
                                            <label for="8">icloud.com</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="shipping_section">
                <p>배송 정보</p>
                <div class="shipping_contents">
                    <table class="shipping_info_table">
                        <colgroup>
                            <col class="th_area">
                            <col class="td_area">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>배송지 확인</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>받으실 분</th>
                                <td><input placeholder="나나나"></td>
                            </tr>
                            <tr>
                                <th>받으실 곳</th>
                                <td style="display : flex; flex-direction : column;">
                                    <div class="shipping_add1">
                                        <input placeholder="우편번호" readonly id="postcode">
                                        <button type="button">우편번호 검색</button>
                                    </div>
                                    <div class="shipping_add2">
                                        <input placeholder="주소1" readonly id="roadaddress">
                                        <input placeholder="000-0000-0000">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td><input placeholder=""></td>
                            </tr>
                            <tr>
                                <th>휴대폰번호</th>
                                <td><input placeholder="- 제외 입력"></td>
                            </tr>
                            <tr>
                                <th>배송메세지</th>
                                <td><input placeholder=""></td>
                            </tr>
                            <tr>
                                <th>회원정보 반영</th>
                                <td style="display:flex; flex-direction:column; align-items: flex-start;">
                                    <el-checkbox label="나의 배송지에 추가합니다." name="type" id="add_checkbox"></el-checkbox>
                                    <div class="chk_box">
                                        <el-checkbox label="위 내용을 회원정보에 반영합니다." name="type" id="add_checkbox"></el-checkbox>
                                        <span>(주소/전화번호/휴대폰번호)</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="pay_section">
                <p>결제 정보</p>
                <div class="pay_contents">
                    <table class="pay_info_table">
                        <colgroup>
                            <col class="th_area">
                            <col class="td_area">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>합계 금액</th>
                                <td><p>0 원</p></td>
                            </tr>
                            <tr>
                                <th>배송비</th>
                                <td><p>0 원</p></td>
                            </tr>
                            <tr>
                                <th>복지혜택</th>
                                <td>
                                    <div class="point_box" style="display : inline-flex; align-items: center;">
                                        <p>- 0 원</p>
                                        <span>(제품 0, 직원 0, 혜택 0)</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>혜택 사용</th>
                                <td><button type="button" id="point_btn">혜택 조회 및 적용</button></td>
                            </tr>
                            <tr>
                                <th>최종 결제 금액</th>
                                <td><p>0 원</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="payment_section">
                <p>결제방법</p>
                <div class="payment_contents">
                    <div class="payment_method_section">
                        <dl class="payment_method_select">
                            <dt>일반결제</dt>
                            <dd>
                                <ul>
                                    <li>
                                        <input type="radio" id="creditCard" value="0" name='paymentMethod'>
                                        <label for="creditCard">신용카드</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="transfer" value="1" name='paymentMethod'>
                                        <label for="transfer">계좌이체</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="virtualAccount" value="2" name='paymentMethod'>
                                        <label for="virtualAccount">가상계좌</label>
                                    </li>   
                                    <li>
                                        <input type="radio" id="phonePayment" value="3" name='paymentMethod'>
                                        <label for="phonePayment">휴대폰결제</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="kakaoPay" value="4" name='paymentMethod'>
                                        <label for="kakaoPay">카카오페이</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="payco" value="5" name='paymentMethod'>
                                        <label for="payco">페이코</label>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                    <div class="payment_total_section">
                        <span>최종 결제 금액</span>
                        <p>totalOrderPriceF</p>
                    </div>
                </div>
                <el-checkbox label="(필수)구매하실 상품의 결제정보를 확인하였으며, 구매진행에 동의합니다." name="type" id="checkbox_agree"></el-checkbox>
            </div>
            <div class="orderBtn_container">
                <button id="keepShopping">장바구니 가기</button>
                <button id="goCheckout" @click="goOrder">결제하기</button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import axios from 'axios';
import Footer from './Footer.vue';
import gift from '@/assets/gift.png';
import select_arrow_down from '@/assets/select_arrow_down.png';

    export default {
        data(){
            return{
                token : sessionStorage.getItem("TOKEN"),
                gift,
                selected : '',
                isOpen : false,
                select_arrow_down,
                cartItemList : [],
                eachProductTotalPrice : 0,
                totalPrice : 0,
                totalPriceF : 0,
                totalShippingPrice : 0,
                totalShippingPriceF : 0,
                totalOrderPrice : 0,
                totalOrderPriceF : 0,
                eachPrice : [],

                selector_style : {
                    display: "block",
                    color : "black",
                    border: "none",
                    width: "137px",
                    height: "0",
                    opacity: "1",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    transition: "0.3s",
                    position: "relative",
                    background: "white",
                    flexFlow: "column",
                    zIndex: '100000',
                }
            }
        },
        components:{
            Footer : Footer,
        },
        async created(){
            await this.handleList();
        },
        methods : {
            openOption(){
                this.selector_style.height = "fit-content";
                this.selector_style.border= "1px solid rgb(197, 197, 197)";
            },
            closeOptions() {
                this.selector_style.height = "0px";
                this.selector_style.border = "none";
                this.selector_style.backgroundColor = "white";
            },
            async handleList(){
                const url = `/order/cart`;
                const headers = { "token": this.token};
                const result = await axios.get(url, {headers});
                console.log(result);
                if(result.data.ret === 1){
                    this.cartItemList = result.data.data;
                    this.total = this.cartItemList.length;
                }
                await this.getTotalPrice();
                this.eachProductTotalPrice = this.eachPrice;
            },
            async getTotalPrice(){
                this.totalPrice = 0;
                this.totalShippingPrice = 0;

                for(var i=0; i<this.cartItemList.length; i++){
                    this.eachPrice[i] = this.cartItemList[i].product_count * this.cartItemList[i].product_price;
                    this.totalPrice += this.eachPrice[i];

                    this.totalPriceF = this.totalPrice.toLocaleString();

                    if(this.totalPrice < 30000){
                        this.totalShippingPrice += 2500;

                        this.totalShippingPriceF = this.totalShippingPrice.toLocaleString();
                    }
                }

                this.totalOrderPrice = this.totalPrice + this.totalShippingPrice;

                this.totalOrderPriceF = this.totalOrderPrice.toLocaleString();
            },
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

/* 제품 주문 리스트 */
.cart_list_section {
    /* border : 1px solid black; */
    width : 100%;
    padding : 0em 0em 6em 0em;
    height : fit-content;
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    flex-direction: column;
}
.cart_list_section p {
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    margin : 15px 0px;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 1.8em;
    font-weight: bold;
}
.list_total_section{
    width : 100%;
    height : 100px;
    background-color: #f2f2f2;
    display : inline-flex;
    align-items: center;
    justify-content: center;
}
.list_total_section span{
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-size : 1.1em;
    margin : 0px 5px;
}
.list_total_section span:first-child{
    margin : 0px 15px;
}
.list_total_section p{
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    margin : 0;
    font-size : 1.1em;
}

/* 사은품 섹션 */
.gift_section {
    width : 100%;
    /* border : 1px solid black; */
    height : fit-content;
    display : flex;
    padding : 0em 0em 6em 0em;
    flex-direction: column;
}
.gift_title{
    width : 100%;
    height : fit-content;
    align-items: baseline;
    display : inline-flex;
}
.gift_title p {
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    margin : 15px 0px;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 1.8em;
    font-weight: bold;
}
.gift_title span {
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 0.9em;
    color: #808080;
    margin-left: 20px;
}
.gift_contents {
    border-top : 1px solid black;
    border-bottom: 1px solid  #d3d3d380;
    width : 100%;
    height : fit-content;
    display : inline-flex;
    align-items: center;
    padding : 20px 0px;
}
.gift_contents #checkbox{
    /* border : 1px solid black; */
    margin : 0px 15px;
}
.gift_contents p{
    font-size : 16px;
    margin : 0px 15px;
}

/* 주문자 정보 섹션 */
.member_section,
.shipping_section,
.pay_section {
    /* border: 1px solid black; */
    width : 100%;
    padding : 0em 0em 6em 0em;
    height : fit-content;
}
.member_section > p,
.shipping_section > p,
.pay_section > p,
.payment_section > p{
    width : fit-content;
    height : fit-content;
    margin : 15px 0px;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 1.8em;
    font-weight: bold;
}
.member_contents,
.shipping_contents,
.pay_contents {
    border-top: 2px solid black;
    border-bottom: 1px solid  #d3d3d380;
    width : 100%;
    height : fit-content;
}
.member_info_table,
.shipping_info_table,
.pay_info_table {
    /* border: 1px solid red; */
    width : 100%;
    margin : 20px 0px;
}
.member_info_table th,
.shipping_info_table th,
.pay_info_table th {
    /* border: 1px solid blue; */
    text-align: left;
    width : 10%;
    height : 50px;
    font-size: 14px;
    font-weight: 100;
    color : #8f8f8f;

}
.member_info_table td {
    /* border: 1px solid blue; */
    width : 415px;
    font-size: 13px;
    font-weight: 100;
    color : black;
    height : 50px;
    display : inline-flex;
    letter-spacing: -0.02em;
    align-items: center;
}
.member_info_table td input {
    border :1px solid #ccc;
    width : 415px;
    padding : 5px;
    height : 30px;
}
.member_info_table td input:focus,
.shipping_info_table td input:focus {
    outline: none;
}
#email_section{
    border :1px solid #ccc;
    width : 254px;
    padding : 5px;
    height : 30px;
}
/* 이메일 선택 */
.select-option{
    width: 137px;
    display: block;
    margin-left: 10px;
}
.select-box{
    border: 1px solid rgb(197, 197, 197);
    color : rgb(117, 117, 117);
    overflow: hidden;
    width: 137px;
    height:39px;
    position:relative;
    display: inline-block;
}
.select-box > img {
    width: 15px;
    height: 8px;
    top: 40%;
    right: 10%;
    cursor : pointer;
    position: absolute;
}
.selected {
    width: 110px;
    height: 100%;
    /* border: 1px solid black; */
    background: rgb(255, 255, 255);
    color : rgb(37, 36, 36);
    position: absolute;
    text-align: left;
    font-size: 15px;
    padding: 10px 0px 8px 8px;
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
.options-container input[type="radio"]{
    display: none;
}

/* 배송지 정보 섹션 */
.shipping_info_table td {
    /* border: 1px solid blue; */
    width : 90%;
    font-size: 13px;
    font-weight: 100;
    color : black;
    padding : 5px;
    height : fit-content;
    display : inline-flex;
    letter-spacing: -0.02em;
    align-items: center;
}
.shipping_info_table td input {
    border :1px solid #ccc;
    width : 415px;
    padding : 5px;
    height : 30px;
}
.shipping_add1, .shipping_add2 {
    width : 100%;
    margin: 5px 0px;
    /* border : 1px solid blue; */
    display : inline-flex;
}
.shipping_add1 #postcode{
    width : 290px;
    /* border : 1px solid red; */
}
.shipping_add1 button {
    width : 115px;
    border : 1px solid black;
    background-color: white;
    padding : 5px;
    margin : 0px 10px;
    cursor : pointer;
}
.shipping_add2 #roadaddress{
    width : 435px;
    margin-right: 10px;
}
#add_checkbox{
    height : fit-content;
    margin : 5px 0px;
}
.chk_box {
    display : inline-flex;
    width : fit-content;
    align-items: center;
}
.chk_box span{
    margin-left: 5px;;
    color : rgb(117, 117, 117);
}

/*  결제 정보 섹션 */
.pay_info_table td {
    /* border : 1px solid red; */
    width : 415px;
    font-size: 13px;
    font-weight: 100;
    color : black;
    height : 50px;
    display : inline-flex;
    letter-spacing: -0.02em;
    align-items: center;
}
.pay_info_table p{
    font-size: 18px;
}
.point_box span {
    font-size: 16px;
    color : rgb(117, 117, 117);
    margin-left: 5px;
}
#point_btn {
    width : 125px;
    height : 45px;
    border : 1px solid black;
    background-color: white;
    padding : 5px;
    cursor : pointer;
}

/* 결제 수단 섹션 */
.payment_section {
    /* border: 1px solid black; */
    width : 100%;
    padding : 0em 0em 3em 0em;
    height : fit-content;
}
.payment_contents {
    border-top: 2px solid black;
    width : 100%;
    height : fit-content;
}
.payment_method_section{
    width : 100%;
}
.payment_method_section .payment_method_select{
    border-top: 0.5px solid rgb(219, 219, 219);
    width : 98%;
    height: 70px;
    margin : 0;
    padding-left : 20px;
    display: flex;
    align-items: center;
}
.payment_method_select dl{
    display : inline-flex;
}
.payment_method_select dt{
    /* border : 1px solid red; */
    display : inline-flex;
    font-size : 14px;
    font-weight: bold;
}
.payment_method_select dd{
    font-size : 14px;
    /* border : 1px solid red; */
}
.payment_method_select dd ul{
    /* border : 1px solid red; */
    margin-left: 20px;
    display : inline-flex;
    padding : 0;
}
.payment_method_select dd ul li{
    list-style: none;
    display: inline-flex;
    margin-right: 30px;
    align-items: center;
}
.payment_method_select dd ul li label{
    margin-left : 5px;
}
.payment_total_section{
    width : 100%;
    height : 100px;
    background-color: #f2f2f2;
    display : inline-flex;
    align-items: center;
    justify-content: center;
}
.payment_total_section span{
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-size : 1.1em;
    margin : 0px 5px;
    font-weight: bold;
}
.payment_total_section span:first-child{
    margin : 0px 15px;
}
.payment_total_section p{
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    margin : 0;
    font-size : 1.6em;
    font-weight: bold;
}
#checkbox_agree{
    width: 100%;
    display: flex;
    margin : 40px 0px;
    justify-content: center;
}

.orderBtn_container{
    width : 100%;
    height : 100px;
    /* border : 1px solid red; */
    display : inline-flex;
    align-items: center;
    justify-content: center;
}
.orderBtn_container button{
    width : 25%;
    height : 70%;
    margin : 0px 20px;
    font-size: 16px;
    cursor : pointer;
}
.orderBtn_container #keepShopping{
    background-color: white;
    border : 1px solid black;
}
.orderBtn_container #goCheckout{
    background-color: black;
    color : white;
    border : none;
}
</style>