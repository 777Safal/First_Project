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
        <div className='w-10/12 bg-blue-200'>
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
                        <div className='w-3/5'>
                            {data.map((val,i)=>{
                                
                                    if ((val.identiy==='cmt')||(val.identiy==='website')){
                                       return <div key={i} className='flex'>
                                            <Field type={val.type} name={val.identiy} placeholder={val.placeholder} className='w-1/2'/>
                                        </div>
                                    }
                                    else{
                                        return <div key={i}>
                                        <Field type={val.type} name={val.identiy} placeholder={val.placeholder}/>
                                        
                                        </div>
                                    }
                            })}
                        </div>
                    </Form>
                }}
            </Formik>
            
        </div>

    </div>
  )
}

export default ReplyForm