import React from 'react'

function SampleButtons() {
    const data=[
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      [{h1:'Default',color:'bg-gray-500' ,textColor:'text-black',border:true,borderColor:'border-scholarship1'},
      {h1:'Primary',color:'bg-primary' ,textColor:'text-primary',border:true,borderColor:'border-primary'},
      {h1:'Success',color:'bg-hov' ,textColor:'text-hov',border:true,borderColor:'border-hov'},
      {h1:'info',color:'bg-info',textColor:'text-info',border:true,borderColor:'border-info' },
      {h1:'Warning',color:'bg-scholarship1',textColor:'text-scholarship1',border:true,borderColor:'border-scholarship1'},
      {h1:'Danger',color:'bg-danger',textColor:'text-danger',border:true,borderColor:'border-danger'},],
      
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-9/12 flex justify-center flex-col'>
        <div className='grid grid-row-6 gap-3'>
      {data.map((row, i) => (
        <div key={i} className="grid grid-cols-6 gap-5">
            {row.map((button, buttonI) => (
              <div key={buttonI}
               className={`${button.color?button.color:'bg-transparent'} ${button.border &&'border-4' } ${button?.borderColor} ${button.textColor} ${i===(0)? 'border rounded-sm':''} ${i===(1)? 'border rounded-md':''} ${i===(2)? 'border rounded-lg':''} ${i===(3)? 'border rounded-xl':''} ${i===(4)? 'border rounded-2xl':''} ${i===(5)? 'border rounded-3xl':''} ${i===(6)? 'border rounded-3xl':''} ${i===(7)? 'border rounded-3xl':''}   border px-1 py-4 text-center`}>
                <button> {button.h1}</button>
              </div>
            ))}
        </div>
      ))}
    </div>
        </div>
    </div>
  )
}

export default SampleButtons