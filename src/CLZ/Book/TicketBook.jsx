import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import Aos from 'aos'

function TicketBook() {
  const time=[
        {h1:'05:00-06:00',h2:'AM'},
        {h1:'06:00-07:00',h2:'AM'},
        {h1:'07:00-08:00',h2:'AM'},
        {h1:'08:00-09:00',h2:'AM'},
        {h1:'09:00-10:00',h2:'AM'},
        {h1:'10:00-11:00',h2:'AM'},
        {h1:'11:00-12:00',h2:'PM'},
        {h1:'01:00-02:00',h2:'PM'},
        {h1:'12:00-01:00',h2:'PM'},
        {h1:'02:00-03:00',h2:'PM'},
        {h1:'03:00-04:00',h2:'PM'},
        {h1:'04:00-05:00',h2:'PM'},
        {h1:'05:00-06:00',h2:'PM'},
        {h1:'06:00-07:00',h2:'PM'},
        {h1:'07:00-08:00',h2:'PM'},
        {h1:'08:00-09:00',h2:'PM'},
      ]
      const date=[
        {h1:'Today'},
        {h1:'Tomorrow'},
        {h1:'Next Day'},
      ]
      const paragraph=[
        {p:'Join us in the battle of the fastest feet, where every touch of the ball sends a surge of excitement through the crowd. Lace up your boots and become a maestro of futsal in the arena!'}
      ]
  return (
    <div className=' mt-10 relative flex justify-center'>
        <div className='w-10/12 rounded-sm  bg-yellow-300 
        py-10 px-3 font-bbbb' data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="800">
          <div className='text-zinc-700 text-base font-poping tracking-wider'>
            {paragraph[0].p}
          </div>
          <div className='flex items-center mb-6'>
            {date.map((val,i)=>{
              return <div key={i} className='mx-4'>
                <button className='w-20 h-20 text-sm font-normal flex justify-center 
            items-center text-white font-semibold bg-orange-500
            transition ease-in-out delay-150 hover:translate-2 hover:scale-125 duration-300 hover:bg-orange-700 
            rounded-full'>
              <div>{val.h1}</div>
            </button>
              </div>
            })}
          </div>
          <div className='w-full flex grid grid-cols-8 gap-2 '>
              {time.map((val,i)=>{
                return <button
                className='px-3 py-4 flex justify-between rounded-md text-center 
                text-sm font-medium bg-lime-500 hover:bg-lime-700 hover:text-white
                transition ease-in-out delay-150 hover:translate-2 hover:scale-125 duration-300'>
                  <div>{val.h1}</div>
                  <div>{val.h2}</div>
                </button>
              })}
          </div>
          {/* <div className='w-24 h-24 absolute top-32 right-32 bg-contain bg-no-repeat motion-safe:animate-bounce
          bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png?20190202162056)]'
          data-aos-slide='slide-right' data-aos-offset="150" data-aos-easing="ease-in  -sine" data-aos-delay='300'
          >
          </div> */}
          
        </div>
    </div>
  )
}

export default TicketBook