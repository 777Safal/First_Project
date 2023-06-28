import React from 'react'

function Navbarclz() {
    const data=[
        {h1:'HOME'},
        {h1:'BOOK A COURT'},
        {h1:'NEWS'},
        {h1:'ABOUT US'},
        {h1:'CONTACT US'},
    ]
  return (
    <div className='w-full h-16 flex items-center justify-center bg-yellow-200'>
        <div className='w-10/12 flex items-center justify-between text-sm font-bbbb font-normal'>
            <div className='flex items-center'>
                <div 
                className='w-16 h-16 rounded-ful bg-cover bg-center 
                bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREV7OqbWAYbL_nNEO2AFXJRwOvvTD-I4MwXMgZjnsb2A&s)]'>
                </div>
                <div className='text-center text-lg font-bold text-red-600'>Monalisa Futsal</div>
            </div>
            <div className='flex grid grid-cols-5'>
            {data.map((val,i)=>{
                return <div key={i} className=''>
                    <div className='px-3 py-1 text-center rounded-md hover:bg-red-600 hover:text-white'>{val.h1}</div>
                </div>
            })}
            </div>
            <div className=''>Login</div>
        </div>
    </div>
  )
}

export default Navbarclz