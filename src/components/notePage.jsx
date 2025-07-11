import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {CirclePlus } from 'lucide-react'

const NotePage = () => {

    let navigate = useNavigate()
let location = useLocation();
let note = location.state?.note
let redirect = ()=>{
  navigate('/defaultNotepage')
}
  return (
    <div>
      <div className='bg-purple-200 min-h-screen '>
        <div>
          <h1 className='text-4xl font-bold text-center pt-10 '>Notes Taking App</h1>
        </div>

        <div>
          <button onClick={redirect} className='absolute right-0 bottom-0'>
           <CirclePlus className='h-20 w-20'/>
          </button>
        </div>
      </div>

      <p>{note || 'no note recieved'}</p>
    </div>
  )
}

export default NotePage
