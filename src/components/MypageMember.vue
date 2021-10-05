<template>
    <div class="parent">
        <div class="titlecontainer">
            <div class="memberinfo">
                <h2>회원정보 변경</h2>
            </div>
            <div class="infocontainer">
                <span id="infotitle">개인회원 정보입력</span>
                <div class="requirednoti">
                    <span class="required"></span>
                    <h id="infonoti">표시는 반드시 입력하셔야하는 항목입니다.</h>
                </div>
            </div>
            <div class="divider"></div>

            <table class>
                <colgroup>
                    <col class="th_area">
                    <col class="td_area">
                </colgroup>
                <tbody>
                    <!-- 아이디 -->
                    <tr>
                        <th>
                            <span class="required"></span>아이디</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" class="userid" placeholder="userid" v-model="userid">
                            </div>
                        </td>
                    </tr>
                    <!-- 비밀번호 -->
                    <tr>
                        <th><span class="required"></span>비밀번호</th>
                        <td>
                            <div class="txt-field">
                                <input type="password" class="text" v-model="userpw" autocomplete="off" placeholder aria-placeholder="list">
                            </div>
                        </td>
                    </tr>
                    <!-- 이름 -->
                    <tr>
                        <th aria-required="true"><span class="required"></span>이름</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" class="text" v-model="username" maxlength="30">
                            </div>
                        </td>
                    </tr>
                    <!-- 닉네임 -->
                    <tr>
                        <th class="th_nickname">닉네임</th>
                        <td>
                            <div class="nickname">
                                <input type="text" class="text" v-model="user_nickname" maxlength="20">
                            </div>
                        </td>
                    </tr>
                    <!-- 이메일 -->
                    <tr>
                        <th><span class="required"></span>이메일</th>
                        <td>
                            <div class="email">
                                <div class="txt-field">
                                    <input type="text" class="text" id="emailinput" name="email" v-model="user_email">
                                </div>

                                <div class="select-option">
                                    <div class="select-box" @click="openOption">
                                        <span class="selected">{{selected}}</span>
                                        <img :src="select_arrow_down">
                                    </div>
                                    <div name class="options-container" v-if="isOpen">
                                        <input type="radio" id="1" v-model="selected" value="" >
                                        <label for="1">직접입력</label>
                                        <input type="radio" id="2" v-model="selected" value="@naver.com" >
                                        <label for="2">naver.com</label>
                                        <input type="radio" id="3" v-model="selected" value="@hanmail.net" >
                                        <label for="3">hanmail.net</label>
                                        <input type="radio" id="4" v-model="selected" value="@daum.net" >
                                        <label for="4">daum.net</label>
                                        <input type="radio" id="5" v-model="selected" value="@nate.com" >
                                        <label for="5">nate.com</label>
                                        <input type="radio" id="6" v-model="selected" value="@hotmail.com" >
                                        <label for="6">hotmail.com</label>
                                        <input type="radio" id="7" v-model="selected" value="@gmail.com" >
                                        <label for="7">gmail.com</label>
                                        <input type="radio" id="8" v-model="selected" value="@icloud.com" >
                                        <label for="8">icloud.com</label>
                                    </div>
                                </div>
                                                                                                              
                                <div class="form-element">
                                    <input type="checkbox" class="checkbox" id="mailling" value="" aria-invalid="false">
                                    <label for="mailling" class="checkboxlabel">정보/이벤트 메일 수신에 동의합니다.</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <!-- 휴대폰 번호 -->
                    <tr>
                        <th><span class="required"></span>휴대폰 번호</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" id="cellPhone" name="cellPhone" v-model="user_phone" class="text" maxlength="12" placeholder=" - 없이 입력하세요.">
                                <div class="form-element2">
                                    <input type="checkbox" class="checkbox" id="smsFl" name="smsFl" value="">
                                    <label for="smsFl" class="checkboxlabel">정보/이벤트 SMS 수신에 동의합니다.</label>
                                </div>                              
                            </div>
                        </td>
                    </tr>
                    <!-- 주소 -->
                    <tr>
                        <th class="th_address">주소</th>
                        <td>
                            <div class="post">
                                <div class="txt-field">
                                    <input type="text" id="postcode" v-model="postcode" class="mainaddress" readonly value>
                                    <input type="hidden" value>
                                    <button class="postcodesSearchBtn" id="btnPostcode" @click="openDaumPostCode">
                                        <em>우편번호검색</em>
                                    </button>                                    
                                </div>
                            </div>
                            <div class="txt-field-adress">
                                <input type="text" id="roadAddress" v-model="roadAddress" class="text" name="address" readonly value>
                                <input type="text" id="detailAddress" v-model="detailAddress" class="text1" name="addressSub">
                            </div>
                        </td>
                    </tr>
                    <div id="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
                        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
                    </div>

                </tbody>
            </table>
            <div class="divider2"></div>
            <button class="JoinBtn" type="button" @click="handleJoin">
                <em>회원가입</em>
            </button>

            
        </div>
        <Footer></Footer>
    </div>
