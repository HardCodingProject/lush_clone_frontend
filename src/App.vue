<template>
  <div class="wrapper">
    <div class="header">
      <span id="logo">LUSH</span>
      <div id="menu">
        <ul class="top_menu">
          <li class="dropdown" @mouseover="listOne = true" 
              @mouseleave="listOne = false">
            <a href="#" class="dropdown-cont" >제품</a>
            <div class="dropdown-menu" >
              uiui
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

      <span id="logo">LUSH</span>
    </div>

    <div class="content">content</div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      listOne : false,
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
#logo{
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: white;
  letter-spacing: 2px;
  padding-left: 90px;
}

.content {
  grid-area: content;
  background-color: rgb(205, 228, 79);
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
  grid-template-rows: 50% 300% 100px; 
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
  width: 20px;
  padding: 20px;
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
    letter-spacing: -0.5px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    text-align: center;
    position: relative;
}
.dropdown_menu{
  letter-spacing: -0.5px;
    -webkit-font-smoothing: antialiased;
  list-style: none;
  margin: 0;
  position: absolute;
  top: 500px;
  left: 0;
  width: 100%;
  padding: 50px 0 50px;
  background: #333;
  text-align: left;
  z-index: 100;
}

</style>