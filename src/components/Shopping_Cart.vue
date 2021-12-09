<template>
    <div class="shopping_cart">
        <div class="cart_wrapper">
            <div class="cart_title_section">
                <h1>SHOPPING CART</h1>
                <el-breadcrumb separator=">" class="bread_crumb">
                    <el-breadcrumb-item :to="{ path: '/shopping_cart' }">Cart </el-breadcrumb-item>
                    <el-breadcrumb-item>Order </el-breadcrumb-item>
                    <el-breadcrumb-item>Order confirmed</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="cart_list_section">
                <p>제품</p>
                <el-table ref="multipleTable" style="border-top:1px solid black;" :data="itemList" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="100" align="center" v-model="chks"/>
                    <el-table-column label="제품정보" width="430" align="center">
                        <template>
                            <el-image style="width: 135px; height: 150px;" :fit="cover"></el-image>
                            <div class="product_detail_info" style="width: 60%; float:right;  text-align:left; padding:5px 10px;">
                                <span style="font-size:14px; color:#333; font-weight:bold">[  ]</span>
                                <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;"></p>
                                <p style="font-size:14px; color:#E6A23C; margin:0;">쿠폰적용 불가상품</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="수량" width="170" align="center">
                        <template>
                            <el-input-number :min="1" :max="10" @change="handleQuantityChange" size="mini"/>
                            <p type="primary" style="font-size:13px; color:black; margin:10px 0px; cursor:pointer;">변경수량 저장</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="finalPrice" label="금액" width="135" align="center">
                        <template>
                            <p style="font-size:14px; color:black; margin:0;"> 원</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="finalPrice" label="복지혜택" width="135" align="center">
                        <template>
                            <p style="font-size:14px; color:black; margin:0;"> 원</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="shippingCost" label="합계금액"  width="200" align="center">
                        <template>
                            <p style="font-size:13px; color:#333; font-weight:bold; margin:5px 0px;">[]</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="shippingCost" label="배소비"  width="50" align="center">
                        <template>
                            <p style="font-size:13px; color:#333; font-weight:bold; margin:5px 0px;">[]</p>
                            <span style="font-size:13px; color:black; letter: spacing 0.06em;">2,500원 (택배)</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="list_total_section">
                    <span>총 0 개의 금액</span>
                    <p>0 원</p>
                    <span>+ 배송비 </span>
                    <p>0 원</p>
                    <span>= 총 주문금액 </span>
                    <p>0 원</p>
                </div>
                <span id="deleteBtn">삭제하기</span>
                <div class="orderBtn_container">
                    <button id="keepShopping">쇼핑 계속하기</button>
                    <button id="goCheckout">주문하기</button>
                </div>          
            </div>
            <div class="cart_spa_section">
                <div class="cart_spa_title_section">
                    <p>스파</p>
                    <span>바우처는 온라인으로 제공되므로, 실물이 배송되는 제품과는 별도로 결제를 진행할 수 있습니다.</span>
                </div>
                <el-table ref="multipleTable" style="border-top:1px solid black;" :data="itemList" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="100" align="center" v-model="chks"/>
                    <el-table-column label="제품정보" width="430" align="center">
                        <template>
                            <el-image style="width: 135px; height: 150px;" :fit="cover"></el-image>
                            <div class="product_detail_info" style="width: 60%; float:right;  text-align:left; padding:5px 10px;">
                                <span style="font-size:14px; color:#333; font-weight:bold">[  ]</span>
                                <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;"></p>
                                <p style="font-size:14px; color:#E6A23C; margin:0;">쿠폰적용 불가상품</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="수량" width="170" align="center">
                        <template>
                            <el-input-number :min="1" :max="10" @change="handleQuantityChange" size="mini"/>
                            <p type="primary" style="font-size:13px; color:black; margin:10px 0px; cursor:pointer;">변경수량 저장</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="finalPrice" label="금액" width="135" align="center">
                        <template>
                            <p style="font-size:14px; color:black; margin:0;"> 원</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="finalPrice" label="복지혜택" width="135" align="center">
                        <template>
                            <p style="font-size:14px; color:black; margin:0;"> 원</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="shippingCost" label="합계금액"  width="200" align="center">
                        <template>
                            <p style="font-size:13px; color:#333; font-weight:bold; margin:5px 0px;">[]</p>
                        </template>
                    </el-table-column>
                    <el-table-column property="shippingCost" label="배소비"  width="50" align="center">
                        <template>
                            <p style="font-size:13px; color:#333; font-weight:bold; margin:5px 0px;">[]</p>
                            <span style="font-size:13px; color:black; letter: spacing 0.06em;">2,500원 (택배)</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="list_total_section">
                    <span>총 0 개의 금액</span>
                    <p>0 원</p>
                    <span>+ 배송비 </span>
                    <p>0 원</p>
                    <span>= 총 주문금액 </span>
                    <p>0 원</p>
                </div>
                <span id="deleteBtn">삭제하기</span>
                <div class="orderBtn_container">
                    <button id="keepShopping">쇼핑 계속하기</button>
                    <button id="goCheckout">주문하기</button>
                </div>
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

.shopping_cart{
    width: 100%;
    /* height: 100vh; */
    display : flex;
    flex-direction: column;
    font-family: 'Nanum Gothic', sans-serif;
}
.cart_wrapper{
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


.cart_list_section {
    width : 100%;
    height : fit-content;
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    flex-direction: column;
}
.cart_list_section p {
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
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
#deleteBtn{
    width : 100%;
    text-align: left;
    height : fit-content;
    font-size: 13px;
    margin : 20px 0px 10px 3px;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
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
    width : 28%;
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


.cart_spa_section{
    width : 100%;
    height : fit-content;
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
}
.cart_spa_title_section {
    width : 100%;
    height : fit-content;
    display : inline-flex;
    align-items: baseline;
}
.cart_spa_title_section  p {
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 1.8em;
    font-weight: bold;
}
.cart_spa_title_section span {
    /* border : 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 0.8em;
    color: rgb(184, 18, 18);
    margin-left: 20px;
}
</style>