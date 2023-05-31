import React from 'react'

function Getstart() {
const boost=[
    {name:'Boost up your skills with a new way of learning',name1:'GET START',name2:'TAKE A TOUR'}
]

  return (
    <div className='w-full h-[674px] flex justify-center' style={{
        backgroundImage:'url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        backgroundSize:'cover'
    }}>
        <div className='w-10/12 relative'>
        <div className='w-[500px] absolute top-64 left-0'>
            <div className='text-popular text-4xl font-aaaa font-normal tracking-widest'>{boost[0].name}</div>
            <div className='flex mt-3 font-bbbb text-sm font-thin'>
                <div><button className='border bg-white w-[218px] h-[58px]  hover:bg-hov'>{boost[0].name1}</button></div>
                <div><button className='border w-[218px] h-[58px] ml-6 bg-white hover:bg-hov'>{boost[0].name2}</button></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Getstart










