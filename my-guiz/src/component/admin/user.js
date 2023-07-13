    import React, { useState, useEffect } from 'react';
    import { postServerData } from '../../helper/helper';
    import { DBoard } from '../DBoard'
    import { useParams } from 'react-router-dom';
    import { useDispatch,useSelector } from 'react-redux'
    
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { v4 as uuidv4 } from 'uuid';

export const Adduser = () => {
    
    // Inside your component
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
        document.body.background="white"
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
        <div class="flex ">
        <DBoard />
        <div class=" ml-14">
           
           <div class="  rounded-xl shadow-sm overflow-hidden  p-2 ">

           <div class="p-0 m-0 font-serif font-light text-xl "   >  Add new user</div>
           <div class="border-y  mb-3 mt-1  flex mx-auto " ></div>
           <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
           <div class="col-start-1 col-span-1 ...  pr-4">Account</div>
           <div class="col-start-2 col-span-2  ... ">
           <label for="email" class="block text-zinc-500 text-sm font-bold ">Full name:</label>
           <input
           class="w-full h-8 font-serif p-1 bg-slate-100 rounded-sm "
           type="text"
           id="option1"
           required
         /></div>
           <div class="col-end-7 col-span-2 ..."></div>
           <div class="col-start-1 col-end-7 ..."></div>
           <div class="col-start-2 col-span-2  ... ">
           <label for="Email Address" class="block text-zinc-500 text-sm font-bold ">Email Adress</label>
           <input
           class="w-full h-8 font-serif p-1 bg-slate-100 rounded-sm "
           type="text"
           id="option1"
           required
         /></div>
         <div class="col-start-2 col-span-1  ... ">
         <label for="phone" class="block text-zinc-500 text-sm font-bold ">phone Number</label>
         <input
         class="w-full h-8 font-serif p-1 bg-slate-100 rounded-sm "
         type="text"
         id="option1"
         required
       /></div>
       <div class="col-start-1 col-span-6  ... ">

       <div class="border-y  mb-3 mt-2  flex mx-auto " ></div></div>

       <div class="col-start-1 col-span-1 ...  pr-4">Acadamy</div>
       <div class="col-start-2 col-span-1  ... ">
       <label for="phone" class="block text-zinc-500 text-sm font-bold ">Group</label>
       <input
       class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
       type="text"
       id="option1"
       required
     /></div>
     <div class="col-start-3 col-span-1  ... ">
     <label for="phone" class="block text-zinc-500 text-sm font-bold ">Phase</label>
     <input
     class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
     type="text"
     id="option1"
     required
   /></div>
   <div class="col-start-1 col-span-6  ... ">

   <div class="border-y  mb-3 mt-2  flex mx-auto " ></div></div>

   <div class="col-start-1 col-span-1 ...  pr-4">Address</div>

   <div class="col-start-2 col-span-6  ... ">
   <label for="phone" class="block text-zinc-500 text-sm font-bold ">Street Address</label>
   <input
   class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
   type="text"
   id="option1"
   required
 /></div>

 <div class="col-start-2 col-span-2  ... ">
 <label for="phone" class="block text-zinc-500 text-sm font-bold ">City</label>
 <input
 class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
 type="text"
 id="option1"
 required
/></div>




<div class="col-start-1 col-span-6  ... ">

   <div class="border-y  mb-3 mt-3  flex mx-auto " ></div></div>


<div class="col-start-1 col-span-1 ...  pr-4">Password</div>
<div class="col-start-2 col-span-1  ... ">
<label for="phone" class="block text-zinc-500 text-sm font-bold ">Password</label>
<input
class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
type="text"
id="option1"
required
/></div>
<div class="col-start-3 col-span-1  ... ">
<label for="phone" class="block text-zinc-500 text-sm font-bold ">Confirm</label>
<input
class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
type="text"
id="option1"
required
/></div>




         </div>
         <div class=" flex  justify-end m-2 mb-2">
         <button  class="btnn2 bg-blue-500   flex justify-center" onClick={commit}>Submit</button></div>
         
         </div>

         
         </div>
         
         
           
           <ToastContainer />
    
        </div>


      );
    };
    
    