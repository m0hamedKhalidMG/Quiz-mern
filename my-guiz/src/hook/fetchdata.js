/* eslint-disable react-hooks/rules-of-hooks */
import { getServerData } from "../helper/helper"; 
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import *as Action from '../redux/questionreducer'
export const  fetchdata = (title) => {
  const dispatch=  useDispatch();

// eslint-disable-next-line react-hooks/rules-of-hooks
const [getdata,setGetData]= useState({isloading:false,apidata:[],servererror:null})
  
useEffect(()=>{
    setGetData(prev => ({...prev, isloading : true}));


(async()=>{
try{
    const {filteredQ,sec,minute}= await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions?title=${encodeURIComponent(title)}`, (data) => data)

const [{questions,answers,cover}]= filteredQ
//let questions =await data;
if(questions.length>0){
    setGetData(prev => ({ ...prev , isloading : false}));
    setGetData(prev => ({...prev, apiData : questions,duration:cover.duration,max:cover.maxMark,num:cover.num,answers,minute:minute,sec:sec,idcover:cover._id}));
dispatch(Action.startexam({questions,cover}))
}
else {

    throw new Error ("no questions")
}}catch(error){

    setGetData(prev => ({...prev, isloading : false}));
    setGetData(prev => ({...prev, serverError : error}));

}

})()

    
 
}

,[dispatch])
return [getdata,setGetData]
}
export const movenx=()=>async (dispatch)=>{
    try {

dispatch(Action.movenext())}
catch(error){
    console.log(error)
}
}
export const movep=()=>async(dispatch)=>{
dispatch(Action.movepre())

}
    