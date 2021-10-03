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
                <h2>환불/입금내역</h2>
            </div>
            <div class="menu2-body">
                <div class="date-ckeck">
                    <h3>조회기간</h3>
                </div>
                <div class="btn">
                    <button>오늘</button>
                </div>
                <div class="btn">
                    <button>7일</button>
                </div>
                <div class="btn">
                    <button>15일</button>
                </div>
                <div class="btn">
                    <button>1개월</button>
                </div>
                <div class="btn">
                    <button>3개월</button>
                </div>
                <div class="btn">
                    <button>1년</button>
                </div>
                <div class="check-cal">
                    <div class="demo-date-picker">
                        <div class="block">
                            <el-date-picker v-model="value1" type="date" placeholder="Pick a day" style="width:140px">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
                <div class="divide">~</div>
                <div class="check-cal2">
                    <div class="demo-date-picker">
                        <div class="block">
                            <el-date-picker v-model="value2" type="date" placeholder="Pick a day" style="width:140px">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
                <div class="submit-block">
                    <button type="submit">조회</button>
                </div>
            </div>
        </div>
        <div class="menu2">
            <div class="tab">
                <a href="" class="on">환불신청내역</a>
                <a href="" class="off">환불/입금처리현황</a>
            </div>
            <div class="header3">
                <h2>환불/입금 내역 총<b class="c-red">0</b>건</h2>
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
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: 'Today',
                    value: new Date(),
                }, {
                    text: 'Yesterday',
                    value: (() => {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        return date
                    })(),
                }, {
                    text: 'A week ago',
                    value: (() => {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        return date
                    })(),
                }],
                icon1 : icon1,
                icon2 : icon2,
                icon3 : icon3,
                value1 : '',
                value2 : '',
            }
        },
         props: {
            fieldValue: [String, Boolean]
        },

        methods: {
            updateValue(event) {
                console.log('update-----', event)
                this.$emit('update:fieldValue', event);
            },
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
/* @import url("//unpkg.com/element-plus/lib/theme-chalk/index.css"); */
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
    display: block;
    margin: 0 0 10px 0;
    position: relative;
    background: white;
    color: #333;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    padding-left: 5px;
}
.header h2{
    display: inline-block;
    vertical-align: middle;
    color: #111;
}
.menu2-body{
    overflow: inherit;
    padding: 18px 5px 18px 23px;
    border: 1px solid #e8e8e8;
    display: inline-block;
    width: 93%;;
}
.date-ckeck h3{
    margin: 15px 20px 0 0;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: normal;
    color: #333333;
    float: left;
    vertical-align: middle;
    font-size: 13px;
}
.btn{
    padding: 3px 5px;
    float: left;
}
.btn button{
    color: #8f8f8f;
    font-size: 14px;
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
}
.btn button:hover{
    text-decoration: underline solid #333;
    color: #333;
}
.check-cal{
    float: left;
    vertical-align: middle;
    margin: 0 0 0 50px;
}
.check-cal2{
    float: left;
    vertical-align: middle;
}
.divide{
    padding: 0 3px;
    position: relative;
    padding-top: 10px;
    float: left;
}
.submit-block{
    float: left;
    vertical-align: middle;
}
.submit-block button{
    background: black;
    color: white;
    width: 100px;
    height: 40px;
    font-size: 15px;
    margin: 0 0 0 20px;
}
.header3{
    display: block;
    margin: 0 0 10px 0;
    position: relative;
    background: white;
    color: #333;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 8px;
    -webkit-font-smoothing: antialiased;
    padding-left: 5px;
}
.menu3-body{
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
.tab{
    overflow: hidden;
    margin-bottom: 25px;
    border-bottom: 1px solid #000;
    display: block;
}
.on{
    position: relative;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    font-weight: bold;
}
.off{
    border: 1px solid #e7e7e7;
    text-decoration: none;
    color: #8f8f8f;
}
.tab a{
    width: 20%;
    height: 25px;
    padding: 10px 0 0;
    float: left;
    text-decoration: none;
    font-size: 12px;
    text-align: center;
}
</style>