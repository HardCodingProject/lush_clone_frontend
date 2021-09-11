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
                  </ul>
                </li>
                <li><a href="#">신제품</a>
                  <ul>
                    <li><a href="#">퍼퓸디스커버리기프트</a></li>
                    <li><a href="#">버블바큐레이션</a></li>
                    <li><a href="#">비건메이크업</a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </li>
          
          <li>
            <a href="#">러쉬 소개</a>
          </li>
          <li>
            <a href="#">매장 안내</a>
          </li>
        </ul>
      </div>
      <div class="img">
        <img :src = 'search'>
        <img :src = 'shop'>
        <img :src = 'login'>
      </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
    
    <div class="footer">Footer</div>
  </div>
</template>

<script>
import shop from '@/assets/shop.png';
import login from '@/assets/login.png'
import search from '@/assets/search.png'

export default {
  data(){
    return {
      listOne : true,
      shop   : shop,
      login  : login,
      search : search
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
  padding-right: 180px;
}
img{
  width: 20px;
  height: 20px;
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
}

.footer {
  grid-area: footer;
}

.wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100px 670px 200px; 
  grid-template-areas:
  "header"
  "content"
  "footer";
  background-color: rgb(167, 89, 89);
  color: rgb(68, 68, 68);
}

.header,
.footer {
  background-color: rgb(0, 0, 0);
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
  height: 260px;
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
  min-width: 180px;
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
ul li{
	list-style: none;
}
</style>