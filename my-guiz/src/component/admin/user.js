

import React, { useState, useEffect } from "react";
import { SignUp } from "../../helper/helper";
import { DBoard } from "../DBoard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';

// Inside your component or function

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
const componentStyle = {
  height: '100%',
  backgroundColor: '#ffffff',
};
export const Adduser = () => {
  // Inside your component
  const handleError = (message) => {

  swal({
    title: 'Error',
    text: message,
    icon: 'error',
  });}
  const question = useSelector((state) => state.question.queue);
  console.log(question);
  const [user, setuser] = useState({
    FullName: "",
    Email: "",
    password: "",
    confirmPassword: "",
    PhoneNumber: "",
    Group: "",
    StreetAddress: "",
    active: true,
    phase: "",
    City: "",
  });
  const handleSubmit = (e) => {
    console.log(user)
    e.preventDefault();
    SignUp(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/signup`, user)
    .then((res) =>  {
      e.target.reset();

      notifySuccess();
      
    })
    .catch((error) => {
      handleError(error.response.data.error)
      }
    
       );
  
   
  };


  const handlefullname = (e) => {
    setuser({ ...user, FullName: e.target.value });
  };
  const handlephone = (e) => {
    setuser({ ...user, PhoneNumber: e.target.value });
  };
  const handleGroup = (e) => {
    setuser({ ...user, Group: e.target.value });
  };
  const handlePhase = (e) => {
    setuser({ ...user, phase: e.target.value });
  };
  const handleStreetAddress = (e) => {
    setuser({ ...user, StreetAddress: e.target.value });
  };
  const handleCity = (e) => {
    setuser({ ...user, City: e.target.value });
  };
  const handlepassword = (e) => {
    setuser({ ...user, password: e.target.value });
  };
  const handlepasswordConfirm = (e) => {
    setuser({ ...user, confirmPassword: e.target.value });
  };

  useEffect(() => {}, []);

  const notifySuccess = () => {
    toast.success("Successfull operation");
  };
  const handleEmail = (e) => {
    setuser({ ...user, Email: e.target.value });
  };

  
  return (
    <div id="root" style={componentStyle}>
    <div class="flex ">
      <DBoard />
      <div class=" ml-14">
        <form onSubmit={handleSubmit}>
          <div class="  rounded-xl shadow-sm overflow-hidden  p-2 ">
            <div class="p-0 m-0 font-serif font-light text-xl ">
              {" "}
              Add new user
            </div>
            <div class="border-y  mb-3 mt-1  flex mx-auto "></div>
            <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
              <div class="col-start-1 col-span-1 ...  pr-4">Account</div>

              <div class="col-start-2 col-span-2  ... ">
                <label
                  for="email"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Full name:
                </label>
                <input
                  class="w-full h-8 font-serif p-1 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handlefullname}
                  required
                />
              </div>
              <div class="col-end-7 col-span-2 ..."></div>
              <div class="col-start-1 col-end-7 ..."></div>
              <div class="col-start-2 col-span-2  ... ">
                <label
                  for="Email Address"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Email Adress
                </label>
                <input
                  class="w-full h-8 font-serif p-1 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handleEmail}
                  required
                />
              </div>
              <div class="col-start-2 col-span-1  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  phone Number
                </label>
                <input
                  class="w-full h-8 font-serif p-1 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handlephone}
                  required
                />
              </div>

              <div class="col-start-1 col-span-6  ... ">
                <div class="border-y  mb-3 mt-2  flex mx-auto "></div>
              </div>

              <div class="col-start-1 col-span-1 ...  pr-4">Acadamy</div>
              <div class="col-start-2 col-span-1  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Group
                </label>
                <input
                  class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  required
                  onChange={handleGroup}
                />
              </div>
              <div class="col-start-3 col-span-1  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Phase
                </label>
                <input
                  class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handlePhase}
                  required
                />
              </div>

              <div class="col-start-1 col-span-6  ... ">
                <div class="border-y  mb-3 mt-2  flex mx-auto "></div>
              </div>

              <div class="col-start-1 col-span-1 ...  pr-4">Address</div>

              <div class="col-start-2 col-span-6  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Street Address
                </label>
                <input
                  class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handleStreetAddress}
                  required
                />
              </div>

              <div class="col-start-2 col-span-2  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  City
                </label>
                <input
                  class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  required
                  onChange={handleCity}
                />
              </div>

              <div class="col-start-1 col-span-6  ... ">
                <div class="border-y  mb-3 mt-3  flex mx-auto "></div>
              </div>

              <div class="col-start-1 col-span-1 ...  pr-4">Password</div>
              <div class="col-start-2 col-span-1  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Password
                </label>
                <input
                  class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handlepassword}
                  required
                />
              </div>
              <div class="col-start-3 col-span-1  ... ">
                <label
                  for="phone"
                  class="block text-zinc-500 text-sm font-bold "
                >
                  Confirm
                </label>
                <input
                  class="w-full h-8 font-serif p-2 bg-slate-100 rounded-sm "
                  type="text"
                  id="option1"
                  onChange={handlepasswordConfirm}
                  required
                />
              </div>
            </div>
            <div class=" flex  justify-end m-2 mb-2">
              <button type="submit"
                class="btnn2 bg-blue-500   flex justify-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>    </div>

  );
};
