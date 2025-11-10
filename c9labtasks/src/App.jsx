import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Task3 from './task 3/Task3';

const App = () => {

const [data,setData] =  useState();
 const [search, setSearch] = useState('');
useEffect(()=>{
  apicall()
},[])

// console.log(data);

function apicall(){
 axios("https://jsonplaceholder.typicode.com/users").then((res)=>{
    setData(res.data);  
    })
}

  return (
    <>
    <div> 

     <div style={{margin:"20px"}}>
      <input type="text" placeholder='search by name' style={{padding:"5px"}}   onChange={(e)=>{
        const filterdata = data.filter((item)=>{
          if(!e.target.value && e.target.value.trim() == "") return item;
          return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setData(filterdata)
      }}/>
     </div>


 


  <div className='stylecss'>
    {
    data && data.map((item)=>{
      return(
        <div key={item.id} style={{border:"1px solid black", margin:"10px", padding:"10px"}} >
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Company name:</strong> {item.company.name}</p>
        </div>
      )
    })
  }
  </div>
   </div>


   {/* task 3 */}
 <Task3/>
   
</>
  )
}

export default App