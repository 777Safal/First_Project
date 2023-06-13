import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'

function Table() {
    const headings=[
      {h1:'#'},{h1:'COUNTRIES'},{h1:'VISIT'},{h1:'PERCENTAGES'}
    ]
    const data=[
      {h1:'01',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'02',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'03',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'04',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'05',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'06',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'07',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
      {h1:'08',h2:'America',num:'63738',icon:<AiOutlineMinus/>,
      name:'https://images.unsplash.com/photo-1562884328-39da45501a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    },
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-9/12 pr-80'>
              <div className='text-xl text-maincolor font-poping tracking-widest font-bold'>Table</div>
              <div className='bg-gray-100 px-2 py-3 font-poping text-base font-medium tracking-wide'>
                <div className='flex grid  grid-cols-4 text-maincolor font-semibold'>
                  {headings.map((val,i)=>{
                    return <div key={i} className=''>{val.h1}</div>
                  })}
                </div>
                <div className=''>
                  {data.map((val,i)=>{
                    return <div key={i} className= ' mt-7 flex items-center grid grid-cols-4'>
                      <div >{val.h1}</div>
                      <div className='flex items-center'>
                        <div  className='w-12 h-10 mr-2' style={{
                          backgroundImage: `url(${val.name})`,
                          backgroundPosition:'center',
                          backgroundSize:'cover',
                        }}></div>
                        <div>{val.h2}</div>
                        </div>
                       <div>{val.num}</div> 
                       <div className='flex items-center text-red-500'>{val.icon}</div> 
                    </div>
                  })}
                </div>
              </div>
        </div>
    </div>
  )
}

export default Table