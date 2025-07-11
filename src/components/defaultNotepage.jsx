import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const DefaultNotepage = () => {

    let navigate= useNavigate()
    let redirectTOnotePage =()=>{
      navigate('/notePage',{state:{note}})
    }

  

  const [note, setnote] = useState(null);

  let handleChange =(e)=>{
    setnote(e.target.value)
  }

  let handleDone=(e)=>{
    e.preventDefault()

     if(!note || note.trim()==''){
    alert("your note is empty")
    return;
  }
  redirectTOnotePage()
  setnote('')
  }

 

  return (
    <div className='bg-purple-200 max-h-full'>

        
            <h1 className='text-4xl font-bold text-center pt-10 mb-5'>Notes Taking App</h1>
        
     <div className=' h-screen flex items-start justify-center  '>
      
        <input
        className='w-4/5 h-2/5 ' 
        onChange={handleChange}
        type="text"
        placeholder='start typig here'
        value={note}
          />
     </div>

     <div className=' flex items-center justify-center absolute top-2/3 right-40 '>
      <button
      onClick={(e)=>{
        handleDone(e)
        redirectTOnotePage();
      }} 
      className=' p-3 border border-black text-black '>
        Done
      </button>
     </div>
    </div>
  )
}

export default DefaultNotepage
