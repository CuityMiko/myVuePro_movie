<style>

</style>

<template>
    <div>
        <el-row>
            <el-col :span="3">
                <el-menu default-active="1-2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
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
                                <router-link to='/movie/top250/1'>TOP250</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
                </el-menu>
            </el-col>
            <el-col :span="19" :offset="1">
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'正在热映',
            activeIndex:1,
        }
    },
    watch:{
        '$route' (to, from) {
            // 对路由变化作出响应...
            switch(this.$route.params.type){
                case 'in_theaters':
                    this.title='正在热映';
                    break;
                case 'coming_soon':
                    this.title='即将上映';
                    break;
                case 'top250':
                    this.title='TOP250';
                    break;
                default:
                    this.title='正在热映';
                    break;
            }
        }
    },
    methods:{
        todetail(){
            this.$router.push({path:'/movie/detail/123456',query: { name: '新木乃伊' }})
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
