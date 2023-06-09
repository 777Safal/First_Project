import React from 'react'
import {RiFacebookFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {Form,Field,Formik,ErrorMessage} from 'formik'
import * as yup from 'yup'

// const schema=yup.object().shape({
//     email:yup.string().required('Enter your email id')
// })
function Footermain() {
    const data=[
        {h:'About us',h1:'Online earning',h2:'About us',h3:'Careers',h4:'Press center',h5:'Become an instructor'},
        {h:'Campus',h1:'Online earning',h2:'About us',h3:'Careers',h4:'Press center',h5:'Become an instructor'},
        {h:'Study',h1:'Online earning',h2:'About us',h3:'Careers',h4:'Press center',h5:'Become an instructor'},
        {h:'Support',h1:'Online earning',h2:'About us',h3:'Careers',h4:'Press center',h5:'Become an instructor'},
    ]
    // const formdata=[
    //     {label:'Stay updated'},
    //     {type:'text',placeholder:'Email Address'},
    //     {type:'button' ,placeholder:'SubscribeNow'}
    // ]
    const update=[{h1:'Stay updated',
            h2:'Subscribe Now',
            p:'Copyright ©2022 All rights reserved | This template is made by sartungi '}]
    const formdata=[
        {type:'text',placeholder:'Email Addres', identiy:'email'}
    ]

  return (
    <div className='w-full pl-28 pt-24 pr-64 bg-footer '>
        <div className='w-full text-white font-poping tracking-wide pr-14 '>
        {/* update section */}
        <div className='w-full flex mb-10'>
            <div className='w-4/5'>
                <div className='text-xl font-semibold mb-4'>{update[0].h1}</div>
                <div><Formik 
                initialValues={{
                    email:'',
                }} 
                // validationSchema={schema}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}>
                        {({handleSubmit})=>{
                            return <Form onSubmit={handleSubmit}>
                                <div className='flex pr-16'>
                                    <div className='w-4/6'>
                                        <Field type={formdata[0].type} placeholder={formdata[0].placeholder} name={formdata[0].identiy} className='w-full pl-5 py-2'/>
                                        {/* <ErrorMessage type={formdata[0].identiy} component={'div'} /> */}
                                    </div>
                                    <div className='w-2/6   '>
                                        <button className='w-full bg-scholarship1 py-2'>{update[0].h2}</button>
                                    </div>
                                </div>
                            </Form>
                        }}
                    </Formik>
                </div>
            </div>
            <div className='1/5'>
            <div className='text-xl font-semibold mb-4'>{update[0].h1}</div>
            <div className='flex'>
                <div className='w-10 h-10 mr-5 text-white bg-facebook flex justify-center items-center '><RiFacebookFill/></div>
                <div className='w-10 h-10 mr-5 text-xl text-white bg-scholarship1 flex justify-center items-center '><AiOutlineInstagram/></div>
                <div className='w-10 h-10 mr-5 text-white bg-twit flex justify-center items-center '><BsTwitter/></div>
                <div className='w-10 h-10  text-xl text-white bg-scholarship2 flex justify-center items-center'><AiOutlineGooglePlus/></div> 
            </div>
            </div>

        </div>
        {/* about us */}
        <div className='flex justify-between border-b-2 pb-16'>
            {data.map((val,i)=>{
                return <div key={i}>
                    <div className='text-xl font-semibold '>{val.h}</div>
                    <div className='text-xs font-extralight grid grid-rows-5 gap-2 mt-5'>
                    <div>{val.h1}</div>
                    <div>{val.h2}</div>
                    <div>{val.h3}</div>
                    <div>{val.h4}</div>
                    <div>{val.h5}</div>
                    </div>
                </div>
            })}
        </div>
        <div className='py-16'>
            <div className='text-xs font-thin'>{update[0].p}</div>
        </div>
        </div>

    </div>
  )
}

export default Footermain