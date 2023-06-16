import React from 'react'
import {Form,Field,ErrorMessage,Formik} from 'formik'
import * as yup from 'yup'

const schema=yup.object().shape({
    cmt:yup.string().min(4,'minimun 4 words').required('comment is reqired'),
    name:yup.string().required('Name is reqired'),
    email:yup.string().required('Email is reqired'),
    website:yup.string().required('Enter website url or name'),
})

function ReplyForm() {
    const data=[
        {type:'text',placeholder:'Write a comment',identiy:'cmt'},
        {type:'text',placeholder:'Name',identiy:'name'},
        {type:'email',placeholder:'Email',identiy:'email'},
        {type:'text',placeholder:'Website',identiy:'website'},
    ]
  return (
    <div className='w-full flex justify-center'>
        <div className='w-10/12'>
            <Formik
            initialValues={{
                cmt:'',
                name:'',
                email:'',
                website:'',
            }}
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
                {({handlesubmit})=>{
                    return <Form onSubmit={handlesubmit}>
                        <div className='text-maincolor text-lg font-poping font-semibold py-3'>Leave a reply</div>
                        <div className='w-3/5 flex flex-wrap text-base font-normal'>
                            {data.map((val,i)=>{
                                if ((val.identiy==='cmt')||(val.identiy==='website')){
                                    if(val.identiy==='cmt'){
                                       return <div key={i} className='w-full pr-2 my-4'>
                                            <textarea className='border-2 border-gray-300 rounded-lg py-3 px-3 w-full h-48 outline-none' type={val.type} name={val.identiy} placeholder={val.placeholder}/>
                                        </div>
                                    }
                                    else {
                                        return <div key={i} className='w-full pr-2 my-4'>
                                            <Field className='w-full outline-none border-gray-300 rounded-lg border-2 px-3 py-2' type={val.type} name={val.identiy} placeholder={val.placeholder}/>
                                        </div>
                                    }
                                }
                                else {
                                    return <div key={i} className='w-2/4 pr-2 my-4'>
                                        <Field className=' w-full mr-2 rounded-lg outline-none border-gray-300 border-2 px-3 py-2' type={val.type} name={val.identiy} placeholder={val.placeholder}/>
                                    </div>
                                }
                            })}
                        </div>
                        <div>
                            <button className='px-6 mt-5 py-3 text-hov  border-2 font-poping text-base font-semibold tracking-wide border-hov hover:bg-hov hover:text-white '>SEND MESSAGE</button>
                        </div>
                    </Form>
                }}
            </Formik>
            
        </div>

    </div>
  )
}

export default ReplyForm