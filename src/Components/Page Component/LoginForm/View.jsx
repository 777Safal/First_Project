import React,{useState} from 'react'
import Login from './Login'
import axios from 'axios'

function View() {
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
    const getdata=()=>{
        try {
            axios.get('http://192.168.1.147:4003/studentinfo/').then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        } catch (error) {
            console.log(error)
        }
    }
    const [getting,setgetting]=useState('getdata')

  return (
    <div>
       <div>
            <table>
            <tr>
                {headings.map((val,i)=>{
                    return <th key={i} className='px-3 py-1 border-2 border-black'>{val.h1}</th>
                })}    
            </tr>

            
        </table>   
        </div>
    </div>
  )
}

export default View