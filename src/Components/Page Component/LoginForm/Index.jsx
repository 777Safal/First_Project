import React,{useState} from 'react'
import Login from './Login'
import View from './View'

function Index() {
    const [action,setaction]=useState('add')
    
  return (
    <div className='mb-10 flex flex-col items-center'>
        {
            action==='add'?<Login />: <View />
            
        }
        {/* edit delete update */}
        <div className='w-8/12  flex justify-between'>
            <div><button onClick={()=>setaction('add')} 
            className='w-40 py-5 bg-scholarship2 text-white rounded-md'>Add</button></div>
            <div><button onClick={()=>setaction('view')} 
            className='w-40 py-5 bg-scholarship2 text-white rounded-md'>view</button></div>
        </div>
    </div>
  )
}

export default Index