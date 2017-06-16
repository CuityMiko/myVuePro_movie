/**
 * 电影服务
 */
import Config from '../js/config.js'
import Util from '../js/commons/util.js'
import FetchApi from '../js/commons/fetchApi.js'

export default class movieService{
    
    /**
     * 获取电影列表
     * @param {*电影类型} type 
     */
    static getMovilList(obj){
        let _count=Config.page.pagesize;
        let _start=(obj.pageindex-1)*Config.page.pagesize;
        let _type=obj.type;
        let _q=obj.q||''
        return new Promise((resolve, reject)=>{
            Util.getLocation().then((data)=>{
                let _url=`${Config.apiurl.doubanurl.movie}${_type}?start=${_start}&count=${_count}&city=${data.city}&q=${_q}`;
                FetchApi.fetch(_url).then((data)=>{
                    resolve(data);
                }).catch((err)=>{
                    reject(err);
                })
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}