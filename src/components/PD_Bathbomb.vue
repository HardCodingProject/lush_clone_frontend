<template>
    <div class="pd_bathbomb">
        <div class="pd_wrap">
            <div class="locations">
                <div class="paths">
                    <el-breadcrumb separator=">" style="display:inline-flex;">
                        <el-breadcrumb-item>홈</el-breadcrumb-item>
                        <el-breadcrumb-item style="width:160px;">
                            <div class="nav">
                                <div class="select-box" v-bind:style="select_box_style">
                                    <span class="selected" @mouseover="openOption">{{selected}}</span>
                                    <img :src="select_arrow_down">
                                </div>
                                <div name class="options-container" v-if="isOpen" v-bind:style="options_container_style">
                                    <input type="radio" id="1" v-model="selected" value="러쉬">
                                    <label for="1">러쉬</label>
                                    <input type="radio" id="2" v-model="selected" @click="choose" value="LUSH SPA" >
                                    <label for="2">LUSH SPA</label>
                                </div>
                            </div>
                        </el-breadcrumb-item>
                        <span style="margin:0px 10px;"> > </span>
                        <el-breadcrumb-item style="width:155px;">
                            <div class="nav">
                                <div class="select-box" v-bind:style="select_box_style">
                                    <span class="selected" @mouseover="openOption2">{{selected2}}</span>
                                    <img :src="select_arrow_down">
                                </div>
                                <div name class="options-container" v-if="isOpen2" v-bind:style="options_container_style">
                                    <input type="radio" id="1" v-model="selected" value="베스트">
                                    <label for="1">베스트</label>
                                    <input type="radio" id="2" v-model="selected" @click="choose" value="신제품" >
                                    <label for="2">신제품</label>
                                    <input type="radio" id="3" v-model="selected" value="배쓰" >
                                    <label for="3">배쓰</label>
                                    <input type="radio" id="4" v-model="selected" value="샤워" >
                                    <label for="4">샤워</label>
                                    <input type="radio" id="5" v-model="selected" value="보디" >
                                    <label for="5">보디</label>
                                    <input type="radio" id="6" v-model="selected" value="페이스" >
                                    <label for="6">페이스</label>
                                    <input type="radio" id="7" v-model="selected" value="헤어" >
                                    <label for="7">헤어</label>
                                    <input type="radio" id="8" v-model="selected" value="메이크업" >
                                    <label for="8">메이크업</label>
                                    <input type="radio" id="9" v-model="selected" value="퍼퓸" >
                                    <label for="9">퍼퓸</label>
                                    <input type="radio" id="10" v-model="selected" value="기프트" >
                                    <label for="10">기프트</label>
                                    <input type="radio" id="11" v-model="selected" value="비건" >
                                    <label for="11">비건</label>
                                </div>
                            </div>
                        </el-breadcrumb-item>
                        <span style="margin:0px 10px;"> > </span>
                        <el-breadcrumb-item>
                            <div class="nav">
                                <div class="select-box" v-bind:style="select_box_style">
                                    <span class="selected" @mouseover="openOption3">{{selected3}}</span>
                                    <img :src="select_arrow_down">
                                </div>
                                <div name class="options-container" v-if="isOpen3" v-bind:style="options_container_style">
                                    <input type="radio" id="1" v-model="selected" value="배쓰 밤">
                                    <label for="1">배쓰 밤</label>
                                    <input type="radio" id="2" v-model="selected" @click="choose" value="버블 바" >
                                    <label for="2">버블 바</label>
                                    <input type="radio" id="3" v-model="selected" value="배쓰 오일" >
                                    <label for="3">배쓰 오일</label>
                                    <input type="radio" id="4" v-model="selected" value="펀" >
                                    <label for="4">펀</label>
                                </div>
                            </div>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
            <div class="goods_info_table" @mouseover="closeOption" >
                <div class="goods_img">
                    <img :src="`/product/image/list?code=${itemDetail._id}`">
                    <div class="thumbnail_box">
                        <img :src="select_arrow_left" class="left_arrow">
                        <div class="thumbnail_section"> 
                            <img :src="`/product/image/list?code=${itemDetail._id}`"> 
                        </div>
                        <img :src="select_arrow_right" class="right_arrow">
                    </div>
                </div>
                <div class="goods_info">
                    <div class="goods_info_title">
                        <div id="goods_info_title">
                            <p>{{itemDetail.name}}</p>
                            <div class="shareZzimIcon">
                                <div class="shareIcon"></div>
                                <div class="zzimIcon"></div>
                            </div>
                        </div>
                        <p id="producttag">{{itemDetail.tag}}</p>
                    </div>
                    <div class="goods_info_detail">
                        <span>5개의 후기보기</span>
                        <div>
                            <span>Good To Know</span>
                            <div class="questionicon"></div>
                        </div>
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><p>판매가</p></th>
                                    <td id="price">{{priceForm}} 원</td>
                                </tr>
                                <tr>
                                    <th><p>상품무게</p></th>
                                    <td>{{itemDetail.weight}}</td>
                                </tr>
                                <tr>
                                    <th><p>구매수량</p></th>
                                    <td id="quantity">
                                        <div class="count_section">
                                            <img :src="minus" @click="handleMinus">
                                            <span>{{counting}}</span>
                                            <img :src="plus" @click="handlePlus">
                                        </div>
                                        <div class="total_count">
                                            {{totalCountingF}} 원
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="goods_info_price">
                        <ul>
                            <li>
                                <span>총 제품 금액</span>
                                <p>{{totalCountingF}} 원</p>
                            </li>
                            <li>
                                <span>총 합계 금액</span>
                                <p>{{totalCountingF}} 원</p>
                            </li>
                        </ul>
                    </div>
                    <div class="order_btn_container">
                        <button type="button" id="cartbtn" @click="handleaddcart">장바구니</button>
                        <button type="button" id="orderbtn">주문하기</button>
                    </div>
                </div>
            </div>
            <div class="pd_contents">
                <div ref="first" class="first_box">
                    <div class="pd_navbar">
                        <span @click.prevent="goThere('first')">상품상세정보</span>
                        <span @click.prevent="goThere('second')">상품후기</span>
                        <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
                    </div>
                    <div class="product_detail">
                        <div class="product_ingredient">
                            <h1>제품 성분</h1>
                            <span>* 원재료의 특성에 한함</span>
                            <div class="ingredient1">
                                <p>대표성분</p>
                                <p>{{detailIngredient.main_ingredient}}</p>
                            </div>
                            <div class="ingredient2">
                                <p>전 성분 표기</p>
                                <p>{{detailIngredient.all_ingredient}}</p>
                            </div>
                            <div class="slogan">
                                <div style="width : 70px;">
                                    <img :src="suitable_vegan">
                                </div>
                                <p>동물성 원료를 포함하지 않은 제품으로 <br> 비건에게 적합함</p>
                            </div>
                            <div class="slogan2">
                                <div style="width : 70px; display : flex; justify-content: center;">
                                    <img :src="sp">
                                </div>
                                <p>화학 합성 보존제 없이도 신선함을 유지하는 제품</p>
                            </div>
                        </div>
                        <div class="product_ingredient_img">
                            <ul>
                                <li class="img_card" v-for="idx in priorityLength" v-bind:key="idx">
                                    <div class="info_box">
                                        <img :src="`/product/detail/image?product_detail_no=${itemCode}&priority=${idx}`">
                                        <p>{{detailIngredient_desc[idx].name}}</p>
                                        <span>{{detailIngredient_desc[idx].desc}}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div ref="second" class="second_box">
                    <div class="pd_navbar">
                        <span @click.prevent="goThere('first')">상품상세정보</span>
                        <span @click.prevent="goThere('second')">상품후기</span>
                        <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
                    </div>
                    <div class="review_container">
                        <div class="review_title_box">
                            <div class="review_title_section">
                                <h1>Product Reviews</h1>
                                <star-rating :rating="4" :read-only="true" :increment="0.5" active-color="#000000" :star-size="15" :show-rating="false"></star-rating>
                                <p>161</p>
                            </div>
                            <p id="sub_title">나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
                        </div>
                        <div class="review_writing_container">
                            <div class="review_rating_section">
                                <dl class="rating_select">
                                    <dt>평가</dt>
                                    <dd>
                                        <ul>
                                            <li>
                                                <input type="radio" id="rating5" value="5" name='rating' v-model="picked">
                                                <label for="rating5">
                                                    <star-rating :rating="5" :read-only="true" :increment="1" active-color="#333" inactive-color="#fff" :border-width="2"  :star-size="10" :show-rating="false"></star-rating>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="rating4" value="4" name='rating' v-model="picked">
                                                <label for="rating4">
                                                    <star-rating :rating="4" :read-only="true" :increment="1" active-color="#333" inactive-color="#fff" :border-width="2"  :star-size="10" :show-rating="false"></star-rating>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="rating3" value="3" name='rating' v-model="picked">
                                                <label for="rating3">
                                                    <star-rating :rating="3" :read-only="true" :increment="1" active-color="#333" inactive-color="#fff" :border-width="2"  :star-size="10" :show-rating="false"></star-rating>
                                                </label>
                                            </li>   
                                            <li>
                                                <input type="radio" id="rating2" value="2" name='rating' v-model="picked">
                                                <label for="rating2">
                                                    <star-rating :rating="2" :read-only="true" :increment="1" active-color="#333" inactive-color="#fff" :border-width="2"  :star-size="10" :show-rating="false"></star-rating>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="rating1" value="1" name='rating' v-model="picked">
                                                <label for="rating1">
                                                    <star-rating :rating="1" :read-only="true" :increment="1" active-color="#333" inactive-color="#fff" :border-width="2"  :star-size="10" :show-rating="false"></star-rating>
                                                </label>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                            <div class="review_writing_section">
                                <textarea rows="15" v-model="message"></textarea>
                            </div>
                            <div class="policy_agreee">
                                <div class="policy_agree_title">
                                    <p>비회원 개인정보 수집동의</p>
                                    <span id="showall" @click="goPolicy">전체보기</span>
                                </div>
                                <p id="policy">
                                    - 수집항목: 이름, 휴대전화번호, 작성 비밀번호
                                    - 수집/이용목적: 게시글 접수 및 결과 회신
                                    - 이용기간: 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                                    단, 관계법령의 규정에 의하여 보전할 필요가 있는 경우 일정기간 동안 개인정보를 보관할 수 있습니다.
                                    위와 같이 수집하는 개인정보에 대해, 동의하지 않거나 거부할 수 있습니다. 다만, 동의하지 않거나 거부할 경우 회원에게 제공되는 서비스가 제한될 수 있습니다.
                                    그 밖의 사항은 (주)러쉬코리아 개인정보처리방침을 준수합니다 
                                </p>
                                <div class="member_section">
                                    <div class="whos_writing">
                                        <div class="whos_userid">
                                            <label>작성자</label>
                                            <input type="text" v-model="membername">
                                        </div>
                                        <div class="whos_userpw">
                                            <label>비밀번호</label>
                                            <input type="password"  v-model="memberpw">
                                        </div>
                                    </div>
                                    <div class="whos_agree">
                                        <el-checkbox label="위 내용에 동의합니다." name="type"></el-checkbox>
                                    </div>
                                </div>
                                <div class="finish_section">
                                    <div class="insert_img_section">
                                        <img :src="ico_camera" id="cameraImg">
                                        <label for="insertImg"></label>
                                        <input type="file" style="display : none;" id="insertImg" @change="handleImage"/>
                                    </div>
                                    <button @click="writeReview">후기작성</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref="third" class="third_box">
                    <div class="pd_navbar">
                        <span @click.prevent="goThere('first')">상품상세정보</span>
                        <span @click.prevent="goThere('second')">상품후기</span>
                        <span @click.prevent="goThere('third')">배송/교환 및 반품안내</span>
                    </div>
                    <div class="policy_container">
                        <img :src="policy1">
                        <img :src="policy2">
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue';
import StarRating from 'vue-star-rating';
import axios from 'axios';
import select_arrow_down from '@/assets/select_arrow_down.png';
import select_arrow_left from '@/assets/select_arrow_left.png';
import select_arrow_right from '@/assets/select_arrow_right.png';
import minus from '@/assets/minus.png';
import plus from '@/assets/plus.png';
import sp from '@/assets/sp.png';
import suitable_vegan from '@/assets/suitable_vegan.png';
import ico_camera from '@/assets/ico_camera.png';
import policy1 from '@/assets/policy1.png';
import policy2 from '@/assets/policy2.png';

    export default {
        data(){
            return{
                itemDetail : [],
                detailIngredient : [],
                detailIngredient_desc : [],
                priceForm : 0,
                itemCode : this.$route.query.code,
                select_arrow_down,
                select_arrow_left,
                select_arrow_right,
                plus,
                minus,
                sp,
                suitable_vegan,
                ico_camera,
                policy1,
                policy2,
                isOpen : false,
                isOpen2 : false,
                isOpen3 : false,
                selected : '러쉬',
                selected2 : '배쓰',
                selected3 : '배쓰밤',
                counting : 1,
                totalCounting : 0,
                totalCountingF : 0,
                priorityLength : 0,
                token : sessionStorage.getItem("TOKEN"),
                picked : '',
                message : '',
                membername : '',
                memberpw : '',
                image : '',

                select_box_style : {
                    border: "1px solid rgb(197, 197, 197)",
                    color : "rgb(117, 117, 117)",
                    overflow : "hidden",
                    width : "100%",
                    height : "25px",
                },

                options_container_style : {
                    display: "block",
                    color : "black",
                    border: "1px solid rgb(197, 197, 197)",
                    width: "150px",
                    height: "fit-content",
                    opacity: "1",
                    background: "white",
                    flexFlow: "column",
                    transform: "translateY(-1%)",
                    zIndex: "100000",
                }
            }
        },
        components:{
            Footer : Footer,
            StarRating : StarRating,
        },
        async created(){
            await this.handleContent();
        },
        methods : {
            async writeReview(){
                const url = `/product/review/register`;
                const headers = { 
                    "Content-Type" : "multipart/form-data",
                    "token"        : this.token
                };
                const formData = new FormData();
                formData.append("product_code", this.itemCode);
                formData.append("review_content", this.message);
                formData.append("review_rating", this.picked);
                formData.append("image", this.image);
                console.log(this.token);

                const response = await axios.post(url, formData, {headers});
                console.log(response);
                if(response.data.ret === 1){
                    alert(response.data.data);
                    this.$router.push({path:'/'})
                }
                else{
                    alert(response.data.data);
                }
            },
            handleImage(e){
                // e로 전송되는 파일정보를 image변수에 넣어줌.
                console.log(e);
                if(e.target.files.length > 0) {
                    this.image = e.target.files[0];
                }
            },
            async handleaddcart() {
                await this.handleContent();

                const headers = { 
                    "Content-Type" : "application/json",
                    "token"        : this.token
                };
                console.log(headers);
                const body = { 
                    product_code : this.itemCode,
                    product_name : this.itemDetail.name,
                    product_price : this.itemDetail.price,
                    product_count : this.counting 
                };
                console.log(body);
                const url = `/order/addcart`;
                const response = await axios.put(url, body, {headers});
                console.log(response);
                if(response.data.ret === 1){
                    alert(response.data.data);
                    if(confirm('장바구니로 이동하시겠습니까?')){
                        this.$router.push({path:'/shopping_cart'});
                    }
                    else await this.handleContent();
                }
                else{
                    alert(response.data.data);
                }
            },
            async handleContent(){
                const url = `/product?code=${this.itemCode}`;
                const result = await axios.get(url);
                console.log(result);
                if(result.data.ret === 1){
                    this.itemDetail = result.data.data;
                    this.priceForm = result.data.data.price.toLocaleString();
                    this.totalCountingF = this.priceForm.toLocaleString();
                    // console.log(this.itemDetail);
                }

                const url1 = `/product/detail?code=${this.itemCode}`;
                const result1 = await axios.get(url1);
                console.log(result1);
                if(result1.data.ret === 1){
                    this.detailIngredient = result1.data.data;
                }

                const url2 = `/product/detail/image/count?code=${this.itemCode}`;
                const result2 = await axios.get(url2);
                console.log(result2);
                if(result2.data.ret === 1){
                    this.priorityLength = result2.data.data;
                }

                for(var i=1; i<=this.priorityLength; i++){
                    const url3 = `/product/detail/image/desc?product_detail_no=${this.itemCode}&priority=${i}`;
                    const result3 = await axios.get(url3);
                    // console.log(result3);
                    if(result3.data.ret === 1){
                        this.detailIngredient_desc[i] = result3.data.data;
                        console.log(this.detailIngredient_desc);
                    }
                    
                }

            },
            openOption(){
                this.isOpen = !this.isOpen;
            },
            openOption2(){
                this.isOpen2 = !this.isOpen2;
            },
            openOption3(){
                this.isOpen3 = !this.isOpen3;
            },
            closeOption(){
                this.isOpen = false;
                this.isOpen2 = false;
                this.isOpen3 = false;
                this.select_box_style.border = '1px solid rgb(197, 197, 197)';
            },
            handleMinus(){
                if(this.counting >= 1){
                    this.counting--;
                    this.totalCounting -= this.itemDetail.price;
                }
                else if(this.counting < 1){
                    this.counting = 1;
                    this.totalCounting = this.itemDetail.price;
                }
                this.totalCountingF = this.totalCounting.toLocaleString();
            },
            handlePlus(){
                if(this.counting >= 1 && this.counting <= 19){
                    this.counting++;
                    this.totalCounting = this.itemDetail.price * this.counting;
                }
                this.totalCountingF = this.totalCounting.toLocaleString();
            },
            goThere(val){
                var element = this.$refs[val];
                var location = element.offsetTop;
                console.log(location);
                element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            },
            goPolicy(){
                window.open("https://www.lush.co.kr/service/private.php");
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100&display=swap');

.pd_bathbomb{
    width: 100%;
    /* height: 100vh; */
    display : flex;
    flex-direction: column;
    font-family: 'Nanum Gothic', sans-serif;
}
.pd_wrap{
    /* border: 1px solid black; */
    width: 1180px;
    /* height: 100vh; */
    margin: 40px auto;
    display: flex;
    flex-direction: column;
}
.locations{
    /* border: 1px solid black; */
    position: relative;
    width: 100%;
    padding: 20px 0 0;
    height: 45px;
    z-index: 1;
}
.paths{
    /* border: 1px solid black; */
    position : absolute;
    width: 56.5%;
    height: 100%;
    right: 0;
    bottom: 0;
    display: inline-flex;
    font-size: 13px;
    align-items: center;
}
.paths span{
    padding-top: 5px;
    font-family: 'Nanum Gothic', sans-serif;
}


/* select 박스 */
.nav{
    width: 150px;
    position:absolute;
    /* right: 72%; */
    top: 35%;
    z-index: 1;
}
.select-box > img {
    width: 15px;
    height: 8px;
    top: 40%;
    right: 5%;
    position: absolute;
}
.selected {
    width: 90%;
    height: 10px;
    /* border: 1px solid black; */
    background: rgb(255, 255, 255);
    color : rgb(37, 36, 36);
    position: absolute;
    text-align: left;
    font-size: 13px;
    padding: 9px 0px 8px 8px;
}
.options-container label {
    display: block;
    width: 142px;
    color: rgb(37, 36, 36);
    text-align: left;
    font-size: 13px;
    line-height: 0.6em;
    padding: 10px 0px 8px 8px;
}
.options-container label:hover{
    background: #3e3d3c;
    color : white
}
.paths input[type="radio"]{
    display: none;
}


.goods_info_table{
    /* border: 1px solid black; */
    width : 100%;
    display: inline-flex;
    /* margin : 40px auto; */
    justify-content: center;
    padding-top: 20px;
}
.goods_info_table .goods_img{ 
    /* border: 1px solid black; */
    width: 35%;
    height: 380px;
    display :flex;
    margin-right : 20px;
    flex-direction: column;
}
.goods_info_table .goods_img > img{ 
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
}
.goods_img .thumbnail_box{
    /* border: 1px solid black; */
    width: 100%;
    height : 50px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.thumbnail_box .left_arrow{
    width : 10px;
    height : 14px;
    cursor: pointer;
    margin : 0px 10px;
}
.thumbnail_box .right_arrow{
    width : 10px;
    height : 14px;
    cursor: pointer;
    margin : 0px 10px;
}
.thumbnail_section{
    width : 380px;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
}
.thumbnail_section > img{
    width : 50px;
    height: 100%;
    border: 0.5px solid rgba(235, 235, 235, 0.815);
}
.goods_info{
    /* border: 1px solid black; */
    width : 53%;
    height: 600px;
    display: flex;
    flex-direction: column;
}
.goods_info_title{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
}
.goods_info_title #producttag{
    padding-top: 8px;
    font-size: 13px;
    color: #808080;
    margin : 0px;
}
.goods_info_title #goods_info_title{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 33.33px;
    justify-content: space-between;
}
.shareZzimIcon{
    /* border: 1px solid black; */
    display: inline-flex;
    align-items: center;
}
.shareIcon{
    /* border: 1px solid black; */
    width: 20px;
    height: 20px;
    background-image: url("/src/assets/icon_share.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1;
    cursor: pointer;
}
.zzimIcon{
    /* border: 1px solid black; */
    width: 20px;
    height: 20px;
    background-image: url("/src/assets/icon_zzim.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    margin-left: 10px;
    cursor: pointer;
}
.goods_info_title #goods_info_title > p{
    /* border: 1px solid black; */
    width : fit-content;
    height : fit-content;
    font-size: 28px;
    line-height: 34px;
    margin : 0px;
    font-weight : bold
}
.goods_info .goods_info_detail{
    border-top: 0.3px solid  #808080;
    border-bottom: 0.3px solid  #808080;
    padding: 20px 0px;
    margin : 20px 0px;
    display: flex;
    flex-direction: column;
}
.goods_info_detail span{
    color : #1e1e1e;
    font-size: 13px;
    letter-spacing: -0.5px;
}
.goods_info_detail > div{
    display: inline-flex;
    width: 100%;
    align-items: center;
    margin: 15px 0px;
}
.questionicon {
    /* border: 1px solid black; */
    width: 14px;
    height: 14px;
    margin-left: 5px;
    background-image: url("/src/assets/icon_tooltip_off.png");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1; 
    cursor: pointer;
}
.goods_info .goods_info_detail th{
    /* border: 1px solid black; */
    /* width: fit-content; */
    width: 80px;
    text-align: left;
    margin: 30px 0px;
}
.goods_info .goods_info_detail th p{
    /* border: 1px solid black; */
    font-weight: normal;
    width: 80px;
    color: #333;
    margin: 0px;
    font-size: 13px;
}
.goods_info .goods_info_detail td{
    /* border: 1px solid black; */
    /* width: fit-content; */
    width: calc(100%-80px);
    text-align: left;
    padding: 15px 0px;
}
#price{
    /* border: 1px solid black; */
    /* width: fit-content; */
    width: calc(100%-80px);
    text-align: left;
    padding: 15px 0px;
    font-weight: bold;
}
.goods_info .goods_info_detail #quantity{
    /* border: 1px solid black; */
    width: 100%;
    height : 50px;
    /* width: calc(100%-80px); */
    text-align: left;
    padding:0;
    display : inline-flex;
    align-items: center;
}
.count_section{
    border: 0.5px solid rgba(235, 235, 235, 0.815);
    width: 40%;
    margin: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.count_section img{
    width : 20px;
    height : 20px;
    margin : 0px 10px;
    cursor : pointer;
}
.count_section img:last-child{
    width : 15px;
    height : 15px;
    margin : 0px 10px;
}
.count_section span{
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.total_count{
    width : 20%;
    height : fit-content;
    margin : 0px 15px;
    font-size : 14px;
    font-weight: bold;
}
.goods_info .goods_info_price{
    /* border: 1px solid black; */
    /* text-align: right; */
    width: 100%;
}
.goods_info .goods_info_price ul{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin : 0;
}
.goods_info .goods_info_price li{
    list-style: none;
    display: inline-flex;
    align-items: center;
    height : 50px;
}
.goods_info .goods_info_price span{
    width: fit-content;
    height: fit-content;
    color: #333;
    line-height: 30px;
    font-size: 13px;
}
.goods_info .goods_info_price p{
    width: fit-content;
    color: #333;
    margin-left : 20px;
    font-size: 22px;
    font-weight: bold;
}
.order_btn_container{
    width : 100%;
    height : 50px;
    display: inline-flex;
    justify-content: space-between;
    margin-top: 20px;
}
.order_btn_container #cartbtn, #orderbtn{
    border : 0.5px solid black;
    width : 49%;
    height : 50px;
}
.order_btn_container #cartbtn{
    background-color: #ffffff;
    color : black;
    cursor: pointer;
}
.order_btn_container #orderbtn{
    background-color: black;
    color : #ffffff;
}
.order_btn_container #orderbtn:hover{
    opacity: 0.7;
    cursor: pointer;
}
.goods_info .goods_img{
    display: inline-block;
    position: relative;
    float: left;
    width: 380px;
    margin: 0 auto;
    padding: 0 0;
    text-align: center;
    margin-left: 40px;
}


