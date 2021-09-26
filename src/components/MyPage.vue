<template>
    <div class="container">
        <div class="side">
            <div class="item1">
                <h3>마이페이지</h3>
            </div>
            <div class="item2">
                <h4>쇼핑정보</h4>
                <ul>
                    <li><a href="#">주문목록/배송조회</a></li>
                    <li><a href="#">취소/반품/교환내역</a></li>
                    <li><a href="#">환불/입금내역</a></li>
                    <li><a href="#">찜리스트</a></li>
                </ul>
            </div>
            <div class="item4">
                <h4>내 덕찌</h4>
                <ul>
                    <li><a href="#">2021</a></li>
                    <li><a href="#">2020</a></li>
                    <li><a href="#">2019</a></li>
                </ul>
            </div>
            <div class="item3">
                <h4>스파</h4>
                <ul>
                    <li><a href="#">스파 주문 내역</a></li>
                    <li><a href="#">바우처등록/예약</a></li>
                    <li><a href="#">스파 예약현황</a></li>
                    <li><a href="#">스파 이용안내</a></li>
                </ul>
            </div>
            <div class="item5">
                <h4>혜택관리</h4>
                <ul>
                    <li><a href="#">선물</a></li>
                </ul>
            </div>
            <div class="item6">
                <h4>고객센터</h4>
                <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">1:1문의</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="item7">
                <h4>회원정보</h4>
                <ul>
                    <li><a href="#">회원정보 변경</a></li>
                    <li><a href="#">회원 탈퇴</a></li>
                    <li><a href="#">배송자 관리</a></li>
                </ul>
            </div>
            <div class="item8">
                <h3>
                    <a href="#">나의 플러스 리뷰</a>
                </h3>
            </div>
        </div>
        <div class="main">
            <div class="menu1">
                <div class="member-img">
                    <img src="https://lush.co.kr/data/icon/group_image/ico_member_upload1.png" alt="">
                </div>
                <div class="member-text">
                    <p>정지희님의</p>
                    <p>회원등급은 일반회원등급 입니다.</p>
                </div>
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
                                <span>0</span>
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
            <div class="menu2">
                <div class="menu2-header">
                    <h2>최근 주문 정보</h2>
                    <p>최근 30일 내에 주문하신 내역입니다.</p>
                </div>
                <div class="menu2-body">
                    
                </div>
            </div>
            <div class="menu4">

            </div>
        </div>
    </div>
    <Footer></Footer>
        
</template>

<script>
import icon1 from '@/assets/ticket.png';
import icon2 from '@/assets/duczzi.png';
import icon3 from '@/assets/qna.png';

import Footer from './Footer.vue'
    export default {
        data(){
            return{
                icon1 : icon1,
                icon2 : icon2,
                icon3 : icon3,
            }
        },
        components:{
            Footer : Footer
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');

.container{
    display : grid;
    grid-template-columns : 15% 1fr;
    grid-template-rows: 100%; 
    height : 100%;
    grid-template-areas :
        "side main";
    margin: 0 420px 0 420px;
    padding: 0;
}
.side{
    grid-area : side;
    grid-template-rows: 115px 147px 119px 147px 63px 119px;
    margin-right: 20px;
    box-sizing: content-box;
    font-family: 'Roboto', sans-serif;
    font-family: 'Nanum Gothic', sans-serif;
    /* padding: 90px 0 100px 0; */
}
.main{
    grid-area : main;
    grid-template-rows: repeat(4, 1fr);
    border: 1px solid black;
    padding: 60px 0 800px 0;
}
.item1{
    font-size: 16px;
    color: black;
    padding-top: 40px;
    padding-left: 2px;
}
ul{
    list-style:none;
    padding-left: 8px;
    margin-top: 10px;
}
h4{
    margin-bottom: 0;
    font-size: 13px;
    color: #333;
    padding-top: 10px;
}
li a{
    text-decoration: none;
    color: #717171;
    font-size: 11px;
}
.item8 a{
    color: #333;
    text-decoration: none;
    font-size: 13px;
}
.menu1{
    border: 1px solid #e9e9e9;
    padding: 20px 20px 20px 10px;
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
    display: table-cell;
    width: 146px;
    height: 77px;
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
    border: 1px solid #e3e3e3;
    padding: 10px 10px 10px 0;
    display: inline-block;
}
.clear{
    float: left;
    margin-left: 20px;
    list-style: none;
    display: block;
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
</style>