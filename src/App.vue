<template>
  <div class="wrapper">
    <div class="header">
      <span id="logo">LUSH</span>
      <div id="menu">
        <ul class="top_menu">
          <li class="dropdown" @mouseover="listOne = true" @mouseleave="listOne = false">
            <router-link to="/join" class="dropdown-cont">제품</router-link> 
            <div class="dropdown-menu" v-if="listOne">
              <ul class="menu">
                <li><a href="#">베스트</a>
                  <ul>
                    <li><a href="#">주간베스트</a></li>
                    <li><a href="#">별다섯개후기</a></li>
                    <li><a href="#">온라인전용</a></li>
                    <li><a href="#">국내제조</a></li>
                    <li><a href="#">네이키드</a></li>
                    <li><a href="#">선물고수되기</a></li>
                  </ul>
                </li>
                <li><a href="#">신제품</a>
                  <ul>
                    <li><a href="#">퍼퓸디스커버리기프트</a></li>
                    <li><a href="#">버블바큐레이션</a></li>
                    <li><a href="#">비건메이크업</a></li>
                    <li><a href="#">기프트</a></li>
                    <li><a href="#">립스틱</a></li>
                  </ul>
                </li>
                <li><a href="#">배쓰</a>
                  <ul>
                    <li><a href="#">배쓰밤</a></li>
                    <li><a href="#">배쓰오일</a></li>
                    <li><a href="#">비건메이크업</a></li>
                    <li><a href="#">펀</a></li>
                  </ul>
                </li>
                <li><a href="#">샤워</a>
                  <ul>
                    <li><a href="#">솝</a></li>
                    <li><a href="#">샤워젤&젤리</a></li>
                    <li><a href="#">보디컨디셔너</a></li>
                    <li><a href="#">샤워밤</a></li>
                    <li><a href="#">샤워오일</a></li>
                    <li><a href="#">스크럽&버터</a></li>
                    <li><a href="#">펀</a></li>
                  </ul>
                </li>
                <li><a href="#">보디</a>
                  <ul>
                    <li><a href="#">클렌져</a></li>
                    <li><a href="#">로션</a></li>
                    <li><a href="#">핸드앤풋</a></li>
                    <li><a href="#">마사지바</a></li>
                    <li><a href="#">더스팅파우더</a></li>
                    <li><a href="#">쉐이빙크림</a></li>
                  </ul>
                </li>
                <li><a href="#">페이스</a>
                  <ul>
                    <li><a href="#">클렌져</a></li>
                    <li><a href="#">페이스마스크</a></li>
                    <li><a href="#">토너</a></li>
                    <li><a href="#">모이스춰라이져</a></li>
                    <li><a href="#">프라이머</a></li>
                    <li><a href="#">립</a></li>
                    <li><a href="#">쉐이빙크림</a></li>
                  </ul>
                </li>
                <li><a href="#">헤어</a>
                  <ul>
                    <li><a href="#">샴푸바</a></li>
                    <li><a href="#">샴푸</a></li>
                    <li><a href="#">컨디셔너</a></li>
                    <li><a href="#">트리트먼트</a></li>
                    <li><a href="#">스타일링</a></li>
                  </ul>
                </li>
                <li><a href="#">메이크업</a>
                  <ul>
                    <li><a href="#">페이스파우더</a></li>
                    <li><a href="#">아이메이크업</a></li>
                    <li><a href="#">립</a></li>
                    <li><a href="#">파운데이션</a></li>
                    <li><a href="#">스킨틴트</a></li>
                    <li><a href="#">비건브러쉬</a></li>
                  </ul>
                </li>
                <li><a href="#">퍼퓸</a>
                  <ul>
                    <li><a href="#">보디스프레이</a></li>
                    <li><a href="#">퍼퓸라이브러리</a></li>
                    <li><a href="#">코어레인지</a></li>
                    <li><a href="#">솔리드퍼퓸</a></li>
                    <li><a href="#">워시카드</a></li>
                    <li><a href="#">퍼퓸낫랩</a></li>
                    <li><a href="#">르네상스퍼퓸</a></li>
                  </ul>
                </li>
                <li><a href="#">기프트</a>
                  <ul>
                    <li><a href="#">기프트베스트</a></li>
                    <li><a href="#">1-3만원대</a></li>
                    <li><a href="#">4-6만원대</a></li>
                    <li><a href="#">7만원이상</a></li>
                    <li><a href="#">낫랩</a></li>
                    <li><a href="#">스웨그</a></li>
                    <li><a href="#">악세사리</a></li>
                    <li><a href="#">북</a></li>
                  </ul>
                </li>
                <li><a href="#">비건</a>
                  <ul>
                    <li><a href="#">배쓰</a></li>
                    <li><a href="#">샤워</a></li>
                    <li><a href="#">보디</a></li>
                    <li><a href="#">페이스</a></li>
                    <li><a href="#">헤어</a></li>
                    <li><a href="#">메이크업</a></li>
                    <li><a href="#">퍼퓸</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li class="dropdown" @mouseover="listTwo = true" @mouseleave="listTwo = false">
            <router-link to="/join" class="dropdown-cont">러쉬 소개</router-link>
            <div class="dropdown-menu1" v-if="listTwo">
              <ul class="menu1">
                <li><a href="#">러쉬소개</a>
                  <ul>
                    <li><a href="#">러쉬역사</a></li>
                    <li><a href="#">이념과가치</a></li>
                  </ul>
                </li>
                <li><a href="#">러쉬이야기</a></li>
                <li><a href="#">채러티팟</a></li>
                <li><a href="#">커뮤니티</a>
                  <ul>
                    <li><a href="#">젤러쉬</a></li>
                    <li><a href="#">덕찌</a></li>
                  </ul>
                </li>
                <li><a href="#">서명캠페인</a></li>
                <li><a href="#">기업선물</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">매장 안내</a>
          </li>
        </ul>
      </div>
      <div class="img">
        <img :src = 'search' id="img1">
        <img :src = 'shop' id="img2">
        <img :src = 'login' id="img3">
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
    }
  },
  methods: {

  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
body {
  margin: 0;
}
.img{
  padding-right: 200px;
}
#img1{
  width: 25px;
  height: 25px;
  margin-right: 40px;
}
#img2{
  width:30px;
  height: 30px;
  margin-right: 40px;
}
#img3{
  width: 30px;
  height: 30px;
  margin-right: 30px;
}
#logo{
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: white;
  letter-spacing: 2px;
  padding-left: 160px;
}

