<template>
  <div class="wrapper">
    <div class="header">
      <div class="navbar">
        <a href="/" id="Logo">LUSH</a>

        <div class="linkbox">
          <div class="dropdown1">
            <button class="dropbtn1">
              제품
            </button>
            <div class="dropdown-content1">
              <div class="row">
                <div class="column">
                  <h4>베스트</h4>
                  <a href="#">주간베스트</a>
                  <a href="#">별다섯개후기</a>
                  <a href="#">온라인전용</a>
                  <a href="#">국내제조</a>
                  <a href="#">네이키드</a>
                  <a href="#">선물고수되기</a>
                </div>
                <div class="column">
                  <h4>신제품</h4>
                  <a href="#">퍼퓸디스커버리기프트</a>
                  <a href="#">버블바큐레이션</a>
                  <a href="#">비건메이크업</a>
                  <a href="#">기프트</a>
                  <a href="#">립스틱</a>
                </div>
                <div class="column">
                  <h4>배쓰</h4>
                  <a href="#" @click="handleBathbomb(2)">배쓰밤</a>
                  <a href="#">배쓰오일</a>
                  <a href="#">비건메이크업</a>
                  <a href="#">펀</a>
                </div>
                <div class="column">
                  <h4>샤워</h4>
                  <a href="#">솝</a>
                  <a href="#">샤워젤&젤리</a>
                  <a href="#">보디컨디셔너</a>
                  <a href="#">샤워밤</a>
                  <a href="#">샤워오일</a>
                  <a href="#">스크럽&버터</a>
                  <a href="#">펀</a>
                </div>
                <div class="column">
                  <h4>보디</h4>
                  <a href="#">클렌져</a>
                  <a href="#">로션</a>
                  <a href="#">핸드앤풋</a>
                  <a href="#">마사지바</a>
                  <a href="#">더스팅파우더</a>
                  <a href="#">쉐이빙크림</a>
                </div>
                <div class="column">
                  <h4>페이스</h4>
                  <a href="#">클렌져</a>
                  <a href="#">페이스마스크</a>
                  <a href="#">토너</a>
                  <a href="#">모이스춰라이져</a>
                  <a href="#">프라이머</a>
                  <a href="#">립</a>
                  <a href="#">쉐이빙크림</a>
                </div>
                <div class="column">
                  <h4>헤어</h4>
                  <a href="#">샴푸바</a>
                  <a href="#">샴푸</a>
                  <a href="#">컨디셔너</a>
                  <a href="#">트리트먼트</a>
                  <a href="#">스타일링</a>
                </div>
                <div class="column">
                  <h4>메이크업</h4>
                  <a href="#">페이스파우더</a>
                  <a href="#">아이메이크업</a>
                  <a href="#">립</a>
                  <a href="#">파운데이션</a>
                  <a href="#">스킨틴트</a>
                  <a href="#">비건브러쉬</a>
                </div>
                <div class="column">
                  <h4>퍼퓸</h4>
                  <a href="#" @click="handleBodyspray(1)">보디스프레이</a>
                  <a href="#">퍼퓸라이브러리</a>
                  <a href="#">코어레인지</a>
                  <a href="#">솔리드퍼퓸</a>
                  <a href="#">워시카드</a>
                  <a href="#">퍼퓸낫랩</a>
                  <a href="#">르네상스퍼퓸</a>
                </div>
                <div class="column">
                  <h4>기프트</h4>
                  <a href="#">기프트베스트</a>
                  <a href="#">1-3만원대</a>
                  <a href="#">4-6만원대</a>
                  <a href="#">7만원이상</a>
                  <a href="#">낫랩</a>
                  <a href="#">스웨그</a>
                  <a href="#">악세사리</a>
                  <a href="#">북</a>
                </div>
                <div class="column">
                  <h4>비건</h4>
                  <a href="#">배쓰</a>
                  <a href="#">샤워</a>
                  <a href="#">보디</a>
                  <a href="#">페이스</a>
                  <a href="#">헤어</a>
                  <a href="#">메이크업</a>
                  <a href="#">퍼퓸</a>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              러쉬소개
            </button>
            <div class="dropdown-content">
              <div class="row">
                <div class="column">
                  <h4>러쉬소개</h4>
                  <a href="#">러쉬 역사</a>
                  <a href="#">이념과 가치</a>
                </div>
                <div class="column">
                  <h4>러쉬이야기</h4>
                </div>
                <div class="column">
                  <h4>채러티팟</h4>
                </div>
                <div class="column">
                  <h4>커뮤니티</h4>
                  <a href="#">젤러쉬</a>
                  <a href="#">덕찌</a>
                </div>
                <div class="column">
                  <h4>서명캠페인</h4>
                </div>
                <div class="column">
                  <h4>기업 선물</h4>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="add">매장 안내</a>
          <a href="#" class="add">스파</a>
          <a href="#">이벤트</a>
        </div>



        <div class="imgbox">
          <img :src = 'search' id="img1">
          <img :src = 'shop' id="img2" @click="goCart">
          <div class="dropdown2">
            <img :src = 'login' id="img3">
            <div class="dropdown-content2">
              <div class="column2">
                <a href="/login">로그인</a>
                <a href="/join">회원가입</a>
                <a href="#">스카우트</a>
                <a href="#">고객센터</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import shop from '@/assets/shop.png';
