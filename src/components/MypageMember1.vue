<template>
    <div class="parent">
        <div class="titlecontainer">
            <div class="memberinfo">
                <h2>회원탈퇴</h2>
            </div>
            <div class="infocontainer">
                <span id="infotitle">01. 회원탈퇴 안내</span>
            </div>
            <div class="notice">
                러쉬코리아 탈퇴안내
                <br><br>
                불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해 드리도록 노력하겠습니다.
                <br><br>
                ■ 아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다.
                <br>
                1. 회원 탈퇴 시 회원님의 정보는 상품 반품 및 A/S를 위해 전자상거래 등에서의 소비자 보호에 관한 법률에 의거한<br>
                고객정보 보호정책에 따라 관리 됩니다.
                <br>
                2. 탈퇴 시 회원님께서 보유하셨던 데이터는 삭제 됩니다.
            </div>
            <div class="toleave">
                <span id="infotitle">02. 회원탈퇴 하기</span>
            </div>
            <table class>
                <colgroup>
                    <col class="th_area">
                    <col class="td_area">
                </colgroup>
                <tbody>
                    <tr>
                        <th aria-required="true"><span class="required"></span>비밀번호</th>
                        <td>
                            <div class="txt-field">
                                <input type="password" class="text" v-model="Password" maxlength="30">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="Btn">
                <button class="CancleBtn" type="button">
                    <em>이전으로</em>
                </button>
                <button class="UpdateBtn" type="button" @click="handleLeave">
                    <em>탈퇴</em>
                </button>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios';
//import select_arrow_down from '@/assets/select_arrow_down.png';
    export default {
        data(){
            return{
                isOpen :false,
                OpenPasswd : false,
                OpenHelp : false,
                Password : '',
                Check : '',
                token : sessionStorage.getItem("TOKEN")
            }
        },
        mounted() {
            
        },
        methods : {
            async handleLeave(){
                const headers = { 
                    "Content-Type" : "application/json",
                    "token"        : this.token
                };
                const body = {password : this.Password };
                console.log(body);
                const url = '/member/checkpw';
                const response = await axios.post(url, body, {headers});
                console.log(response);
                if(response.data.ret === 1){
                    this.Check = response.data.data;
                }
                else{
                    alert("비밀번호 확인 실패");
                }

                if(this.Check === 1){
                    const ret = confirm('탈퇴 할까요?'); // Y or N
                    if(ret){
                        if(this.token !== null){
                            const url = `/member/delete`;
                            const headers ={ 
                                "Content-Type" : "application/json",
                                "token" : this.token
                            };
                            const response = await axios.delete(url, {headers});
                            console.log(response);
                            if(response.data.ret === 1){
                                alert(response.data.data);
                                this.$router.push({path:'/'});
                                sessionStorage.removeItem("TOKEN");
                                this.$emit('changeLogged', false);
                            }
                        }
                    }
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
    width: 100%;
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
.notice{
    margin-top: 10px;
    font-family: 'Nanum Gothic', sans-serif;
    border: 1px solid #ccc;
    padding: 16px;
    letter-spacing: -0.5px;
    font-size: 14px;
    line-height: 1.4;
    color: #333;
}
.toleave{
    margin-top: 30px;
}
.leave-body{
    width: 100%;
    border-top: 1px solid #000;
    margin: 0;
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
    vertical-align: middle;
    display: table;

}
.check{
    width: 150px;
}
.ta-1{
    background: #f9f9f9;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px 16px;
    color: #777;
    text-align: left;
    border-collapse: collapse;
    display: table-cell;
}
.check-list{
    border-collapse: collapse;
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



/* 정보입력칸 */
col{
    display: table-column;
}
table{
    text-align: left;
    /* width: 900px; */
    padding: 20px;
    font-weight: 200px;
    border-bottom: 1px solid #e7e7e7;
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
.Btn{
    justify-content: center;
    align-items: center;
    display: flex;
}
.CancleBtn{
    display: flex;
    justify-content: center;
    background: white;
    border: 1px solid black;
    color: black;
    /* margin: 0 auto; */
    width : 130px;
    height: 42px;
    margin-top: 35px;
    display: inline-block;
    margin-right: 5px;
}
.CancleBtn em {
    padding-top: 10px;
    font-style: normal;
    font-size: 15px;
}
.UpdateBtn{
    display: flex;
    justify-content: center;
    background: black;
    border: 1px solid black;
    color: white;
    /* margin: 0 auto; */
    width : 130px;
    height: 42px;
    margin-top: 35px;
    display: inline-block;
}
.UpdateBtn em {
    padding-top: 10px;
    font-style: normal;
    font-size: 15px;
}

.pass-btn{
    height: 28px;
    color: #333;
    border: 1px solid #ccc;
    padding: 0 10px;
    line-height: 26px;
    margin-right: 10px;
    background: #f3f3f3;
    font-size: 12px;
}
#PassDiv{
    padding-top: 10px;
    margin: 0 !important;  
}
.label{
    float: left;
    width: 124px;
    line-height: 36px;
    cursor: pointer;
    font-size: 14px;
}
.inputpass{
    border: 1px solid rgb(204, 204, 204);
    position: relative;
    width: 200px;
    height: 38px;
    padding: 0 10px;
    vertical-align: middle;
}
.inputpass:focus{
    outline: none;
}
.OpenHelp{
    right: 460px;
    position: absolute;
    z-index: 10;
    width: 400px;
    height: auto;
    background: #fff;
    border: 1px solid #555;
}
.OpenHelp strong{
    display: block;
    height: 27px;
    padding: 13px 0 0 17px;
    background: #f4f4f4;
    color: #222;
    font-size: 14px;
}
.OpenHelp div{
    overflow-x: hidden;
    overflow-y: auto;
    padding: 15px;
    height: auto;
}
.help1{
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 0;
    font-size: 12.5px;
    margin: 0;
}
.help2{
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 0;
    font-size: 12.5px;
    margin: 0;
}
.help3{
    padding: 10px 0;
    margin: 0;
    font-size: 13px;
}
.close{
    display: block;
    top: 11px;
    right: 10px;
    border: none;
    position:absolute;
    background: url(https://lush.co.kr/data/skin/front/howling/img/btn/layer-close.png) no-repeat left top;
    cursor: pointer;
    padding: 15px;
}
</style>
