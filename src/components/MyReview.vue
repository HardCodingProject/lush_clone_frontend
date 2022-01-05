<template>
    <div class="parent">
        <div class="content-inner">
            <div class="header">
                <h2>나의플러스리뷰</h2>
            </div>
            <div class="menu2-body" v-for="review in reviewList" v-bind:key="review">
                <div class="review_img">
                    <img :src="`/product/review/image?product_review_no=${review._id}`">
                </div>
                <div class="review_content">
                    <div class="review_header">
                        <div class="name_info">
                            <div class="name">
                                {{review.name}}
                            </div>
                            <div class="rating">
                                <star-rating :rating="review.rating" :read-only="true" :increment="0.5" active-color="#333" :star-size="15" :show-rating="false"></star-rating>
                            </div>
                        </div>
                        <div class="date_info">
                            <div class="date">
                                <p>{{review.regdate}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="goods_info">
                        <p>{{review.content}}</p>
                    </div>
                    <div class="button_info">
                        <button @click="OpenUpdate(review._id)">수정</button>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="showModalUpdate" title="상품후기 수정하기">
        <div class="select-option">
            <div class="select-box" @click="openOption">
                <span class="selected">
                    <star-rating :rating="selected" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                </span>
                <img :src="select_arrow_down">
            </div>
            <div name class="options-container" v-if="isOpen">
                <input type="radio" id="5" v-model="selected" value="5" >
                <label for="5">
                    <div class="select-rating">
                        <star-rating :rating="5" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                        <p>아주만족</p>
                    </div>
                </label>
                <input type="radio" id="4" v-model="selected" value="4" >
                <label for="4">
                    <div class="select-rating">
                        <star-rating :rating="4" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                        <p>만족</p>
                    </div>
                </label>
                <input type="radio" id="3" v-model="selected" value="3" >
                <label for="3">
                    <div class="select-rating">
                        <star-rating :rating="3" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                        <p>보통</p>
                    </div>
                </label>
                <input type="radio" id="2" v-model="selected" value="2" >
                <label for="2">
                    <div class="select-rating">
                        <star-rating :rating="2" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                        <p>미흡</p>
                    </div>
                </label>
                <input type="radio" id="1" v-model="selected" value="1" >
                <label for="1">
                    <div class="select-rating">
                        <star-rating :rating="1" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                        <p>불만족</p>
                    </div>
                </label>
            </div>
            <div class="write-form">
                <div class="goods-info"></div>
                <div class="textarea">
                    <textarea name="content" class="reviewText" v-model="content"></textarea>
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
    </el-dialog>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating';
import select_arrow_down from '@/assets/select_arrow_down.png';
import ico_camera from '@/assets/ico_camera.png';
    export default {
        data(){
            return{
                reviewList : [],
                token : sessionStorage.getItem("TOKEN"),
                showModalUpdate : false,
                selected : '', 
                isOpen :false,
                select_arrow_down : select_arrow_down,
                ico_camera,
                image : '',
                reviewCode : '',
                content : ''
            }
        },
        components:{
            StarRating : StarRating
        },
        async created(){
            await this.handleReview();
        },
        methods : {
            openOption(){
                this.isOpen = !this.isOpen;
            },
            handleImage(e){
                // e로 전송되는 파일정보를 image변수에 넣어줌.
                console.log(e);
                if(e.target.files.length > 0) {
                    this.image = e.target.files[0];
                }
            },
            async handleReview(){
                const url = `/product/review`;
                const headers = { 
                    "Content-Type" : "application/json",
                    "token"        : this.token
                };
                const response = await axios.get(url, {headers});
                console.log(response);
                if(response.data.ret === 1){
                    this.reviewList = response.data.data;
                    console.log(this.reviewList);
                    
                }
                else{
                    alert(response.data.data);
                }
            },
            async writeReview(){
                const url = `/product/review/update`;
                const headers = { 
                    "Content-Type" : "multipart/form-data",
                    "token"        : this.token
                };
                const formData = new FormData();
                formData.append("review_no", this.reviewCode);
                formData.append("review_content", this.content);
                formData.append("review_rating", this.selected);
                formData.append("image", this.image);
                console.log(this.token);

                const response = await axios.put(url, formData, {headers});
                console.log(response);
                if(response.data.ret === 1){
                    alert(response.data.data);
                    this.$router.push({path:'/'})
                }
                else{
                    alert(response.data.data);
                }
            },
            OpenUpdate(val){
                this.showModalUpdate = true;
                this.reviewCode = val;
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');

.content{
    width: 100%;
}
.content-inner{
    margin: 50px 0 0;
    display: block;
}
.header{
    display: block;
    position: relative;
    background: white;
    color: #333;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    border-bottom: #dbdbdb 2px solid;
    padding-bottom: 10px;
}
.header h2{
    display: inline-block;
    vertical-align: middle;
    color: #111;
}
.menu2-body{
    overflow: inherit;
    padding: 20px;
    border-bottom: solid 1px #dbdbdb;
    display: inline-block;
    width: 100%;
}
.review_img{
    width: 105px;
    margin-right: 20px;
    height: 102px;
    float: left;
    clear: both;
    display: block;
}
.review_img img{
    width: 105px;
    height: 102px;
}
.review_content{
    float: left;
    width: 629px;
    height: 185px;
}
.review_header{
    display: inline-block;
    width: 100%;
    height: 50px;
}
.name_info{
    float: left;
    width: 85%;
    display: block;
    height: 50px;
}
.name{
    font-weight: bold;
    font-size: 13px;
    color: #484848;
    display: block;
}
.rating{
    margin-bottom: 10px;
    border: #333;
    color: #333;
    font-size: 17px;
    display: block;
}
.date_info{
    float: right;
    width: 15%;
    display: block;
    height: 50px;
}
.date{
    margin-bottom: 5px;
    display: block;
    color: #333;
    font-size: 14px;
}
.date p{
    margin: 0px;
}
.goods_info{
    width: 100%;
    margin-top: 40px;
    margin-bottom: 15px;
}
.goods_info p{
    font-size: 14px;
    font-family: 'Nanum Gothic', sans-serif;
    color: #333;
}
.button_info{
    padding: 20px 0 0 0;
}
.button_info button{
    border: 1px solid #e0e0e0;
    font-size: 13px;
    color: #333333;
    background: #fff;
    width: 64px;
    height: 24px;
    margin-right: 15px;
}
.select-option{
    width: 95%;
    display: block;
    margin-left: 10px;
    padding-top: 20px;
    border-top: 1px solid #575757;
}
.select-box{
    border: 1px solid rgb(197, 197, 197);
    color : rgb(117, 117, 117);
    overflow: hidden;
    width: 100%;
    height:37px;
    position:relative;
    display: inline-block;
}
.select-box > img {
    width: 15px;
    height: 8px;
    top: 40%;
    right: 2%;
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
    width: 100%;
    height: fit-content;
    opacity: 1;
    background: white;
    flex-flow: column;
    transform: translateY(-2.2%);
    z-index: 100000;
}
.options-container label {
    display: block;
    width: 98%;
    color: rgb(37, 36, 36);
    text-align: left;
    font-size: 15px;
    line-height: 0.6em;
    padding: 10px 0px 8px 8px;
}
.options-container label:hover{
    background: rgb(228, 228, 228);
}
.select-rating{
    display : inline-flex;
    width  : 100%;
    align-items: flex-end;
}
.select-rating p{
    height : fit-content;
    font-size : 15px;
    margin : 0px 0px 3px 100px;
}
input[type="radio"]{
    display: none;
}
.write-form{
    width: 100%;
    border: #dbdbdb 1px solid;
    display: block;
}
.goods-info{
    margin: 0px;
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #f8f8f8;
    border-bottom: #e8e8e8 solid 1px;
}
.textarea{
    padding: 20px;
    height: 160px;
}
.reviewText{
    width: 100%;
    height: 100%;
    border: none;
    padding: 5px;
    color: #333;
    outline: none;
    font-size: 12px;
}
.finish_section{
    border: #dbdbdb 1px solid;
    padding: 0 0 0 10px;
    width : 99%;
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
    background-color: #666666;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
    width : 140px;
    padding : 10px;
    height : 100%;
    font-size : 15px;
    cursor : pointer;
}
</style>