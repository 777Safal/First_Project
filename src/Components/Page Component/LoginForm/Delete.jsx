import Reac,{useRef,useState} from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'

function Delete({deleteRef}) {
  const [deleted,setDeleted]=useState(false)
  const confirmDelete =()={

  }
  return (
        <dialog ref={deleteRef}>
          <div className='w-fit h-fit m-auto'><RiDeleteBin5Line className='text-7xl text-red-600'/></div>
            <div className='w-fit mx-auto'>
              Are you sure you want to <span className='text-red-600 font-semibold'>delete</span>?</div>
            <div className='flex justify-center gird grid-cols-2 gap-4'>
                <div><button className='px-3 py-1 rounded-md hover:bg-white '>Yes</button></div>
                <div><button className='px-3 py-1 rounded-md hover:bg-white ' onClick={()=>deleteRef.current.close()}>No</button></div>
            </div>
        </dialog>
  )
}

export default Delete