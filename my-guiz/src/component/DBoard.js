
import React, { useState } from 'react';
import { BiFolderOpen ,BiPlusMedical,BiLogIn,BiLogOut ,BiUser} from "react-icons/bi";
import { AiFillHome} from "react-icons/ai";

import {
    FaBars,
    FaRegChartBar,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import '../styles/App.css';
import '../styles/dashboard.css';

export const  DBoard = () => {
    document.body.style.backgroundColor = '#ffffff';
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Dashboard",
            icon:<AiFillHome/>
        },
        {
            path:"/admin/Quizzes",
            name:"Quizzes",
            icon:<BiFolderOpen/>
        },
        {
            path:"/admin/Adduser",
            name:"Add new Student",
            icon:<BiUser/>
        },
       
        {
            path:"/admin/addcover",
            name:"Add Quiz",
            icon:<BiPlusMedical/>
        },
        {
            path:"/Logout",
            name:"Logout",
            icon:<BiLogOut />
        }
    ]
    return (
        <body style={{ backgroundColor: "white" }}>

        <div  >
           <div style={{width: isOpen ? "200px" : "50px"}} class="sidebar 
           " >
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        </div>  
       
        </body>
    );
};

