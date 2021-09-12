<template>
    <div class="brand"> 
        <ul class="img">
            <li><img :src = 'img1'></li>
            <li><img :src = 'img2'></li>
            <li><img :src = 'img3'></li>
            <li><img :src = 'img4'></li>
            <li><img :src = 'img5'></li>
            <li><img :src = 'img6'></li>
        </ul>
    </div>
    <div class="footer">
        <span>footer</span>
    </div>
</template>

<script>
import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';

    export default {
        name : 'footer',
        data(){
            return {
                img1 : img1,
                img2 : img2,
                img3 : img3,
                img4 : img4,
                img5 : img5,
                img6 : img6,
            }
        }
    }
</script>

<style scoped>

.brand{
    width: 100%;
    background: rgb(242, 242, 242);
    height: 160px;
    margin:0 auto; 
    display: flex;
}
.footer{
    width: 100%;
    background: black;
    height: 490px;
}
img{
    width: 150px;
    height: 100px;
    margin-right: 80px;
}
.img{
  list-style: none;
  margin: auto;
  display: flex;
  text-align:center;
  flex-wrap: wrap;
    padding: 0;
}
.img li{
  display:inline-block; 
  margin: 0% auto;
  height: auto;
}
</style>