<template>
  <div class="wrapper">
    <div class="header">
      <div id="logo">LUSH</div>
      <nav>
        <ul>
          <li><a href="#">제품</a></li>
          <li><a href="#">러쉬소개</a>
            <ul>
              <li><a href="#">러쉬소개</a>
               <ul>
                  <li><a href="#">러쉬역사</a></li>
                  <li><a href="#">이념과가치</a></li>
               </ul>
              </li>
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
          </li>
        </ul>
      </nav>
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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
body {
  margin: 0;
  width: 100%;
}
#logo{
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: white;
  letter-spacing: 2px;
  padding-left: 160px;
}
.img{
  /* padding-right: 200px; */
  width:max-content;
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
  display: inline-block;
  /* padding-left: 160px; */
}

.content {
  width: 100vw;
  grid-area: content;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
}

.header {
  grid-area: header;
  display: inline-block;
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
nav {
  text-align:center;
  width: 500px;
  background: #000000;
  padding: 0;
  margin: 0;
  height: 60px;
  position:relative;
  z-index: 10000;
  display: inline-block;
}
nav ul {
  background: #000000;
  list-style:none;
  padding:0 20px;
  margin: 0;
  height: 80px;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  color:#ffffff;
  display:block;
  padding:0px 40px;
  text-decoration:none;
  float: left;
  height: 60px;
  line-height: 60px;
}
nav ul li ul a {
  color:#807e7e;
}
nav ul li ul li a{
  color: #FFFFFF;
}
nav ul li a:hover{
    color:#FFFFFF;
}
nav ul li ul li a:hover{
    color:#FFFFFF;
}
nav ul li ul li ul li a:hover > {
    color:#FFFFFF;
    transition: color .2s;
}

nav ul ul {
  background: #333;
  padding:0;
  text-align: center;
  display: none;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0px;
}
nav ul li:hover > ul {
  display:block;
}
nav ul li ul li ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
nav ul li ul li ul li a{
  display: block;
  padding: 5px;
  color:  rgb(146, 146, 146);
  font-size: 14px;
  text-decoration: none;
}
</style>