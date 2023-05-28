import React from 'react'
import { threeimg } from '../../Resources/Images/HomeImage'

function Popular() {
    const popprgrm=[{name:'Popular program'}]
    const graduate=[
        {name:'Graduate'},
        {name:'Postgraduate'},
        {name:'PHD Scholarship'},
        {name:'Training'},]
    const descript=[
        {naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
        {naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
        {naem1:'Agriculture', h1:'Chemical Engineering',p:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',},
    ]
    const view=[{name:'View all course'}]
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

            <div className='mt-6 w-full flex justify-between'> 
            {descript.map((val,i)=>{
                return <div key={i} className='w-[354px]'>
                        <div><img src={threeimg[i].name} className='object-cover w-[354px] h-[266px] rounded-xl'/></div>
                        <div className='p-8'>
                            <div className='text-xs font-medium tracking-widest1 mb-1'>{val.naem1}</div>
                            <div className='text-lg mb-1 font-normal tracking-widest1 font-aaaa'>{val.h1}</div>
                            <div className='text-xs  font-medium w-[214px] tracking-widest1 text-linecolor font-bbbb'>{val.p}</div>
                            <div className='mt-10'><button className='rounded-[4px] text-center text-xs font-extrabold text-white bg-hov w-[114px] h-[25px]'>Apply Now</button></div>
                        </div>
                </div>
            })}
            </div>
            <div className='flex justify-center'><button className='w-[224px] h-[64px] border border-black text-center text-xx font-bbbb'>{view[0].name}</button></div>
        </div>
    </div>
  )
}

export default Popular