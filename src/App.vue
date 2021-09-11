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
      <div>
        <img src="data:image/png;base64,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"/>
        <img src="/assets/shop.png">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeWGfZ947mDkWMwt5zHCQIIVqr1rgunc8Hw&usqp=CAU">
      </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
    
    <div class="footer">Footer</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      listOne : true,
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
img{
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
#logo{
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: white;
  letter-spacing: 2px;
  padding-left: 90px;
}

.content {
  grid-area: content;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
}

.header {
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  font-size: 15px;
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