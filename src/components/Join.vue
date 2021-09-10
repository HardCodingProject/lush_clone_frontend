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
            <fieldset>
                <div class="idclass">
                    <label id="idlabel">아이디</label>
                    <input type="text" id="idinput">
                </div>
                <div class="pwclass">
                    <label id="pwlabel">비밀번호</label>
                    <input type="password" id="pwinput">
                </div>
                <div class="pw2class">
                    <label id="pw2label">비밀번호 확인</label>
                    <input type="password" id="pw2input">
                </div>
                <div class="name">
                    <label id="namelabel">이름</label>
                    <input type="text" id="nameinput">
                </div>
                <div class="nicname">
                    <label id="nicnamelabel">닉네임</label>
                    <input type="text" id="nicnameinput">
                </div>

                <div class="email">
                    <label id="emaillabel">이메일</label>
                    <input type="text" id="emailinput">
                    <select id="emailselect">
                        <option>직접입력</option>
                        <option>naver.com</option>
                        <option>hanmail.net</option>
                        <option>daum.net</option>
                        <option>nate.com</option>
                        <option>hotmail.com</option>
                        <option>gmail.com</option>
                        <option>icloud.com</option>
                    </select>
                </div>
                <div class="chkform1">
                    <input type="checkbox" class="checkbox" id="mailchk" name="mailing" aria-invalid="false">
                    <label for="mailchk" class="on" id="mailchk2">정보/이벤트 메일에 수신동의합니다.</label>
                </div>
                <div class="phone">
                    <label id="phonelabel">전화번호</label>
                    <input type="text" id="phoneinput" placeholder=" - 없이 입력하세요.">
                </div>
                                <div class="nicname">
                    <label id="nicnamelabel">닉네임</label>
                    <input type="text" id="nicnameinput">
                </div>
                                <div class="nicname">
                    <label id="nicnamelabel">닉네임</label>
                    <input type="text" id="nicnameinput">
                </div>
                                <div class="nicname">
                    <label id="nicnamelabel">닉네임</label>
                    <input type="text" id="nicnameinput">
                </div>
                                <div class="nicname">
                    <label id="nicnamelabel">닉네임</label>
                    <input type="text" id="nicnameinput">
                </div>
            </fieldset>

            




        </div>




    </div>
</template>

<script>
    export default {
        
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
    display: inline-block; 
    margin-top: 80px;
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
    right: 190px;
    font-family: Dotum,Arial, sans-serif;
    font-size: 14px;
    color: rgb(104, 104, 104);
}
.divider{
    margin-top: 10px;
    height: 1px;
    background-color: black;
}
fieldset{
    font-family: Dotum,Arial, sans-serif;
    font-size: 15px;
    border: none;
}
label {
    margin-left: 10px;
    display: inline-block;
    width: 100px;
}
input{
    width: 400px;
    border: 1px solid rgb(197, 197, 197);
    height: 35px;
    margin-top: 20px;
    margin-left: 40px;
}
#emailinput{
    width: 250px;
}
#emailselect{
    color : rgb(117, 117, 117);
    width: 140px;
    height: 39px;
    margin-left: 10px;
    background-color: white;
    border: 1px solid rgb(197, 197, 197);
}
option {
    background: white;
}
.chkform1 .email{
    width: 400px;
    display: inline-block;
}
input[type="checkbox"]{
    width: 15px;
    margin: 0;
}
#mailchk2 {
    width: 250px;
}

</style>