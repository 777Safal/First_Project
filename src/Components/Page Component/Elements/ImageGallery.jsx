import React from 'react'
import Radio from '../../Resources/Icons/Radio'

function ImageGallery() {
    const data=[
        {h1:'Image Gallery',
         h2:'Unordered list',
         h3:'Ordered list',}
    ]
    const imggallery=[
        {
         h1:'This is header 01',
         h2:'This is header 01',
         h3:'This is header 01',
         h4:'This is header 01',
         h5:'This is header 01',
         h6:'This is header 01',}
    ]
    const unordered=[
        {h1:'Fta Keys'},
        {h1:'For Women Only Your Computer Usage '},
        {h1:'Addiction When Gambling Becomes '},
        {h1:'Fta Keys'},
        {h1:'Fta Keys'},
        {h1:'Fta Keys'},
        {h1:'Fta Keys'},
        {h1:'Fta Keys'},
    ]
    const ordered=[
        {nu:'01', h1:'Fta Keys'},
        {nu:'02', h1:'Fta Keys'},
        {nu:'03', h1:'Fta Keys'},
        {nu:'04', h1:'Fta Keys'},
        {nu:'05', h1:'Fta Keys'},
        {nu:'06', h1:'Fta Keys'},
        {nu:'07', h1:'Fta Keys'},
    ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12 pr-60 flex justify-between font-poping'>
            {/* heading block */}
        <div>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold'>{data[0].h1}</div>
            <div className='text-prev tracking-widest mt-4'>
                <div className='text-2xl'>{imggallery[0].h1}</div>
                <div className='text-xl'>{imggallery[0].h2}</div>
                <div className='text-lg'>{imggallery[0].h3}</div>
                <div className='text-base'>{imggallery[0].h4}</div>
                <div className='text-sm'>{imggallery[0].h5}</div>
                <div className='text-xs'>{imggallery[0].h6}</div>
            </div>
        </div>
        {/* unorderd list block */}
        <div>
        <div className='text-xl mb-4 text-maincolor font-poping tracking-widest font-bold'>{data[0].h2}</div>
            <div>
            <ul className='list-none pl-5'>
                {unordered.map((val,i)=>{
                    return <li key={i} className='text-base font-normal mb-2'>
                         {val.h1}
                    </li>
                })}
            </ul>
            </div>
        </div>
        {/* orderd list block */}
        <div>
        <div className='text-xl mb-4 text-maincolor font-poping tracking-widest font-bold'>{data[0].h3}</div>
            <div>
            <ol className='list-none'>
                {ordered.map((val,i)=>{
                    return <li key={i} className='mb-2 text-prev text-base font-medium'>
                        <div className='flex'>
                            <div className='mr-2 text-primary'>{val.nu}</div>
                            <div>{val.h1}</div>
                        </div>
                    </li>
                })}
            </ol>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ImageGallery