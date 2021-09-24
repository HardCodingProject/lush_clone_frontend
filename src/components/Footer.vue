<template>
    <div class="footer">
        <div class="footer_icons"> 
            <div class="f_icons_row">
                <ul class="icons_list">
                    <li>
                        <span class="f_icon_1V"><img :src="f_icon_1v" class="f_icon_1V"></span>
                    </li>
                    <li>
                        <span class="f_icon_EB"><img :src="f_icon_eb" class="f_icon_EB"></span>
                    </li>
                    <li>
                        <span class="f_icon_FAT"><img :src="f_icon_fat" class="f_icon_FAT"></span>
                        
                    </li>
                    <li>
                        <span class="f_icon_FCO"><img :src="f_icon_fco" class="f_icon_FCO"></span>
                        
                    </li>
                    <li>
                        <span class="f_icon_HM"><img :src="f_icon_hm" class="f_icon_HM"></span>
                        
                    </li>
                    <li>
                        <span class="f_icon_NP"><img :src="f_icon_np" class="f_icon_NP"></span>
                    </li>                                                           
                </ul>
                
            </div>
        </div>
        <div id="footer">
            <div class="footer_inner_wrap">
                <div class="footer_second_wrap">
                    <div class="wrapL">
                        <div class="infowrap">
                            <a href="/" class="footer_logo">LUSH</a>
                            <dl>
                                <dt>
                                    고객센터
                                    <span>1644-2357</span>
                                </dt>
                                <dd class="email">
                                    <button type="button" style="width:140px">webmaster@lush.co.kr</button>
                                </dd>
                                <dd>
                                    상담전화 7/12~10/4
                                    <br>
                                    <span style="display:inline-block; margin-left:52px">
                                        유선응대 임시중단
                                    </span>
                                    <br>
                                    상담톡 10:00~16:00(평일)
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    기업선물
                                    <span>070-4713-8543</span>
                                </dt>
                                <dd class="email">
                                    <a href="milto:order@lush.co.kr">order@lush.co.kr</a>
                                </dd>
                            </dl>
                            <div class="footer_sns_wrap">
                                <div class="footer_sns">
                                    <a href="http://www.facebook.com/lushkorea" target="_blank">
                                        <img :src="footer_snsicon_fb" alt="페이스북" title="페이스북">
                                    </a>
                                    <a href="http://www.instagram.com/lushkorea/" target="_blank">
                                        <img :src="footer_snsicon_ig" alt="인스타그램" title="인스타그램">
                                    </a>
                                    <a href="http://www.youtube.com/user/LUSHKOREA1" target="_blank">
                                        <img :src="footer_snsicon_yt" alt="유튜브" title="유튜브">
                                    </a>
                                    <a href="http://pf.kakao.com/VEbUM" target="_blank">
                                        <img :src="footer_snsicon_kp" alt="카톡플친" title="카톡플친">
                                    </a>
                                    <a href="http://m.post.naver.com/lushkr1" target="_blank">
                                        <img :src="footer_snsicon_fb" alt="네이버포스트" title="네이버포스트">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapR">
                        <div class="infowrap">
                            <ul class="footer_menu">
                                <li><a href="#">스카우트</a></li>
                                <li><a href="#">회사소개</a></li>
                                <li class="policy"><a href="#">개인정보처리방침</a></li>
                                <li><a href="#">영상정보관리지침</a></li>
                                <li><a href="#">이용약관</a></li>
                                <li><a href="#">고객센터</a></li>
                            </ul>
                            <div class="newsletter" style="margin-top: 63px">
                                <form>
                                    <dl>
                                        <dd>
                                            <input type="text" placeholder="이메일 주소를 입력해주세요" maxlength="30">
                                            <a><input type="button" class="subscribebtn" value="구독하기"></a>
                                        </dd>
                                        <dt>
                                            <strong>매주 금요일 오후, 구독자님을 위한 제품과 브랜드 이야기를 전해드립니다.</strong>
                                            구독은 언제든지 해지하실 수 있습니다.
                                            <a href="#">미리보기</a>
                                        </dt>
                                    </dl>
                                   
                                </form>
                            </div>
                            <div class="copyright">
                                <address>
                                    서울특별시 서초구 서운로 138 (서초동아타워) 6층 | 사이트 운영자 : 주식회사러쉬코리아 | 대표이사 : 우미령
                                </address>
                                사업자 등록 번호 : 201-81-77964
                                <a>사업자정보확인</a>
                                 | 통신판매업 신고번호 : 2012-서울서초-0647 | 개인정보보호책임자 : 우승용
                                <div class="copy">COPYRIGHT LUSHKOREA CO. LTD. ALL RIGHTS RESERVED.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import f_icon_1v from '@/assets/f_icon_1v.png';
