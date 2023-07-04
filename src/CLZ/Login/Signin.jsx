import React from 'react'
import {Form,Formik,ErrorMessage,Field} from 'formik'
import * as yup from 'yup'
import { type } from '@testing-library/user-event/dist/type'

const schema=yup.object().shape({
    first_name:yup.string().required('First name is required'),
    last_name:yup.string().required('Last name is required'),
    address:yup.string().required('Address is required'),
    contact_no:yup.string().required('contact no. is required'),
    email:yup.string().required('Email id is required'),
    gender:yup.string().required('Gender is required'),
    date_of_birt:  yup.string().required('Date of Birth is required'),
    password:yup.string().required('passowrd is required'),
})

function Signin() {
    const data=[
        {placeholder:'First Name',
         type:'text',
         identiy:'first_name'},
        {placeholder:'Last Name',
         type:'text',
         identiy:'last_name'},
        {placeholder:'Address',
         type:'text',
         identiy:'address'},
        {placeholder:'Contact no.',
         type:'text',
         identiy:'contact_no'},
        {placeholder:'E-mail',
         type:'email',
         identiy:'email'},
         {placeholder:'Password',
         type:'password',
         identiy:'password'},
        {label:'Gender',
         identiy:'gender',
         subdata:[
            {name:'Male',
            type:'radio',},
            {name:'Female',
            type:'radio',},
            {name:'Others',
            type:'radio',},
         ]
        },
        {placeholder:'Date of birth',
         type:'date',
         identiy:'date_of_birt'},
    ]
  return (
    <div className='max-h-screen bg-black flex items-center justify-center '>
          <div className='w-2/4 bg-white'>
        <Formik
        initialValues={{
            first_name:'',
            last_name:'',
            address:'',
            contact_no:'',
            email:'',
            gender:'',
            date_of_birt:'',
            password:'',
        }}
        validationSchema={schema}
        onSubmit={(values)=>{
            console.log(values)
        }}
        >
            {({handleSubmit})=>{
                return <Form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-2'>
                        {
                            data.map((val,i)=>{
                                if(val.subdata){
                                    return <div key={i} className='w-full'>
                                        <label className='bg-pink-7-'>{val.label}</label>
                                        <div className='flex flex-row '>
                                            {val.subdata && val.subdata.map((item,index)=>{
                                                return <div key={index} className='pl-2'>
                                                    <label>{item.name}</label>
                                                    <input type={item.type} name={val.identiy}/>
                                                    <ErrorMessage name={val.identiy} component={'div'}/>
                                                </div>
                                            })}
                                        </div>
                                        
                                    </div>
                                }
                                else {
                                    return <div key={i} className='w-full'>
                                        <Field type={val.type} 
                                        placeholder={val.placeholder} name={val.identiy} 
                                        className='w-full p-2 text-gray-500 bg-gray-100 rounded-md'/>
                                    </div>
                                }
                            })
                        }
                        </div>

                    
                </Form>
            }}

        </Formik>
        </div>
    </div>
  )
}

export default Signin