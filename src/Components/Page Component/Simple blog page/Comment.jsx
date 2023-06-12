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
  return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12'>
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
                    return <div key={i} className='flex mt-10'>
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
        </div>
    </div>
  )
}

export default Comment