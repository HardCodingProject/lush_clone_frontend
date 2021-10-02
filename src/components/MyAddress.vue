<template>
    <div class="mypagewrap">
        <div class="menu1">
            <div class="menu1_memberinfo">
                <div class="member-img">
                    <img src="https://lush.co.kr/data/icon/group_image/ico_member_upload1.png" alt="">
                </div>
                <div class="member-text">
                    <p>정지희님의</p>
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
            <div class="header">
                <h2>배송지 관리</h2>
                <h3>배송지 관리 내역 총<b class="c-red">0</b>건</h3>
                <div class="add-address">
                    <a href="">+새배송지추가</a>
                </div>
            </div>
            <div class="menu2-body">
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
                        <tr>
                            <td colspan="5" class="no-data">조회내역이 없습니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import icon1 from '@/assets/ticket.png';
import icon2 from '@/assets/duczzi.png';
import icon3 from '@/assets/qna.png';
    export default {
        data(){
            return{
                icon1 : icon1,
                icon2 : icon2,
                icon3 : icon3,
            }
        },
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
    margin: 60px 0 0;
}
.header{
    margin: 0 0 5px 0;
    position: relative;
    display: block;
    background: white;
}
.header h2{
    display: inline-block;
    vertical-align: middle;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 16px;
    color: #111;
}
.header h3{
    display: inline;
    vertical-align: middle;
    font-size: 11px;
    color: #333;
    font-family: 'Nanum Gothic', sans-serif;
    margin: 2px 0 0 10px;
}
.add-address{
    display: inline;
    float: right;
    margin-right: 8px;
}
.add-address a{
    width: 121px;
    height: 30px;
    line-height: 28px;
    background: #979797;
    color: #fff;
    border: 1px solid #979797;
    text-decoration: none;
    font-size: 10px;
    padding: 5px 10px;
}
.menu2-body{
    padding: 0px 10px 10px 0;
    display: block;
}
.goods-board{
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
</style>