/* 상세내용 섹션 */
.pd_contents{
    width : 100%;
    height : fit-content;
}
.pd_navbar{
    /* border: 1px solid black; */
    width: 100%;
    height : 50px;
    display: inline-flex;
}
.pd_navbar span {
    border: 0.5px solid rgb(219, 219, 219);
    width: 33.5%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #808080;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}

/* 첫번째 - 제품 성분 섹션 */
.first_box{
    /* border : 1px solid red; */
    height : fit-content;
    display : flex;
    flex-direction: column;
}
.first_box .pd_navbar span:first-child{
    border: 0.5px solid #333;
    border-bottom : none;
    width: 33%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #333;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.first_box .product_detail {
    border-top: 0.5px solid #333;
    width : 100%;
    padding-bottom: 3%;
    height : calc(100% - 50px);
    display : inline-flex;
    align-items: center;
}
.first_box .product_detail .product_ingredient {
    /* border : 1px solid red; */
    width : 45%;
    height : calc(100% - 50px);
    padding : 5% 2% 5% 5%;
    display : flex;
    flex-direction: column;
}
.first_box .product_detail .product_ingredient span {
    font-size: 16px;
    color: #808080;
}
.ingredient1, .ingredient2{
    font-size: 16px;
    color: #808080;
    margin-top : 50px;
}
.ingredient1 > p,
.ingredient2 > p {
    font-size: 16px;
    color: #808080;
    margin : 3px 0px;
}
.slogan {
    /* border : 1px solid black; */
    width : 100%;
    display : inline-flex;
    height : fit-content;
    margin-top : 50px;
    align-items: center;
}
.slogan img {
    /* border : 1px solid black; */
    width : 100%;
    height : 35px;
}
.slogan p {
    /* border : 1px solid black; */
    font-size : 16px;
    margin-left: 10px;
    height : fit-content;
    color: #808080;
}
.slogan2 {
    /* border : 1px solid black; */
    width : 100%;
    margin-top : 5px;
    display : inline-flex;
    height : fit-content;
    align-items: center;
}
.slogan2 img {
    /* border : 1px solid black; */
    width : 30px;
    height : 30px;
}
.slogan2 p {
    /* border : 1px solid black; */
    font-size : 16px;
    margin-left: 10px;
    height : fit-content;
    color: #808080;
}
.first_box .product_detail .product_ingredient_img {
    /* border : 1px solid blue; */
    width : 70%;
    height : 100%;
    display: table;
    padding : 3% 0%;
    /* flex-direction: column; */
}
.product_ingredient_img li{
    padding: 0 0;
}
.product_ingredient_img ul{
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: center;
}
.product_ingredient_img ul li{
    display: inline-block;
    font-size: 12px;
    text-align: center;
    vertical-align: top;
    margin: 0;
    list-style: none;
    cursor: pointer;
    width: 285px;
}
.img_card{
    /* border : 1px solid black; */
    width : 20%;
    height : fit-content;
}
.info_box {
    align-items: center;
    /* border : 1px solid black; */
    display : flex;
    margin : 10px 0px;
    flex-direction: column;
}
.info_box img{
    width : 70%;
    height : 30%;
}
.info_box p{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
}
.info_box span{
    font-size: 15px;
}

/* 두번째 - 리뷰 섹션 */
.second_box { 
    /* border : 1px solid red; */
    height : fit-content;
    margin-bottom: 3em;
}
.second_box .pd_navbar span:nth-child(2) {
    border: 0.5px solid #333;
    border-bottom : none;
    width: 33%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #333;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.second_box .review_container {
    border-top: 0.5px solid #333;
    width : 100%;
    height : calc(100%-50px);
    display : flex;
    padding-top : 3%;
    flex-direction: column;
}
.review_title_box { 
    width : 100%;
    display : flex;
    flex-direction: column;
}
.review_title_section{
    /* border : 1px solid black; */
    display : inline-flex;
    width  : 100%;
    height : 50px;
    align-items: flex-end;
}
.review_title_section h1{
    height : fit-content;
    margin : 0 10px 0px 0px;
}
.review_title_section p{
    height : fit-content;
    font-size : 15px;
    margin : 0px 0px 3px 10px;
}
#sub_title{
    font-size: 16px;
}
.review_writing_container{
    border: 0.5px solid rgb(219, 219, 219);
    width : 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
}
.review_rating_section{
    width : 100%;
}
.review_rating_section .rating_select{
    border-top: 0.5px solid rgb(219, 219, 219);
    border-bottom: 0.5px solid rgb(219, 219, 219);
    width : 98%;
    height: 70px;
    margin : 0;
    padding-left : 20px;
    display: flex;
    align-items: center;
}
.rating_select dl{
    display : inline-flex;
}
.rating_select dt{
    /* border : 1px solid red; */
    display : inline-flex;
    font-size : 13.5px;
}
.rating_select dd{
    font-size : 13.5px;
    /* border : 1px solid red; */
}
.rating_select dd ul{
    /* border : 1px solid red; */
    display : inline-flex;
    padding : 0;
}
.rating_select dd ul li{
    list-style: none;
    display: inline-flex;
    margin-right: 20px;
    align-items: baseline;
}
.rating_select dd ul li label{
    margin-left : 5px;
}
.review_writing_section{
    border-bottom: 0.5px solid rgb(219, 219, 219);
    width : 100%;
}
.review_writing_section textarea{
    border: none;
    text-align: left;
    width : 93.5%;
    padding : 2%;
    font-size : 14px;
    font-family: 'Nanum Gothic', sans-serif;
}
.review_writing_section textarea:focus{
    outline: none;
}
.policy_agreee{
    position : relative;
    width : 100%;
    display : flex;
    flex-direction: column;
}
.policy_agreee .policy_agree_title{
    display : inline-flex;
    width : 100%;
    padding : 20px;
    height: fit-content;
    align-items: baseline;

}
.policy_agree_title p{
    font-size: 15px;
    height : fit-content;
    margin : 0;
    font-weight: bold;
}
.policy_agree_title #showall{
    font-size: 13px;
    margin-left: 7px;
    height : fit-content;
    text-decoration-line: underline;
    cursor : pointer;
}
#policy{
    width : 97%;
    border : 0.3px solid rgb(219, 219, 219);
    font-size: 14px;
    margin : 0px auto;
    line-height: 1.3em;
}
.member_section{
    /* border : 1px solid black; */
    padding : 20px;
    height : 35px;
    display : inline-flex;
    justify-content: space-between;
}
.whos_writing, .whos_agree {
    /* border : 1px solid red; */
    width : fit-content;
    height : 100%;
    display : inline-flex;
}
.whos_userid, .whos_userpw{
    /* border : 1px solid blue; */
    width : fit-content;
    height : 100%;
    align-items: center;
    display : inline-flex;
}
.whos_userpw{
    margin-left: 20px;
}
.whos_writing label {
    width : 60px;
    font-size: 14px;
}

