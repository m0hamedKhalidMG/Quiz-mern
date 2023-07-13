/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {Question} from './question'
import {pushanswer} from '../hook/setreselt'
import  {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{movenx,movep} from '../hook/fetchdata'
import { useParams } from 'react-router-dom';
export const Quiz = () => {
  const title =useParams()
const result =useSelector(state=>state.result.result)
const {queue,trace}=useSelector(state=>state.question)
const [check, setChecked] = useState()
const dispatch = useDispatch()
function onnext(){
  if(trace < queue.length){
  dispatch(movenx())
  if(result.length<=trace){
  dispatch(pushanswer(check))

  }

  }
  setChecked(undefined)

}

function onPrev(){
  if(trace > 0){
    dispatch(movep());
}

}

function onChecked(check){
  setChecked(check)
}
if(result.length && result.length >= queue.length){
  //return <Navigate to={'/result'} replace={true}></Navigate>
  console.log(result)
}


return (

  <div class='container '>

     {/*} <h1 class='fo'>Quiz Application</h1>
      {/* display questions */}

      <div className='card_ '>
      <Question title={title?.title} onChecked={onChecked}/>
      <button class="btnn btn-previous" onClick={onPrev}>Previous</button>
      <button class="btnn btn-next" onClick={onnext}>Next</button>
       
      </div>
      </div>

)
}
