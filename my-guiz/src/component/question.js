/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchdata} from '../hook/fetchdata'
import {updateR} from '../hook/setreselt'
import Timer from './Timer'
export const  Question = ({title, onChecked }) => {
  const rootStyle = {
    backgroundColor: '#475569', // Replace this color with your desired background color
    color: '#FFFFFF', // Replace this color with your desired text color
  };
  const [checked, setChecked] = useState(undefined)
  const dispatch=useDispatch()
  const [{isloading,servererror,duration,minute,sec,idcover}]=fetchdata(title)
const questions=useSelector(state=>state.question.queue[state.question.trace])
const result=useSelector(state=>state.result.result)
const {trace}=useSelector(state=>state.question)
useEffect(() => {
  document.body.style.backgroundColor = '#475569';
  console.log(trace,checked)
  dispatch(updateR({ trace, checked}))
},[checked])
function onselect(i){

  onChecked(i)
  setChecked(i)
  dispatch(updateR({trace, checked}))
}
if(isloading) return <h3 className='text-light'>isLoading</h3>
if(servererror) return <h3 className='text-light'>{servererror || "Unknown Error"}</h3>
  return (
    <div className='questions ' class="border-black">

    {questions ? (
      <Timer min={minute} sec={sec} class="time_"></Timer>
      ) : (
      <p class="font-serif">Error 404</p>
    )}
    <h2 class='font-bold text-xl break-words'> {questions?.question}</h2>
    <ul key={questions?.id}>
    
{
        // eslint-disable-next-line array-callback-return
        questions?.options.map((q,i)=>
        
      { 
        if(result[trace]===i){
       return (
            <li key={i} >
            <input
            checked={result[trace]===i}
                        type="radio"
            value={false}
            name="options"
            id={`q${i}-option`}
            onChange={()=>onselect(i)}
            />
            <label  class='font-serif' htmlFor={`q${i}-option`}>
            {q}
            </label>
            <div className='check'></div>
            
            </li>
            
              )}
              
              else {

              return (
                <li key={i}>
                <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={()=>onselect(i)}
                />
                <label  class='font-serif' htmlFor={`q${i}-option`}>
                {q}
                </label>
                <div className='check'></div>
                
                </li>
    )}}


              )
        
        
        }
    </ul>
    </div>   
  )}













