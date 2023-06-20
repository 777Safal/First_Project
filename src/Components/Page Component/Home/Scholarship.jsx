import React from 'react'
import {SlGraduation} from 'react-icons/sl'
import {FiAlertTriangle} from 'react-icons/fi'
import {FaBookReader} from 'react-icons/fa'

function Scholarship() {

    const schol=[
        {name:"Scholarship",name2:"Available", icon:<SlGraduation/>, color:'bg-scholarship1'},
        {name:"Scholarship",name2:"Available", icon:<FiAlertTriangle/>,  color:'bg-scholarship2'},
        {name:"Scholarship",name2:"Available", icon:<FaBookReader/>, color:'bg-scholarship3'},
    ]

  return (
    <div className='w-full flex items-center justify-center mt-4'>
        <div className='w-9/12 flex items-center justify-between font-bbbb'>
            {schol.map((val,i)=>{
              return <div key={i} className={`${val.color} w-[314px] h-[82px] rounded-xl flex justify-center items-center text-2xl font-bbbb text-white font-medium`}>
                <div className='flex items-center'>
                  <div className='w-[53px] h-[53px] rounded-full flex justify-center items-center bg-white mr-2 text-scholarship1'>
                    {val.icon}
                  </div>
                  <div>
                      <div>{val.name}</div>
                      <div className='text-sm'>{val.name2}</div>
                  </div>
                </div>
              </div>
            })}
        </div>
    </div>
  )
}

export default Scholarship