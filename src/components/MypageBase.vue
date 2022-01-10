<template>
    <div class="mypagewrap">
        <div class="menu1">
            <div class="menu1_memberinfo">
                <div class="member-img">
                    <img src="https://lush.co.kr/data/icon/group_image/ico_member_upload1.png" alt="">
                </div>
                <div class="member-text">
                    <p>{{memberName}}님의</p>
                    <p>회원등급은 일반회원등급 입니다.</p>
                </div>
            </div>
            <div class="menu1_membericons">
                <div class="cupon">
                    <img :src="icon1" class="icon-ticket">
                    <p>혜택</p>
                </div>
                <div class="duczzi">
                    <img :src="icon2" class="icon-smile">
                    <p>덕찌</p>
                </div>
                <div class="qna">
                    <img :src="icon3" class="icon-chat">
                    <p>문의</p>
                </div>
            </div>
        </div>
        <div class="menu2">
            <div class="menu2-header">
                <h2>진행 중인 주문</h2>
                <p>최근 30일 내에 진행중인 주문정보입니다.</p>
            </div>
            <div class="menu2-body">
                <ol class="clear"> 
                    <li>
                        <div class="num">
                            <span>0</span>
                        </div>
                        <p class="num-text">입금대기</p>
                        <span class="icon-arr">&nbsp;</span>
                    </li>
                    <li>
                        <div class="num">
                            <span>{{orderCount}}</span>
                        </div>
                        <p class="num-text">결제완료</p>
                        <span class="icon-arr">&nbsp;</span>
                    </li>
                    <li>
                        <div class="num">
                            <span>0</span>
                        </div>
                        <p class="num-text">상품준비중</p>
                        <span class="icon-arr">&nbsp;</span>
                    </li>
                    <li>
                        <div class="num">
                            <span>0</span>
                        </div>
                        <p class="num-text">배송중</p>
                        <span class="icon-arr">&nbsp;</span>
                    </li>
                    <li>
                        <div class="num">
                            <span>0</span>
                        </div>
                        <p class="num-text">배송완료</p>
                        <span class="icon-arr">&nbsp;</span>
                    </li>
                    <li>
                        <div class="num">
                            <span>0</span>
                        </div>
                        <p class="num-text">구매확정</p>
                    </li>
                </ol>
                <div class="order-total">
                    <div class="order1">
                        <span class="title">취소</span>
                        <span class="num1">
                            <span>0</span>
                            건
                        </span>
                    </div>
                    <div class="order1">
                        <span class="title">교환</span>
                        <span class="num1">
                            <span>0</span>
                            건
                        </span>
                    </div>
                    <div class="order1"> 
                        <span class="title">반품</span>
                        <span class="num1">
                            <span>0</span>
                            건
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu3">
            <div class="menu3-header">
                <h2>최근 주문 정보</h2>
                <p>최근 30일 내에 주문하신 내역입니다.</p>
            </div>
            <div class="menu3-body">
                <table class="goods-board"> 
                    <thead>
                        <tr>
                            <th>날짜/주문번호</th>
                            <th>상품명/옵션</th>
                            <th>상품금액/수량</th>
                            <th>주문상태</th>
                            <th>확인/리뷰</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="orderItem in orderList" v-bind:key="orderItem">
                            <td>{{orderItem._id}}</td>
                            <td>{{orderItem.product_name}} / {{orderItem.product_category}}</td>
                            <td>₩{{orderItem.product_price}} / {{orderItem.product_count}}</td>
                            <td>결제완료</td>
                            <td>해당리뷰없음</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="menu4">
            <div class="menu4-header">
                <h2>최근 본 상품</h2>
                <p>{{memberName}}님께서 본 최근 상품입니다.</p>
            </div>
            <div class="menu4-body">
                <table class="goods-board1"> 
                    <tbody>
                        <tr>
                            <td colspan="5" class="no-data">상품이 존재하지 않습니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import icon1 from '@/assets/ticket.png';
