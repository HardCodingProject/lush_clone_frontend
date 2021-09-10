<template>
  <div>
    <header>
      
        <span id="logo">LUSH</span>
     
      <ul id="nav"> 
        <li><a href="#">제품</a>
          <ul>
            <li><a href="#">best</a></li>
            <li><a href="#">best</a></li>
          </ul>
        </li> 
          <li><a href="#">제품</a>
          <ul>
            <li><a href="#">best</a></li>
            <li><a href="#">best</a></li>
          </ul>
        </li> 
          <li><a href="#">제품</a>
          <ul>
            <li><a href="#">best</a></li>
            <li><a href="#">best</a></li>
          </ul>
        </li> 
      </ul> 
        <div style="display:inline-block">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLvNMChvJvdDEZrJhoBuILPzrg4FX2u3Y_g&usqp=CAU"/>
        </div>
        <div style="display:inline-block">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeWGfZ947mDkWMwt5zHCQIIVqr1rgunc8Hw&usqp=CAU" />
        </div>
    
    </header>
        
    <main></main>
    <fotter></fotter>


    
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<style>
header{
  color: white;
  background-color: black;
  margin: 0 auto;
  vertical-align: middle;

  width: 100%;
}

#logo{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  letter-spacing: 5px;
  display: inline-block;
  height: 80px;
  margin-left: 15%;
}
img{
  width: 30px;
  height: 30px;
  display: inline-block;
}
#nav{
  border: solid #fff 1px;
  display: inline-block;
  list-style: none;
  margin: 0;
  margin-top: 30px;
  margin-left: 15%;
}
#nav li{
  float: left;
  position: relative;
  margin: 5px 30px;
  padding: 0;
}
#nav li a{
  display: block;
  font-family: "맑은고딕";
  font-size: 15px;
  padding: 7px 8px;
  margin: 0;
  color: #fff;
  text-decoration: none;
}
#nav li:hover > a{
  transition: color .2s;
  color: rgb(255, 255, 255);
  margin: 0;
  padding: 5px;
}
#nav ul{
  list-style: none;
  margin: 0;
  margin-top: 17px;
  padding: 0;
  position: absolute;
  left: 0;
  top: 40px;
  width: 800px;
  background: rgb(71, 71, 71);
  text-align: center;
  opacity: 0;
}
#nav ul li{
  float: none;
  margin: 0;
  padding: 0;
  font-size: 10px;
}
#nav ul a{
  font-weight: normal;
  color: rgb(194, 194, 194);
}
#nav ul li:hover a{
  font-size: 1.1rem;
}
#nav li:hover ul{
  opacity: 1;
}
#nav li:hover ul li{
  height: 35px;
  overflow: visible;
  padding: 0;
}
</style>
--------------------------------------------------------------------
<template>
  <div class="wrapper">
  <div class="box header">
    
  </div>
  <div class="box sidebar">Sidebar</div>
  <div class="box content">Content
    <br /> The four arrows are inline images inside the content area.
    <img src="http://gridbyexample.com/examples/code/arrow-top-left.png" alt="top left" class="topleft" />
    <img src="http://gridbyexample.com/examples/code/arrow-top-right.png" alt="top right" class="topright" />
    <img src="http://gridbyexample.com/examples/code/arrow-bottom-left.png" alt="bottom left" class="bottomleft" />
    <img src="http://gridbyexample.com/examples/code/arrow-bottom-right.png" alt="bottom right" class="bottomright" /></div>
  <div class="box footer">Footer</div>
</div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<style>
body {
  margin: 40px;
}

.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
  position: relative;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50% 100% 300px;
    grid-template-rows: 80px 500px 460px;
    grid-template-areas:
    "header  header  header"
    "sidebar content content"
    "footer  footer  footer";
    background-color: rgb(167, 89, 89);
    color: #444;
  }


.box {
  background-color: rgb(205, 228, 79);
  color: #fff;
  border-radius: 5px;
  font-size: 150%;
}

.header,
.footer {
  background-color: rgb(0, 0, 0);
}

.topleft {
  position: absolute;
  top: 0;
  left: 0;
}

.topright {
  position: absolute;
  top: 0;
  right: 0;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 0;
}

.bottomright {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>