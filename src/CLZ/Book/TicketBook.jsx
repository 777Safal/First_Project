import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

function TicketBook() {
  const time=[
        {h1:'05:00-06:00',h2:'AM'},
        {h1:'06:00-07:00',h2:'AM'},
        {h1:'07:00-08:00',h2:'AM'},
        {h1:'08:00-09:00',h2:'AM'},
        {h1:'09:00-10:00',h2:'AM'},
        {h1:'10:00-11:00',h2:'AM'},
        {h1:'11:00-12:00',h2:'PM'},
        {h1:'12:00-01:00',h2:'PM'},
        {h1:'01:00-02:00',h2:'PM'},
        {h1:'02:00-03:00',h2:'PM'},
        {h1:'03:00-04:00',h2:'PM'},
        {h1:'04:00-05:00',h2:'PM'},
        {h1:'05:00-06:00',h2:'PM'},
        {h1:'06:00-07:00',h2:'PM'},
        {h1:'07:00-08:00',h2:'PM'},
        {h1:'08:00-09:00',h2:'PM'},
      ]
  return (
    <div className='w-full mb-10  flex justify-center'>
        <div className='w-10/12 rounded-sm relative bg-yellow-200 py-10 px-3 font-bbbb'>
          <div className='w-56 py-5 mb-6 bg-red-600 text-xl text-white font-medium text-center rounded-sm'>BOOK YOUR DAY</div>
          <div className='flex items-center mb-6'>
            <button className='w-20 h-20 text-sm font-normal flex justify-center items-center text-white font-semibold bg-orange-500 hover:bg-orange-700 rounded-full'>
              <div>Today</div>
            </button>
            <button className='w-20 h-20 mx-3 text-sm font-normal flex justify-center items-center text-white font-semibold bg-orange-500 hover:bg-orange-700 rounded-full'>
              <div>Tomorrow</div>
            </button>
            <button className='w-20 h-20 text-sm font-normal flex justify-center items-center text-white font-semibold bg-orange-500 hover:bg-orange-700 rounded-full'>
              <div>next Date</div>
            </button>
          </div>
          <div className='w-full flex grid grid-cols-8 gap-2 '>
              {time.map((val,i)=>{
                return <button
                className='px-3 py-4 flex justify-between rounded-md text-center 
                text-sm font-medium bg-lime-500 hover:bg-lime-700 hover:text-white'>
                  <div>{val.h1}</div>
                  <div>{val.h2}</div>
                </button>
              })}
          </div>
        </div>
    </div>
  )
}

export default TicketBook