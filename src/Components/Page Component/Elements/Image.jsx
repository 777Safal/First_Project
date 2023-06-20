import React from 'react'

function Image() {
    const img=[
        {name:'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
        {name:'https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=411&q=80'},
        {name:'https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'},
        {name:'https://ignitemedia994971303.files.wordpress.com/2020/08/autumn-studio-zv3ckjkftc4-unsplash.jpg?w=1200'},
        {name:'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
        {name:'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
        {name:'https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=411&q=80'},
        {name:'https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'},
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-9/12'>
          <div className='w-full flex  bg-red-400'>
            {img.map((val,i)=>{
              if((i<3)||(i>4)){
                return <div key={i} className='w-2/6 bg-white'>
                  <div className='w-full h-36 bg-white ' style={{
                  backgroundImage:`url(${val.name})`,
                  backgroundsize:'cover',
                  backgroundPosition:'center'
                }}></div>
                   </div>}
                else{
                  return <div key={i} className='w-2/4 h- 36' style={{
                    backgroundImage:`url(${val.name})`,
                    backgroundsize:'cover',
                    backgroundPosition:'center'
                  }}></div>
                }
              })  
            }
          </div>
        </div>
    </div>
  )
}

export default Image