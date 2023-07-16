
import axios from 'axios'

axios.defaults.withCredentials = true

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

export async function postServercover(url, result, callback){
   

    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
export async function getServercover(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}
export async function putcover(url,result,callback){
    const data=await(await axios.put(url,result))?.data;
    return callback ? callback(data) : data;

}
export async function deletecover(url, callback){
   

    const data = await (await axios.delete(url))?.data;
    return callback ? callback(data) : data;
}
export async function getQuestionbyid(url, callback){

    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}
export async function putQuestion(url,result,callback){
    const data=await(await axios.put(url,result))?.data;
    return callback ? callback(data) : data;

}export async function deleteQuestion(url, callback){
   

    const data = await (await axios.delete(url))?.data;
    return callback ? callback(data) : data;
}
export async function login(url,result,callback){
    const data=await(await axios.post(url,result))?.data;
    return callback ? callback(data) : data;

}
export async function logout(url,callback){
    const data=await(await axios.get(url))?.data;
    return callback ? callback(data) : data;

}
export async function SignUp(url,result,callback){
    const data=await(await axios.post(url,result))?.data;
    return callback ? callback(data) : data;

}
export async function getusers(url,callback){
    const data=await(await axios.get(url))?.data;
    return callback ? callback(data) : data;

}
export async function sentresult(url,result,callback){
    const data=await(await axios.post(url,result))?.data;
    return callback ? callback(data) : data;

}