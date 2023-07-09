
import {createSlice} from '@reduxjs/toolkit'
export const questionreducer =createSlice(
{
name:'question',
initialState:{
    queue:[],
    answers:[],
    trace: 0
}
,
reducers:{
startexam:(state,action)=>{
return {

    ...state,
    queue:action.payload.questions,
    answers:action.payload.answers

}

}, clearState: (state) => {
    state.queue = [];
    state.answers = [];
    state.trace = 0;
  },
movenext : (state) => {

if(state.trace<state.queue.length-1){
    console.log(state.trace+" "+state.queue.length)
    return {
        ...state,
        trace:state.trace+1
    }}
},
movepre:(state)=>{


    return {
        ...state,
        trace:state.trace - 1
    }
}


}


}


)
export const{startexam,movenext,movepre,clearState}=questionreducer.actions;
export default questionreducer.reducer;
  
