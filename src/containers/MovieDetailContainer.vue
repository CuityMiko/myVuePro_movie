<style>
    .go{
        float: right;
    }
    #moviedetail .clearfix{
        display: flex;
        justify-content:center;
        align-items:Center; 
        flex-direction: flex-end;
        font-size: 24px;
        font-weight: bold;
        color: red
    }
    #moviedetail .box-card{
        margin-top: 9px;
        margin-bottom: 9px;
    }
    .moviedetail{
        display: flex;
        flex-direction: column;
        /*justify-content:center;
        align-items:Center; */
    }
    .detailimg{
        text-align: center
    }
    .detailinfo{
        margin:3px;
    }
</style>

<template>
    <div id="moviedetail">
        <el-row v-if="movie!=null">
            <el-col :span="16" :offset="4">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <div style="flex:1;text-align:center"><span>{{movie.title}}</span></div>
                        <div style="width:81px;"><el-button type="default" @click="$router.go(-1)">返 回</el-button></div>
                    </div>
                    <div class="moviedetail">
                        <div class="detailimg">
                            <img :src="movie.images.large" :alt="movie.title">
                        </div>
                        <div class="detailinfo">
                            <span>上映年份：{{movie.year}}</span>&emsp;
                            <span>国家：{{movie.countries.join('、')}}</span>&emsp;
                            <span>类型：{{movie.genres.join('、')}}</span>&emsp;
                        </div>
                        <div class="detailinfo">
                            <el-row>
                                <el-col :span="3">
                                    <span>综合评分：</span>
                                </el-col>
                                <el-col :span="21">
                                    <el-rate v-if="movie.rating.average>0" :value="movie.rating.average/2" disabled allow-half show-text text-color="red"
                                        text-template="{value}分">
                                    </el-rate>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="detailinfo">
                            <span>导演：</span>
                            <span v-for="(director,index) in movie.directors" :key="director.id">{{director.name}}{{index==movie.directors.length-1?'':'、'}}</span>
                        </div>
                        <div class="detailinfo">
                            <span>主演：</span>
                            <span v-for="(cast,index) in movie.casts" :key="cast.id">{{cast.name}}{{index==movie.casts.length-1?'':'、'}}</span>
                        </div>
                        <div class="detailinfo">
                            <span style="color:#D3D3D3;font-size: 24rpx;">剧情简介</span>
                        </div>
                        <div class="detailinfo">
                            {{movie.summary}}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import movieService from '../services/movieService.js'
import { Loading } from 'element-ui';
export default {
    data(){
        return {
            movie:null
        }
    },
    methods:{
    },
    mounted(){
        let loadingInstance = Loading.service({text:'玩命加载中...',fullscreen:false});
        // 获取电影详情
        movieService.getMovieDetail(this.$route.params.id).then((data)=>{
            this.movie=data;
            loadingInstance.close();
        }).catch((err)=>{
            loadingInstance.close();
            this.$alert('电影内容获取失败！', '温馨提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$router.go(-1)
                }
            });
        })
    }
}
</script>
