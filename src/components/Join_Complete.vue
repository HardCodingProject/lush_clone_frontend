<template>
<div class="parent">
        <div class="titlecontainer">
            <div class="TitleJoinUS">JOIN US</div><br>
            <div class="JoinProgress">
                <span id="joinpolicy">약관동의</span>
                <span id="ar"> > </span>
                <span id="joininfo">정보입력 </span>
                <span id="ar"> > </span>
                <span id="joincomplete">가입완료</span>
            </div>

            <div class="welcome">
                <img :src="join_complete" id="welcome_img">
                <div class="welcome_text">
                    <p class="txt1">환영합니다.</p>
                    <p class="txt2">LUSH 회원가입을 축하드립니다.</p>
                    <p class="txt3">로그인 후 러쉬의 다양한 서비스를 <br> 이용하실 수 있습니다.</p>
                </div>
            </div>

  
            <button class="LoginBtn" type="button" @click="handleLogin">
                <em>로그인하기</em>
            </button>

            
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import join_complete from '@/assets/join_complete.jpg';
    export default {
        data(){
            return{
                join_complete : join_complete
            }
        },
        components:{
            Footer : Footer,
        },
        methods :{
            handleLogin(){
                this.$router.push({path :'/login'});
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

.titlecontainer{
    padding: 20px;
    margin: 0 auto;
    /* border: 1px solid black; */
    width: 1080px;
    display: flex;
    justify-content: center;
    align-content: center;
    display: block;
}
.TitleJoinUS{
    width: max-content;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font: lighter;
    margin: 0 auto;
    font-size: 45px;
    margin-top: 65px;
    color: black;
}
.JoinProgress{
    width: max-content;
    position: relative;
    margin-top: 70px;
    font-weight: bold;
    font-family: Dotum,Arial, sans-serif;
    font-size: 17px;
    margin: 0 auto;
    margin-top: 20px;
}
#joinpolicy, #joininfo {
    color: rgb(161, 161, 161);
    
}
#joincomplete{
    color: black;
}
#ar{
    color: rgb(224, 224, 224);
    margin-right: 15px;
    margin-left: 15px;
    height: 15px;
}

.welcome{
    width: 650px;
    height: 306px;
    display: flex;
    margin: 0 auto;
    padding: 90px 70px 10px 70px;
}
.welcome .welcome_img{
    width: 306px;
    height: 306px;
    margin: 0 auto;
}
.welcome_text{
    width: max-content;
    margin-left: 80px;
}
.welcome_text .txt1{
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    color: black;
    margin-top: 80px;
}
.welcome_text .txt2{
    font-family: 'Nanum Gothic', sans-serif;
    line-height: 20px;
    font-size: 18px;
    padding: 10px 0px 10px 0px;
}
.welcome_text .txt3{
    font-family: 'Nanum Gothic', sans-serif;
    line-height: 24px;
    font-size: 16px;
    color: #8f8f8f;
    /* padding: 30px 0px 10px 0px; */
}


.LoginBtn{
    display: flex;
    justify-content: center;
    background: black;
    border: 1px solid black;
    color: white;
    margin: 0 auto;
    width : 300px;
    height: 70px;
    margin-top: 55px;
}
.LoginBtn em {
    margin-top: 23px;
    font-style: normal;
    font-size: 15px;
    cursor: pointer;
}
</style>