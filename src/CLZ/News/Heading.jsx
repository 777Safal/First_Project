import React from 'react'
import Aos from 'aos'



function Heading() {
    const heading=[
        {h1:'NEWS'}
    ]
  return (
    <div className='w-full' >
        <div data-aos="fade-right"
        className='w-full h-56 flex items-center justify-center  bg-no-repeat bg-cover bg-center bg-opacity-10
        bg-[url(https://img.freepik.com/premium-vector/banner-design-football-ball-with-flag-luxembourg-football-net-goal-by-national-soccer-team-luxembourg_292608-23406.jpg?size=626&ext=jpg)]'>
            <div className='px-0 py-2 text-5xl text-yellow-300 font-poping font-extrabold
            border-b-4 border-red-600'>{heading[0].h1}</div>
            
        </div>
        <div className='w-full mt-2'>
            <div className='relative'>
            <div 
            className='w-12 h-12 absolute top-0 right-0             
            hover:bg-none hover:w-24 overflow-hidden flex items-center' >
                Tournaments
                <div 
                className='w-full h-full bg-cover bg-no-repeat absolute top-0
                hover:bg-none
                bg-[url(https://cdn-icons-png.flaticon.com/512/2961/2961092.png)] '></div>
            </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Heading