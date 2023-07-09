import {createSlice} from '@reduxjs/toolkit'
export const coverR =createSlice({
name:"cover",
initialState:[{
title:'',
desc:'',
duration:'',
starttime:'',
maxMark:'',
num:'',
active:'',
_id:null
}]
,reducers:{

storecover:(state,action)=>{
    return action.payload;}
,delcover:(state,action)=>{
    return state.filter((obj) => obj._id !== action.payload);
}
}








})
export const { storecover,delcover } = coverR.actions;

export default coverR.reducer