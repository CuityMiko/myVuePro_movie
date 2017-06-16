/**
 * 抓取第三方API数据
 */
import fetchJsonp from 'fetch-jsonp' 

export default class FetchApi{

    /**
     * 抓取数据
     * @param {*抓取数据的url} url 
     */
    static fetch(url){
        return new Promise((resolve, reject)=>{
            fetchJsonp(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                resolve(json);
            }).catch(function(ex) {
                reject(ex);
            })
        }) 
    }
}