<template>
  <div class="wrapper">
    <div class="header">
      <span id="logo">LUSH</span>
      <div id="menu">
        <a href="#" @mouseover="viewNav(0)" @mouseout="hiddenNave(0)">제품</a>
        <a href="#" >러쉬 소개</a> 
        <a href="#">매장 안내</a>
      </div>

      <span id="logo">LUSH</span>
    </div>

    <div class="content">
      <div v-if="product" id="product">
        
      </div>
      <div v-if="introduce" id="introduce">
        
      </div>
    </div>
    <div class="footer">Footer</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      product   : false, // 제품 서브나브
      introduce : true, // 소개
    }
  },
  methods: {
    viewNav(val){
      if(val === 0){
        this.product = true;
      }
      if(val === 1){
        this.introduce = true;
      }
    },
    hiddenNave(val){
      if(val === 0){
        this.product = false;
      }
      if(val === 1){
        this.introduce = false;
      }
    }
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
  place-items: center;;
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
  color: #444;
}

.header,
.footer {
  background-color: rgb(0, 0, 0);
}
#product, #introduce{
  width: 100%;
  height: 100px;
  background: rgb(71, 71, 71);
  position: relative;
}
#menu a{
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  width: 20px;
  padding: 20px;
}
</style>