<template>
    <div class="login_container">
        <div class="login_box">
            <h2>로그인</h2>
            <div class="box">
                <div class="select_tabs">
                    <div class="member_tab">
                        <ul>
                            <li><a href="#" class="selected">회원</a></li>
                            <li><a href="#">비회원</a></li>
                        </ul>
                        <form class="form_login_box">
                            <div class="login">
                                <div class="input_id_pw">
                                    <div>
                                        <div class="input_login">
                                            <span class="icon">
                                                <img :src="icon_id">
                                            </span>
                                            <input type="text" class="infotext" id="loginId" placeholder="아이디">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="input_login">
                                            <span class="icon">
                                                <img :src="icon_password">
                                            </span>
                                            <input type="password" class="infotext" id="loginPw" placeholder="비밀번호">
                                        </div>
                                    </div>
                                </div>
                                <div class="save_chkbox">
                                    <input type="checkbox" class="checkbox" id="saveId" checked>
                                    <label for="saveId" class="on">아이디 저장</label>
                                </div>
                                <button type="submit" class="loginbtn point2 login"><em>로그인</em></button>
                                <div class="login_menus">
                                    <button type="button" class="loginbtn" id="btnJoin"><em>회원가입</em></button>
                                    <button type="button" class="loginbtn" id="btnFindId"><em>아이디 찾기</em></button>
                                    <button type="button" class="loginbtn" id="btnFindPw"><em>비밀번호 찾기</em></button>
                                </div>
                            </div>
                            <a class="sns_login" href="#" data-naver-url="https://socialmember.godo.co.kr/NaverLogin/naver_api.php?mode=login&response_type=code&client_id=0Q8wjCNa7cJS0AvkCJEQ&redirect_uri=https%3A%2F%2Fwww.lush.co.kr%2Fmain%2Findex.php&state=2eb02e591b50bc19d6188a3729c0d7fc">
                                <i>
                                    <img :src="logo_naver" alt="네이버">
                                </i>
                                네이버 아이디로 로그인
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Footer from '@/components/Footer.vue';
import icon_id from '@/assets/icon_id.png';
import icon_password from '@/assets/icon_password.png';
import logo_naver from '@/assets/logo_naver.gif';
    export default {
        data(){
            return{
                icon_id : icon_id,
                icon_password : icon_password,
                logo_naver : logo_naver
            }
        },
        components:{
            Footer : Footer,
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap');
.login_container {
    width: 100%;
    /* border: 1px solid black; */
    display: block;
    padding: 0 0 50px;
}
.login_box{
    width: 600px;
    margin: 40px auto;
    padding: 50px 0 50px 0;
    letter-spacing: -0.5px;
    /* border: 1px solid black; */
}
.login_box h2{
    color: #222;
    font-size: 28px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}
.box{
    display: block;
}
ul li {
    list-style: none;
    margin: 0;
}
.login_box .select_tabs ul{
    /* border: 1px solid black; */
    color: #222;
    padding: 40px 0 0;
    text-align: center;
    list-style: none;
    text-decoration-color: none;
}
.login_box .select_tabs li{
    display: inline-block;
    font-size: 18px;
    padding: 0 40px;
    list-style: none;
    text-decoration-color: none;
}
.login_box .select_tabs li a{
    display: inline-block;
    line-height: 20px;
    color: #8f8f8f;
    border-bottom: 1px solid #8f8f8f;
}
.login_box .select_tabs li a.selected{
    color: black;
    border-bottom: 1px solid black;
}
.form_login_box{
    display: block;
    height: 100%;
    /* border: 1px solid black; */
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.4;
}
.login_box .box .login{
    width: 335px;
    margin: 55px auto 0;
    overflow: hidden;
}
.login_box .box .login .input_id_pw div{
    position: relative;
    margin: 10px 0 0;
}
.login_box .box .login .input_id_pw div .input_login{
    position: relative;
    padding-left: 44px;
    border: 1px solid #8f8f8f;
}
.login_box .box .login .input_id_pw div .icon{
    position : absolute;
    top : 13px;
    left: 12px;
}
.icon{
    display: inline-block;
    vertical-align: middle;
}
input {
    outline: none;
    font-family: 'Kanit', sans-serif;
    font-weight: 500px;
    color: #8c8c8c;
}
img{
    border: none;
    vertical-align: top;
}
.login_box .box .login .input_id_pw div .infotext{
    width: 245px;
    height: 48px;
    line-height: 48px;
    padding: 0 0;
    text-align: center;
    border: 0;
    font-family: 'Kanit', sans-serif;
    color: #8c8c8c;
    font-size: 16px;
}
input.text, input.password {
    outline: none;
}
.login_box .box .save_chkbox{
    width: 335px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    min-height: 20px;
    margin: 20px 0 0;
}
.login_box .box .save_chkbox .checkbox{
    position: absolute;
    top: 0;
    left: 0;
}
input.checkbox{
    width: 13px;
    height :13px;
    vertical-align: top;
}
.login_box .box .save_chkbox label{
    display: inline-block;
    height: 20px;
    padding: 0 0 0 27px;
    background: #fff url(/assets/check-off.png) no-repeat left top;
    color: #8f8f8f;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.4;
}
label{
    cursor: pointer;
    vertical-align: top;
}
.login_box .loginbtn.point2.login{
    width: 100%;
    height: 55px;
    line-height: 55px;
    background: #000;
    border: 1px solid black;
    color: #fff;
}
.login_box .box .login button{
    margin: 20px 0 0;
}
/* .loginbtn * {
    font-size: 100%;
} */
button em {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
}
.login_menus{
    display: inline-block;
    width: 335px;
    text-align: center;
}
.login_box .box .login .login_menus button{
    margin-left: 5px;
    margin-right: 5px;
}
.login_menus .loginbtn{
    width: auto;
    height: auto;
    background-color: white;
}
.login_menus .loginbtn em{
    color: #8f8f8f;
    font-size: 13px;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
}
.login_menus .loginbtn + .loginbtn{
    position: relative;
    padding-left: 8px;
}
.login_menus .loginbtn + .loginbtn ::after{
    position: absolute;
    top: 50%;
    left: -2px;
    display: block;
    width: 1px;
    height: 10px;
    margin-top: -5px;
    background: #8f8f8f;
    content: '';
}
.loginbtn{
    display: inline-block;
    padding: 0;
    text-align: center;
    vertical-align: top;
    box-sizing: border-box;
    cursor: pointer;
    border: 0px solid black; 
}
.sns_login{
    display: block;
    width: 335px;
    margin: 50px auto 0;
    border: 1px solid #c3c3c3;
    height: 55px;
    color: #8f8f8f;
    text-align: left;
}
a{
    text-decoration: none;
}
a:-webkit-any(link){
    cursor: pointer;
}
.sns_login i{
    display: inline-block;
    vertical-align: middle;
    border-right: 1px solid #c3c3c3;
    padding: 0 5px 0 8px;
    margin:8px 15px 8px 0;
    line-height: 28px;
}
.sns_login i img{
    width: 42px;
}
img{
    border: none;
    vertical-align: top;
}
::selection{
    background: black;
    color: #fff;
    text-shadow: none;
}
</style>