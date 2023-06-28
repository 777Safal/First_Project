import React from 'react'

function Book() {
    const book=[
        {h1:'BOOK MY TICKET'}
    ]
  return (
    <div className='w-full h-40 flex justify-center bg-cover bg-[url()]'>
        <div className='w-10/12 h-40 flex items-center'>
            <div className='w-36 h-36 ml-2 rounded-ful bg-cover bg-center 
                bg-[url(https://o.remove.bg/downloads/173db0fb-611e-4810-98d1-0793f3fc01e1/images-removebg-preview.png)]'>
            </div>
            <div className='ml-2 text-3xl font-poping font-bold text-red-600'>
            Monalisa Futsal Arena</div>
            <div>
                <button className='w-64 h-16 ml-32 bg-red-600 text-white hover:bg-white hover:text-red-600 text-lg font-poping font-semibold tracking-wider rounded-md'>{book[0].h1}</button>
            </div>
        </div>
    </div>
  )
}

export default Book