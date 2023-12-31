import React, { useRef } from "react";
import { useState } from "react";
import { DBoard } from "../DBoard";
import ToggleSwitch from "./ToggleSwitch";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { putcover } from '../../helper/helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Up_cover = () => {
  const _id = useParams();

  const [idCounter, setIdCounter] = useState(0);
  const result = useSelector((state) => state.cover);
  const obj = result.filter((item) => item._id === _id.id);
  var obje = obj[0];

  const [newObject, setNewObject] = useState({
    id: idCounter,
    title: "",
    desc: "",
    duration: "",
    starttime: "",
    maxMark: "",
    num: "",
    active: "",
  });
  const notifySuccess = () => {
    toast.success('Successfull operation');
  };
  const handleStart = (e) => {
    setNewObject({ ...newObject, starttime: e.target.value });
  };

  const handledura = (e) => {
    setNewObject({ ...newObject, duration: e.target.value });
  };

  const handlenum = (e) => {
    setNewObject({ ...newObject, num: e.target.value });
  };

  const handlemarks = (e) => {
    setNewObject({ ...newObject, maxMark: e.target.value });
  };
  const handleTitle = (e) => {
    setNewObject({ ...newObject, title: e.target.value });
  };
  const handleDESC = (e) => {
    setNewObject({ ...newObject, desc: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleToggle = (isChecked) => {
    setNewObject({ ...newObject, active: true });
    console.log("Toggle switched:", isChecked);
  };

  const commit = async () => {
    try {
      for (let key in newObject) {
        if (newObject.hasOwnProperty(key)) {
          if (newObject[key] === "" || key === "id") {
            console.log("Data sentlly");
            delete newObject[key];
          }
        }
      }
      console.log(newObject);
      const id=_id.id;
      const response = await putcover(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/cover`,{id,newObject});
      console.log(response);
      notifySuccess()
      console.log(response," :Data sent successfully");
    } catch (error) {
      // Handle error sending data
      console.error("Error sending data:", error);
    }
    setIdCounter((prevCounter) => prevCounter + 1);
    setNewObject({
      id: idCounter + 1,
      title: "",
      desc: "",
      duration: "",
      starttime: "",
      num: "",
      active: "",
    });
  };

  return (
    <body style={{ backgroundColor: "white" ,  margin: 0,
    padding: 0 }}>
      <div class="flex ">
        <DBoard />
        <div class="custom ml-14 ;
        w-full  h-fit">
        <div class="  bg-indigo-100 container ">
          <div class=" font-serif">Update info</div>
          <div class="  my-3 p-0">
            <div class="flex flex-row">
              <div class="basis-full">
                <input
                  class="w-full h-10 font-serif p-2"
                  type="text"
                  defaultValue={obje.title}
                  id="Title"
                  placeholder="Title"
                  onChange={handleTitle}
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="flex flex-col ...">
                <div class="flex flex-row my-3">
                  <textarea
                    class="w-full h-32 font-serif  p-2"
                    type="text"
                    defaultValue={obje.desc}
                    placeholder="Enter Description"
                    id="Description"
                    onChange={handleDESC}
                  />{" "}
                </div>
                <div class="flex flex-row my-3">
                  <input
                    class="w-full h-10 font-serif p-2 "
                    type="text"
                    id="option1"
                    defaultValue={obje.maxMark}
                    placeholder="Maximum Marks"
                    onChange={(e) => handlemarks(e)}
                  />

                  <input
                    placeholder="Number of Question"
                    defaultValue={obje.num}
                    type="text"
                    class="w-full ml-5 font-serif p-2"
                    id="option2"
                    onChange={(e) => handlenum(e)}
                  />
                </div>
                <div class="flex">
                  <ToggleSwitch onToggle={handleToggle} ac={obje.active} />{" "}
                  <div class="flex mx-2 font-serif ">Publish</div>
                </div>
                <div class="flex flex-row my-3 ">
                  <input
                    class="w-full h-10 font-serif p-2"
                    type="text"
                    defaultValue={obje.duration}
                    id="option3"
                    placeholder="Duration"
                    onChange={(e) => handledura(e)}
                  />

                  <input
                    type="text"
                    id="option4"
                    defaultValue={obje.starttime}
                    class="w-full ml-5 font-serif p-2"
                    placeholder="Start Time"
                    onChange={(e) => handleStart(e, 3)}
                  />
                </div>

                <div class="flex justify-center">
                  <button
                    class="btnn2 bg-green-600   flex justify-center"
                    onClick={commit}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div></div>
        <ToastContainer />
          </div>
          </body>
  );
};
