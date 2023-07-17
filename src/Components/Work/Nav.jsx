import React from 'react'

function Nav() {
    const item=[
        {h1:'Home'},
        {h1:'New'},
        {h1:'Blog'},
        {h1:'About us'},
    ]
  return (
    <div>
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
  )
}

export default Nav