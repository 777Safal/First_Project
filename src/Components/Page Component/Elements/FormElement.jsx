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
        {h1:'Form Element',h2:'Switch',h3:'Select boxes',h4:'Check boxes',h5:'Radios'}
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
 const formfield=[
    {
        type:'select',
        options:[
            {name:'English'},
            {name:'Nepali'},
            {name:'Spanish'},
        ]
    },
    {   label:'01. Sample radio',
        type:"radio"},
    {   label:'02. Primary Color radio',
        type:"radio"},
    {   label:'03. Confirm Color radio',
        type:"radio"},
    {   label:'04. Disabled radio',
        type:"radio"},
    {   label:'05. Disabled radio active',
        type:"radio"},
    {label:'01. sample check', type:'checkbox'},
    {label:'02. Primary sample check', type:'checkbox'},
    {label:'03. Confirm sample check', type:'checkbox'},
    {label:'04. Confirm sample check', type:'checkbox'},
    {label:'05. Confirm sample check', type:'checkbox'},
 ]
  return (
    <div className='flex justify-center'>
        <div className='w-9/12 flex'>
            {/* right side */}
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
                                else if((val.identiy==='address')||(val.identiy==='country')||(val.identiy==='city'))  {
                                    return <div key={i} className='relative flex'>
                                       <div className=' h-full py-2 flex items-center justify-center pl-1 bg-gray-200    '>{val.icon}</div>
                                        <Field type={val.type} placeholder={val.placeholder} name={val.identiy} className='w-full bg-gray-200 px-2 py-1 placeholder:text-gray-500 text-black mb-2 outline-none'/>
                                        <ErrorMessage name={val.identiy} component={'div'}/>
                                       </div> 
                                }
                                else {
                                    return <div key={i} className='relative flex'>
                                        <Field type={val.type} placeholder={val.placeholder} name={val.identiy} className='w-full bg-gray-200 px-2 py-1 placeholder:text-gray-500 text-black mb-2 outline-none'/>
                                        <ErrorMessage name={val.identiy} component={'div'}/>
                                       </div> 
                                }
                            })}
                        </div>
                    </Form>
                }}
            </Formik>
             </div>
            </div>
            {/* left side */}
            <div className='w-2/5 pl-10 pr-20  font-poping'>
                {/* switch */}
            <div>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-7'>{headings[0].h2}</div>
            <div className=''>
                {data2.map((val,i)=>{
                    return <div key={i} className='flex text-prev text-base my-3'>
                        <div>{val.num}</div>
                        <div>{val.h1}</div>
                        
                    </div>
                })
                }
            </div>
            </div>
            {/* select bxo */}
            <div className='my-10'>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-3'>{headings[0].h3}</div>
            <div className='text-prev text-base'>
                {formfield.map((val,i)=>{
                    if(val.type==='select'){
                        return (
                            <div key={i}>
                                <select className='bg-gray-200 text-black px-4 outline-none'> 
                                {val.options.map((item,index)=>{
                                    return <option>{item.name}</option>
                                })}
                                </select>
                            </div>
                        )
                    }
                })
                }
            </div>
            </div>
            {/* checkbox */}
            <div className='my-10'>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-7'>{headings[0].h4}</div>
            {formfield.map((val,i)=>{
                if(val.type==='checkbox'){
                    return <div key={i} className='text-prev text-base my-3'>
                        <label>{val.label}</label>
                        <input type={val.type}/>
                    </div>
                }
            })}
            </div>
            {/* radio */}
            <div>
            <div className='text-xl text-maincolor font-poping tracking-widest font-bold mb-7'>{headings[0].h5}</div>
            {formfield.map((val,i)=>{
                if(val.type==='radio'){
                    return <div key={i} className='text-prev text-base my-3'>
                        <label>{val.label}</label>
                        <input type={val.type}/>
                    </div>
                }
            })}
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default FormElement