import React,{useState, useRef} from 'react'
import Delete from './Delete'
import Update from './Update'
import Edit from './Edit'


function Action() {
    const updateRef = useRef();
    const editRef = useRef();
    const deleteRef = useRef();

    const [isDeleteOpen,setIsDeleteOpen]=useState(false)
    const deletes=()=>{
        // setIsDeleteOpen(true)
        deleteRef.current.showModal();
    }
    const [isEditOpen,setIsEditOpen]=useState(false)
    const edits=()=>{
        // setIsEditOpen(true)
        editRef.current.showModal();
    }
    const [isUpdateOpen,setUpdateOpen]=useState(false)
    const updates=()=>{
        // setUpdateOpen(true)
        updateRef.current.showModal();
        console.log('hey')
    }
  return (
    <div className='w-full flex'>
        <div className='mx-auto flex'>
            <div ><button onClick={edits}
            className='px-2 bg-blue-400 rounded-md' >Edit</button></div>
            <div ><button onClick={deletes}
            className='px-2 bg-red-400 rounded-md'>Delet</button></div>
            <div><button onClick={updates}
             className='px-2 bg-green-400 rounded-md'>Update</button></div>
            <Delete deleteRef={deleteRef}/>
            <Edit editRef={editRef}/>
            <Update updateRef={updateRef} />
            
            
        </div>
    </div>
  )
}

export default Action