import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Main.css'
import { clearState } from '../redux/questionreducer';
import {clearStateR} from '../redux/resultreducer'
import { useDispatch } from "react-redux";
export default function Main() {
    const navigate = useNavigate(); 
    const dispatch=  useDispatch();

    const inputRef = useRef(null)
    const handleInputChange = (event) => {
        inputRef.current = event.target.value;
        console.log( inputRef.current )
      };
      const handleButtonClick = () => {
        dispatch(clearState());
        dispatch(clearStateR())
        const url = `/quiz/${inputRef.current}`;
        navigate(url);
    //    window.location.reload();

        // Do something with the URL, e.g., navigate to the URL
      };
  return (
    <div id="root"   class="bg-slate-600 h-screen"
    >
    <div class="h-screen">
       <div class='container border-x-4 h-screen' >
        <h1 class='title text-light text-white font-serif'>Quiz Application</h1>

        <ol>
            <li  class=' text-white font-serif'>You will be asked 10 questions one after another.</li>
            <li  class='   text-white font-serif'>10 points is awarded for the correct answer.</li>
            <li  class='   text-white font-serif'> Each question has three options. You can choose only one options.</li>
            <li  class='   text-white font-serif'>You can review and change answers before the quiz finish.</li>
            <li  class='   text-white font-serif'>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input     ref={inputRef}
            className="userid"
            type="text"
            placeholder="Username*"
            onChange={handleInputChange} />
        </form>

        <div className='start1' >
        <button className='btn1' onClick={handleButtonClick}> Start Quiz
        </button>
                </div>
                </div></div>
                </div>
    )
}