.content {
  grid-area: content;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
}

.header {
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
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
  background-color: rgb(167, 89, 89);
  color: rgb(68, 68, 68);
}

.top_menu li{
  float: left;
  margin-right: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
.top_menu li a{
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  /* width: 20px; */
  padding: 49px;
}
.top_menu{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.dropdown{
    color: rgb(233, 22, 22);
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    text-align: center;
    position: relative;
}
.dropdown-menu{
  list-style: none;
  margin: 0;
  position: absolute;
  top: 60px;
  left: 0;
  width:100vw;
  margin-left: calc(-39.5vw + 50%);  
  height: 370px;
  background: #333;
  display: flex;
  justify-content: center;
  z-index: 100;
  transform: translateY();
}
.menu{
  font-weight: 600;
  margin: 0% auto;
  padding: 0;
  list-style: none;
  text-align: left;
}
.menu li a {
  display: block;
  padding: 20px 20px 20px 0px;
  margin-top: 30px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: rgb(250, 250, 250);
  text-decoration: none;
}
.menu li {
  display:block;
  float: left;
  position: relative;
  background: #333;
  color: rgb(70, 63, 63);
  min-width: 150px;
  margin: 0 auto;
}
.menu li ul {
  position: absolute;
  left: 0;
  margin: 0;
  padding: 0;
}
.menu li ul li a{
  left: 0;
  margin: 0;
  padding: 0;
  color: rgb(146, 146, 146);
  font-size: 14px;
  line-height: 2.4;
}
.menu li ul li a:hover {
  color: rgb(255, 255, 255);
  transition: color .2s;
}
.dropdown-menu1{
  list-style: none;
  margin: 0;
  position: absolute;
  top: 60px;
  left: 0;
  width:100vw;
  margin-left: calc(-49vw + 50%);  
  height: 200px;
  background: #333;
  display: flex;
  justify-content: center;
  z-index: 100;
  transform: translateY();
}
.menu1{
  font-weight: 600;
  margin: 0% auto;
  padding: 0;
  list-style: none;
  text-align: left;
}
.menu1 li a {
  display: block;
  padding: 20px 20px 20px 0px;
  margin-top: 30px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: rgb(250, 250, 250);
  text-decoration: none;
}
.menu1 li {
  display:block;
  float: left;
  position: relative;
  min-width: 150px;
  margin: 0 auto;
}
.menu1 li ul {
  position: absolute;
  left: 0;
  margin: 0;
  padding: 0;
}
.menu1 li ul li a{
  left: 0;
  margin: 0;
  padding: 0;
  color: rgb(146, 146, 146);
  font-size: 14px;
  line-height: 2.4;
}
.menu1 li ul li a:hover {
  color: rgb(255, 255, 255);
  transition: color .2s;
}
</style>