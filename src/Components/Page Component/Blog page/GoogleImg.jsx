import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {GoComment} from 'react-icons/go'
import {RxDividerVertical} from 'react-icons/rx'

function GoogleImg() {
    const data=[
        {date:'15',month:'Jan',h1:'Google inks pact for new 35 storey office',p1:'Travel,lifestyle',p2:'03 comments',
        p:'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
        icon:<BsPerson/>,icon2:<GoComment/> 
      },
        {date:'15',month:'Jan',h1:'Google inks pact for new 35 storey office',p1:'Travel,lifestyle',p2:'03 comments',
        p:'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
        icon:<BsPerson/>,icon2:<GoComment/> 
      },
        {date:'15',month:'Jan',h1:'Google inks pact for new 35 storey office',p1:'Travel,lifestyle',p2:'03 comments',
        p:'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
        icon:<BsPerson/>,icon2:<GoComment/> 
      },
        {date:'15',month:'Jan',h1:'Google inks pact for new 35 storey office',p1:'Travel,lifestyle',p2:'03 comments',
        p:'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
        icon:<BsPerson/>,icon2:<GoComment/> 
      }
    ]
  return (
    <div className='w-full h-auto flex justify-center'>
        <div className='w-10/12 h-screen flex relative'>
          <div>
          {data.map((val,i)=>{
            return <div key={i} className='w-4/6 h-screen relative my-20'>
              <div className='w-full h-3/5  bg-center bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)]'></div>
              <div className='absolute left-10 top-[396px] py-6 px-9  bg-hov text-center font-bold text-base text-white font-poping tracking-wider'>
                <div>{val.date}</div>
                <div>{val.month}</div>
              </div>
              <div className='w-full h-2/5 pl-9 pr-20 pt-20'>
                <div className='text-xl text-popular font-poping tracking-widest font-extrabold'>{val.h1}</div>
                <div className='text-base text-gray-500 font-poping font-normal tracking-widest1'>{val.p}</div>            
                <div className='mt-6 flex items-center font-poping font-semibold text-sm tracking-wide '>
                  <div className='flex '>
                  <div className='text-xl mr-1'>{val.icon}</div>
                  <div className=''>{val.p1}</div>
                  </div >
                  <div className='text-2xl font-semibold'><RxDividerVertical/></div>
                  <div className='flex items-center'>
                  <div className='text-xl mr-1'>{val.icon2}</div>
                  <div>{val.p2}</div>
                  </div>
                </div>
              </div>              
            </div>
          })}
          </div>
            <div className='w-2/6 bg-blue-400'>
            dfd
            </div>
        </div>

    </div>
  )
}

export default GoogleImg

