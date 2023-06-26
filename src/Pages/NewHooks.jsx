import React,{useCallback, useEffect, useMemo, useState} from 'react'
import axios from 'axios'


function NewHooks() {
    const [Student, setStudent] = useState([])
    const [StudentChange, setStudentChange] = useState(false)

    const data =useCallback(
      () => {
        axios.get('http://192.168.1.147:4003/studentinfo/').then(res=>{
            console.log(res)
            setStudent([...res.data.Brand])
        }).catch(error=>{console.log(error)})

      },
      [StudentChange],
    )

    useMemo(() => data(), [StudentChange])
  
 
  return (
    <div>
        <button onClick={()=>{
            setStudentChange(prev=>!prev)
        }}>RE call</button>
        <table className='border-2 border-black'>
            
            {
                Student.map((val,i)=>{
                    return <tr key={i} className='border-2 border-black'>
                        <td className='border-2 border-black'>{val.name}</td>
                        <td className='border-2 border-black'>{val.Level_Of_Education}</td>
                        <td className='border-2 border-black'>{val.Gender}</td>
                        <td className='border-2 border-black'>{val.Shift}</td>
                        <td className='border-2 border-black'>{val.status}</td>
                        <td className='border-2 border-black'><img src={val.image}/></td>
                    </tr>
                })
            }
            
        </table>
    </div>
  )
}

export default NewHooks