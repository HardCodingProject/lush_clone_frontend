<template>
    <div class="parent">
        <div class="titlecontainer">
            <div class="TitleJoinUS">JOIN US</div><br>
            <div class="JoinProgress">
                <span id="joinpolicy">약관동의</span>
                <span id="ar"> > </span>
                <!-- <img id="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQNJREFUaEPtl9EJAkEMROeqsAu7sCK7ECzCOuzCLuxC9mN/5IQNyYsczH5nw7yZcLnddPCzHVy/DPDvBJ2AE0g64BFKGpi+7gTSFiYbOIEfBp4lvZLmLl0nErhKuki6S3ouqUgUVQNM8VMSDlEJMMbmtmMmClEJMLSP0RkpfB8MohqgHYIAaIWgANogSIAWCBoAh+gAQCG6ADAIAyz+xmALriMBTPwwjwZAxdMAuHgSoEU8BdAmngBoFV8NcJL06HwLVAPsbVvsITONIj6jc4xw8UQC05gxTu/FLZ0qIxJICYpeNkDUsep6J1DtaLSfE4g6Vl3vBKodjfZzAlHHqusPn8AHbUYuMT4SCNgAAAAASUVORK5CYII="/> -->
                <span id="joininfo">정보입력 </span>
                <span id="ar"> > </span>
                <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQNJREFUaEPtl9EJAkEMROeqsAu7sCK7ECzCOuzCLuxC9mN/5IQNyYsczH5nw7yZcLnddPCzHVy/DPDvBJ2AE0g64BFKGpi+7gTSFiYbOIEfBp4lvZLmLl0nErhKuki6S3ouqUgUVQNM8VMSDlEJMMbmtmMmClEJMLSP0RkpfB8MohqgHYIAaIWgANogSIAWCBoAh+gAQCG6ADAIAyz+xmALriMBTPwwjwZAxdMAuHgSoEU8BdAmngBoFV8NcJL06HwLVAPsbVvsITONIj6jc4xw8UQC05gxTu/FLZ0qIxJICYpeNkDUsep6J1DtaLSfE4g6Vl3vBKodjfZzAlHHqusPn8AHbUYuMT4SCNgAAAAASUVORK5CYII="/> -->
                <span id="joincomplete">가입완료</span>
            </div>

            <div class="infocontainer">
                <h id="infotitle">기본정보</h>
                <h id="infonoti">표시는 반드시 입력하셔야하는 항목입니다.</h>
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
                        <th>아이디</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" class="text">
                            </div>
                        </td>
                    </tr>
                    <!-- 비밀번호 -->
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <div class="txt-field">
                                <input type="password" class="text" autocomplete="off" placeholder aria-placeholder="list">
                            </div>
                        </td>
                    </tr>
                    <!-- 비밀번호 확인 -->
                    <tr>
                        <th>비밀번호 확인</th>
                        <td>
                            <div class="txt-field">
                                <input type="password" class="text check-id" autocomplete="off">
                            </div>
                        </td>
                    </tr>
                    <!-- 이름 -->
                    <tr>
                        <th aria-required="true">이름</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" class="text" maxlength="30">
                            </div>
                        </td>
                    </tr>
                    <!-- 닉네임 -->
                    <tr>
                        <th>닉네임</th>
                        <td>
                            <div class="nickname">
                                <input type="text" class="text" maxlength="20">
                            </div>
                        </td>
                    </tr>
                    <!-- 이메일 -->
                    <tr>
                        <th>이메일</th>
                        <td>
                            <div class="email">
                                <div class="txt-field">
                                    <input type="text" class="text" id="emailinput" name="email">
                                    <div class="select-box" @click="openOption">
                                        <div class="options-container" v-if="isOpen">
                                            <div class="option">
                                                <input type="radio" class="radio" id="self" name="selectoption"/>
                                                <label for="self">직접입력</label>
                                            </div>
                                            <div class="option">
                                                <input type="radio" class="radio" id="naver.com" name="selectoption"/>
                                                <label for="naver.com">naver.com</label>
                                            </div>
                                            <div class="option">
                                                <input type="radio" class="radio" id="hanmail.net" name="selectoption"/>
                                                <label for="hanmail.net">hanmail.net</label>
                                            </div>    
                                            <div class="option">
                                                <input type="radio" class="radio" id="daum.net" name="selectoption"/>
                                                <label for="daum.net">daum.net</label>
                                            </div>                                                                              
                                            <div class="option">
                                                <input type="radio" class="radio" id="nate.com" name="selectoption"/>
                                                <label for="nate.com">nate.com</label>
                                            </div>                                          
                                            <div class="option">
                                                <input type="radio" class="radio" id="hotmail.com" name="selectoption"/>
                                                <label for="hotmail.com">hotmail.com</label>
                                            </div>  
                                            <div class="option">
                                                <input type="radio" class="radio" id="gmail.com" name="selectoption"/>
                                                <label for="gmail.com">gmail.com</label>
                                            </div>
                                            <div class="option">
                                                <input type="radio" class="radio" id="icloud.com" name="selectoption"/>
                                                <label for="icloud.com">icloud.com</label>
                                            </div>
                                        </div>  
                                        <div class="selected">
                                            직접입력
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                                                <polyline points="6 9 12 15 18 9" ></polyline>
                                            </svg>
                                        </div>                                                                                                                     
                                    </div>
                                    <div class="form-element">
                                        <input type="checkbox" class="checkbox" id="mailling" value="" aria-invalid="false">
                                        <label for="mailling" class="checkboxlabel">정보/이벤트 메일 수신에 동의합니다.</label>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <!-- 휴대폰 번호 -->
                    <tr>
                        <th>휴대폰 번호</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" id="cellPhone" name="cellPhone" class="text" maxlength="12" placeholder=" - 없이 입력하세요.">
                                <div class="form-element">
                                    <input type="checkbox" class="checkbox" id="smsFl" name="smsFl" value="">
                                    <label for="smsFl" class="checkboxlabel">정보/이벤트 SMS 수신에 동의합니다.</label>
                                </div>                              
                            </div>
                        </td>
                    </tr>
                    <!-- 주소 -->
                    <tr>
                        <th class="thaddress">주소</th>
                        <td>
                            <div class="post">
                                <div class="txt-field">
                                    <input type="text" class="mainaddress" readonly value>
                                    <input type="hidden" value>
                                    <button class="postcodesSearchBtn" type="button" id="btnPostcode">
                                        <em>우편번호검색</em>
                                    </button>                                    
                                </div>
                            </div>
                            <div class="txt-field-adress">
                                <input type="text" class="text" name="address" readonly value>
                                <input type="text" class="text1" name="addressSub" readonly value>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="divider2"></div>
            <button class="JoinBtn" type="button">
                <em>회원가입</em>
            </button>
 

            




        </div>




    </div>
