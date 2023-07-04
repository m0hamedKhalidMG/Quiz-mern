import React from 'react'
import { DBoard } from '../DBoard'
import { BrowserRouter as Router, Switch, Route, Link,useNavigate } from 'react-router-dom';
export const SQuiz = () => {
  const navigate = useNavigate(); 

  
  const QUESTIONS = (title) => {
    navigate(`/admin/addquestion/${title}`);
  }
  
  const quizzes = [
    {
      title: 'Quiz 1',
      description: 'Description about Quiz 1',
      questions: 'Questions: 10',
      maxMark: 'Max Mark: 100',
    },
    {
      title: 'Quiz 2',
      description: 'Description about Quiz 2',
      questions: 'Questions: 20',
      maxMark: 'Max Mark: 200',
    }, {
      title: 'Quiz 3',
      description: 'Description about Quiz 3',
      questions: 'Questions: 20',
      maxMark: 'Max Mark: 20',
    }, {
      title: 'Quiz 2',
      description: 'Description about Quiz 2',
      questions: 'Questions: 20',
      maxMark: 'Max Mark: 200',
    },
    // Add more quiz objects as needed
  ];
  return (
    <body style={{ backgroundColor: "white" }}>
    <div class="flex">

<DBoard />
    <div class="custom ;
       w-full  h-fit">
       {quizzes.map((quiz, index) => (
      <div class="bg-indigo-100 container my-3" >
      <div class="flex ">
      <img  src="https://thumbs.dreamstime.com/b/green-quiz-icon-white-background-78373045.jpg" alt="Image" class="w-14 rounded-full"/>

<p class="flex flex-col justify-center p-2 font-serif font-bold">Title :name quiz     </p>
     </div> 
     <div class="font-serif">
decription about quiz decription about quiz decription about quiz  decription about quiz     
decription about quiz     
decription about quiz     
     </div> 
      <div class="my-2 flex flex-wrap justify-between ">
      <button class=" btnnAdd  que my-1" onClick={()=>QUESTIONS(quiz.title)}>Questions</button>
      <div class="  inline btnnAdd  my-1  bg-white text-black" >Max Mark:200</div>
      <div class=" inline btnnAdd  my-1 bg-white text-black" >Questions:200</div>
      <div class=" inline btnnAdd  my-1 bg-white text-black" >duration:20 </div>

      <button class="btnnAdd update  my-1 " onClick={QUESTIONS}>Update</button>
      <button class="btnnAdd  my-1 " onClick={QUESTIONS}>Attempts</button>
      <button class="  btnnAdd del  my-1" onClick={QUESTIONS}>Delete</button>

     </div>
    
     </div>
       ))}

<button class="btnnAdd " onClick={QUESTIONS}>Add New Quiz</button>

    </div>
    </div>
    </body>
  )
}
