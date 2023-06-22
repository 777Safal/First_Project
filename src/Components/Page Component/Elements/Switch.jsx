import React from 'react'

function Switch() {
  return (
    <div>
        <label className='relative inline-block w-16 h-9'>
            <input className='opacity-0 '/>
            <span className='absolute cursor-pointer top-0 bottom-0 left-0 right-0 bg-gray-300 ease-linear duration-150'/>
        </label>
    </div>
  )
}

export default Switch