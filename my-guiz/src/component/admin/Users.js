import { DBoard } from '../DBoard'
import { getusers ,deletecover} from '../../helper/helper';
import { BrowserRouter as Router, Switch, Route, Link,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Up_cover } from './Up_cover';
import *as Action from '../../redux/coverR'
import { useDispatch,useSelector } from 'react-redux'
import swal from 'sweetalert';
import '../../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../../styles/dashboard.css';
import '../../styles/cover.css'
import classNames from 'classnames';
import PaginatedList from './PaginatedList';
export const Users = () => {
    const componentStyle = {
        height: '100%',
        backgroundColor: '#ffffff',
      }

  
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
        const response = await getusers(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/users`);
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

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 640 && window.innerWidth < 1024
  );
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setIsMediumScreen(window.innerWidth >= 640 && window.innerWidth < 1024);
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const columnClasses = classNames({
    'grid-cols-3': isSmallScreen,
    'grid-cols-5': isMediumScreen,
    'grid-cols-7': isLargeScreen,
  });

 
  
  return (
    <div style={componentStyle}>

    <div class="flex">

<DBoard />
    <div class=" ml-14 ;
       w-screen  h-fit"> 
       <div class=" p-2 flex justify-between     rounded-sm shadow-md overflow-hidden ml-5 mr-5 mt-3" >

       <input
         type="text"
         class="w-1/5 h-8 font-serif p-1 bg-slate-100 rounded-lg border-1 border-slate-300"

         onChange={(e) => (e.target.value)}
         placeholder="Enter Name"
       />
       
       <div>
       <label          class="  font-serif p-2"
       htmlFor="phase">Phase:</label>
       <select
       class=" h-8 font-serif p-1  bg-slate-100 rounded-sm border-1 border-slate-300"

         id="phase"
         onChange={(e) => (e.target.value)}
       >
         <option value="">Phase 1</option>
         <option value="Male">Phase 2</option>
         <option value="Female">Phase 3</option>
       </select>
     </div>
       </div>
       
       <div class=" p-2   bg-slate-100 font-bold    rounded-sm shadow-md overflow-hidden ml-5 mr-5 " >
      
    
       <div className={`grid ${columnClasses} gap-1`}>
       {isSmallScreen && (
        <>
    
     <div class="col-start-1  ...  ">Name</div>

     <div class="col-start-2  ...  ">Address</div>
     <div class="col-start-3  ...  ">Phase</div>

     <div class="col-start-1  ...  ">Group</div>
     <div class="col-start-1 col-span-2 ...  ">Email</div>
     <div class="col-start-3 flex justify-end mr-2  ">Setting</div>
     </>
     )}
      {isMediumScreen && (
        <>
        <div class="col-start-1  ...  ">Name</div>

        <div class="col-start-2  ...  ">Address</div>
        <div class="col-start-3  ...  ">Phase</div>
   
        <div class="col-start-4  ...  ">Group</div>
        <div class="col-start-1 col-span-2 ...  ">Email</div>
        <div class="col-start-5 flex justify-end mr-2  ">Setting</div>
        </>
      )}

      {isLargeScreen && (
        <>
        <div class="col-start-1  ...  ">Name</div>

        <div class="col-start-2  ...  ">Address</div>
        <div class="col-start-3  ...  ">Phase</div>
   
        <div class="col-start-4  ...  ">Group</div>
        <div class="col-start-5 col-span-2 ...  ">Email</div>
        <div class="col-start-7 flex justify-end mr-2  ">Setting</div>
        </>
      )}
        </div> 
        </div>
 
        <PaginatedList data={data} />
      


    </div>
    </div>    </div>

  )
}

  

