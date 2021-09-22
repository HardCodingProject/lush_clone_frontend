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
                <span id="infotitle">기본정보</span>
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
                                <input type="text" class="text">
                            </div>
                        </td>
                    </tr>
                    <!-- 비밀번호 -->
                    <tr>
                        <th><span class="required"></span>비밀번호</th>
                        <td>
                            <div class="txt-field">
                                <input type="password" class="text" autocomplete="off" placeholder aria-placeholder="list">
                            </div>
                        </td>
                    </tr>
                    <!-- 비밀번호 확인 -->
                    <tr>
                        <th><span class="required"></span>비밀번호 확인</th>
                        <td>
                            <div class="txt-field">
                                <input type="password" class="text check-id" autocomplete="off">
                            </div>
                        </td>
                    </tr>
                    <!-- 이름 -->
                    <tr>
                        <th aria-required="true"><span class="required"></span>이름</th>
                        <td>
                            <div class="txt-field">
                                <input type="text" class="text" maxlength="30">
                            </div>
                        </td>
                    </tr>
                    <!-- 닉네임 -->
                    <tr>
                        <th class="th_nickname">닉네임</th>
                        <td>
                            <div class="nickname">
                                <input type="text" class="text" maxlength="20">
                            </div>
                        </td>
                    </tr>
                    <!-- 이메일 -->
                    <tr>
                        <th><span class="required"></span>이메일</th>
                        <td>
                            <div class="email">
                                <div class="txt-field">
                                    <input type="text" class="text" id="emailinput" name="email">
                                    <div class="select-box" @click="openOption">
                                        <select v-model="selected" multiple  class="options-container" v-if="isOpen" >
                                            <option class="option">직접입력</option>
                                            <option class="option">2</option>
                                            <option class="option">hanmail.net</option>
                                            <option class="option">daum.net</option>
                                            <option class="option">nate.com</option>
                                            <option class="option">hotmail.com</option>
                                            <option class="option">gmail.com</option>
                                            <option class="option">icloud.com</option>
                                        </select>
                                        <div class="selected">
                                            {{ selected }}
                                            <!-- <svg xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                                stroke-linecap="round" stroke-linejoin="round" class="downarrow">
                                                <polyline points="6 9 12 15 18 9" ></polyline>
                                            </svg> -->
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
                        <th><span class="required"></span>휴대폰 번호</th>
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
            <button class="JoinBtn" type="button">
                <em>회원가입</em>
            </button>

            
        </div>
    <Footer></Footer>
    </div>
</template>


<script>
import Footer from '@/components/Footer.vue';
    export default {
        data(){
            return{
                isOpen :false,
            }
        },
        components:{
            Footer : Footer,
        },
        methods : {
            openOption(){
                this.isOpen = !this.isOpen;
            },
            openDaumPostCode(){
                const elementWrap = this.wrap;
                // 현재 scroll 위치를 저장해놓는다.
                const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            
                        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                        let addr = data.roadAddress; // 주소 변수
                        let postcode = data.zonecode;
            
                        // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                            addr = data.roadAddress;
                        } else { // 사용자가 지번 주소를 선택했을 경우(J)
                            addr = data.jibunAddress;
                        }
            
                        // 우편번호와 주소 정보를 해당 필드에 넣는다.
                        // document.getElementById('address').value = addr
                        this.postcode = postcode;
                        this.address = addr;
            
                        // iframe을 넣은 element를 안보이게 한다.
                        // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                        elementWrap.style.display = 'none';
            
                        // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                        document.body.scrollTop = currentScroll;
                    },
                    // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
                    onresize: function (size) {
                        elementWrap.style.height = size.height + 'px';
                    },
                    width: '100%',
                    height: '100%'
                }).embed(elementWrap);
                elementWrap.style.display = 'block';
            },
            foldDaumPostcode () {
                const elementWrap = this.$refs.wrap;
                elementWrap.style.display = 'none';
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
/* .selectone{
    color : rgb(117, 117, 117);
    width: 120px;
    height: 30px;
    margin-left: 10px;
    background-color: white;
    border: 1px solid rgb(197, 197, 197);
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
    width: fit-content;
    display: inline-block; 
    margin-top: 100px;
    height: 40px;
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
    margin: 0 auto;
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
    margin-bottom: 15px;
}
input{
    width: 400px;
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
.th_nickname{
    padding-left: 13px;
}

/* 이메일 선택 */
.select-box{
    color : rgb(117, 117, 117);
    width: 137px;
    height:37px;
    position:sticky;
    margin-left: 10px;
    background-color: white;
    border: 1px solid rgb(197, 197, 197);
    display: inline-block;
    transform: translateY(39%);
}
.selected {
    background: rgb(255, 255, 255);
    color : rgb(37, 36, 36);
    position: absolute;
    padding:0px;

    order: 0;
}
/* .selected .downarrow {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    transform: translateY(27%);
} */
/* .selected .downarrow::after{
    content: "";
    background-repeat: no-repeat;
    background-size: 20px 20px;
    position: absolute;
    transition: all 0.4s;
    transform: rotateX(180deg);
    top: -6px;
} */
.select-box .options-container{
    color:black;
    border: 1px solid rgb(197, 197, 197);
    position: absolute;
    width: 100%;
    height: 210px;
    opacity: 1;
    transform: translateY(18%);
    flex-flow: column;
}
.select-box .options-container + .downarrow::after{
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
.select-box option{
  cursor: pointer;
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
