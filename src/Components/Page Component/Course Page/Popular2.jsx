import React from 'react'

function Popular2() {
    const popprgrm=[{name:'Popular program'}]
    const graduate=[
        {name:'Graduate'},
        {name:'Postgraduate'},
        {name:'PHD Scholarship'},
        {name:'Training'},]
        const descript=[
            {name:'https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
             naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
            {name:'https://images.unsplash.com/photo-1494607239400-ff147da48308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80',
             naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
            {name:'https://images.unsplash.com/photo-1615212049275-95561aebe1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
             naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
            {name:'https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
             naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
            {name:'https://images.unsplash.com/photo-1494607239400-ff147da48308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80',
             naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
            {name:'https://images.unsplash.com/photo-1615212049275-95561aebe1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
             naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
        ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12 tracking-widest1'>
        <div className='w-full flex justify-center items-center text-popular text-4xl font-normal font-aaaa'>{popprgrm[0].name}</div>
        <div className='w-full flex justify-center mt-5'>
                { graduate.map((val,i)=>{
                    return <div key={i} className='text-xs font-medium rounded-sm w-36 h-10 flex justify-center items-center hover:bg-hov hover:text-white'>
                        {val.name}
                    </div>
                })}
            </div>
            <div className='mt-6 w-full flex grid grid-cols-3'> 
            {descript.map((val,i)=>{
                return <div key={i} className='w-[354px] mb-14'>
                        <div><img src={val.name} className='object-cover w-[354px] h-[266px] rounded-xl'/></div>
                        <div className='p-8'>
                            <div className='text-xs font-medium tracking-widest1 mb-1 font-bbbb'>{val.naem1}</div>
                            <div className='text-lg mb-1 font-normal tracking-widest1 font-aaaa '>{val.h1}</div>
                            <div className='text-xs  font-medium w-[214px] tracking-widest1 font-bbbb text-linecolor font-bbbb'>{val.p}</div>
                            <div className='mt-10'><button className='rounded-[4px] text-center text-xs font-extrabold text-white bg-hov w-[114px] h-[25px]'>Apply Now</button></div>
                        </div>
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Popular2