import React from 'react'
import Aos from 'aos'



function Heading() {
    const heading=[
        {h1:'NEWS'}
    ]
  return (
    <div className='w-full ' >
        <div data-aos="fade-right"
        className='w-full h-56 flex items-center justify-center 
        bg-no-repeat bg-cover bg-center bg-opacity-10
        bg-[url(https://img.freepik.com/premium-vector/banner-design-football-ball-with-flag-luxembourg-football-net-goal-by-national-soccer-team-luxembourg_292608-23406.jpg?size=626&ext=jpg)]'>
            <div className='px-0 py-2 text-5xl text-yellow-300 font-poping font-extrabold
            border-b-4 border-red-600'>{heading[0].h1}</div>
        </div>
    </div>
  )
}

export default Heading