.whos_writing input {
    width : 130px;
    height : 70%;
    font-size : 14px;
    padding-left: 5px;
    letter-spacing: 0.05em;
    border : 1px solid rgba(175, 175, 175, 0.733);
    border-radius: 0;
}
.whos_writing input:focus {
    outline: none;
}
.finish_section{
    border-top: 0.5px solid rgb(219, 219, 219);
    width : 100%;
    height : 60px;
    display : inline-flex;
    justify-content: space-between;
    align-items: center;
}
.insert_img_section{
    width : 35px;
    height : 30px;
    position: relative;
    margin-left : 15px;
}
.insert_img_section img{
    width : 100%;
    height : 100%;
}
.insert_img_section label{
    /* border : 1px solid black; */
    position: absolute;
    width : 100%;
    height : 100%;
    left : 0;
    cursor : pointer;
}
.finish_section button {
    border : 0.5px solid #333;
    background-color : white;
    width : 150px;
    padding : 10px;
    height : 100%;
    font-size : 15px;
    cursor : pointer;
}

/* 세번째 - 환불, 교환 정책 섹션 */
.third_box{
    /* border : 1px solid red; */
    height : fit-content;
}
.third_box .pd_navbar span:nth-child(3) {
    border: 0.5px solid #333;
    border-bottom: none;
    width: 33%;
    height : 50px;
    display : flex;
    font-size: 14px;
    color: #333;
    align-items: center;
    justify-content: center;
    cursor : pointer;
}
.policy_container{
    border-top: 0.5px solid #333;
    width : 100%;
    height : calc(100%-50px);
    display : flex;
    flex-direction: column;
}
.policy_container img {
    width : 100%;
}
</style>