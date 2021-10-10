<template>
    <div class="container">
        <div class="side">
            <div class="item1">
                <h3>마이페이지</h3>
            </div>
            <div class="item2">
                <h4>쇼핑정보</h4>
                <ul>
                    <li><a href="#" v-on:click="changeMenu(2)">주문목록/배송조회</a></li>
                    <li><a href="#" v-on:click="changeMenu(3)">취소/반품/교환내역</a></li>
                    <li><a href="#" v-on:click="changeMenu(4)">환불/입금내역</a></li>
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
                    <li><a href="#" v-on:click="changeMenu(5)">회원정보 변경</a></li>
                    <li><a href="#" v-on:click="changeMenu(6)">회원 탈퇴</a></li>
                    <li><a href="#" v-on:click="changeMenu(7)">배송자 관리</a></li>
                </ul>
            </div>
            <div class="item8">
                <h3>
                    <a href="#">나의 플러스 리뷰</a>
                </h3>
            </div>
        </div>
        <div class="main">
            <component v-bind:is="currentMenu"></component>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import MypageBase from './MypageBase.vue';
import MypageShop1 from './MypageShop1.vue';
import MypageShop2 from './MypageShop2.vue';
import MypageShop3 from './MypageShop3.vue';
import MyAddress from './MyAddress.vue';
import MypageMember from './MypageMember.vue';
import MypageMember1 from './MypageMember1.vue';

import Footer from './Footer.vue'

    export default {
        data(){
            return{
                currentMenu: 'mypagebase',
                menus : [ null,'mypagebase','mypageshop1','mypageshop2','mypageshop3','mypagemember','mypagemember1','myaddress'],
            }
        },
        components:{
            Footer : Footer,
            'mypagebase' : MypageBase,
            'mypageshop1' : MypageShop1,
            'mypageshop2' : MypageShop2,
            'mypageshop3' : MypageShop3,
            'myaddress' : MyAddress,
            'mypagemember' : MypageMember,
            'mypagemember1' : MypageMember1,
        },
        methods:{
            changeMenu(num){
                this.currentMenu = this.menus[num]; 
            }
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
    width: 1100px;
    height : 100%;
    grid-template-areas :
        "side main";
    margin: 0 auto;
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
    line-height: 18px;
    
}
.item8 a{
    color: #333;
    text-decoration: none;
    font-size: 13px;
}
</style>