</template>

<script>
    export default {
        data(){
            return{
                isOpen :false
            }
        },
        methods : {
            openOption(){
                this.isOpen = !this.isOpen;
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
/* .parent{
    display: flex;
    justify-content: center;
    align-items: center;
} */
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
#joinpolicy, #joincomplete{
    color: rgb(161, 161, 161);
    
}
#joininfo{
    color: black;
}
#ar{
    color: rgb(224, 224, 224);
    margin-right: 15px;
    margin-left: 15px;
    height: 15px;
}
.infocontainer{
    position: relative;
    width: max-content;
    display: inline-block; 
    margin-top: 100px;
}
#infotitle, #infonoti {
    width: max-content;
    margin: 0;
}
#infotitle{
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 28px;
    margin-left: 10px;
}
#infonoti{
    position: absolute;
    transform: translateX(320%);
    /* transform: translateX(320%); */
    font-family: Dotum,Arial, sans-serif;
    font-size: 14px;
    color: rgb(104, 104, 104);
}

/* 구분선 */
.divider{
    margin-top: 10px;
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
    font-family: Arial, sans-serif;
    font-size : 15px;
    font-weight: 100px;
    text-decoration: none;
    transform: translateY(-15%);
}
.thaddress{
    transform: translateY(-35%);
}
.nickname input{
    margin-bottom: 15px;
}
input{
    width: 380px;
    border: 1px solid rgb(197, 197, 197);
    height: 35px;
    margin-bottom: 25px;
}
.email{
    width: max-content;
}
#emailinput{
    width: 250px;
    margin-bottom: 15px;
}

/* 이메일 선택 */
.select-box{
    color : rgb(117, 117, 117);
    width: 120px;
    margin-left: 10px;
    background-color: white;
    border: 1px solid rgb(197, 197, 197);
    display: inline-flex;
    flex-direction: column;
    transform: translateY(5%);
}
.select-box .options-container{
    background-color: rgb(255, 255, 255);
    width: 100%;
    transition: all 0.4s;
    overflow: hidden;

    order: 1;
}
.selected {
    background: rgb(255, 255, 255);
    height:27px;
    color : rgb(37, 36, 36);
    position: relative;
    padding: 0;

    order: 0;
}
.selected svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    transform: translateY(27%);
}
.selected svg ::after{
    content: "";
    background-repeat: no-repeat;
    background-size: 20px 20px;
    position: absolute;
    transition: all 0.4s;
}
.select-box .options-container.active{
    max-height: 250px;
    opacity: 1;
}
.select-box .options-container.active + .selected::after{
    transform: rotateX(180deg);
    top: -6px;
}
.select-box .option,
.selected {
    padding: 5px 8px;
    cursor: pointer;
}
.select-box .option:hover{
    background: rgb(212, 212, 212);
}
.select-box label {
  cursor: pointer;
}
.select-box .option .radio {
  display: none;
}

/* 체크박스 */
input[type="checkbox"]{
    width: 15px;
    margin: 0;
}
.form-element{
    width: max-content;
    display: inline-flex;
    flex-direction: row;
    transform: translateY(60%);
    margin-left: 10px;
}
.form-element .checkbox{
    transform: translateY(-24%);
    margin-right: 10px;
    border: 1px solid rgb(197, 197, 197);
    size: 15px 15px;
}
.form-element .checkboxlabel{
    color: rgb(104, 104, 104);
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
    width: 441px;
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
