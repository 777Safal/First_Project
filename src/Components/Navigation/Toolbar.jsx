import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'

function Toolbar() {
  const item=[
    {name:'Home'},
    {name:'Courses'},
    {name:'Blog'},
    {name:'Page'},
    {name:'Contact'},    
  ]
  const apply=[
    {name:'APPLY NOW'}
  ]
  const title=[
    {name:'Wiser'},
    {name:'uinversity'}
  ]

  return (
    <div className='w-full h-fit py-4 flex justify-center items-center'>
        <div className='w-9/12 flex items-center justify-between'>
            <div className='flex text-2xl font-normal text-black'>
              <div>{title[0].name}</div>
              <div className='ml-1 text-firstcolor'>{title[1].name}</div>
            </div>
            <div className='flex'>
              {
                item.map((val,i)=>{
                  if((val.name==="Blog")||(val.name==="Page")){
                  return <div key={i} className='mr-10 py-3 flex items-center'>
                      {val.name} <RiArrowDropDownLine className='text-xl'/>
                  </div>}
                  else {
                    return <div key={i} className='mr-10 py-3 flex items-center'>
                      {val.name} 
                      </div>
                  }
                })
              }
              <div className='py-3 px-5 rounded bg-maincolor text-white'>{apply[0].name}</div>
            </div>
        </div>
    </div>
  )
}

export default Toolbar