<template>
  <div class="wrapper">
    <div class="header">
      <div class="navbar">
        <a href="#home">LUSH</a>
        <a href="#news">제품</a>
        <div class="dropdown">
          <button class="dropbtn">러쉬소개
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>러쉬소개</h3>
                <a href="#">러쉬 역사</a>
                <a href="#">이념과 가치</a>
              </div>
              <div class="column">
                <h3>채러티팟</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div class="column">
                <h3>커뮤니티</h3>
                <a href="#">젤러쉬</a>
                <a href="#">덕찌</a>
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
.content {
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
  background-color: rgb(167, 89, 89);
  color: rgb(68, 68, 68);
}
.navbar {
  overflow: hidden;
  font-family: Arial;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 30px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
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
.dropdown-content {
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

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  margin-left: 50px;
  width: 20%;
  height: 250px;
}
.column h3 {
  color: rgb(255, 255, 255);
}

/* Style links inside the columns */
.column a {
  float: none;
  color: rgb(146, 146, 146);
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
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
</style>