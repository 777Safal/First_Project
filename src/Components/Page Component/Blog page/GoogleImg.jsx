import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {GoComment} from 'react-icons/go'
import {RxDividerVertical} from 'react-icons/rx'
import {RiSearchLine} from 'react-icons/ri'


function GoogleImg() { 
    const catg=[
        {h1:'Restaurant'},
        {h1:'Food'},
        {h1:'Technology'},
        {h1:'Items'},
        {h1:'Clothing'},
        {h1:'Bars'},
    ]

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
    const recent=[
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
    ]
    const tag=[
        {h1:'Project'},{h1:'Love'},{h1:'Technology'},{h1:'Home'},{h1:'Sport'},{h1:'Life style'},{h1:'Illustrations'},{h1:'Design'}]
    const img=[
      {name:'https://images.unsplash.com/photo-1569604402759-c8e0c98766f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwbW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
      {name:'https://images.unsplash.com/photo-1536759078151-61c8b6f156a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2UlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
      {name:'https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBzbW9reXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
      {name:'https://images.unsplash.com/photo-1526542261579-08af9f4108a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGxpZ2h0JTIwcmF5JTIwaW4lMjBkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
      {name:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'},
      {name:'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGJsYWNrJTIwd29tZW4lMjBzbWlsaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12 h-screen flex relative bg-white'>
            {/* Left side */}
            <div className='w-4/6'>
            {data.map((val,i)=>{
            return <div key={i} className='w-full h-screen relative my-20'>
              <div className='w-full h-3/5  bg-center bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)]'></div>
              <div className='absolute left-10 top-[396px] py-6 px-9  bg-hov text-center font-bold text-base text-white font-poping tracking-wider'>
                <div>{val.date}</div>
                <div>{val.month}</div>
              </div>
              <div className='w-full h-2/5 pl-9 pr-20 pt-20'>
                <div className='text-2xl text-popular font-poping tracking-widest font-extrabold'>{val.h1}</div>
                <div className='text-base mt-3 text-gray-500 font-poping font-normal tracking-widest1'>{val.p}</div>            
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
            {/* right side */}
            <div className='w-2/6 pt-16 pl-16'>
                {/* search */}
            <div className='pr-8 mb-24'>
                    <div className='relative flex justify-center items-center mb-2'><input type='text' placeholder='Search keywords' className='w-full py-3 pl-2 font-poping text-lg outline-none border'/>
                    <div className='absolute  text-2xl font-normal text-gray-500  right-0 pr-2'><RiSearchLine/></div>
                    </div>
                    <div><button className='w-full py-3 text-xl font-semibold font-poping tracking-wide text-hov hover:text-white hover:bg-hov outline-none  border-2 border-hov'>SEARCH</button></div>
                </div>
                {/* recent */}
                <div className='bg-gray-100 py-3 pl-8'>
                    <div className='text-maincolor text-lg font-poping font-semibold tracking-wide'>Category</div>
                    {catg.map((val,i)=>{
                        return <div key={i} className='mt-7 text-gray-500 text-sm  font-normal font-poping tracking-wide'>
                            {val.h1     }
                            </div>
                    })}
                </div>
                {/* food */}
                <div className='bg-gray-100 mt-32 py-3 pl-8'>
                    <div className='mb-7 text-maincolor text-lg font-poping font-semibold tracking-wide'>Recent Post</div>
                {recent.map((val,i)=>{
                    return <div key={i} className='flex items-center mb-8'>
                        <div className='w-20 h-20 '><img src={val.name} className='bg-cover bg-center w-full h-full'/>
                        </div>
                        <div>{val.date}</div>
                    </div>
                })}
                </div>
                {/* tag clouds */}
                <div className='bg-gray-100  mt-16 py-3 pl-8'>
                    <div className='mb-7 text-maincolor text-lg font-poping font-semibold tracking-wide'>Tag clouds</div>
                    <div className='w-full flex flex-wrap'>
                        {tag.map((val,i)=>{
                            return <div key={i}  className='px-4 py-2 bg-gray-300 mr-2 mb-2'>
                           {val.h1}     
                            </div>
                        })}
                    </div>
                </div>
                {/* Instagram feed */}
                <div className='bg-gray-100  mt-20 py-3 pl-8'>
                      <div className='mb-7 text-maincolor text-lg font-poping font-semibold tracking-wide'>Instagram feed</div>
                      <div className='grid grid-cols-3'>
                        {img.map((val,i)=>{
                          return <div key={i} className=''>
                            <div className='mr-2 w-20 h-20'    
                                  style={{ 
                                    backgroundImage: `url(${val.name})`,
                                     backgroundSize: 'cover'}}>
                                     </div>
                              {/* <div className={`bg-${val.name} w-20 h-20 mr-1 mb-1 bg-red-100 bg-cover`}></div> */}
                          </div>
                        })}
                      </div>
                </div>
                {/* News letter */}
                <div className='bg-gray-100  mt-16 py-3 '>
                  <div className='mb-7 pl-8 text-maincolor text-lg font-poping font-semibold tracking-wide'>News Letter</div>
                  <div className='w-full px-4'>
                    <div className='relative flex justify-center items-center mb-2'><input type='text' placeholder='Enter email' className='w-full py-3 pl-2 font-poping text-lg outline-none border'/></div>
                    <div><button className='w-full py-3 text-xl font-semibold font-poping tracking-wide text-hov hover:text-white hover:bg-hov outline-none  border-2 border-hov'>SUBSCRIBE</button></div>
                  </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default GoogleImg

