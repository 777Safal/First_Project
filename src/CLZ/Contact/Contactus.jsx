import React from 'react'
import {VscLocation} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {TbMail} from 'react-icons/tb'
import {Form,Formik,ErrorMessage,Field} from 'formik'


function Contactus() {
    const heading=[
        {h1:'CONTACT US'},
        {h1:'Contact Info'},
        {h1:'Get in touch'},
    ]
    const contact=[
      {h1:'Location',h2:'32907 Tilottama ,Rupandehi',h3:'Janakinagar, Aslami Path',icon:<VscLocation/>},
      {h1:'Subscriptions',h2:'+977 9800000000',h3:'+977 9808765432',icon:<FiPhoneCall/>},
      {h1:'E-mail',h2:'monalisa@gmail.com',h3:'www.mfutsal.com',icon:<TbMail/>},
    ]
  return (
    <div className='w-full'>
        <div className='my-10 w-full h-80 bg-cover bg-center bg-no-repeat flex justify-center 
      bg-[url(https://images.unsplash.com/photo-1552318965-6e6be7484ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)]'>
          <div className='w-60 h-12 mt-5 text-center text-4xl font-bbbb tracking-wider 
          font-semibold border-b-4 border-red-600 text-red-600'>{heading[0].h1}</div>
        </div>
        <div className='w-full flex mb-10 justify-center font-bbbb tracking-wider'>
          <div className='w-10/12 bg-white flex'> 
            <div className='w-2/6 py-2 pl-5 mr-10 rounded-md bg-yellow-300'>
              <div className=' text-3xl font-bold text-slate-700'>{heading[1].h1}</div>
                <div>
                  {contact.map((val,i)=>{
                    return <div key={i} className='my-8'>
                      <div className='text-xl font-bold text-slate-700'>{val.h1}</div>
                      <div className='flex mt-4'>
                        <div className='text-xl text-zinc-700 mr-2'>{val.icon}</div>
                        <div className='text-zinc-700 text-sm grid grid-rows-2 gap-1'>
                          <div>{val.h2}</div>
                          <div>{val.h3}</div>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
            </div>
            {/* form section */}
            <div className='w-4/6 rounded-md bg-yellow-300'>
                  
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Contactus