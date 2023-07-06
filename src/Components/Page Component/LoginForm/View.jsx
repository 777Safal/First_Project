import React,{useEffect, useState} from 'react'
import Login from './Login'
import axios from 'axios'
import Delete from './Delete'

function View() {
    const [action,setaction]=useState('add')
    const [studentinfo,setstudentinfo]=useState([])

    const headings=[
        {h1:'Name'},
        {h1:'Gender'},
        {h1:'Address'},
        {h1:'Contact no.'},
        {h1:'Guardian name'},
        // {h1:'Guardian no.'},
        // {h1:'School Name'},
        // {h1:'Category Name'},
        // {h1:'Course'},
        // {h1:'Date'},
        // {h1:'Level Of Education'},
        // {h1:'Shift'},
        // {h1:'Source Of Information'},
        // {h1:'Stage'},
        // {h1:'Discount'},
        // {h1:'Email'},
        // {h1:'Referal contact no'},
        // {h1:'refered_by'},
        // {h1:'school Course Taken'},
        {h1:'Action'}
    ]
    const getdata=()=>{
        try {
            axios.get('http://192.168.1.147:4003/studentinfo/').then(res=>{console.log(res)
        setstudentinfo([...res.data.Brand])

        }).catch(err=>{console.log(err)})
        } catch (error) {
            console.log(error)
        }
    }
 
    useEffect(() => {
      getdata()
    
      
    }, [])
    

  return (
    <div>
       <div>
            <table>
            <tr>
                {headings.map((val,i)=>{
                    return <th key={i} className='px-3 py-1 text-sm border-2 border-black'>{val.h1}</th>
                })}    
            </tr>
            <tbody>
                {studentinfo.map((val,i)=>{
                    return (<tr>
                        <td className='border-2 border-black'>{val.name}</td>
                        <td className='border-2 border-black'>{val.Gender}</td>
                        <td className='border-2 border-black'>{val.address}</td>
                        <td className='border-2 border-black'>{val.contact_no}</td>
                        <td className='border-2 border-black'>{val.gurdain_name}</td>
                        {/* <td className='border-2 border-black'>{val.gurdain_no}</td>
                        <td className='border-2 border-black'>{val.schoolName}</td>
                        <td className='border-2 border-black'>{val.Category_name}</td>
                        <td className='border-2 border-black'>{val.Course}</td>
                        <td className='border-2 border-black'>{val.Date}</td>
                        <td className='border-2 border-black'>{val.Level_Of_Education}</td>
                        <td className='border-2 border-black'>{val.Shift}</td>
                        <td className='border-2 border-black'>{val.SourceOfInformation}</td>
                        <td className='border-2 border-black'>{val.Stage}</td>
                        <td className='border-2 border-black'>{val.Shift}</td>
                        <td className='border-2 border-black'>{val.discount}</td>
                        <td className='border-2 border-black'>{val.email}</td>
                        <td className='border-2 border-black'>{val.referal_contact_no}</td>
                        <td className='border-2 border-black'>{val.refered_by}</td>
                        <td className='border-2 border-black'>{val.schoolCourseTaken}</td> */}
                        <td className='border-2 border-black'>
                            <div><Delete/>Delete</div>
                        </td>

                    </tr>)
                })}
            </tbody>

            
        </table>   
        </div>
    </div>
  )
}

export default View