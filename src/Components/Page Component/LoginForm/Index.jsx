import React,{useState} from 'react'
import Login from './Login'
import View from './View'

function Index() {
    const [action,setaction]=useState('add')
    const headings=[
        {h1:'Name'},
        {h1:'Gender'},
        {h1:'Address'},
        {h1:'Contact no.'},
        {h1:'Guardian name'},
        {h1:'Guardian no.'},
        {h1:'School Name'},
        {h1:'Category Name'},
    ]
    
  return (
    <div className='mb-10 flex flex-col items-center'>
        {
            action==='add'?<Login />: <View />
            
        }
        
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