import React from 'react'

function Defination() {
    const data=[
        {
            h1:'Definition',date:'01',
            p:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks.'
        },
        {
            h1:'Definition',date:'02',
            p:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks.'
        },
        {
            h1:'Definition',date:'03',
            p:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks.'
        },
    ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12 border-b-2 pb-14'>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-2'>Definition</div>
            <div className='flex'>
                {data.map((val,i)=>{
                    return <div key={i} className='flex justify-between'>
                        <div>
                        <div className='flex text-base font-semibold my-5 font-poping text-maincolor tracking-wider'>
                            <div>{val.h1}</div>
                            <div className='ml-2'>{val.date}</div>
                        </div>
                        <div className='text-base font-light font-poping text-gray-500 tracking-wide'>{val.p}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Defination