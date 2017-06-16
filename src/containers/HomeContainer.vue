<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .banner{
        background-color: black;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
    }
</style>

<template>
    <div>
        <el-row v-loading="bannerloading" element-loading-text="玩命加载中...">
            <el-col :span="16" :offset="4">
                <el-carousel :interval="5000" arrow="always" height="390px">
                    <el-carousel-item v-for="banner in banners" :key="banner.id">
                        <div class='banner'>
                            <img :src="banner.images.large" :alt="banner.title" class="image" width="81%">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <h3>一段文字...</h3>
        <h3>一段文字...</h3>
        <h3>一段文字...</h3>
    </div>
</template>

<script>
import movieService from '../services/movieService.js'
export default {
    data(){
        return{
            msg:'首页',
            banners:[],
            bannerloading:true
        }
    },
    mounted(){
        let _movieobj={
            pageindex:1,
            type:'coming_soon'
        }
        movieService.getMovilList(_movieobj).then((data)=>{
            this.banners=data.subjects.slice(0,5);
            this.bannerloading=false;
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log(err);
        })
    }  
}
</script>
