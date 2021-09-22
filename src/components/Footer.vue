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
            <span>footer</span>
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

    export default {
        name : 'footer',
        data(){
            return {
                f_icon_1v : f_icon_1v,
                f_icon_eb : f_icon_eb,
                f_icon_fat : f_icon_fat,
                f_icon_fco : f_icon_fco,
                f_icon_hm : f_icon_hm,
                f_icon_np :f_icon_np
            }
        }
    }
</script>

<style scoped>
.footer{
    display: block;
    position: relative;
    width: 100%;
    min-width: 1180px;
    margin: 0 auto;
    padding: 0 0 55px !important;
    background: #000;
    border: 0 !important;
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
#footer{
    width: 100%;
    background: black;
    height: 490px;
}

</style>