import login from '@/assets/login.png';
import search from '@/assets/search.png';

export default {
  data(){
    return {
      listOne : false,
      listTwo : true,
      shop   : shop,
      login  : login,
      search : search,
      code : ''
    }
  },
  methods:{
    handleBathbomb(val){
      this.$router.push({path:'/product_bathbomb', query : {category_code:val}});
    },
    goCart(){
      this.$router.push({path:'/shopping_cart'});
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
body {
  margin: 0;
  width: 100%;
  height: 100vh;
}
.img{
  width: 200px;
  margin: 0;
}
.linkbox{
  overflow: hidden;
  width: fit-content;
  margin-left: 400px;
}
.imgbox{
  width: max-content;
  height: 90px;
  position: absolute;
  right: 10%;
  margin-left: 0;
  display: inline-block;
}
#img1{
  width: 22px;
  height: 22px;
  padding-top: 40px;
  padding-left: 100px;
  margin-right: 40px;
}
#img2{
  width:25px;
  height: 25px;
  margin-right: 40px;
  cursor: pointer;
}
#img3{
  width: 25px;
  height: 25px;
  margin-right: 30px;
  cursor: pointer;
}

.content {
  height: 100vh;
  width: 100vw;
  grid-area: content;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
}

.header {
  grid-area: header;
  display: grid;
  place-items: center;
  background-color: rgb(0, 0, 0);
}

.wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100px 870px; 
  grid-template-areas:
  "header"
  "content";
  /* background-color: rgb(167, 89, 89); */
  color: rgb(68, 68, 68);
  height: 100vh;
}
#Logo{
  position: absolute;
  left: 10%;
  width: max-content;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: white;
  letter-spacing: 2px;
  padding-top: 20px;
  padding-bottom: 0;
}

.navbar {
  overflow: hidden;
  font-family: Arial;
  width: 100%;
  display: inline-flex;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 30px 16px;
  margin-top: 10px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

/* The dropdown container */
.dropdown, .dropdown1 {
  float: left;
  /* overflow: hidden; */
  padding-right: 50px;
  margin-top: 10px;
  /* transform: translateY(10px); transfrom으로 안주면 옆의 다른 로고등이 움직임. 줬더니 드롭다운이 안내려옴*/
}
.dropdown2{
  position: relative;
  height: 100%;
  display: inline-block;
}
.dropdown-content2 {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 220px;
  height: fit-content;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transform: translateY(10px);
  z-index: 100;
}
.dropdown-content2 .column2{
  padding: 0;
  width: 100%;
  display: block;
  height: 100%;
}
.dropdown-content2 .column2 > a {
  float: none;
  display: block;
  border-bottom: 1px solid rgb(187, 187, 187);
  margin: 0;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;
  color: black;
  padding: 16px 15px;
  text-decoration: none;
  display: block;
}
.column2 a:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(230, 230, 230);
  transition: background-color .2s;
}
.dropdown2:hover .dropdown-content2{
  display: block;
}



/* Dropdown button */
.dropdown .dropbtn, .dropdown1 .dropbtn1 {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 30px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  
}

/* Dropdown content (hidden by default) */
.dropdown-content, .dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #333;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
  padding: 16px;
}
.dropdown1:hover .dropdown-content1 {
  display: block;
  padding: 16px;
}
.dropdown-content .column{
  height: 170px;
  margin-right: 20px;
  padding-top: 0px;
  margin-bottom: 10px;
}
.dropdown-content1 .column{
  height: 350px;
  margin-right: 5px;
  padding-top: 0px;
  margin-bottom: 10px;
}
.dropdown-content1 .column:nth-child(2){
  height: 350px;
  margin-right: 40px;
  padding-top: 0px;
  margin-bottom: 10px;
}
/* Create three equal columns that floats next to each other */
.column {
  float:left;
  width: 6.8%;
  height: 160px; /* dropdown메뉴의 높이 */
  padding-top: 10px;
}
.column > h4 {
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
}

/* Style links inside the columns */
.column a {
  float: none;
  color: rgb(146, 146, 146);
  text-decoration: none;
  line-height: 2;
  padding: 0;
  display: block;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: max-content;
}

.row{
  display: flex;
  justify-content: center;
  align-content: center;
}

/* Add a background color on hover */
.column a:hover {
  color: rgb(255, 255, 255);
  transition: color .2s;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

::selection{
  background: black;
  color: #fff;
  text-shadow: none;
}
.add{
  margin-right: 30px;
}
</style>