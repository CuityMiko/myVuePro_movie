<style>
    body{
        margin: 0px;
    }
    a{
        text-decoration:none;
    }
    .footer{
        border: 1px solid #D3D3D3;
        background-color: #D3D3D3;
        width:100%; 
        position:relative; 
        left:0; 
        bottom:0;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items:Center; 
    }
</style>

<template>
    <div >
        <el-menu default-active="2" theme="dark" style="text-align: center" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-row>
                <el-col :span="12" :offset="7">
                    <el-menu-item index="1">
                        <el-input
                            placeholder="搜索..."
                            icon="search"
                            v-model.trim="search"
                            size="samll"
                            :on-icon-click="tosearch">
                        </el-input>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/home">首 页</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link to="/movie/in_theaters/1">电影榜单</router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link to="/about">关于我们</router-link>
                    </el-menu-item>
                </el-col>
            </el-row>
        </el-menu>
        <!--中间内容部分-->
        <router-view></router-view>
        <footer class="footer">
            <div>© 2017 GitHub, Inc.</div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search:''
        }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
      tosearch(){
          if(this.search.length>0){
            this.$router.push({path:'/movie/search/1',query: { q: this.search }});
            this.search="";
          }else
            this.$message.warning('请输入搜索内容！');
      }
    }
}
</script>
