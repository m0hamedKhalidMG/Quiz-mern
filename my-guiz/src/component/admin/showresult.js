import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getresult } from '../../helper/helper';
import { useSelector } from 'react-redux'

const Showresult = () => {
    const { id } = useParams();
    document.body.style.backgroundColor = '#ffffff';
    const [data, setData] = useState([]);
    const cover=useSelector(state=>state.cover)
    const [...cover_]=cover.filter(x=>x._id===id)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getresult(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result/${id}`);
            setData(response);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div   class="container flex justify-center  my-0 p-4 ">
    <table class="table   border-collapse ">        <thead>
      <tr >
        <th class="border ">Name</th>
        <th class="border ">Phase</th>
        <th class="border ">Group</th>
        <th class="border">degree: {cover_[0]?.maxMark ?? "N/A"}</th>      </tr>
    </thead>
    <tbody>
    {data.map((user) => (
        <tr key={user.id}>
          <td className=" bg-red-800 border  ">{user.userid.FullName}</td>
          <td className="border ">{user.userid.phase}</td>
          <td className="border">{user.userid.Group}</td>
          <td className="border ">{user.degree}</td>
           
        </tr>
      ))}
    </tbody>
  </table> 
  
  </div>
  )
}

export default Showresult