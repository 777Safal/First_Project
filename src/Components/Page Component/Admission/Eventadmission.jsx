import React from 'react'
import {BsClock} from 'react-icons/bs'
import {RxCalendar} from 'react-icons/rx'
import {VscLocation} from 'react-icons/vsc'

function Eventadmission() {
    const recent=[
        {h1:'Recent Event',p:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
    ]
    const data=[
            {date1:'02',my:'Dec 2020',color:'bg-d1'},
            {date1:'02',my:'Dec 2020',color:'bg-scholarship1'},
            {date1:'02',my:'Dec 2020',color:'bg-maincolor'},]
    const psg=[
        {h1:'How to speak like a nativespeaker?',
        time:'10:30',clndr:'21 NOV 2020', loc:'AD gughdh'},
        {h1:'How to speak like a nativespeaker?',
        time:'10:30',clndr:'21 NOV 2020', loc:'AD gughdh'},
        {h1:'How to speak like a nativespeaker?',
        time:'10:30',clndr:'21 NOV 2020', loc:'AD gughdh'}
    ]
    return (
        <div className='w-full h-screen flex justify-center'>
            <div className='w-3/5 '>
                <div className='mb-3 text-center text-6xl font-aaaa font-normal -tracking-tighter'>{recent[0].h1}</div>
                <div className='text-center text-xl font-bbbb mx-16'>{recent[0].p}</div>
                <div className='mt-12'>
                    {
                        data&&psg.map ((val,i)=>{
                            return <div key={i} className='flex items-center w-full mb-6 rounded-xl border border-gray-400 overflow-hidden'>
                                    <div className={`${data[i].color} w-1/4 h-36 text-white text-center flex justify-center items-center`}>
                                        <div>
                                            <div className='font-aaaa text-5xl tracking-widest'>{data[i].date1}</div>
                                            <div className='font-poping text-xl tracking-widest'>{data[i].my}</div>
                                        </div>
                                    </div>
                                    <div className='ml-3 pl-5'>
                                        <div className='text-2xl tracking-widest font-normal font-aaaa'>{psg[i].h1}</div>
                                        <div className='grid grid-cols-3 mt-2 ml-3 text-gray-500 font-poping text-sm tracking-wider font-light'>
                                            <div className='flex items-baseline'><BsClock className='text-xl mr-1'/>{psg[i].time}</div>
                                            <div className='flex items-baseline'><RxCalendar className='text-xl mr-1'/>{psg[i].clndr}</div>
                                            <div className=' flex items-baseline ml-12'><VscLocation className='text-2xl mr-1'/>{psg[i].loc}</div>
                                        </div>
                                    </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default Eventadmission