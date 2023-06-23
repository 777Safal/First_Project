import React,{useState} from 'react'
import {TiTick} from 'react-icons/ti'

function Checkbox() {
    const [toggle,settoggle]=useState(true)
    const afterClick=()=>{
        settoggle(!toggle)
        
    }
  return (
    <div>
        <div>
            <div onClick={afterClick} className={`${toggle? 'border-primary':'border-hov'} w-6 h-6 relative border-2 outline-none`}>
                <input type='checkbox' className='opacity-0 w-0 h-0'/>
                <span onClick={afterClick} className={`${toggle? 'absolute bg-white':'absolute bg-hov'} w-full h-full absolute top-0 bottom-0 left-0 right-0 outline-none`}/>
            </div>
        </div>
    </div>
  )
}

export default Checkbox