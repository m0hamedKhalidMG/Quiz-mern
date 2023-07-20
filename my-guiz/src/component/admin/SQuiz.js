import { DBoard } from '../DBoard'
import { getServercover ,deletecover} from '../../helper/helper';
import { BrowserRouter as Router, Switch, Route, Link,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Up_cover } from './Up_cover';
import *as Action from '../../redux/coverR'
import { useDispatch,useSelector } from 'react-redux'
import swal from 'sweetalert';
import '../../styles/App.css';

import '../../styles/dashboard.css';
import '../../styles/cover.css';

const componentStyle = {
  height: '100%',
  backgroundColor: '#ffffff',
};
export const SQuiz = () => {
  const [data, setData] = useState([]);
  const [d, setDa] = useState(0);

  const dispatch=  useDispatch();
  const result=useSelector(state=>state.cover)
const Show=(id)=>{
  navigate(`/Admin/ShowQuiz/${id}`);


}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServercover(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/cover`);
        setData(response);
         dispatch(Action.storecover(response))
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);
  const navigate = useNavigate(); 

    const cover = (title) => {
    navigate(`/admin/addcover`);
  }
  const showre=(id)=>{
    navigate(`/Admin/result/${id}`);

  }
  const update=(quiz)=>{
    
    navigate(`/admin/updatecover/${quiz._id}`);
  }
    const handleDelete = () => {
      return new Promise((resolve, reject) => {
        swal({
          title: 'Are you sure?',
          text: 'You want to delete this Cover?',
          icon: 'warning',
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
   
  const  del=async(id)=>{

    try{
      const shouldDelete = await handleDelete();
     if( shouldDelete){
    const response = await deletecover(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/cover/${id}`);
    console.log(response," :Data deleted successfully");
    dispatch(Action.delcover(id))
    setData(prev=>prev.filter((obj) => obj._id !== id));
     }
    }
    catch{
      console.error(" :Data not delete");


    }

  } 

  
  
  
  return (
    <div style={componentStyle}>

    <div class="flex">

<DBoard />
    <div class="custom ml-14 ;
       w-screen  h-fit">
       {data.map((quiz, index) => (

      <div class="bg-indigo-100 container w-screen    rounded-xl shadow-md overflow-hidden ml-5 mr-5 my-3" >
      
      <div class="flex items-center ">
      <img  src="https://thumbs.dreamstime.com/b/green-quiz-icon-white-background-78373045.jpg" alt="Image" class="w-14 rounded-full"/>
      <div class="ml-2">
        <p class="font-serif font-bold my-0 text-black">Title: {quiz.title}</p>
        <p class="font-light text-slate-400 my-0">{quiz.starttime}</p>
      </div>
    </div>
    
    <p class="break-words font-serif text-xl">{quiz.desc}</p>      <div class="my-2 flex flex-wrap justify-between ">
      <button class=" btnnAdd  que my-1" onClick={()=>Show(quiz._id)}>Questions </button>
      <div class="  inline btnnAdd  my-1  bg-white text-black" >Max Mark: {quiz.maxMark}    
      </div>
      <button class=" inline btnnAdd  my-1 bg-white text-black" >Questions: {quiz.num}   
      </button>
      <div class=" inline btnnAdd  my-1 bg-white text-black" >duration: {quiz.duration}    
      </div>
      <button class="btnnAdd update  my-1 " onClick={()=>update(quiz)}>Update</button>
      <button class="btnnAdd  my-1 " onClick={()=>showre(quiz._id)}>Attempts</button>
      <button class="  btnnAdd del  my-1"  onClick={()=>del(quiz._id)}>Delete</button>

     </div>     </div>

    
       ))}

<button class="btnnAdd " onClick={cover}>Add New Quiz</button>

    </div>
    </div>    </div>

  )
}
