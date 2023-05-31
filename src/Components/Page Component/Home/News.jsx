import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {FaCommentAlt} from 'react-icons/fa'
import {RxDividerVertical} from 'react-icons/rx'

function News() {
    const recent=[
        {h1:'Recent News',
         p:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
    ]
    const jjj=[
        {name:'https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
         p:'Those Other College Expenses You Aren’t Thinking About',
         h1:'Group study',
         date:'21 NOV 2020',
         cmt:'10 comments',
         color:'bg-scholarship1'
    },
        {name:'https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
         p:'Those Other College Expenses You Aren’t Thinking About',
         h1:'Hall life',
         date:'21 NOV 2020',
         cmt:'10 comments',
         color:'bg-hov'
    }
    ]
  return (
    <div className='w-full'>
        <div className='flex justify-center'>
            <div className='w-3/5'>
            <div className='mb-3 text-center text-6xl font-aaaa font-normal -tracking-tighter'>{recent[0].h1}</div>
            <div className='text-center text-xl font-bbbb mx-16'>{recent[0].p}</div>
            </div>
        </div>
        <div className='w-full h-full flex justify-center mt-10'>
            <div className='w-10/12 flex justify-between'>
                {jjj.map((val,i)=>{
                    return <div key={i} className=' '>
                        <div className='w-[580px] h-[450px] relative'>
                        <div className='relative w-[560px] h-[430px]' style={{
                            backgroundImage:`url(${val.name})`,
                            backgroundSize:'100% 100%',
                            backgroundRepeat:'no-repeat'
                        }}>
                            <div className={`${val.color} w-44 h-10 text-white text-xs font-poping font-semibold tracking-widest flex justify-center items-center absolute bottom-0 left-0`}>{val.h1}</div>
                        </div>
                        <div className='font-aaaa w-[450px] mt-5 text-center text-lg tracking-wider'>{val.p}</div>
                        <div className='w-[530px] mt-5 flex justify-center text-gray-500 font-poping text-sm'>
                            <div className='flex  justify-center items-center'>
                                <div className='flex items-end border-gray-400'><RxCalendar className='text-2xl mr-1'/>{val.date}</div>
                                <div className='text-3xl mx-4'><RxDividerVertical/></div>
                                <div className='flex items-end'><FaCommentAlt className='text-2xl mr-1'/>{val.cmt}</div>
                            </div>
                        </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default News