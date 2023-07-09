import React, { useEffect, useState } from 'react';
import { DBoard } from "../DBoard";
import { getQuestionbyid,deleteQuestion} from '../../helper/helper';
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link,useNavigate } from 'react-router-dom';
import *as Action from '../../redux/questionreducer'
import swal from 'sweetalert';

export const ShowQuiz = () => {
    const _id = useParams();
    const navigate = useNavigate(); 
    
    const question=useSelector(state=>state.question.queue)
const idcover=_id.id
const dispatch=useDispatch()
    const [questions,setdata]=useState(0)
    const [answers,setans]=useState(0)
const result=useSelector(state=>state.cover)
const cover=result.filter((x)=>x._id===_id.id)
const update=(id)=>{
  navigate(`/Admin/ShowQuiz/update/${idcover}/${id}`);
}

const handleDelete = () => {
  return new Promise((resolve, reject) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to delete this Question?',
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
  const del = async (id) => {
    try{
      const shouldDelete = await handleDelete();
    if( shouldDelete){
    const response = await deleteQuestion(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions/${idcover}/${id}`);
    console.log(response," :Data deleted successfully");
    if(response){
      console.log(response)
      setdata(questions.filter(x=>x.id!==id));
      setans(answers.filter(x=>x.id!==id));
    }
  
  }
  
  }
    catch{
      console.error(" :Data not delete");


    }
  };
  useEffect(() => {
    const fetchData = () => {
      getQuestionbyid(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions/${_id.id}`)
        .then((response) => {
          setdata(response.questions);
          setans(response.answers);
          console.log(answers)

         // setans(answer);
          return response
        }).then((response=>     {     

          dispatch(Action.startexam(response))

        }
        ))


        .catch((error) => {
          console.error(error);
        });
    };
    
   
    fetchData();
  }, [dispatch]);
const addquestion =()=>{
        navigate(`/admin/addquestion/${_id.id}`);
      }


  return (

    <body style={{ backgroundColor: "white" }}>
    
      <div class="flex">
        <DBoard />

        <div class=" container my-2    h-fit">

        <div class=" flex justify-center ">
        <button
onClick={addquestion}          class="btnn2 w-auto bg-slate-500   flex justify-center"
        >
          Add Question
        </button>
      </div>
      <div class=" ml-11     my-1 h-fit   bg-white text-black font-bold font-serif">
      Questions of {cover[0].title}
    </div>
    <div class="bg-indigo-100  p-2 ml-9  my-3">

      {questions.length > 0 ? (
                <div>
                {questions.map((questions, index) => (
                    
                    <div key={index}>
          
            <div class="">
              <div class="ml-2">
                <p class="font-serif font-bold my-0 text-black">
                  Q1){questions.question}
                </p>
                <div class="flex flex-col ...">
                  <div class="flex flex-row  ">
                    <div class="w-full h-10 font-serif p-2 ">1)  {questions.options[0]}</div>

                    <div class="w-full h-10 font-serif p-2 ">2) {questions.options[1]}</div>
                  </div>
                </div>

                <div class="flex flex-row  ">
                  <div class="w-full h-10 font-serif p-2 ">3) {questions.options[2]}</div>

                  <div class="w-full h-10 font-serif p-2 ">4) {questions.options[3]}</div>
                </div>
                <div class="flex flex-row   ">
                  <div class="w-full  font-serif  border-t border-gray-400 "></div>
                </div>
                <div class="w-full h-10 font-serif p-2 ">Correct Answer:{answers[index].ans}</div>
                <div class="w-full h-10 font-serif p-2 flex">
                  <button class="  text-red-500  " onClick={()=>del(questions.id)}>Delete </button>
                  <button class=" text-teal-800  ml-4  " onClick={()=>update(questions.id)}>Update</button>
                </div>
              </div>

            </div>
            
          </div>
        
                ))}
                </div>
                ) : (
                  <p>No data available.</p>
                )}
      </div>
      </div>          </div>   

    </body>
    
  );

};

