import React from 'react'

function Navbar() {
    const data=[
        {h1:'HOME'},
        {h1:'BOOK A COURT'},
        {h1:'NEWS'},
        {h1:'ABOUT US'},
        {h1:'CONTACT US'},
    ]
  return (
    <div className='w-full h-16 mb-10 flex items-center justify-center bg-yellow-200'>
        <div className='w-10/12 flex items-center justify-between text-sm font-bbbb font-normal'>
            <div className='flex items-center'>
                <div 
                className='w-16 h-16 mr-2 rounded-ful bg-cover bg-center 
                bg-[url(https://o.remove.bg/downloads/173db0fb-611e-4810-98d1-0793f3fc01e1/images-removebg-preview.png)]'>
                </div>
                <div className='text-center text-lg font-bold text-red-600'>Monalisa Futsal</div>
            </div>
            <div className=' flex grid grid-cols-5'>
            {data.map((val,i)=>{
                return <div key={i} className=''>
                    <div className='px-3 py-2 text-center rounded-lg hover:bg-red-600 hover:text-white cursor-pointer'>{val.h1}</div>
                </div>
            })}
            </div>
            <div className='px-3 py-2 text-left rounded-lg hover:bg-red-600 hover:text-white cursor-pointer'>Login</div>
        </div>
    </div>
  )
}

export default Navbar