import f_icon_eb from '@/assets/f_icon_eb.png';
import f_icon_fat from '@/assets/f_icon_fat.png';
import f_icon_fco from '@/assets/f_icon_fco.png';
import f_icon_hm from '@/assets/f_icon_hm.png';
import f_icon_np from '@/assets/f_icon_np.png';
import footer_snsicon_ig from '@/assets/footer_snsicon_ig.gif';
import footer_snsicon_fb from '@/assets/footer_snsicon_fb.gif';
import footer_snsicon_yt from '@/assets/footer_snsicon_yt.gif';
import footer_snsicon_kp from '@/assets/footer_snsicon_kp.gif';
import footer_snsicon_n from '@/assets/footer_snsicon_n.gif';

    export default {
        name : 'footer',
        data(){
            return {
                f_icon_1v : f_icon_1v,
                f_icon_eb : f_icon_eb,
                f_icon_fat : f_icon_fat,
                f_icon_fco : f_icon_fco,
                f_icon_hm : f_icon_hm,
                f_icon_np :f_icon_np,
                footer_snsicon_ig : footer_snsicon_ig,
                footer_snsicon_fb : footer_snsicon_fb,
                footer_snsicon_yt : footer_snsicon_yt,
                footer_snsicon_kp : footer_snsicon_kp,
                footer_snsicon_n : footer_snsicon_n
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

.footer{
    display: block;
    position: relative;
    width: 100%;
    min-width: 1180px;
    margin: 0 auto;
    padding: 0 0 55px !important;
    background: #000;
    border: 0 !important;
    margin-top: 150px !important;
}
.footer::after{
    content: '';
    display: block;
    clear: both;
}
.footer_icons{
    background: #f2f2f2;
}
.f_icons_row{
    max-width: 1236px;
    margin: 0 auto;
    padding: 20px 0;
    height: 140px;
}
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}
li{
    display: list-item;
    width: 212.39px;
}
img{
    /* width: 120px; */
    height: 130px;
}
.icons_list{
    text-align: center;
}

.icons_list li:first-child{
    text-align: left;
    width: 14%;
}
.icons_list span{
    height: 130px;
    display: inline-block;
}
.f_icon_1V{
    padding-top: 10%;
    width: 140px;
    height: 70px;
    background-position: -578px top;
}
.icons_list li{
    float: left;
    width: 18%;
    height: 130px;
    display: inline-block;
}
.f_icon_EB{
    width: 150px;
    height: 130px;
    background-position: -368px top;
}
.f_icon_FAT{
    width: 65px;
    background-position: -13px top;
}
.f_icon_FCO{
    padding-top: 10%;
    width: 140px;
    height: 70px;
    background-position: -162px top;
}
.f_icon_HM{
    width: 110px;
    background-position: -771px top;
}
.f_icon_NP{
    padding-top: 12%;
    width: 140px;
    height: 70px;
    background-position: -956px top;
}
.icons_list li:last-child {
    text-align: right;
    width: 14%;
}
.icons_list::after{
    display: block;
    content: "";
    clear: both;
}

/* footer */
#footer{
    width: 100%;
    background: black;
    height: 410px;
    padding-top: 45px !important;
}
.footer_inner_wrap{
    position: relative;
    width: 1180px;
    margin: 0 auto;
}
.footer_second_wrap{
    display: block;
    margin-bottom: 20px;
}
.wrapL{
    display: inline-block;
    float: left;
    width: 300px;
}
.wrapL .infowrap{
    display: block;
    padding-left: 100px;
    color: #fff;
    /* font-family: 'Roboto', sans-serif;
    font-size: 15px; */
}
.infowrap .footer_logo{
    color: #fff;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
}
.wrapL .infowrap dl{
    padding-top: 45px;
    font-family: 'Nanum Gothic', sans-serif;
}
dl{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-left:0;
}
.wrapL .infowrap dd{
    padding-top: 10px;
    font-size: 14px;
    line-height: 22px;
    margin-left: 0;
}
.wrapL .infowrap dt{
    font-size: 14px;
    font-family: 'Nanum Gothic', sans-serif;
}
.wrapL .infowrap dt span {
    display: inline-block;
    padding-left: 5px;
    font-family: 'Nanum Gothic', sans-serif;
}
.wrapL .infowrap dd.email{
    padding: 4px 0 2px;
    font-size: 15px;
    line-height: 22px;
    font-family: 'Nanum Gothic', sans-serif;
}
.wrapL .infowrap dd a{
    font-size: 14px;
    color: #fff;
    border-bottom: 1px solid #fff;
    letter-spacing: -1px;
}
.wrapL .infowrap dd button {
    font-size: 14px;
    color: #fff;
    border-bottom: 1px solid #fff;
    letter-spacing: -1px;
    text-align: left;
}
button{
    font-family: 'Nanum Gothic', sans-serif;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
}
.wrapL .infowrap dl + dl{ 
    margin: 10px 0;
    padding-top: 20px;
}
dl::after, dt::after, dd::after{
    content: '';
    display: block;
    clear: both;
}


.footer_sns_wrap{
    width: 200px;
    height: 30px;
    margin-top: 36px;
}
.footer_sns{
    font-size: 0;
    margin-left: -5px;
}
.footer_sns a{
    display: inline-block;
    width: 30px;
    margin-left: 5px;
}
a{
    color: #1e1e1e;
    text-decoration: none;
}
a:-webkit-any(){
    cursor: pointer;
}
.footer_sns a img{
    width: 100%;
    height: 100%;
}
.img{
    border: none;
    vertical-align: top;
}
.wrapR{
    display: inline-block;
    float : right;
    width: 815px;
}
.footer_menu{
    margin: 0;
    padding: 0;
}
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}
ul{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.footer_menu li{
    width: fit-content;
    display: inline-block;
    letter-spacing: -0.5px;
}
.footer_menu li a{
    display: inline-block;
    margin-right: 60px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
.footer_menu li.policy a{
    color: #FBE85E;
}

.wrapR .newsletter{
    color: #fff;
}
form{
    height: 100%;
    margin: 0;
    padding: 0;
    display: block;
}
.newsletter dd {
    margin-left: 0;
}
.newsletter dd input[type="text"]{
    width: 342px;
    height: 14px;
    padding: 12px 0 12px 20px;
    font-size: 14px;
    border: 0.2px solid white;
    line-height: 14px;
    vertical-align: middle;
    margin: 0;
    outline: 0;
    font-family: 'Nanum Gothic', sans-serif;
    color: #717171;
}
.newsletter dd input + a{
    display: inline-block;
    margin-left: -4px;
    vertical-align: middle;
}
.newsletter dd .subscribebtn{
    cursor: pointer;
    text-indent: 0px;
    background-color: #000;
    width: 110px;
    line-height: 38px;
    vertical-align: top;
    border: 1px solid #fff;
    color: #fff;
    font-size: 14px;
}
.subscribebtn{
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.newsletter dt{
    position: relative;
    padding-top: 13px;
    font-size: 16px;
    font-family: "notokrR";
    line-height: 24px;
    letter-spacing: -0.2px;
    display: block;
}
.newsletter dt strong{
    display: block;
    font-family: 'Nanum Gothic', sans-serif;
    letter-spacing: -0.7px;
    margin-bottom: 5px;
    padding: 0;
}
.newsletter dt a{
    position: absolute;
    left: 261px;
    bottom: 2px;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    border-bottom: 1px solid #b3ada5;
}

.copyright{
    font-size: 13px;
    display: block;
    line-height: 24px;
    color: #9b9b9b;
    padding: 26px 0 0 0;
    letter-spacing: -1px;
}
address{
    font-style: normal;
    display: block;
}
.copyright a {
    color: #9b9b9b;
}
.copyright .copy{
    display: block;
    font-size: 12px;
    margin: 30px 0 0 0;
    letter-spacing: -0.02rem;
}
</style>