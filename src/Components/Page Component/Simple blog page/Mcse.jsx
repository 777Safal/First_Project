import React from 'react'

function Mcse() {
    const data=[
        {p1:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower'},
        {p1:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually '},
        {p:' MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.'},
        {p1:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower'},
        {p1:' MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually '},
    ]
    const recent=[
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
        {name:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ,date:'January 12,2019'},
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12 flex'>
            {/* left side */}
            <div className='w-4/6 text-mcse text-sm font-poping tracking-widest1 text-left'>
                {data.map((val,i)=>{
                    if(val.p){
                        return <div key={i} className='mb-5 px-10 py-12 bg-gray-100'>
                            <div className='border-l-4 px-7 py-8 bg-white border-black'>{val.p}</div>
                        </div>}
                    else{
                        return <div key={i} className='mb-5'>
                            <div>{val.p1}</div>
                        </div>
                    }
                })}
            </div>
            {/* rigth side */}
            <div className='w-2/6 pl-16 pt-28'>
                <div className='bg-gray-100 py-3 pl-8'>
                    <div className='mb-7 text-maincolor text-lg font-poping font-semibold tracking-wide'>Recent Post</div>
                {recent.map((val,i)=>{
                    return <div key={i} className='flex items-center mb-8'>
                        <div className='w-20 h-20 '><img src={val.name} className='bg-cover bg-center w-full h-full'/>
                        </div>
                        <div>{val.date}</div>
                    </div>
                })}
                </div>

            </div>
        </div>

    </div>
  )
}

export default Mcse