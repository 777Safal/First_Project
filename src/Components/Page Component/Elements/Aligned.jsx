import React from 'react'

function Aligned() {
    const data=[
        {
            h1:'Left Aligned',
            p:'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.',
            name:'https://images.unsplash.com/photo-1600493504591-aa1849716b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
        },
        {
            h1:'Right Aligned',
            p:'Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs.',
            p1:' Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms. ',
            name:'https://images.unsplash.com/photo-1600493504591-aa1849716b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
        }
    ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12'>
            <div className='w-full pb-12'>
                <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-2'>{data[0].h1}</div>
                <div className='w-full flex'>
                    <div className='w-1/5 h-44'><img src={data[0].name} className='w-full h-full'/></div>
                    <div className='w-4/5 pl-9 text-base tracking-wide font-poping font-normal text-gray-500'>{data[0].p}</div>
                </div>
            </div>
            <div className='w-full border-t-2 pt-10'>
                <div className='text-right text-xl text-maincolor font-poping tracking-widest font-bold mb-2'>{data[1].h1}</div>
                <div className='w-full flex relative'>
                    <div className='w-1/5 h-44 absolute right-0'><img src={data[1].name} className='w-full h-full'/></div>
                    <div className='font-normal text-gray-500'>
                    <div className='w-4/5 pr-9 text-base tracking-wide font-poping mb-3'>{data[1].p}</div>
                    <div className='w-4/5 pr-9 text-base tracking-wide font-poping'>{data[1].p1}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aligned