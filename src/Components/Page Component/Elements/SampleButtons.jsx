import React from 'react'

function SampleButtons() {
    const data=[
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-sm'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-white',border:true,borderColor:'border-hov',borderRounded:'border rounded-sm'},
      {h1:'info',color:'bg-info',textColor:'text-white',border:true,borderColor:'border-info',borderRounded:'border rounded-sm' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-white',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-sm'},
      {h1:'Danger',color:'bg-danger',textColor:'text-white',border:true,borderColor:'border-danger',borderRounded:'border rounded-sm'},],
      [{h1:'Default',color:'false' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-sm'},
      {h1:'Primary',color:'false' ,textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm'},
      {h1:'Success',color:'false' ,textColor:'text-hov',border:true,borderColor:'border-hov',borderRounded:'border rounded-sm'},
      {h1:'info',color:'false',textColor:'text-info',border:true,borderColor:'border-info',borderRounded:'border rounded-sm' },
      {h1:'Warning',color:'false',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-sm'},
      {h1:'Danger',color:'false',textColor:'text-danger',border:true,borderColor:'border-danger',borderRounded:'border rounded-sm'},],
      
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-lg'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-lg'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-white',border:true,borderColor:'border-hov',borderRounded:'border rounded-lg'},
      {h1:'info',color:'bg-info',textColor:'text-white',border:true,borderColor:'border-info',borderRounded:'border rounded-lg' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-white',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-lg'},
      {h1:'Danger',color:'bg-danger',textColor:'text-white',border:true,borderColor:'border-danger',borderRounded:'border rounded-lg'},],
      [{h1:'Default',color:'false' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-xl'},
      {h1:'Primary',color:'false' ,textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-xl'},
      {h1:'Success',color:'false' ,textColor:'text-hov',border:true,borderColor:'border-hov',borderRounded:'border rounded-xl'},
      {h1:'info',color:'false',textColor:'text-info',border:true,borderColor:'border-info',borderRounded:'border rounded-xl' },
      {h1:'Warning',color:'false',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-xl'},
      {h1:'Danger',color:'false',textColor:'text-danger',border:true,borderColor:'border-danger',borderRounded:'border rounded-xl'},],

      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-2xl'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-2xl'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-white',border:true,borderColor:'border-hov',borderRounded:'border rounded-2xl'},
      {h1:'info',color:'bg-info',textColor:'text-white',border:true,borderColor:'border-info',borderRounded:'border rounded-2xl' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-white',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-2xl'},
      {h1:'Danger',color:'bg-danger',textColor:'text-white',border:true,borderColor:'border-danger',borderRounded:'border rounded-2xl'},],
      [{h1:'Default',color:'false' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-2xl'},
      {h1:'Primary',color:'false' ,textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-2xl'},
      {h1:'Success',color:'false' ,textColor:'text-hov',border:true,borderColor:'border-hov',borderRounded:'border rounded-2xl'},
      {h1:'info',color:'false',textColor:'text-info',border:true,borderColor:'border-info',borderRounded:'border rounded-2xl' },
      {h1:'Warning',color:'false',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-2xl'},
      {h1:'Danger',color:'false',textColor:'text-danger',border:true,borderColor:'border-danger',borderRounded:'border rounded-2xl'},],

      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-3xl'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-3xl'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-white',border:true,borderColor:'border-hov',borderRounded:'border rounded-3xl'},
      {h1:'info',color:'bg-info',textColor:'text-white',border:true,borderColor:'border-info',borderRounded:'border rounded-3xl' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-white',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-3xl'},
      {h1:'Danger',color:'bg-danger',textColor:'text-white',border:true,borderColor:'border-danger',borderRounded:'border rounded-3xl'},],
      [{h1:'Default',color:'false' ,textColor:'text-black',border:true,borderColor:'border-gray-500',borderRounded:'border rounded-3xl'},
      {h1:'Primary',color:'false' ,textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-3xl'},
      {h1:'Success',color:'false' ,textColor:'text-hov',border:true,borderColor:'border-hov',borderRounded:'border rounded-3xl'},
      {h1:'info',color:'false',textColor:'text-info',border:true,borderColor:'border-info',borderRounded:'border rounded-3xl' },
      {h1:'Warning',color:'false',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1',borderRounded:'border rounded-3xl'},
      {h1:'Danger',color:'false',textColor:'text-danger',border:true,borderColor:'border-danger',borderRounded:'border rounded-3xl'},],
      
    ]
    const linkData=[
      {h1:'Link',h2:'Disable'},
      {h1:'Link',h2:'Disable'},
      {h1:'Link',h2:'Disable'},
      {h1:'Link',h2:'Disable'},
      {h1:'Link',h2:'Disable'},
      {h1:'Link',h2:'Disable'},
    ]
    const extralarze=[
      [{h1:'Extra large',color:'bg-primary',textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm',textSize:'text-2xl',padding:'px-10 py-5'},
      {h1:'Large',color:'bg-hov',textColor:'text-white',border:true,borderColor:'border-hov',borderRounded:'border rounded-sm', textSize:'text-xl',padding:'px-10 py-4'},
      {h1:'Default',color:'bg-primary',textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm', textSize:'text-lg',padding:'px-10 py-3'},
      {h1:'Medium',color:'bg-hov',textColor:'text-white',border:true,borderColor:'border-hov',borderRounded:'border rounded-sm', textSize:'text-md',padding:'px-8 py-2'},
      {h1:'Small',color:'bg-primary',textColor:'text-white',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm', textSize:'text-sm',padding:'px-8 py-1'},],
      
      [{h1:'Extra large',color:'false',textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm',textSize:'text-2xl',padding:'px-10 py-5'},
      {h1:'Large',color:'false',textColor:'text-hov',border:true,borderColor:'border-hov',borderRounded:'border rounded-sm', textSize:'text-xl',padding:'px-10 py-4'},
      {h1:'Default',color:'false',textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm', textSize:'text-lg',padding:'px-10 py-3'},
      {h1:'Medium',color:'false',textColor:'text-hov',border:true,borderColor:'border-hov',borderRounded:'border rounded-sm', textSize:'text-md',padding:'px-8 py-2'},
      {h1:'Small',color:'false',textColor:'text-primary',border:true,borderColor:'border-primary',borderRounded:'border rounded-sm', textSize:'text-sm',padding:'px-8 py-1'},]
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-9/12 flex justify-center font-bbbb  '>
        {/* left section */}
        <div className='w-2/3 '>
          <div className='grid grid-row-6 gap-3'>
        {data.map((row, i) => (
          <div key={i} className="grid grid-cols-6 gap-3">
              {row.map((button, buttonI) => (
                <div key={buttonI}
                className={`${button.color?button.color:'bg-transparent'} ${button.border &&'border-2' } ${button?.borderColor} ${button.textColor} ${button.borderRounded} px-1 py-3 text-center text-base tracking-widest1 `}>
                  <button> {button.h1}</button>
                </div>
              ))}
          </div>
        ))}
          </div>
          <div className=' mt-5 grid grid-rows-2 gap-2'>
              {extralarze.map((row,i)=>(
                <div key={i} className="flex flex-row items-center">
                  {row.map((button,buttonI)=>(
                    <div key={buttonI}
                    className={`${button.color?button.color:'bg-transparent'} ${button.textColor} ${button.border && 'border-2'} ${button?.borderColor} ${button.color} ${button.borderRounded} ${button.textSize} ${button.padding} mr-5 text-center`}>
                      <button>{button.h1}</button>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        {/* right section */}
        <div className='w-1/3 pl-10 text-base'>
                <div className='w-56'>
                  {linkData.map((val,i)=>{
                    return <div key={i} className='flex mb-3 grid grid-cols-2 gap-5 text-center'>
                      <div className=' py-4 bg-gray-300'>{val.h1}</div>
                      <div className=' py-4 bg-gray-300'>{val.h2}</div>
                    </div>
                  })}
                </div>
        </div>
        </div>
    </div>
  )
}

export default SampleButtons