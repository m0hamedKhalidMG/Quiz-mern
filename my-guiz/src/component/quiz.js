/* eslint-disable react-hooks/rules-of-hooks */
import React  from 'react'
import {Question} from './question'
import {pushanswer} from '../hook/setreselt'
import  {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{movenx,movep} from '../hook/fetchdata'
import { useParams,useNavigate } from 'react-router-dom';

import { sentresult } from '../helper/helper'
import swal from 'sweetalert';
import { Navigate } from 'react-router-dom';
var cnt=0;

export const Quiz = () => {
  const [showError, setShowError] = useState(false);

  const title =useParams()
const result =useSelector(state=>state.result.result)
const navigate= useNavigate()
 
const promptDegree  = (degree) => {
  return new Promise((resolve, reject) => {
    swal({
      title: 'your degree=' + String(degree)+"/"+String(cover.num),
      icon: 'success',
      dangerMode: true,
    }).then((confirmDelete) => {
      if (confirmDelete) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
} 

const [buttonText, setButtonText] = useState('Next');
const {queue,trace,cover}=useSelector(state=>state.question)
const [check, setChecked] = useState()
const dispatch = useDispatch()
function onnext(){
  if(cnt <= queue.length){

cnt++;
console.log(cnt)

  }
  if(trace < queue.length){
    
  dispatch(movenx())
  if(result.length<=trace){
  dispatch(pushanswer(check))
  console.log(cover)
  }
  if(cnt===queue.length+1){
    submit()}
  if(trace===queue.length-1){

    setButtonText('Submit')
  }
  }
  setChecked(undefined)

}

function onPrev(){
  setButtonText('Next')
  setShowError(false)

  if(trace > 0){
    if(cnt===queue.length+1)
cnt=cnt-3;
else
cnt--;
    dispatch(movep());
    console.log(cnt)
}

}
function hasNull(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) {
      return true;
    }
  }
  return false;
}
function onChecked(check){
  setChecked(check)
}
async function  submit  (){
  console.log(cnt)
if(result.length && result.length >= queue.length){
const idcover=cover._id
const savedUser = JSON.parse(
  localStorage.getItem('user'));
const userid=savedUser._id
console.log(savedUser)
console.log(result)

const hasNullValue = hasNull(result);
if(!hasNullValue){
  sentresult(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, {result,idcover,userid})

  .then(async(Response) => {
     await promptDegree(Response.degree);
     navigate('/',{replace:true} )


    }
  )
  .catch((error) => {
    console.error(error);
  });
}else{

  setShowError(true)


}

}
}

return (

  <div class='container '>

     {/*} <h1 class='fo'>Quiz Application</h1>
      {/* display questions */}

      <div className='card_ '>
      <Question title={title?.title} onChecked={onChecked}/>
      <button class="btnn btn-previous" onClick={onPrev}>Previous</button>
      <button class="btnn btn-next" onClick={onnext}>{buttonText}</button>
         {showError && (
          <label htmlFor="email" className="block text-red-700 text-sm font-bold">
          You left a question unanswered
          </label>
        )}
      </div>
      </div>

)
}
