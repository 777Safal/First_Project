import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

function Comment() {
    const post=[
        {h1:'Prev Post',h2:'Space The Final Frontier'},
        {h1:'Next Post',h2:'Telescope 101'},
        {p:'Lily and 4 people like this '},
        {h1:'Harvard Milan',p:' Second divided from form fish beast made. Every of seas all gathered use saying you are, he our dominion twon Second divided from '},
        {h1:'05 Comments'}
    ]
    const cmt=[
        {p:'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
         h1:'Emily blunt',h2:'December 4, 2017 at 3:12 pm',h3:'Reply'},
        {p:'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
         h1:'Emily blunt',h2:'December 4, 2017 at 3:12 pm',h3:'Reply'},
        {p:'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
         h1:'Emily blunt',h2:'December 4, 2017 at 3:12 pm',h3:'Reply'},
        
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
        <div className='w-10/12 flex'>
            {/* left side*/}
            <div className='w-4/6 '>
                {/* lily */}
                <div className='w-full flex font-poping border-y-4 px-4 py-5'>
                    <div className='w-2/4'>
                        <div className='text-sm text-mcse flex'><AiFillHeart className='mr-2'/>{post[2].p}</div>
                        <div className='flex items-center mt-5'>
                            <div className='w-14 h-14 bg-cover mr-2 bg-center bg-[url(https://images.unsplash.com/photo-1495846101638-bd8e9a23f8ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)]'></div>
                            <div >
                                <div className='text-left text-sm text-prev'>{post[0].h1}</div>
                                <div className='text-base text-space'>{post[0].h2}</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/4 flex justify-end '>
                        <div>
                        <div className='flex text-prev justify-center'>
                            <div className='mr-2'><AiOutlineGoogle/></div>
                            <div className='mr-2'><GrFacebookOption/></div>
                            <div className='mr-2'><AiOutlineInstagram/></div>
                            <div><AiOutlineTwitter/></div>
                        </div>
                            <div className='flex items-center justify-end mt-5'>
                                <div >
                                    <div className='text-right text-sm text-prev'>{post[1].h1}</div>
                                    <div className='text-base text-space'>{post[1].h2}</div>
                                </div>
                                <div className='w-14 h-14 bg-cover ml-2 bg-center bg-[url(https://images.unsplash.com/photo-1495846101638-bd8e9a23f8ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)]'></div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* harvard section */}
                <div className='mt-8 border-b-4 pb-12'>
                    <div className='flex items-center bg-gray-100 px-10 py-12'>
                        <div>
                        <div className='w-20 h-20 mr-5 bg-cover rounded-full bg-center bg-[url(https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)]'></div>
                        </div>
                        <div className='text-sm font-poping tracking-widest ml-2'>
                            <div className='text-space font-medium'>{post[3].h1}</div>
                            <div className='text-prev'>{post[3].p}</div>
                        </div>
                    </div> 
                </div>
                {/* comment section */}
                <div className='font-poping py-10 border-b-4'>
                 <div className='text-maincolor text-base font-medium'>{post[4].h1}</div>
                 {cmt.map((val,i)=>{
                    return <div key={i} className='flex my-10'>
                            <div>
                                <div className='w-16 h-16 bg-cover rounded-full bg-center bg-[url(https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_683/https://www.cliniciansofcolor.org/wp-content/uploads/2021/06/nico-marks-25gAg2MOXxQ-unsplash-683x1024.jpg)]'></div>
                            </div>
                            <div className='ml-4 text-sm text-gray-500 font-poping tracking-widest '>
                                <div className=''>{val.p}</div>
                                <div className='flex relative'>
                                    <div className='text-gray-600 mr-10 font-semibold'>{val.h1}</div>
                                    <div>{val.h2}</div>
                                    <div className='absolute right-0'>{val.h3}</div>
                                </div>
                            </div>
                    </div>
                 })}
                </div>
            </div>
            {/* right side */}
            <div className='w-2/6  pl-16'>
                {/* tag clouds */}
                <div className='bg-gray-100  mt-8 py-3 pl-8'>
                    <div className='mb-11 text-maincolor text-lg font-poping font-semibold tracking-wide'>Tag clouds</div>
                    <div className='w-full mb-2 flex flex-wrap'>
                        {tag.map((val,i)=>{
                            return <div key={i}  className='px-5 py-2 text-xs font-poping bg-gray-300 mr-2 mb-2'>
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
                <div className='bg-gray-100  mt-16 pt-4 pb-8 '>
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

export default Comment