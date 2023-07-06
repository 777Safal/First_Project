import React, {useRef} from 'react'

function Edit({editRef}) {
  return (
    <dialog ref={editRef}>
    <div className='w-fit mx-auto'>
      Are you sure you want to <span className='text-blue-400 font-semibold'>edit</span></div>
    <div className='flex justify-center gird grid-cols-2 gap-4'>
        <div><button className='px-3 py-1 rounded-md hover:bg-white '>Yes</button></div>
        <div><button className='px-3 py-1 rounded-md hover:bg-white' onClick={()=>editRef.current.close()}>No</button></div>
    </div>
</dialog>
  )
}

export default Edit