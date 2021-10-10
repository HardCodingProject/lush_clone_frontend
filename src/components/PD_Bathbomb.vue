<template>
    <div class="pd_bathbomb">
        <div class="pd_wrap">
            <div class="locations">
                <div class="paths">
                    <span>홈 > </span>
                    <div class="nav">러쉬</div> <span>></span>
                    <div class="nav">배쓰</div> <span>></span>
                    <div class="nav">배쓰밤</div>
                </div>
                <div class="godds_info_table">
                    <div class="goods_img">

                    </div>
                    <div class="godds_info">
                        <div class="goods_img">

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
    export default {
        components:{
            Footer : Footer,
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100&display=swap');

.pd_bathbomb{
    width: 100%;
    height: 100%;
}
.pd_wrap{
    border: 1px solid black;
    width: 1180px;
    height: 100%;
    margin: 0 auto;
    display: block;
}
.locations{
    border: 1px solid black;
    position: relative;
    width: 100%;
    padding: 20px 0 0;
    height: 45px;
    z-index: 1;
}
.paths{
    position : absolute;
    width: 590px;
    height: fit-content;
    right: 0;
    bottom: 0;
    display: inline-flex;
}
.paths span{
    padding-top: 5px;
    font-family: 'Nanum Gothic', sans-serif;
    size: 20px;
}
.nav{
    border: 0.5px solid #ccc;
    width: 151px;
    margin: 0 10px 0 10px;
    height: 22px;
    color: #535353;
    padding: 5px 0 0 5px;
}
.nav:hover{
    border: 0.5px solid rgb(0, 0, 0);
    cursor: pointer;
}
.godds_info{
    border: 1px solid black;
    display: table;
    position: relative;
    width: 100%;
    height: 660px;
    margin: 0 auto;
    clear: both;
    margin-top: 20px;
    padding: 30px 0 30px 0;
    z-index: 0;
}
.godds_info .goods_img{
    display: inline-block;
    position: relative;
    float: left;
    width: 380px;
    margin: 0 auto;
    padding: 0 0;
    text-align: center;
    margin-left: 40px;
}
</style>