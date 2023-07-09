import React,{useRef,useState} from 'react'

function JustTest({targetRef}) {
    const [scroll,setScroll]=useState(false)
    const onscroll=()=>{
        // setScroll(false)
        targetRef.current.scrollIntoView();
    }
  return (
    <div>
        <div ref={targetRef} className='h-screen bg-red-600'></div>
        <div className='h-screen bg-blue-600'></div>
        <button onClick={onscroll} className='max-w-fit bg-yellow-600 px-5 py-2 '>clikc</button>
    </div>
  )
}

export default JustTest