import React from 'react'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import {BsPinFill} from 'react-icons/bs'
import {GiCommercialAirplane} from 'react-icons/gi'
import {FaGlobeAmericas} from 'react-icons/fa'

const schema=yup.object().shape({
    firstName:yup.string().min(3,'Not sufficent').required('Enter First Name'),
    lastName:yup.string().min(3,'Not sufficent').required('Enter Last Name'),
    email:yup.string().min(3,'Not sufficent').required('Enter your Email'),
    address:yup.string().required('Enter your address'),
    city:yup.string().required('Enter your city name'),
    country:yup.string().required('Enter your country name'),
    msg:yup.string().required('Enter your message'),
    primarycolor:yup.string().required('Enter Primary color'),
    secondarycolor:yup.string().required('Enter Secondary color'),
    accentcolor:yup.string().required('Enter Assent color'),
})
function FormElement() {
    const headings=[
        {h1:'Form Element',h2:'Switch'}
    ]
    const data=[
        {type:'text', placeholder:'First Name', identiy:'firstName',},
        {type:'text', placeholder:'Last Name', identiy:'lastName',},
        {type:'email', placeholder:'Email address', identiy:'email',},
        {type:'text', placeholder:'Address', identiy:'address', icon:<BsPinFill/>,},
        {type:'text', placeholder:'City', identiy:'city', icon:<GiCommercialAirplane/>,},
        {type:'text', placeholder:'Country', identiy:'country', icon:<FaGlobeAmericas/>,},
        {type:'text',placeholder:'Message', identiy:'msg'},
        {type:'text', placeholder:'Primary color', identiy:'primarycolor'},
        {type:'text', placeholder:'Secondary color', identiy:'secondarycolor'},
        {type:'text', placeholder:'Accent color', identiy:'accentcolor'},
    ]
 const data2=[
    {num:'01',h1:'sample switch'},
    {num:'02',h1:'Primary sample switch'},
    {num:'03',h1:'Confirm sample switch'},
 ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12 flex'>
            <div className='w-4/6'>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-7'>{headings[0].h1}</div>
            <div className='font-poping text-base'> 
        <Formik 
        initialValues={{
            firstName:'',
            lastName:'',
            lastName:'',
            email:'',
            address:'',
            city:'',
            country:'',
            msg:'',
            primarycolor:'',
            secondarycolor:'',
            accentcolor:'',
        }}
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
                {({handleSubmit})=>{
                    return <Form onSubmit={handleSubmit}>
                        <div>
                            {data.map((val,i)=>{
                                if(val.identiy==='msg'){
                                    return <div key={i}>
                                        <textarea type={val.type} name={val.identiy} placeholder={val.placeholder} className='w-full h-44 bg-gray-200 px-2 py-1 placeholder:text-gray-500 text-black outline-none mb-2'/>
                                    </div>
                                }
                                else {
                                    return <div key={i}>
                                       <div className='bg-red-200 relative flex'>
                                       <div className=' h-full flex items-center justify-center pl-1 bg-gray-300    '>{val.icon}</div>
                                        <Field type={val.type} placeholder={val.placeholder} name={val.identiy} className='w-full bg-gray-200 px-2 py-1 placeholder:text-gray-500 text-black mb-2 outline-none'/>

                                       </div> 
                                <ErrorMessage name={val.identiy} component={'div'}/>
                                    </div>
                                }
                                
                            })}
                        </div>
                        <div className='bg-blue-700'>dddkk</div>
                        <div className='bg-blue-700'><GiCommercialAirplane/>dddkk</div>
                        <div className='bg-blue-700'>dddkk</div>
                    </Form>
                }}
            </Formik>
             </div>
            </div>
            {/* left side */}
            <div className='w-2/5 bg-blue-300 font-poping'>
            <div>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-7'>{headings[0].h2}</div>
            <div>
                {data2.map((val,i)=>{
                    return <div key={i} className='flex text-prev text-base'>
                        <div>{val.num}</div>
                        <div>{val.h1}</div>
                        <switch/>
                    </div>
                })
                }
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FormElement