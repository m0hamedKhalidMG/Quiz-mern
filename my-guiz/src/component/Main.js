import { useNavigate } from 'react-router-dom'
import '../styles/App.css';
import '../styles/Main.css'
import '../styles/mn.css'
import { useDispatch } from 'react-redux'

import { clearState } from '../redux/questionreducer';
import {clearStateR} from '../redux/resultreducer'
import axios from 'axios'
import { BiLogOut,BiUser  } from "react-icons/bi";

export default function Main() {
    const savedUser = localStorage.getItem('user');
    const user=JSON.parse(savedUser)

  document.body.style.backgroundColor = '#475569';
  const rootStyle = {
    backgroundColor: '#475569', 
    color: '#FFFFFF',
  };
    const navigate = useNavigate(); 
    const dispatch=  useDispatch();
    
    const handleLoginout = (e) => {
        localStorage.clear();
         axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/logout`, {
          withCredentials: true})
          .then((re) => {
            navigate('/',{replace:true});
            
          })
          .catch((error) => {
            console.error(error);
          });
      };
      const handleButtonClick = () => {
        dispatch(clearState());
        dispatch(clearStateR())
        const url = `/quiz/${user.phase}`;
       navigate(url);

      };
  return (
    <div id="root" style={rootStyle}>
    <div class="w-screen h-10 fixed top-0 ">    
    
    <button  onClick={handleLoginout} class="text-white font-bold py-2 px-4 text-3xl ">
    <BiLogOut />


  </button>
  
  </div>

    <div class=" p-6">
       <div class='container border-x-4  ' >
        <h1 class='title text-light text-white font-serif'>Quiz Application</h1>

        <ol>
        <li  class=' text-white font-serif'>Answer all questions as possible.</li>

            <li  class=' text-white font-serif'>You will be asked  questions one after another.</li>
            <li  class='   text-white font-serif'> Each question has Four options. You can choose only one options.</li>
            <li  class='   text-white font-serif'>You can review and change answers before the quiz finish.</li>
            <li  class='   text-white font-serif'>The result will be declared at the end of the quiz.</li>
        </ol>

       

        <div className='start1' >
        <button className='btn1' onClick={handleButtonClick}> Start Quiz
        </button>
                </div>
                </div></div>
                </div>                

    )
}