</template>
 
<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue';
import select_arrow_down from '@/assets/select_arrow_down.png';
    export default {
        data(){
            return{
                isOpen :false,
                selected : '',
                select_arrow_down : select_arrow_down,
                postcode :'',
                roadAddress :'',
                detailAddress : '',
                userid : '',
                userpw : '',
                userpw2 : '',
                username : '',
                user_nickname : '',
                user_email :'',
                user_phone : '',
                user_addr : '',
            }
        },
        mounted() {
            let daumPostCode = document.createElement('script')
            daumPostCode.setAttribute('src', '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
            document.head.appendChild(daumPostCode);
        },
        components:{
            Footer : Footer,
        },
        methods : {
            openOption(){
                this.isOpen = !this.isOpen;
            },
            openDaumPostCode(){
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            
                        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                        let addr = data.query; // 주소 변수
                        let postcode = data.zonecode;
                        let extraRoadAddr = ''
            
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                            extraRoadAddr += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if(data.buildingName !== '' && data.apartment === 'Y'){
                            extraRoadAddr += ( extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if( extraRoadAddr !== ''){
                            extraRoadAddr = ' (' + extraRoadAddr + ')';
                        }
            
                        // 우편번호와 주소 정보를 해당 필드에 넣는다.
                        // document.getElementById('address').value = addr
                        this.postcode = postcode;
                        this.roadAddress = addr;
                        
                        // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                        if(addr !== ''){
                            this.detailAddress = extraRoadAddr;
                        } else {
                            this.detailAddress = '';
                        }
                    },
                    theme: {
                        searchBgColor: "#1B1B1C",
                        queryTextColor: "#FFFFFF"
                    }
                }).open()({
                    popupTitle: 'LUSH 우편번호 검색' //팝업창 타이틀 설정 (영문,한글,숫자 모두 가능)
                });
            },
            async handleJoin() {
                const header = { "Content-Type" : "application/x-www-form-urlencoded" };
                const body = { 
                    id : this.userid,
                    password : this.userpw,
                    name : this.username,
                    email : [this.user_email + "" + this.selected],
                    phone : this.user_phone,
                    address : [this.postcode + "" + this.roadAddress + "" + this.detailAddress],
                }
                console.log(body);
                const url = `/member/join`;
                const response = await axios.post(url, body, {header});
                console.log(response);

                if(response.data.ret === 1){
                    alert(response.data.data);
                    this.$router.push({path :'/join_complete'});
                }
            }

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Overpass:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');

.titlecontainer{
    padding: 20px;
    margin: 0 auto;
    /* border: 1px solid black; */
    width: 1100px;
    display: flex;
    justify-content: center;
    align-content: center;
    display: block;
}
.memberinfo{
    margin: 0 0 25px 0;
    padding: 0 0 8px 0;
    border-bottom: 1px solid #0b0b0b;
    position: relative;
    display: block;
}
.memberinfo h2{
    display: inline-block;
    vertical-align: middle;
    color: #111;
    font-size: 21px;
}
.infocontainer{
    position: relative;
    width: fit-content;
    display: inline-block; 
}
#infotitle, #infonoti {
    width: max-content;
    margin: 0;
}
#infotitle{
    font-weight: bold;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 16px;
    margin-left: 10px;
    margin: 0 auto;
    color: #000;
}
.required{
    display: block;
    background: rgb(204, 10, 10);
    height: 0.4rem;
    width : 0.4rem;
    display: inline-block;
    transform: translateY(-30%);
    margin-right: 6px;
}
#infonoti{
    position: absolute;
    font-family: Dotum,Arial, sans-serif;
    font-size: 14px;
    color: rgb(104, 104, 104);
    display: inline-block;
}
.requirednoti{
    display: inline-block;
    transform: translateX(750px);
    margin-bottom: 20px;
}

