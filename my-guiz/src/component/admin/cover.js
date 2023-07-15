import '../../styles/App.css';

import React ,{useState,useEffect}from 'react';
import { postServerData } from '../../helper/helper';
import { DBoard } from '../DBoard'
import { useParams } from 'react-router-dom';
import { postServercover } from '../../helper/helper';
import ToggleSwitch from './ToggleSwitch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
export const Cover = () => {
  const handleError = (message) => {

    swal({
      title: 'Error',
      text: message,
      icon: 'error',
    });}
    const [idCounter, setIdCounter] = useState(0);
    const [newObject, setNewObject] = useState({
        id:idCounter,
        title: '',
        desc:'',
        duration:'',
        starttime:'',
        maxMark:'',
        num:'',
        active:false

      }); 
        
  
      const handleStart = (e) => {
        setNewObject( { ...newObject, starttime: e.target.value });

      }; 
      const notifySuccess = () => {
        toast.success('Successfull operation');
      };
      const handledura = (e) => {
        setNewObject( { ...newObject, duration: e.target.value });

      };
      
      const handlenum = (e) => {
        setNewObject( { ...newObject, num: e.target.value });

      };
    
    const handlemarks = (e) => {
        setNewObject( { ...newObject, maxMark: e.target.value });

      };
      const handleTitle = (e) => {
        setNewObject( { ...newObject, title: e.target.value });

      };
    const handleDESC=(e)=>{
      setNewObject({...newObject, desc :e.target.value} )  
    }
    
    
     
     const handleToggle = isChecked => {
        setNewObject({...newObject, active:isChecked} )  
        console.log('Toggle switched:', isChecked);
      };
      
    

    
    const commit =async(e)=>{
      e.preventDefault();
        try {
            console.log(newObject);

            const response = await postServercover(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/cover`,newObject);
            // Handle response from the server
            if(response){
            e.target.reset()
            notifySuccess()
            setIdCounter((prevCounter) => prevCounter + 1);
            setNewObject({id:idCounter+1, title: '',desc:'',duration:'',starttime:'',num:'',active:""   }``);
          }
          } catch (error) {
            // Handle error sending data
              handleError(error.response.data.error)
              
          
                       }
         
        }  
    
      return (

        <div class="flex ">
    
    <DBoard />
    <div class="custom ml-14 ;
w-full   ">

        <div class="  bg-indigo-100 container " >
    <div class=" font-serif">Add new Quiz</div>
           <div class="  my-3 p-0" >

           <form onSubmit={commit}>
           <div class="flex flex-row">
           <div class="basis-full "><input
           class="w-full h-10 font-serif p-2 rounded-sm"
           type="text"
           id="Title"
           required

           placeholder='Title'
           onChange={handleTitle}
           /></div>
           </div>
           <div class="flex flex-col ...">
    
           <div class="flex flex-row my-3">
           <textarea class="w-full h-32 font-serif  p-2"type="text"    placeholder='Enter Description'
           id="Description"     required
           onChange={handleDESC}/>     </div>
         <div class="flex flex-row my-3">
         <input class="w-full h-10 font-serif p-2  rounded-sm"
           type="text"
           id="option1"
           placeholder='Maximum Marks'
           required

           onChange={(e) => handlemarks(e)}
         />
         
         <input
         placeholder='Number of Question'
         required

           type="text"
           class="w-full ml-5 font-serif p-2  rounded-sm"
           id="option2"
           onChange={(e) => handlenum(e)}
         />
    </div>
    <div class="flex">
   <ToggleSwitch onToggle={handleToggle} /> <div class="flex mx-2 font-serif ">Publish</div></div>
    <div class="flex flex-row my-3 ">
    <input
    class="w-full h-10 font-serif p-2  rounded-sm"
      type="text"
      id="option3"
      placeholder='Duration:'
    required
      onChange={(e) => handledura(e)}
    />

    <input
    type="text"
    id="option4"
    class="w-full ml-5 font-serif p-2  rounded-sm"
    placeholder='Start Time:Thu, Jul 13, 2023&08:01:23'
    required

    onChange={(e) => handleStart(e, 3)}
    />
    </div>
   
    <div class="flex justify-center">
    
    <button type='submit'  class="btnn2 bg-green-600   flex justify-center" >Add</button></div>
        </div>     </form>
    
           </div>  
           
           </div>
           <ToastContainer />

        </div>
        </div>
      );
    };
    
    

