import React from 'react'

function Scholarship() {

    const schol=[
        {name:"Scholarship",name2:"Available"},
        {name:"Scholarship",name2:"Available"},
        {name:"Scholarship",name2:"Available"},
    ]

  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-9/12 flex items-center justify-between '>
            {schol.map((val,i)=>{
              return <div key={i} className='bg-'>
                <div>{val.name}</div>
                <div>{val.name2}</div>
              </div>
            })}
        </div>
    </div>
  )
}

export default Scholarship