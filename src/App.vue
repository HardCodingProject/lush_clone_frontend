<template>
  <div>
    <header class="header">    
      <router-link to="/" id="test">메인</router-link>
      <router-link to="/join">회원가입</router-link>
    </header>
    <main><router-view></router-view></main>
    <fotter></fotter>


    
  </div>
</template>

<script>

export default {

}
</script>

<style>
body{
  margin: 0px;
}
header{
  height: 100px;
  color: white;
  background-color: black;
  margin: 0px;
}
</style>