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
    .box-card{
        margin-top: 6px;
        margin-bottom: 3px
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .clearfix{
        padding: 3px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .movieitem{
        cursor: pointer;
    }
    .el-rate__icon{
        font-size: 10px;
    }
</style>

<template>
    <div>
        <el-row>
            <el-col :span="16" :offset="4">
                <div v-loading="coming_soonloading" element-loading-text="玩命加载中...">
                    <el-carousel :interval="5000" arrow="always" height="400px">
                        <el-carousel-item v-for="banner in coming_soons" :key="banner.id">
                            <div class='banner'>
                                <img :src="banner.images.large" :alt="banner.title" class="image" width="75%" style="cursor: pointer;" @click="todetail(banner.id)">
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <span style="line-height: 11px;">正在热映</span>
                        <router-link to="/movie/in_theaters/1" style="float:right">更多>>></router-link>
                    </div>
                        <el-row :gutter="5" v-loading="in_theatersloading" element-loading-text="玩命加载中...">
                            <el-col :span="4" v-for="movie in in_theaters" :key="movie.id">
                                <el-card class="movieitem" :body-style="{ padding: '0px' }">
                                    <img :src="movie.images.medium" alt="movie.title" class="image" width="100%" height="200" @click="todetail(movie.id)">
                                    <div style="padding: 3px;text-align:center">
                                        <span>{{ movie.title.length>9?movie.title.substring(0,9)+'..':movie.title }}</span>
                                        <div class="clearfix">
                                            <el-rate v-if="movie.rating.average>0" :value="movie.rating.average/2" disabled allow-half show-text text-color="red"
                                                text-template="{value}分">
                                            </el-rate>
                                            <span v-else style="color:#D3D3D3;margin-top: 6px;">暂无评分</span>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                </el-card>

                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <span style="line-height: 11px;">即将上映</span>
                        <router-link to="/movie/coming_soon/1" style="float:right">更多>>></router-link>
                    </div>
                        <el-row :gutter="5" v-loading="coming_soonloading" element-loading-text="玩命加载中...">
                            <el-col :span="4" v-for="movie in coming_soons" :key="movie.id">
                                <el-card class="movieitem" :body-style="{ padding: '0px' }">
                                    <img :src="movie.images.medium" alt="movie.title" class="image" width="100%" height="200" @click="todetail(movie.id)">
                                    <div style="padding: 3px;text-align:center">
                                        <span>{{ movie.title.length>9?movie.title.substring(0,9)+'..':movie.title }}</span>
                                        <div class="clearfix">
                                            <el-rate v-if="movie.rating.average>0" :value="movie.rating.average/2" disabled allow-half show-text text-color="red"
                                                text-template="{value}分">
                                            </el-rate>
                                            <span v-else style="color:#D3D3D3;margin-top: 6px;">暂无评分</span>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                </el-card>

                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <span style="line-height: 11px;">口碑榜单</span>
                        <router-link to="/movie/top250/1" style="float:right">更多>>></router-link>
                    </div>
                        <el-row :gutter="5" v-loading="top250loading" element-loading-text="玩命加载中...">
                            <el-col :span="4" v-for="movie in top250s" :key="movie.id">
                                <el-card class="movieitem" :body-style="{ padding: '0px' }">
                                    <img :src="movie.images.medium" alt="movie.title" class="image" width="100%" height="200" @click="todetail(movie.id)">
                                    <div style="padding: 3px;text-align:center">
                                        <span>{{ movie.title.length>9?movie.title.substring(0,9)+'..':movie.title }}</span>
                                        <div class="clearfix">
                                            <el-rate v-if="movie.rating.average>0" :value="movie.rating.average/2" disabled allow-half show-text text-color="red"
                                                text-template="{value}分">
                                            </el-rate>
                                            <span v-else style="color:#D3D3D3;margin-top: 6px;">暂无评分</span>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import movieService from '../services/movieService.js'
export default {
    data(){
        return{
            msg:'首页',
            coming_soons:[],
            in_theaters:[],
            top250s:[],
            coming_soonloading:true,
            in_theatersloading:true,
            top250loading:true,
            rate:3
        }
    },
    mounted(){
        // 正在热映
        let _movieobj0={
            pageindex:1,
            type:'in_theaters',
            count:6
        }
        movieService.getMovilList(_movieobj0).then((data)=>{
            this.in_theaters=data.subjects.slice(0,6);
            this.in_theatersloading=false;
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log(err);
        })
        
        // 即将上映
        let _movieobj={
            pageindex:1,
            type:'coming_soon',
            count:6
        }
        movieService.getMovilList(_movieobj).then((data)=>{
            this.coming_soons=data.subjects.slice(0,6);
            this.coming_soonloading=false;
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log(err);
        })

        // TOP250
        let _movieobj2={
            pageindex:1,
            type:'top250',
            count:6
        }
        movieService.getMovilList(_movieobj2).then((data)=>{
            this.top250s=data.subjects.slice(0,6);
            this.top250loading=false;
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log(err);
        })
    },
    methods:{
        todetail(id){
            this.$router.push(`/movie/detail/${id}`);
        }
    }  
}
</script>
