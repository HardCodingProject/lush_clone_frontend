<template>
    <div class="parent">
        <div class="content-inner">
            <div class="header">
                <h2>나의플러스리뷰</h2>
            </div>
            <div class="menu2-body">
                <div class="review_img">
                    <img :src="`/product/review/image?no=${reviewList._id}`">
                </div>
                <div class="review_content">
                    <div class="review_header">
                        <div class="name_info">
                            <div class="name">
                                {{productList.name}}
                            </div>
                            <div class="rating">
                                <star-rating :rating="reviewList.rating" :read-only="true" :increment="0.5" active-color="#333" :star-size="15" :show-rating="false"></star-rating>
                            </div>
                        </div>
                        <div class="date_info">
                            <div class="date">
                                <p>{{reviewList.regdate}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="goods_info">
                        <p>{{reviewList.content}}</p>
                    </div>
                    <div class="button_info">
                        <button @click="handelupdate">수정</button>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="showModalUpdate" title="상품후기 수정하기">
        <div class="select-option">
            <div class="select-box" @click="openOption">
                <span class="selected">{{selected}}</span>
                <img :src="select_arrow_down">
            </div>
            <div name class="options-container" v-if="isOpen">
                <input type="radio" id="5" v-model="selected" value="5" >
                <label for="5">
                    <star-rating :rating="5" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                    아주만족
                </label>
                <input type="radio" id="4" v-model="selected" value="4" >
                <label for="4">
                    <star-rating :rating="4" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                </label>
                <label class="feel">만족</label>
                <input type="radio" id="3" v-model="selected" value="3" >
                <label for="3">
                    <star-rating :rating="3" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                </label>
                <label class="feel">보통</label>
                <input type="radio" id="2" v-model="selected" value="2" >
                <label for="2">
                    <star-rating :rating="2" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                </label>
                <label class="feel">미흡</label>
                <input type="radio" id="1" v-model="selected" value="1" >
                <label for="1">
                    <star-rating :rating="1" :read-only="true" :increment="0.5" active-color="#ffcc00" :star-size="15" :show-rating="false"></star-rating>
                </label>
                <label class="feel">불만족</label>
            </div>
        </div>
    </el-dialog>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating';
import select_arrow_down from '@/assets/select_arrow_down.png';
    export default {
        data(){
            return{
                reviewList : [],
                itemcode : [],
                productList : [],
                token : sessionStorage.getItem("TOKEN"),
                showModalUpdate : false,
                selected : '', 
                isOpen :false,
                select_arrow_down : select_arrow_down,
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
                    
                    // for(var i=0; i<this.reviewList.length; i++){
                        // this.itemcode[i] = this.reviewList[i].product_code;
                        const url1 = `/product?code=${this.reviewList.product_code}`;
                        const result = await axios.get(url1);
                        // console.log(result1);
                        if(result.data.ret === 1){
                            this.productList = result.data.data;
                        }
                    // }
                    console.log(this.productList);
                }
                else{
                    alert(response.data.data);
                }
            },
            handelupdate(){
                this.showModalUpdate = true;
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
    background: black;
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
    border: 1px solid #e8e8e8;
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
    background: white;
}
.review_content{
    float: left;
    width: 629px;
    height: 185px;
    background: white;
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
    background: red;
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
    background: green;
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
    background: yellow;
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
.feel{
    right: 2%;
}
input[type="radio"]{
    display: none;
}
</style>