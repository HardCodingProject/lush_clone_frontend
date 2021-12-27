<template>
    <div class="content">
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
                                <star-rating :rating="reviewList.rating" :read-only="true" :increment="1" active-color="#333" inactive-color="#fff" :border-width="2"  :star-size="10" :show-rating="false"></star-rating>
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
        
    </el-dialog>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating';
    export default {
        data(){
            return{
                reviewList : [],
                itemcode : [],
                productList : [],
                token : sessionStorage.getItem("TOKEN"),
                showModalUpdate : false
            }
        },
        components:{
            StarRating : StarRating
        },
        async created(){
            await this.handleReview();
        },
        methods : {
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
    /* background: black; */
    display: flex;
    flex-direction: column;
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
</style>