import React from 'react'
import {BsClock} from 'react-icons/bs'
import {RxCalendar} from 'react-icons/rx'
import {VscLocation} from 'react-icons/vsc'

function Howtospeak() {
  const data=[
    {h1:'How to speake like a nativespeaker?',
     p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue nibh, at ullamcorper orci ullamcorper ut. Integer vehicula iaculis risus, non consequat eros tincidunt ac. Morbi a aliquam tortor. Nam convallis vestibulum nisi, sit amet fermentum libero scelerisque id. Integer iaculis mollis justo, sed interdum ligula auctor in. Donec a vehicula nisi. Fusce quis mollis sem. Nam velit dolor, ultricies non mollis vel, sagittis sed leo. Morbi lorem justo, porta eu odio a, tincidunt pretium dui. In ac fringilla arcu.',
     h2:'BOOK A SEAT ',date:'02',mnth:'Dec, 2020'},
  ]
  const time=[
    {h1:'10:30',icon:<BsClock/>},
    {h1:'21 NOV 2020',icon:<RxCalendar/>},
    {h1:'AD gughdh',icon:<VscLocation/>},
  ]
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-10/12 h-3/4 flex'>
            <div className='w-1/3 h-full relative bg-cover bg-no-repeat bg-center bg-[url(https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=419&q=80)]'> 
              <div className='bg-hov absolute bottom-0 left-0 w-fit h-fit px-6 py-4 font-aaaa text-white'>
                <div className='text-center text-5xl'>{data[0].date}</div>
                <div className='text-center font-light'>{data[0].mnth}</div>
              </div>
            </div>
            <div className='w-2/3 pl-12 text-gray-500'>
                <div>
                  <div className='text-black text-3xl font-aaaa tracking-widest'>{data[0].h1}</div>
                  <div className='flex font-aaaa'>
                  {time.map((val,i)=>{
                      return <div key={i} className='flex'>
                        <div>{val.icon}</div>
                        <div>{val.h1}</div>
                      </div>
                    })}
                  </div>
                </div>
                <div className='w-[500px] bg-red-300 text-lg tracking-wider text-left font-bbbb font-medium'>{data[0].p}</div>
                <div><button className=''>{data[0].h2}</button></div>
            </div>

        </div>

    </div>
  )
}

export default Howtospeak