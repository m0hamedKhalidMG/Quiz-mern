import * as Action from '../redux/resultreducer'
export const pushanswer=(result)=>async (dispatch)=>{
try{
   await dispatch(Action.pushresult(result))

}
catch(error){
    console.log(error)

}}

export const updateR=(index)=>async (dispatch)=>{
    try{

await dispatch(Action.updateresult(index))

}
catch(error){
    console.log(error)

}}