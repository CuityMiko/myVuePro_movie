<style>
    .movieitem2{
        margin: 9px;
        cursor: pointer;
    }
    .el-rate__icon{
        font-size: 10px;
    }
</style>

<template>
    <div>
        <el-row>
            <el-col :span="3">
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>电影列表</template>
                        <el-menu-item-group>
                            <!--<template slot="title">电影榜单</template>-->
                            <el-menu-item index="1-1"><i class="el-icon-time"></i>
                                <router-link to='/movie/in_theaters/1'>正在热映</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-upload"></i>
                                <router-link to='/movie/coming_soon/1'>即将上映</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-3"><i class="el-icon-star-on"></i>
                                <router-link to='/movie/top250/1'>口碑榜单</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
                </el-menu>
            </el-col>
            <el-col :span="19" :offset="1">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 11px;">{{title}}</span>
                    </div>
                    <el-row :gutter="3" v-loading="loading" element-loading-text="玩命加载中...">
                        <el-col :span="4" v-for="movie in movielist" :key="movie.id">
                            <el-card class="movieitem2" :body-style="{ padding: '0px' }">
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
                    <div style="text-align:center;" v-if="total>0">
                        <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="pagesize"
                            layout="total, prev, pager, next, jumper"
                            :total="total">
                        </el-pagination>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import movieService from '../services/movieService.js'
export default {
    data(){
        return {
            title:'正在热映',
            activeIndex:'1-1',
            movielist:[],
            loading:true,
            currentPage:1,
            pagesize:12,
            total:0
        }
    },
    mounted(){
        this.loading=true;
        this.defaultsel();
        this.getMovieList();
    },
    watch:{
        '$route' (to, from) {
            // 对路由变化作出响应...
            this.loading=true;
            this.defaultsel();
            this.getMovieList();
        }
    },
    methods:{
        todetail(id){
            this.$router.push(`/movie/detail/${id}`);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        defaultsel(){ // 默认选中
            switch(this.$route.params.type){
                case 'in_theaters':
                    this.activeIndex='1-1';
                    this.title="正在热映";
                    break;
                case 'coming_soon':
                    this.activeIndex='1-2';
                    this.title="即将上映";
                    break;
                case 'top250':
                    this.activeIndex='1-3';
                    this.title="口碑榜单";
                    break;
                case 'search':
                    this.activeIndex='1-4';
                    // this.title=`共搜到相关“${this.$route.query.q}”`;
                    break;
                default:
                    this.activeIndex='1-1';
                    this.title="正在热映";
                    break;
            }
        },
        getMovieList(){
            // 正在热映
            let _movieobj={
                pageindex:this.$route.params.page,
                type:this.$route.params.type,
                count:this.pagesize,
                q:this.$route.query.q||''
            }
            movieService.getMovilList(_movieobj).then((data)=>{
                this.total=data.total;
                this.movielist=data.subjects;
                this.currentPage=parseInt(this.$route.params.page);
                this.loading=false;
                if(this.$route.params.type=="search"){
                    this.title=`共搜到${this.total}相关“${this.$route.query.q}”的结果`;
                }
            },(err)=>{
                console.log(err);
            }).catch((err)=>{
                console.log(err);
            })
        },
        handleCurrentChange(val) {
            this.loading=true;
            this.$router.push({path:`/movie/${this.$route.params.type}/${val}`,query: { q: this.$route.query.q }})
        }
    }
}
</script>
