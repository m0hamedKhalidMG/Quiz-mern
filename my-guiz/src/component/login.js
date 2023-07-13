import  { useEffect, useState  } from 'react'
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link,useNavigate,useLocation } from 'react-router-dom';
import { login,logout } from '../helper/helper';
import App from './../App';

export const Login = () => {
    const navigate = useNavigate(); 
    const location =useLocation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const redirectpath=location.state?.path || "/home"
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        document.body.style.backgroundColor = '#e0e2e2';

      },[])
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

        

      const handleLogin = (e) => {
        login(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/login`, { username, password })
          .then(Response => {
            if (Response.hasOwnProperty('username')) {  
              localStorage.setItem('user', JSON.stringify(Response));
            navigate(redirectpath,{replace:true});
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
  return (
    <div class="flex items-center justify-center h-screen">
    <div class="w-96 bg-white rounded-xl shadow-md overflow-hidden ml-5 mr-5">
    
    <div class="p-8">
    <div class="uppercase tracking-wide text-sm text-zinc-500 font-bold text-center mb-2">Sign in to Account</div> 
    <div class="border-y-2  mb-3  flex mx-auto  border-slate-500" ></div>
        <div class="mb-2">
        <label for="email" class="block text-zinc-500 text-sm font-bold ">Email:</label>

        <input
        class="w-full h-10 p-2 mb-4 my-1 bg-slate-100"
        type="text"
        id="email"
        value={username}
        placeholder="Email"
        onChange={e => setUsername(e.target.value)}
      />
        </div>
        <div class="mb-2">
          <div className="relative">
          <label for="email" class="block text-zinc-500 text-sm font-bold ">Password:</label>

  <input
    className="w-full h-10 font-serif p-2 mb-4 my-1 bg-slate-100 pr-10"
    type={showPassword ? 'text' : 'password'}
    id="Password"
    placeholder="Password"
    value={password}
    onChange={e => setPassword(e.target.value)}
  />
  <div
    className="absolute inset-y-0 right-0 pr-3 flex items-center"
    onClick={togglePasswordVisibility}
  >
    <FontAwesomeIcon
      icon={showPassword ? faEyeSlash : faEye}
      className="text-gray-500 cursor-pointer"
    />
  </div>
</div>

        </div>
        <div class="flex items-center justify-between">
        <div class="flex justify-center">
        <button  onClick={handleLogin} class="bg-slate-500 text-white font-semibold py-2 px-4 rounded">
          Sign in
        </button>

      </div>
          <a
            href="#"
            class="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800"
          >
            Forgot Password?
          </a>
        </div>
    </div>
  </div>
  </div>
 
   )
}
