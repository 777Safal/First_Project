import React from 'react'
import {VscLocation} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {TbMail} from 'react-icons/tb'

function Footer() {
    const headings=[
        {h1:'Our Contact'}
    ]
    const contact=[
        {h1:'+977 9800000000',h2:'+977 9808765432',icon:<FiPhoneCall/>},
        {h1:'monalisa@gmail.com',h2:'www.mfutsal.com',icon:<TbMail/>},
        {h1:'32907 Tilottama ,Rupandehi',h2:'Janakinagar, Aslami Path',icon:<VscLocation/>},
      ]
  return (
    <div className=''>
        <dir>
            <div>{headings[0].h1}</div>
            <div>
                <address className='text-base'>
                    {contact.map((val,i)=>{
                        return <div key={i} className='flex items-center'>
                            <div className='mr-2'>{val.icon}</div><div>{val.h1}{val.h2}</div>
                        </div>
                    })}
                </address>  
            </div>
        </dir>

    </div>
  )
}

export default Footer