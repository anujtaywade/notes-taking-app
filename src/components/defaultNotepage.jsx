import React from 'react'

const DefaultNotepage = () => {
  return (
    <div className='bg-purple-200 min-h-screen'>

        
            <h1 className='text-4xl font-bold text-center pt-10'>Notes Taking App</h1>
        
     <div className='h-screen flex items-center justify-center  '>
      
        <input
        className='w-4/5 h-4/5' 
        type="text"
        placeholder='s'
          />
     </div>
    </div>
  )
}

export default DefaultNotepage
