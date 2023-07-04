import {createSlice} from '@reduxjs/toolkit'



export const resultreducer= createSlice({
name:'result',
initialState:{
userID:null,
result:[]

}
,
reducers:
{
setid:(state,action)=>{

    
state.userID=action.payload
    
},clearStateR: (state) => {
    state.userID=null
    state.result=[]
    
  },
pushresult:(state,action)=>{

    state.result.push(action.payload)

},

updateresult:(state,action)=>{
const {trace,checked}=action.payload
state.result.fill(checked,trace,trace+1)

}

}
})
export const{setid,pushresult,updateresult,clearStateR} =resultreducer.actions
export default resultreducer.reducer;