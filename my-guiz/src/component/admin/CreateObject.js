import React, { useState, useEffect } from 'react';
import { postServerData } from '../../helper/helper';
import { DBoard } from '../DBoard'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
// Inside your component
const CreateObject = () => {
  const uuid = uuidv4();
  const question=useSelector(state=>state.question.queue)
console.log(question)
    const { title } = useParams();
    const [ans,setans]=useState(-1);
    const [idCounter, setIdCounter] = useState(question.length-1);
  const [newObject, setNewObject] = useState({
    id:uuid,
    question: '',
    options: ['', '', ''],
  });
  const [all, setAll] = useState({ questions: [], answers: [] });
  const handleQuestionChange = (e) => {
    setNewObject( { ...newObject, question: e.target.value });
    
  };    useEffect(() => {
    document.body.style.backgroundColor = '#111111';

  },[])

  const notifySuccess = () => {
    toast.success('Successfull operation');
  };
  const handleOptionChange = (e, index) => {
    const updatedOptions = [...newObject.options];
    updatedOptions[index] = e.target.value;
    setNewObject({ ...newObject, options: updatedOptions});
  };
const handleanswerChange=(e)=>{
setans((prevans) => {
    prevans=e.target.value;
    return prevans
})

}
  const handleSubmit = (e) => {
    e.preventDefault();
    setAll((prevAll) => {
      
        const newQuestions = [...prevAll.questions, newObject];
        const newAnswers = [...prevAll.answers, {id:newObject.id,ans:ans}];
        return { questions: newQuestions, answers: newAnswers };
      });
      setIdCounter((prevCounter) => prevCounter + 1);
    setNewObject({id:uuid, question: '', options: ['', '', '']});
    e.target.reset();}

  useEffect(() => {
    console.log(all);
  }, [all]);
const commit =async()=>{
    try {
        const response = await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,{ all,title});
        notifySuccess()
        // Handle response from the server
        console.log('Data sent successfully');
        console.log(response); // Handle the response data here
      } catch (error) {
        // Handle error sending data
        console.error('Error sending data:', error);
      }
    };

  return (
    <body style={{ backgroundColor: "white" }}>
    <div class="flex ">
<DBoard />
<div class="custom ml-14 ;
w-full   ">
    <div class="  bg-indigo-100 container " >

       <div class="  my-3 p-0" >
       <div class="p-0 m-0 font-serif flex justify-center font-light text-xl "   >  Enter the details of the new question</div>
       <form onSubmit={handleSubmit}>

       <div class="flex flex-col ...">

       <div class="flex flex-row my-3">
       <textarea class="w-full h-32 font-serif  p-2"type="text" required     placeholder={`Question: ${idCounter+1}`}
       id="question" onChange={handleQuestionChange} />     </div>
     <div class="flex flex-row my-3">
     <input class="w-full h-10 font-serif p-2 "
       type="text"
       id="option1"
       placeholder='option1'
       required  
       onChange={(e) => handleOptionChange(e, 0)}
     />
     
     <input
     placeholder='option2'
     required  
       type="text"
       class="w-full ml-5 font-serif p-2"
       id="option2"
       onChange={(e) => handleOptionChange(e, 1)}
     />
</div>
<div class="flex flex-row my-3 ">
<input
class="w-full h-10 font-serif p-2"
  type="text"
  id="option3"
  placeholder='option3'
  required  
  onChange={(e) => handleOptionChange(e, 2)}
/>



<input
type="text"
id="option4"
class="w-full ml-5 font-serif p-2"
placeholder='option4'
required  
onChange={(e) => handleOptionChange(e, 3)}
/>
</div>
<div class="flex flex-row">
<div class="basis-full"><input
class="w-full h-10 font-serif p-2"
type="text"
id="answer"
required  
placeholder='Correct Answer'
onChange={handleanswerChange}
/></div>
</div>
<div class="flex justify-between">

<button type="submit" class="btnn2  bg-slate-500   flex justify-center"  >Save</button>
<button  class="btnn2 bg-green-600   flex justify-center" onClick={commit}>commit</button></div>
    </div>     </form>

       </div>  
       
       </div>
       <ToastContainer />

    </div>
    </div>

    </body>
  );
};

export default CreateObject;
