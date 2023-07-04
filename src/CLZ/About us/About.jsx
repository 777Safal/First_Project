import React from 'react'
import Aos from 'aos'

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
        {p:'MonaLisa Futsal Arena, we are passionate about providing a top-notch futsal experience for enthusiasts of all ages and skill levels. Our state-of-the-art facility is designed to meet the needs of futsal players and create an environment where everyone can enjoy the beautiful game.'},
        {p:'Founded in 2021, MonaLisa Futsal Booking has been a pioneer in revolutionizing the way futsal enthusiasts book and play their favorite sport. Our journey began with a simple goal: to create a platform that brings together futsal lovers from all walks of life and provides them with a convenient and hassle-free way to reserve futsal courts. Over the years, we have grown into a trusted name in the futsal community, with numerous happy customers and a strong reputation for excellence.'},
        {p:'Our well-maintained courts ensurs a smooth and fast-paced game for players of all levels and age. But it is not just about the players – we also prioritize the comfort of our spectators. We provide dedicated seating areas for viewers to enjoy the matches and cheer on their favorite teams. Additionally, our covered courts allow for play in any weather condition, so you can focus on the game without worrying about rain or sun. Your safety is our utmost concern,'},
        {p:'We believe that great experiences are built on a foundation of outstanding customer service. Our friendly and knowledgeable staff is always ready to assist you, from helping you find the perfect time slot to addressing any queries or concerns you may have. We strive to create a warm and welcoming atmosphere, where every player feels valued and appreciated.'},
        {p:'At MonaLisa Futsal Booking, we are committed to fostering a strong futsal community. We organize regular tournaments, leagues, and special events, giving players the opportunity to showcase their skills and connect with fellow enthusiasts. We believe in the power of futsal to bring people together, and we actively support local initiatives and charities to give back to the community we serve.'}
    ]
  return (
    <div className='w-full mb-10'>
        <div className='bg-cover bg-no-repeat w-full h-60 bg-bottom flex items-center 
        justify-center relative top-0
        bg-[url(https://static.africa-press.net/cape-verde/sites/66/2023/05/postQueueImg_1684141131.67.jpg)]'
         data-aos="fade-left" data-aos-once="true">
            <div className='pb-2 text-5xl text-yellow-300 font-poping font-extrabold
            border-b-4 border-red-600'>{headings[0].h1}</div>
        </div>
        <div className='w-full'>
          <div className='flex' >
            <div className='max-w-[85ch] m-auto flex flex-col justify-center px4 py-2'>
              <div className='mb-3 text-3xl font-poping font-bold text-yellow-300 animate-pulse'>{headings[1].h1}</div>  
              <div className='font-poping text-sm text-center font-medium tracking-wide
                text-zinc-700'>
                  <p>{para[0].p}</p>
                  <p className='text-center'>{para[1].p}</p>
                </div>
            </div>
          </div>       
          <div className='flex'>
            <div className='max-w-[85ch] m-auto flex flex-col justify-center px4 py-2'>
                <div className='mb-3 text-3xl font-poping font-bold text-yellow-300 animate-pulse'>{headings[2].h1}</div>  
                <div className='font-poping text-sm text-center font-medium tracking-wide
                  text-zinc-700'>
                    <p>{para[2].p}</p>
                  </div>
              </div>
          </div>
          <div className='flex'>
            <div className='max-w-[85ch] m-auto flex flex-col justify-center px4 py-2'>
                <div className='mb-3 text-3xl font-poping font-bold text-yellow-300 animate-pulse'>{headings[3].h1}</div>  
                <div className='font-poping text-sm text-center font-medium tracking-wide
                  text-zinc-700'>
                    <p>{para[3].p}</p>
                  </div>
              </div>
          </div>
          <div className='flex'>
            <div className='max-w-[85ch] m-auto flex flex-col justify-center px4 py-2'>
                <div className='mb-3 text-3xl font-poping font-bold text-yellow-300 animate-pulse'>{headings[4].h1}</div>  
                <div className='font-poping text-sm text-center font-medium tracking-wide
                  text-zinc-700'>
                    <p>{para[4].p}</p>
                  </div>
              </div>
          </div>
          <div className='flex justify-center font-poping text-zinc-700 text-center'>
            <div className='max-w-[105ch]'>
              {slogan[0].p}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About