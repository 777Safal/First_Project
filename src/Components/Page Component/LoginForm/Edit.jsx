import React, {useRef,useState} from 'react'
import {FaRegEdit} from 'react-icons/fa'
import EditForm from './EditForm';


function Edit({editRef}) {
  const [editForm,setEditForm]=useState(false)
  return (
    
    <dialog ref={editRef}>
      {
      editForm==='false'?<EditForm />:''
    }
      <div className='w-fit h-fit m-auto'><FaRegEdit className='text-7xl text-blue-400'/></div>
    <div className='w-fit mx-auto'>
      Are you sure you want to <span className='text-blue-400 font-semibold'>edit</span>?</div>
    <div className='flex justify-center gird grid-cols-2 gap-4'>
        <div><button className='px-3 py-1 rounded-md hover:bg-white ' onClick={()=>setEditForm('false')}>Yes</button></div>
        <div><button className='px-3 py-1 rounded-md hover:bg-white' onClick={()=>editRef.current.close()}>No</button></div>
        
    </div>
</dialog>
  )
}

export default Edit