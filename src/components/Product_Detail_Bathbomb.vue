<template>
    <div class="p_detail_bathbomb">
        <div class="p_detail">

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
    export default {
        data(){
            return{

            }
        },
        components:{
            Footer : Footer,
        },       
    }
</script>

<style scoped>
.p_detail_bathbomb{
    width: 100vw;
    height: 100vh;
}
.p_detail{
    border: 1px solid black;
    width: 1180px;
    height: 100%;
}
</style>