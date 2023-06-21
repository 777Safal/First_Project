import React from 'react'

function SampleButtons() {
    const data=[
      {h1:'Default',color:'bg-gray-500'},
      {h1:'Primary',color:'bg-primary'},
      {h1:'Success',color:'bg-hov'},
      {h1:'info',color:'bg-info'},
      {h1:'Warning',color:'bg-scholarship1'},
      {h1:'Danger',color:'bg-danger'},
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-9/12 flex justify-center flex-col'>
            <div className='flex'>
              {data.map((val,i)=>{
                return <div key={i} className={`${val.color} px-4 py-2 text-lg font-poping font-normal mr-2`}>
                  <div>
                  {val.h1}
                  </div>
                </div>
              })}
            </div>
        </div>
    </div>
  )
}

export default SampleButtons