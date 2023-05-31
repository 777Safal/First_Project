import React from 'react'
import {MdOutlineScience} from 'react-icons/md'

function Latestcourse() {
  const latest=[
    { h1:'Latest Courses',
      p1:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  }
  ]
  const bachelor=[
    { h2:'Bachelor of graphic design',
      p2:'Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tpor incididunt ut piscing vcs.'
    },
    { h2:'Bachelor of graphic design',
      p2:'Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tpor incididunt ut piscing vcs.'
    }
  ]
  return (
    <div className='w-full h-screen' style={{
      backgroundImage:'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
    }}>
        <div className='bg-scholarship2 opacity-80 w-7/12 h-full px-32 py-32'>
          <div className=' text-white'>
                <div className='text-5xl font-light tracking-widest1 font-aaaa'>{latest[0].h1}</div>
                <div className='font-bbbb text-base tracking-wider font-thin my-7'>{latest[0].p1}</div>
                <div className='flex justify-between'>
                  {
                    bachelor.map((val,i)=>{
                      return <div key={i} className='w-[250px]'>
                        <div className='w-12 h-12 mb-6 rounded-full flex justify-center items-center bg-white text-2xl text-scholarship2'><MdOutlineScience/></div>
                        <div className='text-2xl mb-6 font-aaaa tracking-wider'>{val.h2}</div>
                        <div className='text-sm mb-6 font-bbbb font-normal'>{val.p2}</div>
                        <div><button className='w-40 h-12 border border-hov rounded-lg text-hov'>Apply Now</button></div>
                      </div>
                    })
                  }
                </div>
          </div>
        </div>
            
    </div>
  )
}

export default Latestcourse