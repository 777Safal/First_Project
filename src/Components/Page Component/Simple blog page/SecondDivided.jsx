import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {GoComment} from 'react-icons/go'
import {RiSearchLine} from 'react-icons/ri'

function SecondDivided() {
    const imgg=[
        {name:'https://ppw.kuleuven.be/praxisp/images/jeswin-thomas-guLAk5gqj-Y-unsplash%20-1.jpg/image'
        ,h1:'Second divided from form fish beast made every of seas all gathered us saying he our',p1:'Travel, lifestyle',p2:'03 comments',
        icon:<BsPerson/>,icon2:<GoComment/>,h2:'Category',
    }
    ]
    const catg=[
        {h1:'Restaurant'},
        {h1:'Food'},
        {h1:'Technology'},
        {h1:'Items'},
        {h1:'Clothing'},
        {h1:'Bars'},
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12 flex mt-10'>
            {/* left part */}
            <div className='w-4/6 h-fit'>
                <div className='w-full h-[460px]'>
                    <img src={imgg[0].name} className='bg-cover bg-center w-full h-full'/>
                </div>
                <div className='mt-5 text-2xl font-poping font-black text-second tracking-wider'>
                    {imgg[0].h1}
                </div>
                <div className='mt-2 flex items-center font-poping font-semibold text-sm tracking-wide  '>
                   <div className='flex '>
                   <div className='text-xl mr-1'>{imgg[0].icon}</div>
                   <div className=''>{imgg[0].p1}</div>
                   </div >
                   <div className='flex items-center ml-10'>
                   <div className='text-xl mr-1'>{imgg[0].icon2}</div>
                   <div>{imgg[0].p2}</div>
                   </div>
                 </div>
            </div>
            {/* Right part */}
            <div className='w-2/6 h-screen pl-16 bg-green-300'>
                <div className='pr-8 mb-24'>
                    <div className='relative flex justify-center items-center mb-2'><input type='text' placeholder='Search keywords' className='w-full py-3 pl-2 font-poping text-lg outline-none border'/>
                    <div className='absolute  text-2xl font-normal text-gray-500  right-0 pr-2'><RiSearchLine/></div>
                    </div>
                    <div><button className='w-full py-3 text-xl font-semibold font-poping tracking-wide text-hov hover:text-white hover:bg-hov outline-none  border-2 border-hov'>SEARCH</button></div>
                </div>
                <div className='bg-gray-100 py-3 pl-8'>
                    <div className='text-maincolor text-lg font-poping font-semibold tracking-wide'>{imgg[0].h2}</div>
                    {catg.map((val,i)=>{
                        return <div key={i} className='mt-7 text-gray-500 text-sm  font-normal font-poping tracking-wide'>
                            {val.h1     }
                            </div>
                    })}
                </div>
            </div>

        </div>
    </div>
  )
}

export default SecondDivided