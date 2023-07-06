import React from 'react'

function Delete() {
  return (
    
        <div className='w-2/4 absolute h-20 bg-gray-300 rounded-md'>
            <div className='w-fit mx-auto'>
              Are you sure you want to <span className='text-red-600 font-semibold'>delete</span></div>
            <div className='flex justify-center gird grid-cols-2 gap-4'>
                <div><button className='px-3 py-1 rounded-md hover:bg-white '>Yes</button></div>
                <div><button className='px-3 py-1 rounded-md hover:bg-white '>No</button></div>
            </div>
        </div>
  )
}

export default Delete