import React from 'react'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import {VscHome} from 'react-icons/vsc'
import {TbMessageDots} from 'react-icons/tb'
import {IoMdPhonePortrait} from 'react-icons/io'

// const schema=yup.object().shape({
//     name:yup.string().min(3,'At least three alphabets').requrired('Name is required'),
//     mail:yup.string().required('Email is required'),
//     subject:yup.string().required('Mention subject'),  
//     msg:yup.string().required('Mention subject'),  
// })

function GetInTouch() {
    const msgform=[
        { type:'text',placeholder:'Message',identiy:'msg' },
    ]
    const formdata=[
        { type:'text',placeholder:'Enter your name',identiy:'name' },
        { type:'email',placeholder:'Email',identiy:'mail' },
        { type:'text',placeholder:'Enter subject',identiy:'subject' },
    ]
    const location=[
        {name:'Buttonwood.California',name2:'Rosemead CA 1793',icon:<VscHome/>, color:'text-black'},
        {name:'@ajfadmvdfd',name2:'Rosemead CA 1793',icon:<TbMessageDots/>,color:'text-red-500'},
        {name:'+6989587904',name2:'Rosemead CA 1793',icon:<IoMdPhonePortrait/>,color:'text-black'},
    ]
    return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12'>
            <div className='text-maincolor text-xl font-poping font-bold'>Get in touch</div>
            <div className='flex w-full'>
                <div className='w-2/3 mt-10'>
                    <Formik
                    initialValues={{
                        msg:'',
                        name:'',
                        mail:'',
                        subject:'',
                    }}
                    // validationSchema={schema}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}
                    >
                {({handleSubmit})=>{
                    return <Form onSubmit={handleSubmit}>
                    <div className='w-full  pr-16'>
                        <div >
                            <textarea type={msgform[0].type} name={msgform[0].identiy} placeholder={msgform[0].placeholder} className='w-full border h-96 p-3 text-gray-500 text-base font-poping border-gray-500 outline-none'/>
                        </div> 
                        <div className='grid grid-cols-2 gap-10 mt-10'>
                            {formdata.map((val,i)=>{
                                return <div key={i} >
                                    <Field type={val.type} name={val.identiy} placeholder={val.placeholder} className='w-full py-3 pl-3 outline-none border border-gray-500'/>
                                </div>
                                
                            })}
                        </div>
                    </div>   
                    </Form>
                }}
            </Formik>
                </div>
                    <div className='w-1/3 bg-white'>
                        {location.map((val,i)=>{
                            return <div key={i} className='flex mb-4'>
                                <div className='flex items-center text-gray-500'>
                                    <div className={`{${val.color}} h-full bg-white flex  text-2xl mr-2`}>{val.icon}</div>
                                    <div className='flex flex-col justify-start font-poping'>
                                        <div className='text-base text-black font-normal mb-0'>{val.name}</div>
                                        <div className='text-sm font-light'>{val.name2}</div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch