/**
 * 全局配置文件
 */
const _keys={
    bmapkey:'DOccg9buS8Vz1EngbQgfxvZvUNjI4Abl'
}
export default{
    server_url:"127.0.0.1:9000",
    page:{
        pagesize:10
    },
    apiurl:{
        bmapurl:{
            getLocationUrl:`https://api.map.baidu.com/location/ip?ak=${_keys.bmapkey}&coor=bd09ll`
        },
        doubanurl:{
            movie:'https://api.douban.com/v2/movie/'
        }
    }
}