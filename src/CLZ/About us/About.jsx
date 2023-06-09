import React from 'react'
import Aos from 'aos'
import {IoMdFootball} from 'react-icons/io'

function About() {
    const headings=[
        {h1:'About us'},
        {h1:'Monalisa Futsal'},
        {h1:'Our Facilities'},
        {h1:'Exceptional Customer Service'},
        {h1:'Community Engagement'},
    ]
    const slogan=[
      {p:'Join us at MonaLisa Futsal Booking and embark on an exciting futsal journey. Whether you are looking to improve your skills, have a friendly match with friends, or simply enjoy the thrill of the game, we are here to make it happen. Experience futsal like never before–book your court today!'}
    ]
    const para=[
        {p:'At MonaLisa Futsal Arena, we offer a top-notch futsal experience for all ages and skill levels. Our state-of-the-art facility revolutionizes futsal booking, bringing enthusiasts together for hassle-free court reservations. Since 2021, we have become a trusted name in the futsal community with a strong reputation for excellence.Our journey began with a simple goal: to create a platform that brings together futsal lovers from all walks of life and provides them with a convenient and hassle-free way to reserve futsal courts.'},
        {p:'Our well-maintained courts ensurs a smooth and fast-paced game for players of all levels and age. But it is not just about the players – we also prioritize the comfort of our spectators. We provide dedicated seating areas for viewers to enjoy the matches and cheer on their favorite teams. Additionally, our covered courts allow for play in any weather condition, so you can focus on the game without worrying about rain or sun. Your safety is our utmost concern,'},
        {p:'We believe that great experiences are built on a foundation of outstanding customer service. Our friendly and knowledgeable staff is always ready to assist you, from helping you find the perfect time slot to addressing any queries or concerns you may have. We strive to create a warm and welcoming atmosphere, where every player feels valued and appreciated.'},
        {p:'At MonaLisa Futsal Booking, we are committed to fostering a strong futsal community. We organize regular tournaments, leagues, and special events, giving players the opportunity to showcase their skills and connect with fellow enthusiasts. We believe in the power of futsal to bring people together, and we actively support local initiatives and charities to give back to the community we serve.'}
    ]
  return (
    <div id="about" className='mb-10'>
        <div className='bg-cover bg-no-repeat w-full h-60 bg-bottom flex items-center 
        justify-center
        bg-[url(https://static.africa-press.net/cape-verde/sites/66/2023/05/postQueueImg_1684141131.67.jpg)]'
         data-aos="fade-right" data-aos-once="true"  >
            <div className='pb-2 text-5xl text-yellow-300 font-poping font-extrabold
            border-b-4 border-red-600'>{headings[0].h1}</div>
        </div>
        <div className='flex flex-col mt-10 font-poping headings[]:animate-pulse'>
            <div className='flex justify-start my-10'>
            <div className='max-w-[85ch] ml-24 p-2 text-left flex flex-col border-b-4 border-l-8 
            border-yellow-300' data-aos="fade-down-right" data-aos-once="true" data-aos-duration="900">
             <div className='text-3xl font-bold leading-6 text-yellow-300 
                 animate-pulse '>{headings[1].h1}</div>  
                <div className='text-sm font-normal text-zinc-700'>
                    <p>{para[0].p}</p>
                  </div>
              </div>
            </div>    
            <div className='flex justify-end my-10'>
            <div className='max-w-[85ch] mr-24 p-2 text-right flex flex-col border-r-8 border-b-4
             border-yellow-300' data-aos="fade-down-left" data-aos-once="true" data-aos-duration="900">
                <div className='text-3xl font-bold leading-6 text-yellow-300 animate-pulse'>{headings[2].h1}</div>  
                <div className='text-sm font-normal text-zinc-700'>
                      <p>{para[1].p}</p>
                    </div>
                </div>
            </div>  
            <div className='flex justify-start my-10'>
                <div className='max-w-[85ch] ml-24 p-2 text-left flex flex-col border-b-4 border-l-8 
            border-yellow-300'  data-aos="fade-down-right" data-aos-once="true" data-aos-duration="900">
                  <div className='text-3xl font-bold leading-6 text-yellow-300 animate-pulse'>{headings[3].h1}</div>  
                  <div className='text-sm font-normal text-zinc-700'>
                      <p>{para[2].p}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
              <div className='max-w-[85ch] mr-24 p-2 text-right flex flex-col border-r-8 border-b-4
             border-yellow-300'  data-aos="fade-down-left" data-aos-once="true" data-aos-duration="900">
                <div className='text-3xl font-bold  leading-6 text-yellow-300 animate-pulse'>{headings[4].h1}</div>  
                <div className='text-sm font-normal text-zinc-700'>
                  <p>{para[3].p}</p>
                </div>
              </div>
            </div>
        </div>
        <div className='flex justify-center font-poping text-zinc-700 text-center'>
            <div className='max-w-[105ch]'>
              {slogan[0].p}
            </div>
          </div>
    </div>
  )
}

export default About