import React,{useEffect, useState} from 'react'


function Switch() {
    const [toggle,settoggle]=useState(true)
    const afterClick=()=>{
        settoggle(!toggle)
    }
  return (
    <div>
      <div onClick={afterClick} className={`${toggle? 'bg-primary':'bg-hov'} p-1 w-24 h-10 ml-5 mt-5 shadow-inner rounded-3xl`}> 
      <div className='bg-white rounded-3xl relative w-full h-full outline-none'>
      <button  className='w-full h-full bg-transparent outline-none'></button>
      <div onClick={afterClick} className={`${toggle ? 'bg-primary absolute left-0 top-0':'bg-hov absolute right-0 top-0'} w-2/4 h-8 absolute transform transition-transform ease-in-out duration-300 top-0 left-0 right-0 bottom-0 shadow-inner rounded-3xl outline-none`}></div>
      </div>
      </div>
    </div>
  )
}

export default Switch