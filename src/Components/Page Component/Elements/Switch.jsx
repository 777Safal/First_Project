import React,{useEffect, useState} from 'react'


function Switch() {
    const [toggle,settoggle]=useState(true)
    const afterClick=()=>{
        settoggle(!toggle)
    }
  return (
    <div>
      <div onClick={afterClick} className={`${toggle? 'bg-primary':'bg-hov'} w-12 p-1 h-6 relative outline-none rounded-3xl cursor-pointer`} >
        <input type='checkbox' className='w-0 h-0 opacity-0 '/>
        <span onClick={afterClick} className={`${toggle? 'absolute':'absolute transform translate-x-6'} w-4 m-1 bg-white absolute top-0 left-0 right-0 bottom-0 shadow-inner rounded-full outline-none`}></span>
      </div>
    </div>
  )
}

export default Switch