/* 구분선 */
.divider{
    margin-top: 10px;
    margin-bottom: 20px;
    height: 1px;
    background-color: black;
}
.divider2{
    margin-top: 3px;
    height: 1px;
    background-color: rgb(226, 226, 226);
}

/* 정보입력칸 */
col{
    display: table-column;
}
table{
    text-align: left;
    /* width: 900px; */
    padding: 20px;
    font-weight: 200px;
}
.th_area { 
    width: 200px;
}
.td_area {
    width: 1000px;
}
th{
    width: 150px;
    height: none;
    font-family: Arial, sans-serif;
    font-size : 15px;
    font-weight: 100px;
    text-decoration: none;
    transform: translateY(-15%);
}
.th_address{
    padding-left: 13px;
    transform: translateY(-35%);
}
.nickname input{
    margin-bottom: 25px;
}
input{
    width: 400px;
    border: 1px solid rgb(197, 197, 197);
    height: 35px;
    margin-bottom: 25px;
    padding-left: 10px;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 14px;
    color: rgb(104, 104, 104);
}
.email{
    width: 100%;
    height: 36px;
    display: inline-flex;
    margin-bottom: 25px;
}
#emailinput{
    width: 250px;
    margin-bottom: 15px;
}
.th_nickname{
    padding-left: 13px;
}
/* 아이디 */
.userid{
    border: 0;
}

/* 이메일 선택 */
.select-option{
    width: 137px;
    display: block;
    margin-left: 10px;
}
.select-box{
    border: 1px solid rgb(197, 197, 197);
    color : rgb(117, 117, 117);
    overflow: hidden;
    width: 137px;
    height:37px;
    position:relative;
    display: inline-block;
}
.select-box > img {
    width: 15px;
    height: 8px;
    top: 40%;
    right: 10%;
    position: absolute;
}
.selected {
    width: 110px;
    height: 100%;
    /* border: 1px solid black; */
    background: rgb(255, 255, 255);
    color : rgb(37, 36, 36);
    position: absolute;
    text-align: left;
    font-size: 15px;
    padding: 10px 0px 8px 8px;
}
.options-container{
    display: block;
    color:black;
    border: 1px solid rgb(197, 197, 197);
    width: 137px;
    height: fit-content;
    opacity: 1;
    background: white;
    flex-flow: column;
    transform: translateY(-2.2%);
    z-index: 100000;
}
.options-container label {
    display: block;
    width: 130px;
    color: rgb(37, 36, 36);
    text-align: left;
    font-size: 15px;
    line-height: 0.6em;
    padding: 10px 0px 8px 8px;
}
.options-container label:hover{
    background: rgb(228, 228, 228);
}
input[type="radio"]{
    display: none;
}

/* 체크박스 */
input[type="checkbox"]{
    width: 15px;
    margin: 0;
}
.form-element{
    width: max-content;
    align-self: center;
    display: inline-flex;
    flex-direction: row;
    margin-left: 10px;
    vertical-align: middle;
}
.form-element .checkbox{
    margin-left: 10px;
    border: 1px solid rgb(197, 197, 197);
    size: 15px 15px;
}
.form-element .checkboxlabel{
    color: rgb(104, 104, 104);
    padding: 10px;
}

.form-element2{
    width: max-content;
    align-self: center;
    display: inline-flex;
    flex-direction: row;
    margin-left: 10px;
    vertical-align: middle;
}
.form-element2 .checkbox{
    margin-left: 10px;
    border: 1px solid rgb(197, 197, 197);
    size: 15px 15px;
}
.form-element2 .checkboxlabel{
    color: rgb(104, 104, 104);
    padding: 10px;
}

/* 주소 */
.mainaddress{
    width: 270px;
    margin-bottom: 0;
}
.txt-field-adress{
    margin-top: 10px;
}
.txt-field-adress input{
    width: 430px;
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 10px;
}
.text1{
    margin-left: 5px;
}
.postcodesSearchBtn{
    background-color: white;
    border: 1px solid black;
    margin-left: 10px;
    width: 100px;
    height: 38px;
}
.postcodesSearchBtn em{
    font-style: normal;
    margin-bottom: 5px;
}
.JoinBtn{
    display: flex;
    justify-content: center;
    background: black;
    border: 1px solid black;
    color: white;
    margin: 0 auto;
    width : 300px;
    height: 70px;
    margin-top: 35px;
}
.JoinBtn em {
    margin-top: 23px;
    font-style: normal;
    font-size: 15px;
}




</style>
