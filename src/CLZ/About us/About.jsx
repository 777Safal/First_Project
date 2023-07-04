import React from 'react'
import Aos from 'aos'

function About() {
    const headings=[
        {h1:'About us'},
        {h1:'Monalisa Futsal'}
    ]
    const slogan=[
      {p:'Join us at MonaLisa Futsal Booking and embark on an exciting futsal journey. Whether you are looking to improve your skills, have a friendly match with friends, or simply enjoy the thrill of the game, we are here to make it happen. Experience futsal like never before–book your court today!'}
    ]
    const para=[
        {p:'MonaLisa Futsal Arena, we are passionate about providing a top-notch futsal experience for enthusiasts of all ages and skill levels. Our state-of-the-art facility is designed to meet the needs of futsal players and create an environment where everyone can enjoy the beautiful game.'},
        {p:'At MonaLisa Futsal Booking, we are passionate about providing you with the ultimate futsal experience. Whether you are an amateur player or a seasoned pro, our state-of-the-art futsal facilities and exceptional customer service are here to ensure your time with us is enjoyable and memorable.'},
        {p:'Founded in 2021, MonaLisa Futsal Booking has been a pioneer in revolutionizing the way futsal enthusiasts book and play their favorite sport. Our journey began with a simple goal: to create a platform that brings together futsal lovers from all walks of life and provides them with a convenient and hassle-free way to reserve futsal courts. Over the years, we have grown into a trusted name in the futsal community, with numerous happy customers and a strong reputation for excellence.'},
        {p:'Our well-maintained courts ensurs a smooth and fast-paced game for players of all levels and age. But it is not just about the players – we also prioritize the comfort of our spectators. We provide dedicated seating areas for viewers to enjoy the matches and cheer on their favorite teams. Additionally, our covered courts allow for play in any weather condition, so you can focus on the game without worrying about rain or sun. Your safety is our utmost concern,'},
        {p:'We believe that great experiences are built on a foundation of outstanding customer service. Our friendly and knowledgeable staff is always ready to assist you, from helping you find the perfect time slot to addressing any queries or concerns you may have. We strive to create a warm and welcoming atmosphere, where every player feels valued and appreciated.'},
        {p:'At MonaLisa Futsal Booking, we are committed to fostering a strong futsal community. We organize regular tournaments, leagues, and special events, giving players the opportunity to showcase their skills and connect with fellow enthusiasts. We believe in the power of futsal to bring people together, and we actively support local initiatives and charities to give back to the community we serve.'}
    ]
  return (
    <div className='w-full bg-black mb-10'>
        <div className='bg-cover bg-no-repeat w-full h-60 bg-bottom flex items-center 
        justify-center relative top-0
        bg-[url(https://static.africa-press.net/cape-verde/sites/66/2023/05/postQueueImg_1684141131.67.jpg)]'
         data-aos="fade-left">
            <div className='pb-2 text-5xl text-yellow-300 font-poping font-extrabold
            border-b-4 border-red-600'>{headings[0].h1}</div>
        </div>
        <div className='w-full h-[1200px]'>
          <div className='w-full relative' >
            <div className='w-[670px] h-[500px] flex flex-col justify-center px4 py-2 absolute top-10 right-20'>
              <div className='mb-3 text-3xl font-poping font-bold text-yellow-300 animate-pulse'> 
                {headings[1].h1}</div>  
              <div className='font-poping text-left font-medium tracking-wide
                text-zinc-700'>{para[3].p}</div>
            </div>
          </div>       
        </div>
        {/* <div className='w-full relative bg-black'>
                
                 
                <div className='w-[360px] h-[500px] absolute top-[600px] right-20
                  bg-cover bg-no-repeat bg-center
                 bg-[url(https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/319795753_729166351465028_8175149592448094006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=r_IFm6S8FGUAX96Ul_A&_nc_ht=scontent.fktm9-2.fna&oh=00_AfBJZF50ZFB8njWYvJrapev4NqWC5l5L6PFM7ETBZ6aEtw&oe=64A5CF6F)]'>
                 </div> */}
                 
                 {/* <div className='w-20 h-48 bg-black grid grid-rows-4 gap-4
                 absolute top-10 right-10'>
                    <div className='bg-red-400'>1</div>
                    <div className='bg-red-400'>2</div>
                    <div className='bg-red-400'>3</div>
                    <div className='bg-red-400'>4</div>
                 </div> */}
        {/* </div> */}
    </div>
  )
}

export default About