import icon2 from '@/assets/duczzi.png';
import icon3 from '@/assets/qna.png';
    export default {
        data(){
            return{
                token : sessionStorage.getItem("TOKEN"),
                icon1 : icon1,
                icon2 : icon2,
                icon3 : icon3,
                memberName : '',
                orderCount : 0,
                orderList : [],
            }
        },
        async created(){
            const url =  `/member/detail`;
            const headers = { "token": this.token};
            const result = await axios.get(url, {headers});
            console.log(result);
            if(result.data.ret === 1){
                this.memberName = result.data.data.name;
            }

            await this.handleOrderList();
        },
        methods : {
            async handleOrderList(){
                const url = `/order/past-order`;
                const headers = { "token": this.token};
                const result = await axios.get(url, {headers});
                console.log(result);
                if(result.data.ret === 1){
                    this.orderList = result.data.data;
                    this.orderCount = this.orderList.length;
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
.mypagewrap{
    width: 100%;
}

.menu1{
    width: 870px;
    border: 1px solid #e3e3e3;
    padding: 20px 20px 20px 10px;
    display: flex;
}
.menu1_membericons{
    /* border: 1px solid black; */
    display: flex;
    width: 400px;

}
.member-img{
    display: table-cell;
    width: 120px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
}
img{
    height: 70px;
    width: 70px;
}
.member-text{
    display: table-cell;
    font-size: 14px;
    font-family: 'Nanum Gothic', sans-serif;
    width: 350px;
}
.cupon, .duczzi, .qna{
    /* border: 1px solid black; */
    display: table-cell;
    width: fit-content;
    height: 77px;
    margin-right: 70px;
    margin-left: 30px;
}

.cupon > p , .duczzi > p , .qna > p{
    text-align: center;
}
.icon-ticket{
    width: 35px;
    height: 25px;
    background-position: 0 0;
}
.icon-smile{
    width: 43px;
    height: 25px;
    background-position: 0 0;
}
.icon-chat{
    width: 35px;
    height: 25px;
    background-position: 0 0;
}

.menu2{
    width : 905px;
    margin-top: 40px;
}
.menu2-header{
    margin-bottom: 10px;
}
.menu2-header h2{
    display: inline-block;
    vertical-align: middle;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 17px;
    color: #111;
}
.menu2-header p{
    display: inline-block;
    vertical-align: middle;
    font-size: 11px;
    color: #787878;
    font-family: 'Nanum Gothic', sans-serif;
    margin: 2px 0 0 10px;
}
.menu2-body{
    width: 890px;
    border: 1px solid #e3e3e3;
    padding: 10px 10px 10px 0;
    display: inline-block;
}

.menu3{
    width : 905px;
    margin-top: 40px;
}
.menu3-header h2{
    display: inline-block;
    vertical-align: middle;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 17px;
    color: #111;
}
.menu3-header p{
    display: inline-block;
    vertical-align: middle;
    font-size: 11px;
    color: #787878;
    font-family: 'Nanum Gothic', sans-serif;
    margin: 2px 0 0 10px;
}
.menu3-body{
    padding: 0px 10px 10px 0;
    display: inline-block;
    height: 150px;
    overflow-y: scroll;
}
.menu4{
    width : 905px;
    margin-top: 40px;
}
.menu4-header h2{
    display: inline-block;
    vertical-align: middle;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 17px;
    color: #111;
}
.menu4-header p{
    display: inline-block;
    vertical-align: middle;
    font-size: 11px;
    color: #787878;
    font-family: 'Nanum Gothic', sans-serif;
    margin: 2px 0 0 10px;
}
.menu4-body{
    padding: 0px 10px 10px 0;
    display: inline-block;
    width: 100%;
}
.clear{
    float: left;
    /* margin-left: 20px; */
    list-style: none;
    display: block;
    padding-left: 10px;
}
.clear:after {
    display: block;
    content: '';
    clear: both;
}
.clear li{
    float: left;
    width: 100px;
    text-align: center;
    list-style: none;
    position: relative;
}
.num{
    margin: 5px 0 0;
    text-align: center;
    display: inline-block;
    background: #f3f3f3;
    border-radius: 20px;
    width: 30px;
    height: 30px;
    line-height: 30px;
}
.num-text{
    display: block;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    margin: 5px 0 0;
}
.icon-arr{
    position: absolute;
    display: block;
    top: 11px;
    right: 9px;
    width: 10px;
    height: 20px;
    background: url(https://lush.co.kr/data/skin/front/howling/img/etc/icon-arr.png) no-repeat top right;
}
.order-total{
    overflow: hidden;
    padding: 2px 55px 2px 65px;
    border-left: 1px solid #e3e3e3;
    width: 100px;
    float: right;
    margin-left: 8.5px;
}
.order1{
    display: block;
    padding: 4px 0;
}
.title{
    font-weight: bold;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 12px;
    color: #333;
}
.order1 .num1{
    float: right;
    color: #7d7d7d;
    font-size: 11px;
    padding-top: 5px;
}
.menu3-body{
    display: block;
}
.goods-board, .goods-board1{
    width: 100%;
    border-top: 1px solid #000;
    border-collapse: collapse;
    vertical-align: middle;
}
thead{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
th{
    padding: 5px 0;
    border-bottom: 1px solid #e7e7e7;
    font-size: 12px;
    color: #8f8f8f;
}
tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.goods-board td{
    height: 75px;
    padding: 10px 0;
    text-align: center;
    color: #797979;
    border-bottom: 1px solid #e7e7e7;
    font-size: 14px;
}
.goods-board1 td{
    height: 75px;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    color: #333333;
}
</style>