
import axios from 'axios'



/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}
/*export async function getServerData1(url){
    const data = await (await axios.get(url))?.data
    console.log(data)
}*/
 //getServerData1('http://localhost:5000/api/questions')

/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}