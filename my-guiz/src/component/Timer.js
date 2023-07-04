import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
 function  Timer() {
  const [seconds, setSeconds] = useState(59);
  const [minute, setMinute] = useState(0);
  
      useEffect(() => {
          const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
              if (prevSeconds === 0) {
                if (minute === 0) {
                  clearInterval(interval);
                  return 0;
                } else {
                  setMinute((prevMinute) => prevMinute - 1);
                  return 59;
                }
              } else {
                return prevSeconds - 1;
              }
            });
          }, 1000);
      
          return () => clearInterval(interval);
        }
       , []);
      
      
      
      const navigate = useNavigate(); 
      useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // Redirect to the desired page
          }, 60000); // 1 minute = 60,000 milliseconds
      
          return () => {
            clearTimeout(timer); // Clear the timer on component unmount
          };
        }, [navigate]);
        
            return (
        <div className="">
        <div class="">
        <h1 class="time_">TimeOff {minute<10? "0"+minute:minute}:{seconds<10? "0"+seconds:seconds}</h1>
        
        </div>
        </div>
      );

    }
  
export default Timer;