import React,{useState,useEffect} from 'react'


function Nav() {
    const [stickyShow,setStickyShow]=useState(false)
    useEffect(() => {
      window.addEventListener('Scroll', handle)
      return () => {
        window.removeEventListener('Scroll', handle);
      }
    })
    const handle=()=>{
        if(window.scrollY  > 200){
            setStickyShow(true);
        }
        else {
            setStickyShow(false)
        }
    }
    
    const item=[
        {h1:'Home'},
        {h1:'New'},
        {h1:'Blog'},
        {h1:'About us'},
    ]
  return (
    <div className=''>
        <div className={`${stickyShow? 'sticky':'relative'}`}>
        <div className='px-2 py-2 bg-slate-400'>
            <ul className='flex justify-between'>
            {item.map((val,i)=>{
                return <li key={i}>
                    {val.h1}
                </li>
            })}
            </ul>
        </div>
        </div>
        <div className='h-[800px] bg-blue-300'>
x   
        </div>
    </div>
    
  )
}   

export default Nav