import React from 'react'

function About() {
    const headings=[
        {h1:'About us'}
    ]
    const para=[
        {p:'At MonaLisa Futsal Arena, we are passionate about providing a top-notch futsal experience for enthusiasts of all ages and skill levels. Our state-of-the-art facility is designed to meet the needs of futsal players and create an environment where everyone can enjoy the beautiful game.'},
    ]
  return (
    <div className='w-full'>
        <div className='bg-cover bg-no-repeat w-full h-60 bg-bottom 
        flex items-center justify-center
        bg-[url(https://static.africa-press.net/cape-verde/sites/66/2023/05/postQueueImg_1684141131.67.jpg)]'>
            <div className='font-poping text-4xl font-semibold text-yellow-300
            border-b-4 border-red-600'>{headings[0].h1}</div>
        </div>
        <div className='w-full relative bg-black'>
                <div className='w-[360px] h-[500px]  absolute top-10 left-44
                 bg-[url(https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/334204900_506759671611621_3679133129431003654_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=shXjcviln2MAX-vsopT&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCb9OsWeD40UipYcenzSAVweYv-LHULbZGwtl1J_zXrjA&oe=64A5FAB6)] 
                 bg-cover bg-no-repeat bg-center'>
                 </div>
                 <div className='w-[670px] h-[500px] flex flex-col justify-center px4 py-2 absolute top-10 right-20'>
                    <div className='mb-3 text-3xl font-poping font-bold text-yellow-300'> 
                    Who  we are <span className='text-red-600 animate-pulse'>?</span></div>
                    <div className='font-poping text-left font-medium tracking-wide
                    text-zinc-700'>{para[0].p}</div>
                 </div>
                <div className='w-[360px] h-[500px] absolute top-[600px] right-20
                  bg-cover bg-no-repeat bg-center
                 bg-[url(https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/319795753_729166351465028_8175149592448094006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=r_IFm6S8FGUAX96Ul_A&_nc_ht=scontent.fktm9-2.fna&oh=00_AfBJZF50ZFB8njWYvJrapev4NqWC5l5L6PFM7ETBZ6aEtw&oe=64A5CF6F)]'>
                 </div>
        </div>
    </div>
  )
}

export default About