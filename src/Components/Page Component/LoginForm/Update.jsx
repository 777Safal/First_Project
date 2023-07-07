import React, {useRef} from 'react'

function Update({updateRef}) {

  return (
    <dialog ref={updateRef}>
        <div className='w-fit mx-auto'>
              Are you sure you want to <span className='text-green-400 font-semibold'>update</span>?</div>
            <div className='flex justify-center gird grid-cols-2 gap-4'>
                <div><button className='px-3 py-1 rounded-md hover:text-yellow-600 '>Yes</button></div>
                <div><button className='px-3 py-1 rounded-md hover:text-yellow-600' onClick={()=>updateRef.current.close()}>No</button></div>
            </div>
    </dialog>
  )
}

export default Update