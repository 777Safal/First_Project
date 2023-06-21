import React from 'react'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as yup from 'yup';

const schema=yup.object().shape({
    firstname:yup.string().min(3,'Not sufficent').required('First name is required'),
    lastname:yup.string().min(3,'Not sufficent').required('Last name is required'),
    phnumber:yup.string().min(10,'Not sufficent').required('Phone number is required'),
    emailadd:yup.string().required('Email is required'),
})

function Apply() {
const apply=[
    {h1:'Apply for Admission'},
    {h2:'Apply Now'}
]
const data=[
    {
        label:'First Name',
        type:'text',
        identiy:'firstname'
    },
    {
        label:'Last Name',
        type:'text',
        identiy:'lastname',
    },{
        label:'Phone number',
        type:'text',
        identiy:'phnumber'
    },
    {
        label:'Email address',
        type:'email',
        identiy:'emailadd'
    }
]
const applic=[
    {
        label:'Write an application',
        type:'text', 
        identiy:'application'
    }
]
  return (
    <div className='w-full h-screen' style={{
        backgroundImage:'url(https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }}>
        <Formik
        initalValues={{
            firstname:'',
            lastname:'',
            phnumber:'',
            emailadd:'',
            application:'',
        }}
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
            }}
        >
            {({handleSubmit})=>{
                return <Form onSubmit={handleSubmit}>
                    <div className=' bg-scholarship2 opacity-80 h-full w-2/3 pl-16 absolute right-0 text-white'>
                        <div className='my-14 text-5xl font-light tracking-widest1 font-aaaa'>{apply[0].h1}</div>
                        <div className='w-2/4 grid grid-cols-2 font-poping tracking-wider font-normal'>
                        {
                        data.map((val,i)=>{
                            return <div key={i} className='mb-16 grid grid-cols-1'>
                                <div className='flex flex-col'>
                                <label>{val.label}</label>
                                <Field type={val.type} name={val.identiy} className='mt-2 w-28 border-b-2 bg-transparent outline-none'/>
                                <ErrorMessage name={val.identiy} component={'div'} className='text-red-600'/>
                                </div>
                            </div>
                        })
                    }
                        </div>
                        <div className='flex flex-col w-2/4 font-poping tracking-wider font-normal'>
                            <label className='mb-16'>{applic[0].label}</label>
                            <Field type={applic[0].type} name={applic[0].identiy} className='border-b-2 bg-transparent outline-none'/>
                        </div>
                        <div><button className='w-44 h-12 mt-20 text-hov font-semibold border-2 rounded-lg border-hov hover:bg-hov hover:text-white'>{apply[1].h2}</button></div>
                    </div>
                </Form>
            }}

        </Formik>
    </div>
  )
}

export default Apply