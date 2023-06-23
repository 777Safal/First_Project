import React, {useState} from 'react'

function Radio() {
    const [toggle,settoggle]=useState(true)
    const afterClick=()=>{
        settoggle(!toggle)
    }
  return (
    <div className='w-4 h-4 flex justify-center items-center'>
        <div  className={`w-4 h-4 rounded-full border border-2 border-primary `}>
            <input type='radio' className='opacity-0 w-0 h-0'/>
        </div>
        <span onClick={afterClick} className={`${toggle? 'absolute bg-white':'absolute bg-primary'} w-2 h-2 rounded-full`} />
    </div>
  )
}

export default Radio